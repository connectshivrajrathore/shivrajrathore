"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";

const services = [
  {
    title: "Salesforce CRM & CPQ Validation",
    description: "End-to-end quality assurance across Sales Cloud, Service Cloud, and CPQ Lead-to-Cash architectures.",
    benefits: [
      "Sales Cloud, Service Cloud, and CPQ business workflow validation",
      "Product bundling, pricing rules, discount approvals, and amendments",
      "SOQL-based backend data auditing and integrity checks",
      "CTI (Aircall), payment gateway, and billing integration verification"
    ]
  },
  {
    title: "Full-Stack Test Automation",
    description: "Design and implement scalable automation frameworks that reduce regression cycles and eliminate flakiness.",
    benefits: [
      "Custom framework engineering using Selenium WebDriver (Java) and Playwright",
      "Opkey No-Code test automation integration and maintenance",
      "Cross-browser and mobile application testing (Android & iOS)",
      "CI/CD automation pipeline integration (Jenkins, GitHub Actions)"
    ]
  },
  {
    title: "API & Backend Data Testing",
    description: "Rigorous API validation ensuring robust communication between microservices, CRMs, and databases.",
    benefits: [
      "Comprehensive REST & SOAP API test suites built in Postman",
      "OAuth 2.0 authentication workflows and security token validation",
      "JSON & XML payload schema validation and response time auditing",
      "SQL database integrity testing and discrepancy resolution"
    ]
  },
  {
    title: "AI-Assisted & Agentic QE",
    description: "Leveraging cutting-edge AI technologies and Agentic workflows to accelerate quality engineering.",
    benefits: [
      "AI Data Enrichment logic, field mapping, and trigger condition QA",
      "Speech-to-Text (Vaani AI) transcription and NLP entity validation",
      "Agentic AI testing workflows and MCP server integrations",
      "AI-powered test optimization, prompt engineering, and LLM evaluation"
    ]
  }
];

export default function Services() {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Services & Consulting</h1>
        <p className="text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
          I partner with engineering teams and founders to build bulletproof testing infrastructures and ensure flawless product releases.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-[var(--color-primary)] mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base text-[var(--color-on-surface)]">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 mt-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[var(--color-on-surface-variant)]">
                      <Check className="w-5 h-5 text-[var(--color-accent-blue)] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6 border-t border-white/5 mt-auto">
                <Link href="/freelance" className="w-full">
                  <Button variant="outline" className="w-full justify-between group">
                    Discuss this service
                    <span className="text-[var(--color-primary)] group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
