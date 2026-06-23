"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";

const services = [
  {
    title: "Business Analysis & Requirements",
    description: "Eliciting, analyzing, and documenting requirements to bridge the gap between business stakeholders and engineering.",
    benefits: [
      "Requirements gathering, stakeholder interviews, and workshops",
      "Process mapping (BPMN), workflow analysis, and gap mapping",
      "User story writing with clear Gherkin BDD acceptance criteria",
      "UAT strategy formulation and session facilitation"
    ]
  },
  {
    title: "QA Strategy & Transformation",
    description: "Modernize testing processes, aligning quality engineering practices with Agile and DevOps workflows.",
    benefits: [
      "Comprehensive test strategy and plan formulation",
      "Agile QA adoption, sprint planning, and estimation alignment",
      "Toolchain setup and administration (Jira, Zephyr, TestRail)",
      "Continuous Testing and quality gate definition"
    ]
  },
  {
    title: "Full-Stack Test Automation",
    description: "Design and implement scalable automation frameworks that reduce regression cycles by up to 80%.",
    benefits: [
      "Custom framework engineering (Selenium, Playwright, Java)",
      "Low-Code/No-Code test automation integration",
      "API validation (REST/SOAP) and backend data auditing",
      "CI/CD automation pipeline integration (Jenkins, GitHub)"
    ]
  },
  {
    title: "Salesforce CRM & CPQ Auditing",
    description: "Deep validation of complex CRM logic, Lead-to-Cash lifecycles, and business rules.",
    benefits: [
      "Sales Cloud, Service Cloud, and Experience Cloud testing",
      "CPQ product bundling, pricing, and discounting rules",
      "SOQL-based data validation and migration audits",
      "Cross-system integration testing (Billing, ERPs, APIs)"
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
