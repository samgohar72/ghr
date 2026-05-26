import { z } from "zod";

export const contactTypeSchema = z.enum([
  "construction",
  "management",
  "equities-deal",
  "equities-contact",
]);

export type ContactType = z.infer<typeof contactTypeSchema>;

export const contactFormSchema = z.object({
  type: contactTypeSchema,
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(200, { message: "Name must be at most 200 characters." })
    .trim(),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(320, { message: "Email address is too long." })
    .trim(),
  phone: z
    .string()
    .max(50, { message: "Phone number is too long." })
    .optional()
    .or(z.literal("").transform(() => undefined)),
  message: z
    .string()
    .min(10, { message: "Please provide at least 10 characters." })
    .max(5000, { message: "Message must be at most 5000 characters." })
    .trim(),
  // Additional fields for specific form types
  projectType: z.string().optional(),
  location: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  propertyAddress: z.string().optional(),
  units: z.string().optional(),
  company: z.string().optional(),
  assetType: z.string().optional(),
  yearBuilt: z.string().optional(),
  occupancy: z.string().optional(),
  askingPrice: z.string().optional(),
  noi: z.string().optional(),
  capRate: z.string().optional(),
  loanInPlace: z.string().optional(),
  description: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
