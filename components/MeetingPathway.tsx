import Link from "next/link";
import { business, meetingSteps } from "@/lib/business";

export function MeetingPathway() {
  return (
    <section className="meeting-pathway" aria-labelledby="meeting-pathway-title">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow">How to start</p>
          <h2 id="meeting-pathway-title">A calm path to a free first meeting</h2>
          <p>
            Professional services conversion for accountancy — call, email or visit — not an
            emergency trade flow. The current site invites you to arrange a free, no-obligation
            meeting.
          </p>
        </div>
        <ol className="pathway-steps">
          {meetingSteps.map((item) => (
            <li key={item.step} className="pathway-step">
              <span className="pathway-num" aria-hidden="true">
                {item.step}
              </span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
        <div className="pathway-actions">
          <a className="button button-primary" href={`tel:${business.phoneTel}`}>
            Call {business.phoneDisplay}
          </a>
          <a className="button button-secondary" href={`mailto:${business.email}`}>
            Email the practice
          </a>
          <Link className="text-link" href="/contact">
            Visit details &amp; High Street address
          </Link>
        </div>
      </div>
    </section>
  );
}
