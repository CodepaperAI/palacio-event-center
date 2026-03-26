import { z } from "zod";

export const eventTypeOptions = [
  "Wedding",
  "Social Event",
  "Corporate Event",
  "Birthday / Anniversary",
  "Other",
] as const;

const phonePattern = /^[0-9+\-().\s]{10,}$/;

export const inquiryFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Please keep your name under 80 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .optional()
    .transform((value) => value ?? "")
    .refine((value) => value === "" || phonePattern.test(value), "Please enter a valid phone number."),
  eventType: z
    .string()
    .trim()
    .refine(
      (value) => eventTypeOptions.includes(value as (typeof eventTypeOptions)[number]),
      "Please select an event type."
    ),
  guestCount: z
    .string()
    .trim()
    .optional()
    .transform((value) => value ?? "")
    .refine(
      (value) => value === "" || (/^\d+$/.test(value) && Number(value) > 0 && Number(value) <= 5000),
      "Please enter a valid guest count."
    ),
  eventDate: z
    .string()
    .trim()
    .optional()
    .transform((value) => value ?? "")
    .refine((value) => value === "" || !Number.isNaN(Date.parse(value)), "Please choose a valid event date."),
  message: z
    .string()
    .trim()
    .min(20, "Please share a few more details about your event.")
    .max(2000, "Please keep your message under 2000 characters."),
  source: z.enum(["homepage", "contact-page"]),
});

export type InquiryFormInput = z.input<typeof inquiryFormSchema>;
export type InquiryFormData = z.infer<typeof inquiryFormSchema>;
export type InquiryFormField = keyof InquiryFormData;
export type InquiryFormErrors = Partial<Record<InquiryFormField, string>>;

export const getInquiryFormErrors = (error: z.ZodError<InquiryFormData>): InquiryFormErrors => {
  const fieldErrors: InquiryFormErrors = {};

  for (const issue of error.issues) {
    const field = issue.path[0] as InquiryFormField | undefined;

    if (field && !fieldErrors[field]) {
      fieldErrors[field] = issue.message;
    }
  }

  return fieldErrors;
};

export const sanitizeInquiryFormInput = (input: InquiryFormInput): InquiryFormInput => ({
  ...input,
  name: input.name ?? "",
  email: input.email ?? "",
  phone: input.phone ?? "",
  eventType: input.eventType ?? "",
  guestCount: input.guestCount ?? "",
  eventDate: input.eventDate ?? "",
  message: input.message ?? "",
});
