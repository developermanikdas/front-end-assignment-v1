import { z } from "zod";

const BLOCKED_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "zoho.com",
  "proton.me",
  "protonmail.com",
  "mail.com",
  "yandex.com",
];

export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name is too long." })
    .trim(),
  email: z
    .string()
    .email({ message: "Please enter a valid work email address." })
    .trim()
    .refine(
      (email) => {
        const domain = email.split("@")[1]?.toLowerCase();
        return !BLOCKED_DOMAINS.includes(domain);
      },
      {
        message: "Please enter a valid work email. Public domains (like Gmail or Yahoo) are not allowed.",
      }
    ),
  companySize: z.string().min(1, { message: "Please select your company size." }),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Please enter a valid phone number (e.g., +1234567890 or 10-digit number).",
    })
    .min(10, { message: "Phone number must be at least 10 digits." }),
  message: z
    .string()
    .max(500, { message: "Message cannot exceed 500 characters." })
    .optional()
    .or(z.literal("")),
});

export type LeadFormInput = z.infer<typeof leadFormSchema>;
