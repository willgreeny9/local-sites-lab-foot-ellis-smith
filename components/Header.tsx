"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business, logo, nav } from "@/lib/business";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-inner">
          <p className="utility-place">Accountants on Ongar High Street since {business.established}</p>
          <div className="utility-actions">
            <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </div>
        </div>
      </div>
      <div className="shell header-main">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt={logo.alt} width={220} height={46} className="brand-logo" />
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav id="primary-nav" className={`primary-nav${open ? " is-open" : ""}`} aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "is-active" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="button button-primary nav-cta" onClick={() => setOpen(false)}>
            Free meeting
          </Link>
        </nav>
      </div>
    </header>
  );
}
