import type { Metadata } from "next";
import Link from "next/link";
import { business, serviceList } from "@/lib/business";

export const metadata: Metadata = {
  title: "Business start-up",
  description:
    "Business start-up guidance from Foot & Ellis-Smith — structure, registration, systems and early compliance. Concept redesign.",
};

const startUp = serviceList.find((s) => s.slug === "business-start-up")!;

export default function BusinessStartUpPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Services · Start-up</p>
          <h1>Bring a business idea — get practical financial guidance</h1>
          <p>
            Most people starting up have a good proposition and commitment, but are not experts in
            the legal and financial aspects of running a business. The firm can guide you through
            those parts.
          </p>
        </div>
      </header>
      <section className="page-section">
        <div className="shell prose">
          <h2>How the firm can help</h2>
          <ul>
            {startUp.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p>
            Just bring your business ideas and the practice will help you make them a reality —
            wording adapted from the current Business start-up page.
          </p>
          <div className="pathway-actions">
            <a className="button button-primary" href={`tel:${business.phoneTel}`}>
              Call {business.phoneDisplay}
            </a>
            <a className="button button-secondary" href={`mailto:${business.email}`}>
              Email {business.email}
            </a>
            <Link className="text-link" href="/services">
              All services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
