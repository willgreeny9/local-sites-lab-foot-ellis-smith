import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business, director, images, values } from "@/lib/business";

export const metadata: Metadata = {
  title: "About the practice",
  description:
    "Foot & Ellis-Smith was established in 1970 on Ongar High Street. Independent Local Sites Lab concept — not the official site.",
};

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">About</p>
          <h1>A High Street accountancy practice since {business.established}</h1>
          <p>
            Our priority is to deliver first-class client service — rewritten here for clarity from
            the firm’s public About page.
          </p>
        </div>
      </header>

      <section className="page-section">
        <div className="shell story-grid">
          <div className="story-media">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              width={500}
              height={350}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="prose">
            <h2>Local business and personal clients</h2>
            <p>
              Foot &amp; Ellis-Smith was established in {business.established} and today continues to
              offer advice and first-class service to local business and personal clients. The firm
              has many clients in the local community and offers expertise to the small business
              sector.
            </p>
            <p>
              The practice states that it provides a quick and efficient service, particularly to
              clients who are due a tax refund — for example in the construction industry.
            </p>
            <h2>{director.name} — {director.role}</h2>
            {director.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
            <p>
              Source:{" "}
              <a href={director.source} rel="noopener noreferrer">
                official About us page
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="page-section alt">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Practice values</p>
            <h2>How the current site describes the firm</h2>
          </div>
          <div className="values-row">
            {values.map((v) => (
              <div key={v.title} className="value-chip">
                <strong>{v.title}</strong>
                <span>{v.detail}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            The firm works hard to get to know you in order to deliver timely, individual advice on
            how to improve your business and personal wealth.
          </p>
          <div className="pathway-actions" style={{ marginTop: "1.25rem" }}>
            <Link className="button button-primary" href="/contact">
              Arrange a free meeting
            </Link>
            <a className="button button-secondary" href={business.companiesHouseUrl} rel="noopener noreferrer">
              Companies House record
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
