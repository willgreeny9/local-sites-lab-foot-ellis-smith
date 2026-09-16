import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Ongar & areas",
  description:
    "Foot & Ellis-Smith is based on Ongar High Street and serves local business and personal clients. Concept redesign.",
};

export default function AreasPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Location</p>
          <h1>Based on Ongar High Street</h1>
          <p>
            The practice address is {business.addressDisplay}. Public materials describe service to
            local business and personal clients in the community, with small-business expertise.
          </p>
        </div>
      </header>
      <section className="page-section">
        <div className="shell content-grid">
          <article className="detail-card">
            <h2>Accountancy practice</h2>
            <p>{business.serviceArea}</p>
            <p>
              Visit, call or email — the conversion path on this concept mirrors a High Street
              professional services firm rather than a mobile trade call-out model.
            </p>
            <p>
              <a href={business.sourceUrl} rel="noopener noreferrer">
                Official website
              </a>
            </p>
          </article>
          <article className="detail-card">
            <h2>Direct payments payroll visits</h2>
            <p>{business.payrollVisitAreas}</p>
            <p>
              See the{" "}
              <Link href="/services/payroll-service-users">payroll for service users</Link> page for
              the process described on the current site.
            </p>
          </article>
        </div>
        <div className="shell" style={{ marginTop: "1.5rem" }}>
          <div className="pathway-actions">
            <Link className="button button-primary" href="/contact">
              Contact &amp; address
            </Link>
            <a className="button button-secondary" href={`tel:${business.phoneTel}`}>
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
