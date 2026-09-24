"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Download } from "lucide-react";
import Image from "next/image";
import { RESUME_PDF_PATH } from "@/lib/constants";

export default function About() {
  const competencies = [
    "Salesforce Sales Cloud, Service Cloud & CPQ",
    "Lead-to-Quote (L2Q) & Quote-to-Cash (Q2C)",
    "Selenium WebDriver (Java) & Playwright",
    "Postman API Testing (REST, SOAP, OAuth 2.0)",
    "SOQL & SQL Backend Data Validation",
    "AI Data Enrichment & Speech AI (Vaani) QA",
    "Agentic AI Workflows & MCP Integrations",
    "CI/CD Pipelines (Jenkins, Git) & Agile/Scrum"
  ];

  const certifications = [
    "ISTQB Certified Tester – Foundation Level (CTFL)",
    "ISTQB Certified Tester – Agile Extension (CTFL-AT)",
    "Salesforce Certified Associate",
    "Salesforce Certified AI Associate",
    "Salesforce Certified Platform Foundations",
    "Salesforce Certified Platform Administrator"
  ];

  return (
    <div className="container mx-auto px-6 max-w-5xl py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-10 mb-16 items-start">
          <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center">
            <div className="w-full aspect-square relative rounded-2xl overflow-hidden border border-white/10 mb-6 bg-white/5">
              <Image 
                src="/shivrajrathore/profile.png" 
                alt="Shivraj Singh Rathore" 
                fill 
                className="object-cover object-top"
                unoptimized
              />
            </div>
            <a 
              href={RESUME_PDF_PATH} 
              download="Shivraj_Singh_Rathore_CV.pdf"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          <div className="w-full md:w-2/3 prose prose-invert max-w-none text-lg text-[var(--color-on-surface-variant)] space-y-6">
            <p>
              I am a results-oriented <strong>Hybrid QA Engineer</strong> with around 6 years of experience across Web, Mobile, and Salesforce CRM platforms (Sales Cloud, Service Cloud, CPQ). I specialize in functional, non-functional, API, AI-assisted, and end-to-end testing using tools including Selenium, Playwright, Postman, Opkey, Workbench, QTest, and Jira.
            </p>
            <p>
              With a proven track record across Salesforce Lead-to-Cash implementations, I validate complex business workflows spanning Lead Capture, Opportunity Creation, Product Configuration, Quote Generation, CPQ Pricing Engines, Discount Approvals, Bundling, Contract Amendments, Billing, and Payments. I ensure data integrity through rigorous SOQL/SQL backend validations.
            </p>
            <p>
              I actively leverage modern AI engineering tools — including ChatGPT, Claude, Gemini, Cursor, OpenAI Codex, MCP-enabled workflows, and custom AI agents — to build end-to-end automation frameworks, optimize testing cycles, and accelerate high-quality software delivery.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Core Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {competencies.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[var(--color-on-surface-variant)]">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-blue)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Badge variant="outline" className="shrink-0">Certified</Badge>
                    <span className="text-[var(--color-on-surface)] text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
