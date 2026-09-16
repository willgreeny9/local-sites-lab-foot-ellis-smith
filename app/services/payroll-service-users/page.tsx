import type { Metadata } from "next";
import Link from "next/link";
import { business, payrollContact, serviceList } from "@/lib/business";

export const metadata: Metadata = {
  title: "Payroll for service users",
  description:
    "Direct payments payroll service for personal assistants — Foot & Ellis-Smith. Concept redesign — not the official site.",
};

const payroll = serviceList.find((s) => s.slug === "payroll-service-users")!;

export default function PayrollServiceUsersPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Services · Direct payments payroll</p>
          <h1>Payroll services for service users</h1>
          <p>
            Direct payments from social services let people buy care services themselves. Using
            direct payments means keeping records and often acting as an employer to a personal
            assistant — including operating a payroll.
          </p>
        </div>
      </header>
      <section className="page-section">
        <div className="shell content-grid">
          <article className="detail-card">
            <h2>What the service covers</h2>
            <ul>
              {payroll.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p>
              The firm can also hold a personal health budget on your behalf to help safeguard it —
              with no additional charge for that safeguarding service stated on the current site.
              Many service users now use pre-paid cards, which the firm can deal with cost
              effectively.
            </p>
          </article>
          <article className="detail-card">
            <h2>How it typically starts</h2>
            <ol>
              <li>
                Initial contact from you or a referral from a local authority (examples stated:
                Barking &amp; Dagenham or Havering).
              </li>
              <li>A home visit to explain the payroll service and answer questions.</li>
              <li>
                Two copies of the Payroll Service Engagement Letter — sign and return one before the
                first payment is due.
              </li>
            </ol>
            <p>
              {payrollContact.companyNote}
            </p>
            <p>
              {business.payrollVisitAreas}
            </p>
            <p>
              Please contact {payrollContact.name} on{" "}
              <a href={`tel:${business.phoneTel}`}>{payrollContact.phoneDisplay}</a> for further
              information.
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
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
