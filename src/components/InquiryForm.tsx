import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FormInput,
  FormSelect,
  FormTextarea,
} from "@/components/ui/design-system";
import { cn } from "@/lib/utils";
import {
  eventTypeOptions,
  getInquiryFormErrors,
  inquiryFormSchema,
  sanitizeInquiryFormInput,
  type InquiryFormErrors,
  type InquiryFormInput,
} from "@/lib/contact-schema";
import { submitInquiry } from "@/lib/contact";

type InquiryFormSource = "homepage" | "contact-page";

interface InquiryFormProps {
  source: InquiryFormSource;
  submitLabel?: string;
  align?: "left" | "center";
  className?: string;
}

const initialFormState = (source: InquiryFormSource): InquiryFormInput => ({
  name: "",
  email: "",
  phone: "",
  eventType: "",
  guestCount: "",
  eventDate: "",
  message: "",
  source,
});

const errorTextClassName = "mt-2 text-sm text-destructive font-sans";
const successTextClassName = "rounded-[1.2rem] border border-gold/25 bg-gold/8 px-4 py-3 text-sm text-foreground font-sans";

const InquiryForm = ({
  source,
  submitLabel = "Send Inquiry",
  align = "left",
  className,
}: InquiryFormProps) => {
  const [formData, setFormData] = useState<InquiryFormInput>(() => initialFormState(source));
  const [fieldErrors, setFieldErrors] = useState<InquiryFormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const buttonAlignmentClass = useMemo(
    () => (align === "center" ? "justify-center" : "justify-start"),
    [align]
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setFieldErrors((current) => {
      if (!current[name as keyof InquiryFormErrors]) {
        return current;
      }

      return {
        ...current,
        [name]: undefined,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitError("");
    setSubmitSuccess("");

    const parsed = inquiryFormSchema.safeParse(sanitizeInquiryFormInput(formData));

    console.log("[INQUIRY_FORM] Form parsed:", { success: parsed.success, data: parsed.data });

    if (!parsed.success) {
      console.log("[INQUIRY_FORM] Validation failed:", parsed.error);
      setFieldErrors(getInquiryFormErrors(parsed.error));
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      console.log("[INQUIRY_FORM] Calling submitInquiry...");
      await submitInquiry(parsed.data);
      console.log("[INQUIRY_FORM] submitInquiry completed successfully");

      setSubmitSuccess("Your inquiry has been sent. Our team will get back to you shortly.");
      setFormData(initialFormState(source));
    } catch (error) {
      console.error("[INQUIRY_FORM] submitInquiry failed:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn't send your inquiry right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FormInput
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
          {fieldErrors.name && <p className={errorTextClassName}>{fieldErrors.name}</p>}
        </div>
        <div>
          <FormInput
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
          {fieldErrors.email && <p className={errorTextClassName}>{fieldErrors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FormInput
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
          {fieldErrors.phone && <p className={errorTextClassName}>{fieldErrors.phone}</p>}
        </div>
        <div>
          <FormSelect name="eventType" value={formData.eventType} onChange={handleChange} required>
            <option value="">Event Type</option>
            {eventTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </FormSelect>
          {fieldErrors.eventType && <p className={errorTextClassName}>{fieldErrors.eventType}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FormInput
            type="number"
            name="guestCount"
            placeholder="Estimated Guest Count"
            value={formData.guestCount}
            onChange={handleChange}
            min={1}
            step={1}
          />
          {fieldErrors.guestCount && <p className={errorTextClassName}>{fieldErrors.guestCount}</p>}
        </div>
        <div>
          <FormInput type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
          {fieldErrors.eventDate && <p className={errorTextClassName}>{fieldErrors.eventDate}</p>}
        </div>
      </div>

      <div>
        <FormTextarea
          name="message"
          placeholder="Tell us about your event..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
        {fieldErrors.message && <p className={errorTextClassName}>{fieldErrors.message}</p>}
      </div>

      {submitError && (
        <div className="rounded-[1.2rem] border border-destructive/20 bg-destructive/6 px-4 py-3 text-sm text-destructive font-sans">
          {submitError}
        </div>
      )}

      {submitSuccess && <div className={successTextClassName}>{submitSuccess}</div>}

      <div className={cn("flex pt-2", buttonAlignmentClass)}>
        <Button variant="gold" size="xl" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : submitLabel}
        </Button>
      </div>
    </form>
  );
};

export default InquiryForm;
