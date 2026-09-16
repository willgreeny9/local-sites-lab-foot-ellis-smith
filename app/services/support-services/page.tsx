import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Support services",
  description:
    "Payroll advice and bookkeeping support from Foot & Ellis-Smith in Ongar. Concept redesign — not the official site.",
};

export default function SupportServicesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Services · Support</p>
          <h1>Payroll advice and bookkeeping support</h1>
          <p>
            Combining your business knowledge with the firm’s support services to help the business
            grow and increase profitability.
          </p>
        </div>
      </header>
      <section className="page-section">
        <div className="shell content-grid">
          <article className="detail-card">
            <h2>Payroll</h2>
            <p>
              Running payroll can divert resources from core activities. With Real Time Information,
              HMRC generally requires information on or before the date of payment to the employee.
            </p>
            <p>
              The firm can help by installing payroll software and training staff, or by providing
              cost-effective outsourcing — a complete service or support when needed, whatever the
              size or complexity of the business.
            </p>
          </article>
          <article className="detail-card">
            <h2>Bookkeeping</h2>
            <p>
              General bookkeeping at your business premises or at the Ongar office — from writing up
              the books to finishing information for management reporting.
            </p>
            <p>
              If you do not employ a bookkeeper, the firm can take up the role or help you recruit
              the right person.
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
          </div>
        </div>
      </section>
    </>
  );
}
