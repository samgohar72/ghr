import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { sendContactEmail } from "@/lib/email/sendContactEmail";

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();

    // Validate the input
    const parsed = contactFormSchema.safeParse(json);
    if (!parsed.success) {
      const flattened = parsed.error.flatten();
      return NextResponse.json(
        {
          message: "Validation failed.",
          errors: flattened.fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Send email
    try {
      const emailResult = await sendContactEmail(data);
      return NextResponse.json(
        {
          message: "Your message has been sent successfully. We'll be in touch soon!",
          emailId: emailResult?.id,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Error sending contact email:", emailError);
      return NextResponse.json(
        {
          message: "Failed to send your message. Please try again or contact us directly at sam@ghrgrp.com",
        },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Unexpected error in /api/contact:", err);
    return NextResponse.json(
      { message: "Unexpected server error. Please try again later." },
      { status: 500 }
    );
  }
}
