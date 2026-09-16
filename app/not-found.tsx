import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>
          That address is not part of this Foot &amp; Ellis-Smith concept site. Try the homepage or
          contact page instead.
        </p>
        <div className="not-found-actions">
          <Link className="button button-primary" href="/">
            Homepage
          </Link>
          <Link className="button button-secondary" href="/contact">
            Contact
          </Link>
          <Link className="button button-secondary" href="/services">
            Services
          </Link>
        </div>
      </div>
    </section>
  );
}
