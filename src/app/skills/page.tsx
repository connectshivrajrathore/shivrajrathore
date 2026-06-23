"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const skillCategories = [
  {
    title: "Business Analysis",
    skills: ["Requirements Elicitation", "BPMN Process Mapping", "User Stories & Backlog", "UAT Facilitation", "Gap Analysis", "Stakeholder Alignment"]
  },
  {
    title: "Test Automation",
    skills: ["Selenium WebDriver", "Playwright", "Java", "No-Code (Opkey)", "Cucumber / BDD", "TestNG"]
  },
  {
    title: "Salesforce Platform",
    skills: ["Sales Cloud" , "Service Cloud" , "Experience Cloud" , "CPQ / Revenue Cloud" , "Salesforce Platform" , "AI & Intelligent Automation"]
  },
  {
    title: "API & Integration",
    skills: ["Postman", "REST & SOAP APIs", "OAuth 2.0", "JSON / XML", "SOQL / SQL", "Webhook Validation"]
  },
  {
    title: "DevOps & CI/CD",
    skills: ["Git & GitHub", "Jenkins", "Continuous Testing", "Release Management", "GitHub Actions"]
  },
  {
    title: "Agile & Test Management",
    skills: ["Jira & Confluence", "QTest & Zephyr", "TestRail", "Sprint Ceremonies", "Defect Management", "Traceability Matrix"]
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h1>
        <p className="text-lg text-[var(--color-on-surface-variant)] max-w-2xl">
          A comprehensive toolkit bridging requirements analysis, business process alignment, test automation, and enterprise quality engineering.
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
