/**
 * Centralized site constants.
 * Single source of truth for URLs, contact info, and external links.
 * Update these values once and they propagate everywhere.
 */

export const SITE_CONFIG = {
  name: "Shivraj Singh Rathore",
  shortName: "Shivraj",
  title: "Full-Stack QA Engineer & Business Analyst",
  description:
    "Bridging the gap between business requirements, product design, and software quality. 7+ years of experience across Test Automation, Requirements Analysis, Agile Business Analysis, and Enterprise Systems validation.",
  /** Update this to your actual deployed domain */
  siteUrl: "https://connectshivrajrathore.github.io",
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/shivraj-rathore/",
  github: "https://github.com/connectshivrajrathore",
  trailhead:
    "https://www.salesforce.com/trailblazer/connectshivrajrathore",
  email: "connect.shivrajrathore@gmail.com",
  /**
   * Cal.com (free, open‑source Calendly alternative).
   * Sign up at https://cal.com → create a 30‑min event → replace handle below.
   * The `?email=` param auto‑populates your email in the booking form.
   */
  calcom: "https://cal.com/connectshivrajrathore/30min",
} as const;

/** Web3Forms public access key, loaded from environment variables. */
export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

/** Resume PDF path (relative to /public). Place your CV at public/resume.pdf */
export const RESUME_PDF_PATH = "/resume.pdf";
