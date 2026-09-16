"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const storageKey = "foot-ellis-smith-concept-notice-dismissed-v4";

export function ConceptNotice() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastFocus = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const modalRef = useRef<HTMLElement>(null);

  const dismiss = useCallback(() => {
    window.localStorage.setItem(storageKey, "yes");
    setOpen(false);
    window.setTimeout(() => lastFocus.current?.focus(), 0);
  }, []);

  const reopen = () => {
    lastFocus.current = document.activeElement as HTMLElement;
    setOpen(true);
  };

  useEffect(() => {
    setMounted(true);
    const dismissed = window.localStorage.getItem(storageKey) === "yes";
    setOpen(!dismissed);
  }, []);

  useEffect(() => {
    if (!open) return;
    titleRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (open && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        dismiss();
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, [open, dismiss]);

  return (
    <>
      {mounted && open && (
        <div className="concept-backdrop" role="presentation">
          <section
            ref={modalRef}
            className="concept-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="concept-title"
            aria-describedby="concept-description"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="concept-close"
              aria-label="Close concept notice"
              onClick={dismiss}
            >
              ×
            </button>
            <div className="concept-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/lsl-logo.svg" alt="Local Sites Lab" width={48} height={48} />
              <span>Local Sites Lab</span>
            </div>
            <p className="concept-kicker">Local Sites Lab showcase</p>
            <h2 id="concept-title" ref={titleRef} tabIndex={-1}>
              A clearer website for a High Street accountancy practice.
            </h2>
            <p id="concept-description">
              William Green at Local Sites Lab built this sample site for{" "}
              <strong>Foot &amp; Ellis-Smith</strong> to show how a clearer website could help local
              business and personal clients find the right accountancy support. This is not the live or official site — the business did not ask for it and has not approved it.
            </p>
            <div className="concept-actions">
              <a
                className="button button-lsl"
                href="https://localsiteslab.com"
                onClick={dismiss}
              >
                Get a site like this
              </a>
              <button type="button" className="concept-continue" onClick={dismiss}>
                Continue to Foot &amp; Ellis-Smith
              </button>
            </div>
          </section>
        </div>
      )}
      <aside className="concept-bar" aria-label="Website concept notice">
        <div className="concept-bar-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="concept-bar-logo"
            src="/images/lsl-logo.svg"
            alt="Local Sites Lab"
            width={36}
            height={36}
          />
          <p className="concept-bar-copy">
            Get a website like this to win more local work
          </p>
          <a className="concept-bar-cta" href="https://localsiteslab.com">
            Get a site like this
          </a>
          <button type="button" className="concept-bar-about" onClick={reopen}>
            About this sample
          </button>
        </div>
      </aside>
    </>
  );
}
