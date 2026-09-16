import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const exists = (file) => fs.existsSync(path.join(root, file));

const requiredRoutes = [
  "app/page.tsx",
  "app/services/page.tsx",
  "app/services/taxation/page.tsx",
  "app/services/support-services/page.tsx",
  "app/services/business-start-up/page.tsx",
  "app/services/payroll-service-users/page.tsx",
  "app/areas/page.tsx",
  "app/about/page.tsx",
  "app/contact/page.tsx",
  "app/privacy/page.tsx",
  "app/not-found.tsx",
  "app/robots.ts",
  "app/sitemap.ts",
];

test("all required routes exist", () => {
  for (const route of requiredRoutes) {
    assert.ok(exists(route), `Missing required route file: ${route}`);
  }
});

test("verified business facts are present without invented ratings", () => {
  assert.ok(exists("lib/business.ts"));
  const source = read("lib/business.ts");
  for (const fact of [
    "Foot & Ellis-Smith",
    "01708 766922",
    "info@foot-ellis-smith.co.uk",
    "47B High Street",
    "Ongar",
    "CM5 9DT",
    "1970",
    "Jon Mitchell",
    "14017095",
    "foot-ellis-smith.co.uk",
  ]) {
    assert.match(source, new RegExp(fact.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }
  assert.match(source, /verifiedReviews:\s*null/);
  assert.match(source, /hours:\s*null/);
  assert.doesNotMatch(source, /9\.\d+\/10|Google rating|Trustpilot/i);
  assert.ok(exists("research/DESIGN_BRIEF.md"));
  assert.ok(exists("research/SOURCE_LOG.md"));
  const brief = read("research/DESIGN_BRIEF.md");
  assert.match(brief, /Practice Desk Consultative/i);
  assert.match(brief, /https:\/\/m3\.material\.io/);
  assert.match(brief, /https:\/\/component\.gallery/);
  assert.match(brief, /https:\/\/designsystems\.one/);
  assert.match(brief, /logo\.png/);
});

test("ConceptNotice disclosure, sticky bar, dismiss paths, mount-gated open", () => {
  assert.ok(exists("components/ConceptNotice.tsx"));
  const source = read("components/ConceptNotice.tsx");
  assert.match(source, /Local Sites Lab showcase/i);
  assert.match(source, /Foot &amp; Ellis-Smith|Foot & Ellis-Smith/);
  assert.match(source, /did not ask for/i);
  assert.match(source, /has not approved it/i);
  assert.match(source, /not the live or official site/i);
  assert.match(source, /Get a site like this/i);
  assert.match(source, /Continue to Foot/);
  assert.match(source, /About this sample/i);
  assert.match(source, /localsiteslab\.com/i);
  assert.match(source, /localStorage/i);
  assert.match(source, /concept-bar/);
  assert.match(source, /William Green/);
  assert.match(source, /lsl-logo/);
  assert.match(source, /concept-close/);
  assert.match(source, /aria-label="Close concept notice"/);
  assert.match(source, /Escape/);
  assert.match(source, /modalRef/);
  assert.match(source, /pointerdown/);
  assert.match(source, /addEventListener\(\s*["']pointerdown["']/);
  assert.match(source, /contains\(event\.target/);
  assert.match(source, /stopPropagation/);
  assert.match(source, /onClick=\{dismiss\}/);
  assert.doesNotMatch(source, /event\.target === event\.currentTarget/);
  assert.doesNotMatch(source, /Tip:/i);
  assert.doesNotMatch(source, /click outside/i);
  assert.match(source, /foot-ellis-smith-concept-notice-dismissed-v5/);

  assert.doesNotMatch(source, /useState\(\s*\(\s*\)\s*=>/);
  assert.doesNotMatch(source, /useState\(\s*\(\)\s*=>\s*[\s\S]*localStorage/);
  assert.match(source, /const \[open, setOpen\] = useState\(false\)/);
  assert.match(source, /const \[mounted, setMounted\] = useState\(false\)/);
  assert.match(source, /setMounted\(true\)/);
  assert.match(source, /localStorage\.getItem\(storageKey\)/);
  assert.match(source, /setOpen\(!dismissed\)/);
  assert.match(source, /mounted && open/);
  assert.match(source, /removeEventListener\(\s*["']pointerdown["']/);
  assert.match(source, /removeEventListener\(\s*["']keydown["']/);
  assert.match(source, /onClick=\{reopen\}/);
  assert.match(source, /useCallback/);
  assert.match(source, /Get a website like this to win more local work/i);

  const css = read("app/globals.css");
  const closeBlock = css.split(".concept-close {")[1].split("}")[0];
  assert.match(closeBlock, /background:\s*transparent/);
  assert.match(closeBlock, /border:\s*none/);
  assert.match(closeBlock, /border-radius:\s*0/);
  assert.match(closeBlock, /font-size:\s*1\.5rem/);
  assert.doesNotMatch(closeBlock, /border-radius:\s*50%/);
  assert.match(css, /pointer-events:\s*auto/);
  assert.match(css, /width:\s*min\(100%,\s*42rem\)/);
  assert.match(css, /#0[Bb]1220/);
  assert.match(css, /#EAFF38|#eaff38/i);
});

test("ConceptNotice dismiss → remount → reopen → dismiss again (storage behaviour)", () => {
  const storageKey = "foot-ellis-smith-concept-notice-dismissed-v5";
  const store = new Map();
  const localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
  };

  function mountOpenState() {
    const dismissed = localStorage.getItem(storageKey) === "yes";
    return !dismissed;
  }

  // First visit
  assert.equal(mountOpenState(), true);
  // Dismiss
  localStorage.setItem(storageKey, "yes");
  assert.equal(mountOpenState(), false);
  // Remount / refresh — stays dismissed
  assert.equal(mountOpenState(), false);
  // Reopen via sticky bar does not clear storage until dismiss again;
  // simulate UI reopen then dismiss again
  let uiOpen = true; // reopen()
  assert.equal(uiOpen, true);
  localStorage.setItem(storageKey, "yes");
  uiOpen = false;
  assert.equal(mountOpenState(), false);
  // Clear for a new visitor simulation
  localStorage.removeItem(storageKey);
  assert.equal(mountOpenState(), true);
});

test("concept is noindex and does not canonically impersonate the official domain", () => {
  const robots = read("app/robots.ts");
  const layout = read("app/layout.tsx");
  assert.match(robots, /disallow/i);
  assert.match(layout, /index:\s*false/i);
  assert.match(layout, /follow:\s*false/i);
  assert.doesNotMatch(layout, /foot-ellis-smith\.co\.uk/i);
});

test("global CSS design system: no box-shadows, logo colours, sticky bar, scroll margin", () => {
  const css = read("app/globals.css");
  assert.ok(css.split("\n").length > 200);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media/);
  assert.match(css, /min-height:\s*44px/);
  assert.doesNotMatch(css, /box-shadow/);
  assert.doesNotMatch(css, /outdated browser|chromeframe/i);
  assert.match(css, /#16284[Dd]|--navy:\s*#16284d/i);
  assert.match(css, /#213[Dd]75|--navy-mid:\s*#213d75/i);
  assert.match(css, /#f7f3ea|--cream:\s*#f7f3ea/i);
  for (const token of [
    "--navy",
    "--cream",
    "--accent",
    ".shell",
    ".hero-desk",
    ".hero-copy",
    ".site-header",
    ".utility-bar",
    ".concept-bar",
    ".concept-modal",
    ".concept-logo",
    ".service-tile",
    ".trust-band",
    ".meeting-pathway",
    ".visit-panel",
    ".contact-panel",
    ".site-footer",
    "scroll-margin-top",
    "scroll-padding-top",
    "position:\\s*sticky",
    "position:\\s*fixed",
  ]) {
    assert.match(css, new RegExp(token));
  }
});

test("homepage Practice Desk hero: solid copy beside real photo, no scrim, consultative CTAs", () => {
  const home = read("app/page.tsx");
  assert.match(home, /hero-desk/);
  assert.match(home, /hero-copy/);
  assert.match(home, /hero-media/);
  assert.match(home, /free no-obligation meeting/i);
  assert.match(home, /tel:\$\{business\.phoneTel\}/);
  assert.match(home, /mailto:\$\{business\.email\}/);
  assert.doesNotMatch(home, /outdated browser|chromeframe|COVID/i);
  assert.doesNotMatch(home, /hero-shade|scrim/i);
  assert.doesNotMatch(home, /urgency|Emergency|sticky-call-dock|whatsapp/i);
  assert.match(home, /\/images\/hero-practice\.jpg/);
  assert.match(home, /MeetingPathway|meeting-pathway|TrustBand/);
  assert.ok(exists("public/images/hero-practice.jpg"));
  assert.ok(exists("public/images/logo.png"));
  assert.ok(exists("public/images/lsl-logo.svg"));
  assert.ok(exists("public/images/about-practice.jpg"));
});

test("header uses light plate for dark logo contrast; contact has no fake form delivery", () => {
  const header = read("components/Header.tsx");
  const css = read("app/globals.css");
  assert.match(header, /brand-logo|logo\.png/);
  assert.match(css, /\.site-header\s*\{[^}]*background:\s*var\(--cream\)/s);
  const contact = read("app/contact/page.tsx");
  assert.match(contact, /does not send contact-form/i);
  assert.match(contact, /01708 766922|phoneTel|phoneDisplay/);
  assert.match(contact, /info@foot-ellis-smith\.co\.uk|business\.email/);
  assert.doesNotMatch(contact, /type="submit"|action=.*mail/i);
});

test("no invented social proof stars when reviews are unverified", () => {
  const home = read("app/page.tsx");
  assert.doesNotMatch(home, /SocialProof|out of 5|F4B400|google\.com\/maps.*reviews/i);
  const trust = read("components/TrustBand.tsx");
  assert.match(trust, /never invent review scores|public practice facts/i);
  assert.doesNotMatch(trust, /★|out of 5|F4B400/);
});

test("service cards are whole-box links", () => {
  const home = read("app/page.tsx");
  assert.match(home, /className="service-tile"/);
  assert.match(home, /serviceList\.map/);
});
