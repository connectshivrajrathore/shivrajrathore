"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const competencies = [
    "Requirements Gathering & Analysis",
    "Business Process Mapping (BPMN)",
    "User Story Writing & Backlog Grooming",
    "User Acceptance Testing (UAT) Lead",
    "Test Automation (Selenium, Playwright)",
    "Salesforce CPQ & Enterprise CRM",
    "API Validation (Postman, REST/SOAP)",
    "Agile / Scrum Methodologies"
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
    <div className="container mx-auto px-6 max-w-4xl py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
        
        <div className="prose prose-invert max-w-none text-lg text-[var(--color-on-surface-variant)] space-y-6 mb-16">
          <p>
            I am a versatile <strong>Full-Stack QA Engineer & Business Analyst</strong> with over 7 years of experience bridging the gap between business stakeholders, development teams, and high-quality software delivery. My unique dual skillset allows me to translate complex business requirements into clear technical specifications, map process workflows, and design robust quality assurance strategies.
          </p>
          <p>
            In my Business Analyst capacity, I collaborate with stakeholders to gather requirements, write detailed user stories, define clear acceptance criteria, and facilitate User Acceptance Testing (UAT). In my QA capacity, I design and execute automation suites, validate complex APIs, and maintain high testing standards across web applications, mobile platforms, and enterprise CRM systems like Salesforce.
          </p>
          <p>
            By aligning business logic with engineering execution, I ensure that the software we build not only works flawlessly under the hood but also delivers maximum value and meets user needs. I view quality and business analysis as complementary disciplines essential to delivering successful products.
          </p>
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
