"use server";

import fs from "fs/promises";
import path from "path";
import { leadFormSchema, LeadFormInput } from "../lib/validations/lead";
import { ServerActionResponse } from "../types";

export async function submitLead(formData: LeadFormInput): Promise<ServerActionResponse> {
  // 1. Server-side validation
  const validationResult = leadFormSchema.safeParse(formData);

  if (!validationResult.success) {
    const errorMsg = validationResult.error.issues
      .map((err) => `${err.path.join(".")}: ${err.message}`)
      .join("; ");
    return {
      success: false,
      error: errorMsg || "Invalid form data.",
    };
  }

  const validatedData = validationResult.data;

  // 2. Simulate network delay (1.5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // 3. Create record
  const newLead = {
    id: typeof crypto.randomUUID === "function" 
      ? crypto.randomUUID() 
      : Math.random().toString(36).substring(2, 9),
    ...validatedData,
    submittedAt: new Date().toISOString(),
  };

  try {
    // 4. Try local file logging (fails gracefully in read-only serverless like Vercel)
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "leads.json");

      // Ensure data folder exists
      await fs.mkdir(dataDir, { recursive: true });

      let leads: any[] = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        leads = JSON.parse(fileContent);
      } catch (e) {
        // File doesn't exist or is empty
      }

      leads.push(newLead);
      await fs.writeFile(filePath, JSON.stringify(leads, null, 2), "utf-8");

      // Save/Append to CSV file (Excel-compatible spreadsheet format)
      const csvPath = path.join(dataDir, "leads.csv");
      let csvExists = false;
      try {
        await fs.access(csvPath);
        csvExists = true;
      } catch {
        csvExists = false;
      }

      const csvHeaders = "ID,Name,Email,Company Size,Phone,Message,Submitted At\n";
      const escapeCsvValue = (val: string = "") => {
        return `"${val.replace(/"/g, '""')}"`;
      };

      const csvRow = `${escapeCsvValue(newLead.id)},${escapeCsvValue(newLead.name)},${escapeCsvValue(newLead.email)},${escapeCsvValue(newLead.companySize)},${escapeCsvValue(newLead.phone)},${escapeCsvValue(newLead.message || "")},${escapeCsvValue(newLead.submittedAt)}\n`;

      if (!csvExists) {
        await fs.writeFile(csvPath, csvHeaders + csvRow, "utf-8");
      } else {
        await fs.appendFile(csvPath, csvRow, "utf-8");
      }
    } catch (fsError: any) {
      console.warn("Local file logging skipped due to read-only environment (expected on Vercel):", fsError.message);
      
      // Fallback: Attempt writing to ephemeral /tmp folder so there's at least a temp local record
      try {
        const tmpDir = "/tmp";
        const tmpJsonPath = path.join(tmpDir, "leads.json");
        const tmpCsvPath = path.join(tmpDir, "leads.csv");
        
        let tmpLeads: any[] = [];
        try {
          const tmpContent = await fs.readFile(tmpJsonPath, "utf-8");
          tmpLeads = JSON.parse(tmpContent);
        } catch (e) {}
        
        tmpLeads.push(newLead);
        await fs.writeFile(tmpJsonPath, JSON.stringify(tmpLeads, null, 2), "utf-8");
        
        const escapeCsvValue = (val: string = "") => `"${val.replace(/"/g, '""')}"`;
        const csvRow = `${escapeCsvValue(newLead.id)},${escapeCsvValue(newLead.name)},${escapeCsvValue(newLead.email)},${escapeCsvValue(newLead.companySize)},${escapeCsvValue(newLead.phone)},${escapeCsvValue(newLead.message || "")},${escapeCsvValue(newLead.submittedAt)}\n`;
        
        let tmpCsvExists = false;
        try {
          await fs.access(tmpCsvPath);
          tmpCsvExists = true;
        } catch {}
        
        if (!tmpCsvExists) {
          await fs.writeFile(tmpCsvPath, "ID,Name,Email,Company Size,Phone,Message,Submitted At\n" + csvRow, "utf-8");
        } else {
          await fs.appendFile(tmpCsvPath, csvRow, "utf-8");
        }
      } catch (tmpError) {
        // Ignore tmp errors
      }
    }

    // 5. Submit to Google Sheet if webhook URL is defined in Environment Variables
    const sheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (sheetWebhookUrl) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

        await fetch(sheetWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: newLead.id,
            name: newLead.name,
            email: newLead.email,
            companySize: newLead.companySize,
            phone: newLead.phone,
            message: newLead.message || "",
            submittedAt: newLead.submittedAt,
          }),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
      } catch (sheetError) {
        console.error("Failed to sync lead submission to Google Sheet:", sheetError);
        // Fail-silent: don't block local success if external Google Sheet fails
      }
    }

    return {
      success: true,
      data: newLead,
    };
  } catch (error: any) {
    console.error("Server Action Lead capture error:", error);
    return {
      success: false,
      error: "We could not save your submission due to an internal server error. Please try again.",
    };
  }
}
