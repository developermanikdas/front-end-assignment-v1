# Accredian Enterprise Upskilling Platform

A high-performance B2B landing page clone and Lead Capture System built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

This project features a clean modular architecture, manual dark/light theme switching, interactive category showcases, animated accordion FAQs, testimonial sliders, and a validated B2B lead capture form integrated with a server-side JSON mock database.

---

## 🚀 Live Demo & Submissions
* **Live Deployment (Vercel):** https://front-end-assignment-v1.vercel.app/
* **GitHub Repository:** https://github.com/developermanikdas/front-end-assignment-v1
* **Active Google Sheet Database:** https://docs.google.com/spreadsheets/d/1QwdawGwp2ONyb8-I3imWdPcewiu93fjsDQ8086M6oz0/edit?usp=sharing

---

## 🌟 Key Highlights 

This demonstrates **Senior-level Full-Stack practices** beyond a simple front-end copy:

1. **Strict B2B Domain Validation:** The Zod form validator actively filters out consumer email providers (e.g., Gmail, Yahoo, Hotmail). Users must supply a valid corporate work email address, mirroring enterprise SaaS best practices.
2. **Double-Ended Validation & Timeout Safety:** Input validation runs both client-side (for instant UI feedback) and server-side in a Next.js Server Action. Webhook requests to Google Sheets are protected with an `AbortController` timeout to prevent serverless function hangs.
3. **Resilient Filesystem Logging:** In read-only serverless runtimes (like Vercel), file system operations fail with `EROFS`. The Server Action handles this gracefully—falling back to the `/tmp` temporary storage and syncing with Google Sheets so the UI never crashes for the user.
4. **Zero-Overhead Tailwind v4 Theme Switcher:** Configured manual class-based dark mode by injecting custom CSS variants directly into Tailwind v4 without needing a bulky v3 configuration file.
5. **Next.js 16 Asynchronous Standards:** Developed in compliance with Next.js 16 patterns, treating route parameters and headers as asynchronous Promises.

---

## 🛠️ Tech Stack & Dependencies

* **Framework:** Next.js 16 (App Router, Strict Mode)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4 + Class Name Merger (`clsx` + `tailwind-merge`)
* **Icons:** Lucide React
* **Animations:** Framer Motion (micro-interactions & page transitions)
* **Forms & Validation:** React Hook Form + Zod Schema validation
* **Theme Management:** next-themes (Light/Dark Mode toggle)
* **Data Storage:** Next.js Server Actions writing to a local JSON file (`data/leads.json`)

---

## 📐 Architecture & Key Decisions

### 1. Next.js 16 Asynchronous Standards
Following Next.js 16 guidelines, all request-time APIs (`cookies()`, `headers()`, dynamic page `params`, and `searchParams`) are treated as asynchronous promises. We retrieve routing values using modern `async/await` and React's `use()` hooks, ensuring future-proof compliance.

### 2. Tailwind CSS v4 Directives
Tailwind v4 removes the legacy `tailwind.config.js` file. We implemented class-based dark mode by defining `@custom-variant dark (&:where(.dark, .dark *));` directly in `app/globals.css`, letting `next-themes` trigger the `.dark` class seamlessly on the `<html>` element.

### 3. Strict Enterprise-Grade Lead Validation
To fit real-world B2B requirements, the Zod email validation schema blocks consumer domain addresses (e.g., `@gmail.com`, `@yahoo.com`, `@outlook.com`). The form will prompt users to supply a valid corporate work email address, preventing spam leads.

### 4. Local Spreadsheet & DB Persistence
Rather than using volatile in-memory stores that wipe out on server reboots, the lead submission Server Action reads and appends data directly into both:
*   A local JSON file database (`data/leads.json`) for structured API logging.
*   An Excel-compatible CSV spreadsheet file (`data/leads.csv`) which users can double-click and open natively inside Microsoft Excel to manage leads.

---

## 📂 Folder Structure

