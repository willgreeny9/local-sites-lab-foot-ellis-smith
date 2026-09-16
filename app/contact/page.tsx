import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, email or visit Foot & Ellis-Smith at 47B High Street, Ongar. Concept redesign — contact details only; no live form delivery.",
};

export default function ContactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Contact</p>
          <h1>Call, email or visit the Ongar practice</h1>
          <p>
            We’ll be pleased to hear from you. Arrange a free no-obligation meeting using the public
            contact details below.
          </p>
        </div>
      </header>

      <section className="page-section">
        <div className="shell contact-layout">
          <div className="contact-panel">
            <h2>Practice details</h2>
            <ul className="contact-list">
              <li>
                <strong>Address</strong>
                Foot &amp; Ellis-Smith
                <br />
                {business.address.line1}
                <br />
                {business.address.locality}
                <br />
                {business.address.region}
                <br />
                {business.address.postcode}
              </li>
              <li>
                <strong>Phone</strong>
                <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
              </li>
              <li>
                <strong>Email</strong>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
            </ul>
            <div className="pathway-actions">
              <a className="button button-primary" href={`tel:${business.phoneTel}`}>
                Call now
              </a>
              <a className="button button-secondary" href={`mailto:${business.email}`}>
                Send an email
              </a>
            </div>
          </div>

          <div className="contact-panel">
            <h2>About enquiries on this concept site</h2>
            <div className="contact-note">
              <p>
                This is an independent Local Sites Lab sample redesign. It does not send contact-form
                messages, book appointments, or collect live customer data for the practice.
              </p>
              <p>
                To reach Foot &amp; Ellis-Smith, please use the phone number or email address shown
                here (taken from the firm’s public website), or visit{" "}
                <a href={business.sourceUrl} rel="noopener noreferrer">
                  the official site
                </a>
                .
              </p>
              <p style={{ marginBottom: 0 }}>
                Opening hours are not clearly published on the current site, so none are listed here.
              </p>
            </div>
            <p style={{ marginTop: "1.25rem", marginBottom: 0 }}>
              <Link className="text-link" href="/privacy">
                Privacy note for this concept →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
