"use server";

import fs from "fs/promises";
import path from "path";
import { leadFormSchema, LeadFormInput } from "../lib/validations/lead";
import { ServerActionResponse } from "../types";

export async function submitLead(formData: LeadFormInput): Promise<ServerActionResponse> {
  // 1. Server-side validation
  const validationResult = leadFormSchema.safeParse(formData);

  if (!validationResult.success) {
    const errorMsg = validationResult.error.errors
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

    // 3. Create record
    const newLead = {
      id: typeof crypto.randomUUID === "function" 
        ? crypto.randomUUID() 
        : Math.random().toString(36).substring(2, 9),
      ...validatedData,
      submittedAt: new Date().toISOString(),
    };

    leads.push(newLead);

    // 4. Save to JSON file mock database
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2), "utf-8");

    // 5. Save/Append to CSV file (Excel-compatible spreadsheet format)
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