```text
├── actions/             # Next.js Server Actions
│   └── lead.ts          # Server-side validation and file DB write
├── app/
│   ├── components/      # React Components
│   │   ├── forms/       # Lead capture form components
│   │   ├── sections/    # Modular landing page sections
│   │   └── ui/          # Animated primitives (Dialog, Button, Toast)
│   ├── lib/             # Utility classes and schemas
│   │   ├── validations/ # Zod validation definitions
│   │   └── cn.ts        # tailwind-merge wrapper
│   ├── types/           # Core TypeScript type definitions
│   ├── globals.css      # Tailwind v4 directives and CSS variables
│   ├── layout.tsx       # Root layout wrapping Context Providers
│   ├── page.tsx         # Assembled enterprise landing page
│   └── providers.tsx    # Theme & Toast providers wrapper
├── public/              # Static assets (Hero image, logos)
├── data/                # Server storage directory
│   ├── leads.json       # Simulated local JSON database
│   └── leads.csv        # Excel-compatible CSV spreadsheet file
├── package.json
└── tsconfig.json
```

---

## 💻 Setup & Installation Instructions

### Prerequisites
Ensure you have **Node.js (v18.17.0 or higher)** installed.

### 1. Clone the repository
```bash
git clone https://github.com/developermanikdas/front-end-assignment-v1.git
cd full-stack-assignment
```

### 2. Install dependencies
Ensure you use the peer dependencies bypass flag due to React 19 compatibility checks in packages like `framer-motion`:
```bash
npm install --legacy-peer-deps
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
Verify TypeScript and ESLint compilations before staging:
```bash
npm run build
```

### 5. Google Sheets Integration Setup (Optional)
To submit lead entries directly into a Google Sheet spreadsheet:
1. Open your target **Google Sheet**.
2. Click **Extensions > Apps Script** in the top menu.
3. Paste the following Apps Script code into the script editor:
   ```javascript
   function doPost(e) {
     try {
       var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       var data = JSON.parse(e.postData.contents);
       
       // Add headers if sheet is empty
       if (sheet.getLastRow() === 0) {
         sheet.appendRow(["ID", "Name", "Email", "Company Size", "Phone", "Message", "Submitted At"]);
       }
       
       sheet.appendRow([
         data.id,
         data.name,
         data.email,
         data.companySize,
         data.phone,
         data.message || "",
         data.submittedAt
       ]);
       
       return ContentService.createTextOutput(JSON.stringify({ success: true }))
         .setMimeType(ContentService.MimeType.JSON);
     } catch (error) {
       return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }
   ```
4. Click **Deploy > New Deployment** (top right).
5. Click the gear icon next to "Select type" and select **Web App**.
6. Set the parameters:
   * **Execute as:** `Me (your email address)`
   * **Who has access:** `Anyone` (this lets your Next.js Server Action post data anonymously)
7. Click **Deploy** and copy the generated **Web App URL**.
8. Add this URL as an environment variable named **`GOOGLE_SHEET_WEBHOOK_URL`** in your Vercel Project Dashboard (or add `GOOGLE_SHEET_WEBHOOK_URL="your-copied-url"` to a local `.env.local` file for local development).
9. Restart your dev server or redeploy on Vercel.

📊 **Google Sheet Database Link:** https://docs.google.com/spreadsheets/d/1QwdawGwp2ONyb8-I3imWdPcewiu93fjsDQ8086M6oz0/edit?usp=sharing

---

## 🤖 AI Usage Disclosure

### What was Generated by AI (Antigravity)
* **Initial Scaffolding:** Set up the Next.js App Router workspace, configuration profiles, and base tailwind directives.
* **Component Structures:** Drafted base mock datasets for FAQs, timeline points, testimonials, and modular TS interfaces.
* **Animations:** Generated Framer Motion transition variables and slide presets.

### Manual Refactoring & Engineering Improvements
* **Work Email Filter:** Wrote the custom Zod refinement checking domain extensions to reject non-corporate addresses.
* **Tailwind v4 Adaptations:** Overrode Tailwind v4 standard media query dark variants with custom selectors inside the CSS file.
* **Peer Dependency Resolution:** Handled NPM packages mismatching on React 19 using `--legacy-peer-deps`.
* **Server Action DB Logic:** Refactored the local DB to use Node's `fs/promises` (`fs.mkdir` + `fs.writeFile`) to ensure directories are created dynamically on Vercel or local runtimes.

---

## 🔮 Proposed Future Roadmap
1. **Database Integration:** Connect the Server Action to Supabase or Prisma/Postgres for persistent multi-tenant lead capturing.
2. **Automated CRM Syncs:** Implement Webhook notifications (Slack/Discord) or sync submissions directly to Salesforce or HubSpot APIs.
3. **Advanced Analytics:** Add Google Analytics or PostHog tracking tags to track CTA conversions on the form.
