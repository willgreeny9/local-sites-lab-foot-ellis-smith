import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://foot-ellis-smith.localsiteslab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    "/services/taxation",
    "/services/support-services",
    "/services/business-start-up",
    "/services/payroll-service-users",
    "/areas",
    "/contact",
    "/privacy",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
