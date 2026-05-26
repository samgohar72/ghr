import * as React from "react";
import type { ContactFormInput } from "@/lib/validation/contact";

interface ContactEmailProps {
  submission: ContactFormInput;
}

export function ContactEmail({ submission }: ContactEmailProps) {
  const { type, name, email, phone, message } = submission;

  const typeLabel = (() => {
    switch (type) {
      case "construction":
        return "Construction Inquiry";
      case "management":
        return "Management Contact";
      case "equities-deal":
        return "Equities Deal Submission";
      case "equities-contact":
        return "Equities Contact";
      default:
        return "Contact Submission";
    }
  })();

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#0A0A0A', borderBottom: '2px solid #D4D4D4', paddingBottom: '10px' }}>
        {typeLabel}
      </h1>
      <p style={{ color: '#707070', fontSize: '14px' }}>
        You have received a new {typeLabel.toLowerCase()} from your website.
      </p>
      
      <div style={{ marginTop: '30px', backgroundColor: '#FFFFFF', border: '1px solid #D4D4D4', padding: '20px' }}>
        <h2 style={{ color: '#0A0A0A', fontSize: '18px', marginTop: '0' }}>Contact Details</h2>
        <p style={{ color: '#0A0A0A', lineHeight: '1.6' }}>
          <strong>Name:</strong> {name}<br />
          <strong>Email:</strong> {email}<br />
          {phone && (
            <>
              <strong>Phone:</strong> {phone}<br />
            </>
          )}
        </p>

        {/* Construction specific fields */}
        {type === 'construction' && submission.projectType && (
          <>
            <h2 style={{ color: '#0A0A0A', fontSize: '18px', marginTop: '20px' }}>Project Details</h2>
            <p style={{ color: '#0A0A0A', lineHeight: '1.6' }}>
              {submission.projectType && <><strong>Project Type:</strong> {submission.projectType}<br /></>}
              {submission.location && <><strong>Location:</strong> {submission.location}<br /></>}
              {submission.budget && <><strong>Budget:</strong> {submission.budget}<br /></>}
              {submission.timeline && <><strong>Timeline:</strong> {submission.timeline}<br /></>}
            </p>
          </>
        )}

        {/* Management specific fields */}
        {type === 'management' && (submission.propertyAddress || submission.units) && (
          <>
            <h2 style={{ color: '#0A0A0A', fontSize: '18px', marginTop: '20px' }}>Property Details</h2>
            <p style={{ color: '#0A0A0A', lineHeight: '1.6' }}>
              {submission.propertyAddress && <><strong>Property Address:</strong> {submission.propertyAddress}<br /></>}
              {submission.units && <><strong>Number of Units:</strong> {submission.units}<br /></>}
            </p>
          </>
        )}

        {/* Equities Deal specific fields */}
        {type === 'equities-deal' && submission.assetType && (
          <>
            <h2 style={{ color: '#0A0A0A', fontSize: '18px', marginTop: '20px' }}>Deal Details</h2>
            <p style={{ color: '#0A0A0A', lineHeight: '1.6' }}>
              {submission.propertyAddress && <><strong>Property Address:</strong> {submission.propertyAddress}<br /></>}
              {submission.assetType && <><strong>Asset Type:</strong> {submission.assetType}<br /></>}
              {submission.units && <><strong>Units/SF:</strong> {submission.units}<br /></>}
              {submission.yearBuilt && <><strong>Year Built:</strong> {submission.yearBuilt}<br /></>}
              {submission.occupancy && <><strong>Occupancy:</strong> {submission.occupancy}<br /></>}
              {submission.askingPrice && <><strong>Asking Price:</strong> {submission.askingPrice}<br /></>}
              {submission.noi && <><strong>NOI:</strong> {submission.noi}<br /></>}
              {submission.capRate && <><strong>Cap Rate:</strong> {submission.capRate}<br /></>}
              {submission.loanInPlace && <><strong>Loan in Place:</strong> {submission.loanInPlace}<br /></>}
            </p>
          </>
        )}

        {/* Equities Contact specific fields */}
        {type === 'equities-contact' && submission.company && (
          <>
            <h2 style={{ color: '#0A0A0A', fontSize: '18px', marginTop: '20px' }}>Additional Details</h2>
            <p style={{ color: '#0A0A0A', lineHeight: '1.6' }}>
              <strong>Company:</strong> {submission.company}<br />
            </p>
          </>
        )}

        <h2 style={{ color: '#0A0A0A', fontSize: '18px', marginTop: '20px' }}>Message</h2>
        <p style={{ color: '#0A0A0A', whiteSpace: 'pre-wrap', lineHeight: '1.6', backgroundColor: '#F5F5F5', padding: '15px', border: '1px solid #D4D4D4' }}>
          {message || submission.description}
        </p>
      </div>

      <p style={{ color: '#A8A8A8', fontSize: '12px', marginTop: '30px', textAlign: 'center' }}>
        This email was sent from the GHR Ventures website contact form.
      </p>
    </div>
  );
}
