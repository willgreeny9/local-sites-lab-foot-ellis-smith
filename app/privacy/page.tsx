import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy note for the Local Sites Lab concept site about Foot & Ellis-Smith.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Privacy</p>
          <h1>Privacy note for this concept website</h1>
          <p>
            This site is an independent sample redesign by Local Sites Lab. It is not the official
            Foot &amp; Ellis-Smith website.
          </p>
        </div>
      </header>
      <section className="page-section">
        <div className="shell prose">
          <h2>What this site does not do</h2>
          <ul>
            <li>It does not collect enquiries for the practice through a working form.</li>
            <li>It does not book appointments or claim to act for the business.</li>
            <li>It is configured with noindex so search engines should not index it as the live brand site.</li>
          </ul>
          <h2>Local storage</h2>
          <p>
            A small Local Sites Lab showcase notice may store a dismiss flag in your browser’s
            localStorage so the notice stays closed on later visits until the notice version changes.
          </p>
          <h2>Contacting the real practice</h2>
          <p>
            Use the public details on the{" "}
            <Link href="/contact">contact page</Link> or the{" "}
            <a href={business.sourceUrl} rel="noopener noreferrer">
              official website
            </a>
            .
          </p>
          <h2>About Local Sites Lab</h2>
          <p>
            Learn more at{" "}
            <a href="https://localsiteslab.com" rel="noopener noreferrer">
              localsiteslab.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
