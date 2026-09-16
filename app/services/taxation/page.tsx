import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Taxation",
  description:
    "Corporation tax, personal tax, VAT, PAYE and HMRC enquiry support from Foot & Ellis-Smith, Ongar. Concept redesign.",
};

export default function TaxationPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Services · Taxation</p>
          <h1>Tax advice that helps you plan ahead</h1>
          <p>
            As tax advisers, the firm’s objective is to work closely with you to ensure you pay the
            minimum tax required by law — and to help you understand the tax implications of your
            actions.
          </p>
        </div>
      </header>
      <section className="page-section">
        <div className="shell content-grid">
          <article className="detail-card">
            <h2>Corporation tax</h2>
            <p>
              Under Corporation Tax Self Assessment, correctly calculating corporation tax liability
              is the legal responsibility of business owners. The firm prepares returns in a timely
              way, calculates company tax liability, and can assist with quarterly instalment
              payments.
            </p>
            <p>
              Support includes reducing administrative burden and corporate tax planning that can
              improve the bottom line.
            </p>
          </article>
          <article className="detail-card">
            <h2>Personal tax</h2>
            <p>
              Self Assessment for individuals, sole traders and partnerships — completing returns,
              calculating liability, and advising when and how much to pay. Practical advice on
              personal tax planning opportunities is also offered.
            </p>
          </article>
          <article className="detail-card">
            <h2>VAT, NI and PAYE</h2>
            <ul>
              <li>VAT registration, planning, schemes, returns, control and reconciliation</li>
              <li>NI and PAYE compliance</li>
              <li>P11Ds advice and completion</li>
            </ul>
          </article>
          <article className="detail-card">
            <h2>HMRC investigations and enquiries</h2>
            <p>
              Support for companies, sole traders and partnerships, and individuals when HMRC opens
              an enquiry or investigation.
            </p>
          </article>
        </div>
        <div className="shell" style={{ marginTop: "1.5rem" }}>
          <div className="pathway-actions">
            <a className="button button-primary" href={`tel:${business.phoneTel}`}>
              Call {business.phoneDisplay}
            </a>
            <Link className="button button-secondary" href="/services">
              All services
            </Link>
            <Link className="text-link" href="/contact">
              Contact the practice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
