import { trustPoints } from "@/lib/business";

/** Trust from public practice facts only — never invent review scores. */
export function TrustBand() {
  return (
    <section className="trust-band" aria-label="Practice trust points">
      <div className="shell trust-band-grid">
        {trustPoints.map((item) => (
          <article key={item.title} className="trust-card">
            <h2>{item.title}</h2>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
