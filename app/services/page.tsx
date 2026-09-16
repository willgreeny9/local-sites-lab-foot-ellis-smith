import type { Metadata } from "next";
import Link from "next/link";
import { business, complianceServices, serviceList } from "@/lib/business";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Accountancy, taxation, payroll, business start-up and support services from Foot & Ellis-Smith in Ongar. Concept redesign — not the official site.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Services</p>
          <h1>Accountancy and business support, clearly set out</h1>
          <p>
            The firm supplies a comprehensive range of financial and business support services and
            ongoing strategic advice. Aim: a professional, personal, effective solution to day-to-day
            accounting and taxation needs.
          </p>
        </div>
      </header>

      <section className="page-section">
        <div className="shell">
          <div className="service-matrix">
            {serviceList.map((service) => (
              <Link key={service.slug} href={service.href} className="service-tile">
                <h2 style={{ fontSize: "1.35rem", margin: 0 }}>{service.title}</h2>
                <p>{service.summary}</p>
                <ul>
                  {service.bullets.slice(0, 4).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <span className="tile-more">Open {service.title.toLowerCase()} →</span>
              </Link>
            ))}
          </div>

          <div className="compliance-panel" style={{ marginTop: "1.5rem" }}>
            <h2 style={{ color: "var(--cream)", fontSize: "1.35rem" }}>Compliance services</h2>
            <p>By getting to know you and your business the firm aims to become a valuable member of your team.</p>
            <ul>
              {complianceServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="visit-card" style={{ marginTop: "1.5rem" }}>
            <h2>Initial free consultations</h2>
            <p>
              The current site invites you to get in touch by phone, email or contact form. Initial
              free consultations are offered — contact the practice to find out more. This concept
              site does not send forms or claim to book appointments.
            </p>
            <div className="visit-actions">
              <a className="button button-primary" href={`tel:${business.phoneTel}`}>
                Call {business.phoneDisplay}
              </a>
              <Link className="button button-secondary" href="/contact">
                Contact details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
