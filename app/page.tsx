import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { MeetingPathway } from "@/components/MeetingPathway";
import { TrustBand } from "@/components/TrustBand";
import {
  business,
  complianceServices,
  director,
  images,
  serviceList,
  values,
} from "@/lib/business";

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: business.name,
    telephone: business.phoneTel,
    email: business.email,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://foot-ellis-smith.localsiteslab.com",
    image: images.hero.src,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postcode,
      addressCountry: business.address.country,
    },
    foundingDate: business.established,
    sameAs: [business.sourceUrl, business.facebookUrl, business.companiesHouseUrl],
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="hero-desk" aria-label="Introduction">
        <div className="hero-desk-grid">
          <div className="hero-copy">
            <p className="eyebrow">Accountants in Ongar, Essex</p>
            <h1>Clear advice for local businesses and personal clients</h1>
            <p className="hero-lead">Timely, individual advice on accounting, taxation and support.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`tel:${business.phoneTel}`}>
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="/images/hero-practice.jpg"
              alt="Foot & Ellis-Smith practice imagery from the current website."
              width={1009}
              height={399}
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <TrustBand />

      <MeetingPathway />

      <section className="services-clarity" id="services" aria-labelledby="services-title">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Services clarity</p>
            <h2 id="services-title">What the practice helps with</h2>
            <p>
              A comprehensive range of financial and business support services with ongoing strategic
              advice — rewritten here for clarity from the firm’s public services information.
            </p>
          </div>
          <div className="service-matrix">
            {serviceList.map((service) => (
              <Link key={service.slug} href={service.href} className="service-tile">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span className="tile-more">View {service.title.toLowerCase()} →</span>
              </Link>
            ))}
          </div>
          <div className="compliance-panel">
            <h3>Compliance services</h3>
            <p>
              By getting to know you and your business, the firm aims to become a valuable member of
              your team. Compliance work includes:
            </p>
            <ul>
              {complianceServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p style={{ marginTop: "1.25rem" }}>
            <Link className="text-link" href="/services">
              Full services overview
            </Link>
          </p>
        </div>
      </section>

      <section className="practice-story" id="practice" aria-labelledby="practice-title">
        <div className="shell story-grid">
          <div className="story-media">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              width={500}
              height={350}
              sizes="(max-width: 860px) 100vw, 45vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="story-copy">
            <p className="eyebrow">The practice</p>
            <h2 id="practice-title">First-class client service on Ongar High Street</h2>
            <p>
              Foot &amp; Ellis-Smith is a High Street practice established in {business.established}.
              The firm works hard to get to know you so it can deliver timely, individual advice on
              accounting, taxation and support.
            </p>
            <p>
              {director.name}, {director.role}, acquired the business in 2017 from his father having
              qualified as an accountant in 2014. He has been actively involved with clients for a
              number of years and is keen to build on the firm’s success.
            </p>
            <p>
              To find out how the practice can help you and your business, arrange a{" "}
              <strong>free no-obligation meeting</strong> — call, email or visit 47B High Street.
            </p>
            <div className="values-row">
              {values.map((v) => (
                <div key={v.title} className="value-chip">
                  <strong>{v.title}</strong>
                  <span>{v.detail}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "1.25rem", marginBottom: 0 }}>
              <Link className="text-link" href="/about">
                More about the practice →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="visit-panel" aria-labelledby="visit-title">
        <div className="shell visit-grid">
          <div className="visit-card">
            <p className="eyebrow">Call · email · visit</p>
            <h2 id="visit-title">Ready for a free no-obligation meeting?</h2>
            <p>
              This concept keeps the conversion path consultative: speak to the practice, arrange a
              free meeting, then decide. No appointment booking claim is made on this sample site.
            </p>
            <div className="visit-actions">
              <a className="button button-primary" href={`tel:${business.phoneTel}`}>
                Call {business.phoneDisplay}
              </a>
              <a className="button button-secondary" href={`mailto:${business.email}`}>
                Email the practice
              </a>
              <Link className="button button-secondary" href="/contact">
                Contact details
              </Link>
            </div>
          </div>
          <div className="visit-facts">
            <div className="visit-fact">
              <strong>Office</strong>
              <p>{business.addressDisplay}</p>
            </div>
            <div className="visit-fact">
              <strong>Phone</strong>
              <p>
                <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
              </p>
            </div>
            <div className="visit-fact">
              <strong>Email</strong>
              <p>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
