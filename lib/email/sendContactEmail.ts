import type { ContactFormInput } from "../validation/contact";
import { resend } from "../resend";
import { ContactEmail } from "../../components/emails/ContactEmail";
import { render } from "@react-email/components";

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "GHR Ventures <contact@ghrgrp.com>";
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || "sam@ghrgrp.com";

function subjectForType(type: ContactFormInput["type"], name: string): string {
  switch (type) {
    case "construction":
      return `New Construction Inquiry from ${name}`;
    case "management":
      return `New Management Contact from ${name}`;
    case "equities-deal":
      return `New Equities Deal Submission from ${name}`;
    case "equities-contact":
      return `New Equities Contact from ${name}`;
    default:
      return `New Contact Submission from ${name}`;
  }
}

export async function sendContactEmail(data: ContactFormInput) {
  if (!FROM_EMAIL) {
    throw new Error("RESEND_FROM_EMAIL is not configured.");
  }

  const subject = subjectForType(data.type, data.name);

  try {
    const emailHtml = await render(ContactEmail({ submission: data }));
    
    const { data: responseData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [RECIPIENT_EMAIL],
      subject,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error sending contact email:", error);
      throw new Error(`Failed to send contact email: ${error.message}`);
    }

    return responseData;
  } catch (err) {
    console.error("Error in sendContactEmail:", err);
    throw err;
  }
}
