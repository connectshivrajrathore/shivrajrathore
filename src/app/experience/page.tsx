"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const experiences = [
  {
    role: "Software QA Engineer",
    company: "Metacube Software Pvt. Ltd.",
    location: "Jaipur, Rajasthan, India",
    duration: "June 2022 — Present",
    technologies: [
      "Salesforce Sales Cloud",
      "Salesforce Service Cloud",
      "Salesforce CPQ",
      "SOQL",
      "Postman (OAuth 2.0)",
      "AI Data Enrichment",
      "Vaani AI (Speech-to-Text)",
      "Opkey (No-Code)",
      "QTest",
      "Jira",
      "Aircall CTI",
      "CI/CD Jenkins"
    ],
    responsibilities: [
      "Led QA across Salesforce Sales Cloud, Salesforce Service Cloud, and Salesforce CPQ projects, delivering end-to-end validation of key business workflows including lead management, opportunity lifecycle, case handling, billing, quote generation, and renewals.",
      "Designed and executed complex CPQ test scenarios covering bundling, pricing rules, discount approvals, and amendment/renewal flows, while ensuring data integrity through SOQL-based backend validation.",
      "Acted as the sole QA for an AI Data Enrichment initiative and led QA for a speech-to-text (Vaani) integration, validating AI-driven data population, transcription accuracy, and cross-system data flow.",
      "Managed full QA lifecycle using Jira and QTest, supported CI/CD-driven regression cycles, and performed API testing via Postman with OAuth 2.0 validation.",
      "Collaborated with developers and architects on defect resolution and CPQ configurations, validated Salesforce admin components post-deployment, tested Aircall CTI integrations, and leveraged Opkey to optimize automation and reduce regression effort."
    ]
  },
  {
    role: "Software QA Engineer",
    company: "Software Management Applications",
    location: "Jaipur, Rajasthan, India",
    duration: "December 2020 — June 2022",
    technologies: [
      "Web Testing",
      "Mobile QA (Android/iOS)",
      "REST APIs",
      "Postman",
      "SQL Validation",
      "Jira",
      "Agile/Scrum",
      "Test Plans & Matrices",
      "UAT"
    ],
    responsibilities: [
      "Led end-to-end QA for a vehicle software management application, covering functional, UI, API, and backend testing across modules like vehicle management, user management, service scheduling, billing, and third-party integrations.",
      "Designed and executed comprehensive test plans, performed cross-browser and device UI validation for consistent UX, and conducted REST API testing using Postman to verify payloads, authentication, and data accuracy.",
      "Ensured backend integrity through SQL-based validation, identifying discrepancies between UI and database layers.",
      "Collaborated within Agile sprints, managing defects via Jira, and executed regression, smoke, sanity, and UAT cycles before releases, while maintaining traceability matrices and detailed test summary reports.",
      "Gained exposure to CRM workflows, including customer data management, service interactions, and validation of customer-related processes and integrations."
    ]
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-6 max-w-4xl py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Experience</h1>
        <p className="text-lg text-[var(--color-on-surface-variant)]">
          Around 6 years of proven quality engineering excellence across enterprise Salesforce CRM ecosystems, automation frameworks, and AI workflows.
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden border-t-2 border-t-[var(--color-gradient-start)]">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                  <div>
                    <CardTitle className="text-2xl mb-1">{exp.role}</CardTitle>
                    <div className="text-[var(--color-accent-blue)] font-medium">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="w-fit">{exp.duration}</Badge>
                    <Badge variant="secondary" className="w-fit text-xs bg-white/5">{exp.location}</Badge>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/5 border-transparent text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mt-4">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[var(--color-on-surface-variant)] leading-relaxed">
                      <span className="text-[var(--color-gradient-start)] mt-1.5 shrink-0 text-xs">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
