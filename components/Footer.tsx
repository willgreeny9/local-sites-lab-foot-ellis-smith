import Link from "next/link";
import { business, serviceList } from "@/lib/business";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-kicker">Foot &amp; Ellis-Smith</p>
          <p>
            Accountants in Ongar, Essex — established {business.established}. This page is an
            independent Local Sites Lab concept redesign, not the live site.
          </p>
          <p className="footer-address">{business.addressDisplay}</p>
        </div>
        <div>
          <p className="footer-kicker">Services</p>
          <ul className="footer-list">
            {serviceList.map((s) => (
              <li key={s.slug}>
                <Link href={s.href}>{s.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/services">All services</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-kicker">Contact</p>
          <ul className="footer-list">
            <li>
              <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
            <li>
              <Link href="/contact">Contact &amp; meeting</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <a href={business.sourceUrl} rel="noopener noreferrer">
                Official website
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="shell footer-base">
        <p>
          © {new Date().getFullYear()} Concept showcase for {business.name}. Built by Local Sites
          Lab.
        </p>
      </div>
    </footer>
  );
}
