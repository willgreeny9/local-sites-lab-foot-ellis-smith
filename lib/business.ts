/**
 * Verified public facts for Foot & Ellis-Smith.
 * Sources mapped in research/SOURCE_LOG.md — never invent.
 */

export const business = {
  name: "Foot & Ellis-Smith",
  legalName: "Foot & Ellis-Smith Limited",
  slug: "foot-ellis-smith",
  tagline: "Small business specialists committed to first-class accountancy services.",
  sourceUrl: "https://www.foot-ellis-smith.co.uk/",
  phoneDisplay: "01708 766922",
  phoneTel: "+441708766922",
  email: "info@foot-ellis-smith.co.uk",
  address: {
    line1: "47B High Street",
    locality: "Ongar",
    region: "Essex",
    postcode: "CM5 9DT",
    country: "GB",
  },
  addressDisplay: "47B High Street, Ongar, Essex CM5 9DT",
  facebookUrl: "https://www.facebook.com/FESaccountants",
  companiesHouseUrl:
    "https://find-and-update.company-information.service.gov.uk/company/14017095",
  companiesHouseNumber: "14017095",
  established: "1970",
  primaryCta: "Arrange a free no-obligation meeting",
  /** No verified public review score found — do not invent ratings. */
  verifiedReviews: null as null,
  hours: null as null,
  serviceArea:
    "Ongar and local business and personal clients (as stated on the current site).",
  payrollVisitAreas:
    "Direct payments payroll service notes home visits for clients referred via local authorities such as Barking & Dagenham, Romford and Havering; the payroll company notes an office base in Brentwood with regular visits.",
} as const;

export const director = {
  name: "Jon Mitchell",
  role: "Director",
  notes: [
    "Qualified as an accountant in 2014.",
    "Acquired the business in 2017 from his father.",
    "Actively involved with clients for a number of years and keen to build on the firm’s success.",
  ],
  source: "https://www.foot-ellis-smith.co.uk/about-us/",
} as const;

export const payrollContact = {
  name: "Stephen Mitchell",
  note: "Contact for the direct payments payroll service (stated on the current site).",
  phoneDisplay: "01708 766922",
  companyNote:
    "The direct payments payroll service is provided by Foot & Ellis-Smith Limited, a company run by Stephen Mitchell who is also a director of the main accountancy practice (stated on the current site).",
  source: "https://www.foot-ellis-smith.co.uk/services/payroll-services-for-service-users/",
} as const;

export const trustPoints = [
  {
    title: "Established 1970",
    detail:
      "A long-standing Ongar practice serving local business and personal clients.",
  },
  {
    title: "High Street practice",
    detail: "Based at 47B High Street, Ongar — call, email or visit.",
  },
  {
    title: "Free first meeting",
    detail:
      "Arrange a free, no-obligation meeting to see how the firm can help.",
  },
  {
    title: "Small business focus",
    detail:
      "Expertise oriented to the small business sector and personal clients in the local community.",
  },
] as const;

export const serviceList = [
  {
    slug: "taxation",
    href: "/services/taxation",
    title: "Taxation",
    summary:
      "Corporation tax, personal tax (including sole traders and partnerships), VAT, NI and PAYE, and support with HMRC investigations and enquiries.",
    bullets: [
      "Corporation tax self assessment and planning",
      "Personal tax self assessment and tax planning",
      "VAT registration, returns, advice and compliance",
      "NI, PAYE and P11Ds",
      "HMRC investigations and enquiries",
    ],
  },
  {
    slug: "support-services",
    href: "/services/support-services",
    title: "Support services",
    summary:
      "Payroll advice and bookkeeping support — at your premises or at the Ongar office — so compliance work does not divert you from running the business.",
    bullets: [
      "Payroll advice and outsourcing options",
      "Bookkeeping at your premises or at our office",
      "Help finishing management information",
      "Support recruiting a bookkeeper when needed",
    ],
  },
  {
    slug: "business-start-up",
    href: "/services/business-start-up",
    title: "Business start-up",
    summary:
      "Guidance on structure, registration, bookkeeping systems and early compliance so a good business idea can become a workable company.",
    bullets: [
      "Sole trader, partnership, LLP or limited company structure",
      "Companies House and HMRC registration",
      "Company secretarial issues",
      "Recording systems and accountancy software",
      "Bookkeeping, VAT, payroll and compliance",
    ],
  },
  {
    slug: "payroll-service-users",
    href: "/services/payroll-service-users",
    title: "Payroll for service users",
    summary:
      "Direct payments payroll for personal assistants, including PAYE, pensions assessment and related employer paperwork.",
    bullets: [
      "Payroll records, payslips and HMRC payments",
      "Year-end PAYE returns and P60s",
      "Automatic enrolment assessment for eligible PAs",
      "Contracts of employment and right-to-work ID checks",
      "Personal health budget safeguarding where applicable",
    ],
  },
] as const;

export const complianceServices = [
  "Annual accounts preparation",
  "Company secretarial services",
  "Payroll procedures including Real Time Information and Pensions Auto Enrolment compliance",
  "Self Assessment tax returns",
] as const;

export const values = [
  {
    title: "Enthusiastic",
    detail: "Stated on the current homepage as a practice value.",
  },
  {
    title: "Trustworthy",
    detail: "Stated on the current homepage as a practice value.",
  },
  {
    title: "Qualified",
    detail: "Stated on the current homepage as a practice value.",
  },
] as const;

export const meetingSteps = [
  {
    step: "1",
    title: "Get in touch",
    detail: "Call 01708 766922 or email info@foot-ellis-smith.co.uk.",
  },
  {
    step: "2",
    title: "Free no-obligation meeting",
    detail:
      "Talk through how the firm can help you and your business — without commitment.",
  },
  {
    step: "3",
    title: "Clear ongoing advice",
    detail:
      "Timely, individual advice on accounting, tax and support that fits how you work.",
  },
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Ongar & areas" },
  { href: "/contact", label: "Contact" },
] as const;

export const logo = {
  src: "/images/logo.png",
  alt: "Foot & Ellis-Smith",
  sourceUrl: "https://www.foot-ellis-smith.co.uk/img/logo.png",
} as const;

export const images = {
  hero: {
    src: "/images/hero-practice.jpg",
    alt: "Foot & Ellis-Smith practice imagery from the current website.",
    sourceUrl: "https://www.foot-ellis-smith.co.uk/img/polaroids.jpg",
  },
  about: {
    src: "/images/about-practice.jpg",
    alt: "About Foot & Ellis-Smith — imagery from the current website.",
    sourceUrl: "https://www.foot-ellis-smith.co.uk/img/about.jpg",
  },
} as const;
