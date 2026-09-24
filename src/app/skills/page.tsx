"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const skillCategories = [
  {
    title: "Salesforce CRM & CPQ",
    skills: [
      "Sales Cloud",
      "Service Cloud",
      "Salesforce CPQ",
      "Experience Cloud",
      "Lead-to-Cash (L2Q / Q2C)",
      "Pricing Rules & Engine",
      "Product Bundling & Discounts",
      "Approval Workflows"
    ]
  },
  {
    title: "Salesforce Tools & Data",
    skills: [
      "Salesforce Workbench",
      "Salesforce Inspector",
      "SOQL & SQL Validation",
      "SOQL Builder",
      "Developer Console",
      "Setup Audit Trail",
      "Data Loader"
    ]
  },
  {
    title: "Test Automation",
    skills: [
      "Selenium WebDriver (Java)",
      "Playwright Automation",
      "Opkey (No-Code)",
      "AI-Assisted Test Optimization",
      "Cross-Browser & Mobile QA",
      "Continuous Testing"
    ]
  },
  {
    title: "AI & Agentic QE",
    skills: [
      "Agentic AI Workflows",
      "AI Agent Creation",
      "MCP Servers & Integrations",
      "AI Data Enrichment QA",
      "Speech-to-Text (Vaani) QA",
      "Cursor, ChatGPT & Claude",
      "OpenAI Codex & Gemini"
    ]
  },
  {
    title: "API & Integration Testing",
    skills: [
      "Postman",
      "REST APIs",
      "SOAP Services",
      "OAuth 2.0 Auth",
      "JSON & XML Validation",
      "Aircall CTI Telephony"
    ]
  },
  {
    title: "CI/CD & Test Management",
    skills: [
      "Git & GitHub",
      "Jenkins CI/CD",
      "QTest & Jira",
      "Zephyr & TestRail",
      "Defect Lifecycle",
      "Agile, Scrum & Kanban",
      "UAT & Exploratory Testing"
    ]
  }
];

export default function Skills() {
  return (
    <div className="container mx-auto px-6 max-w-5xl py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills & Competencies</h1>
        <p className="text-lg text-[var(--color-on-surface-variant)] max-w-2xl">
          A comprehensive breakdown of enterprise Salesforce CRM testing, modern automation frameworks, API validation, and cutting-edge Agentic AI workflows.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full hover:border-[var(--color-accent-blue)] transition-colors duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-[var(--color-primary)]">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="bg-white/5 hover:bg-white/10 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
