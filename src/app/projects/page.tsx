"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FolderGit2, Rocket } from "lucide-react";

const cvProjects = [
  {
    title: "CRM & CPQ Validation",
    type: "Salesforce Sales Cloud & CPQ",
    description: "Validated complete Sales Cloud CRM workflows including lead-to-opportunity, opportunity-to-quote, CPQ pricing, approvals, and order generation.",
    impact: "Tested advanced CPQ features including configuration attributes, product options, price rules, discount schedules, and contract amendments to ensure revenue accuracy.",
    tech: ["Salesforce CPQ", "Sales Cloud", "Data Integrity"]
  },
  {
    title: "Billing & Payments Engine",
    type: "Salesforce Service Cloud",
    description: "Conducted functional and integration testing of billing workflows, payment gateway connections, invoice generation, and credit memo processes.",
    impact: "Ensured seamless financial transactions and accurate invoicing across the entire Service Cloud architecture.",
    tech: ["Service Cloud", "Integration Testing", "Payment Gateways"]
  },
  {
    title: "AI Speech-to-Text & Integration",
    type: "AI/Salesforce",
    description: "Acted as the sole QA resource for an AI-driven voice transcription product integrated into Salesforce.",
    impact: "Built test cases for voice capture accuracy, NLP entity extraction, and validated integration touchpoints across speech engine, middleware, and CRM objects.",
    tech: ["Speech AI", "NLP", "Salesforce API"]
  },
  {
    title: "AI Lead Enrichment",
    type: "Salesforce AI",
    description: "Tested an AI-powered lead enrichment tool that automatically updates incomplete records.",
    impact: "Validated data accuracy, field population logic, enrichment trigger conditions, and UI consistency preventing large-scale data corruption.",
    tech: ["AI", "Data Validation", "UI Consistency"]
  },
  {
    title: "Aircall CTI - Integration",
    type: "Salesforce Integration",
    description: "Validated telephony-CRM integration for a high-volume call center environment.",
    impact: "Verified call logging, screen-pop functionality, task creation, and reporting accuracy for customer service agents.",
    tech: ["Aircall", "CTI", "Salesforce Service Cloud"]
  },
  {
    title: "Vehicle Care Plan - Service & Insurance App",
    type: "Mobile Application",
    description: "Performed end-to-end mobile application testing on Android and iOS platforms.",
    impact: "Covered functional flows, UI validation, API integration tests, and regression cycles ensuring a flawless consumer experience.",
    tech: ["Android", "iOS", "API Testing"]
  },
  {
    title: "Vehicle Care Plan - Website",
    type: "Web Application (UK Healthcare)",
    description: "Led QA for a UK-based healthcare platform handling sensitive patient data.",
    impact: "Executed functional, regression, and cross-browser testing to ensure GDPR-compliant data handling and user experience consistency.",
    tech: ["Web UI", "Cross-Browser", "GDPR Compliance"]
  }
];

const activeProjects = [
  {
    title: "PromptIQ",
    description: "Building an intelligent prompt management and optimization platform for AI applications.",
    tech: ["Generative AI", "LLMs", "Automation"]
  },
  {
    title: "Hotel/Restaurant Automation",
    description: "Developing an end-to-end management system to streamline orders, billing, and kitchen operations.",
    tech: ["Web App", "Point of Sale", "Backend Automation"]
  },
  {
    title: "KiranaOS",
    description: "Creating a lightweight operating system/dashboard tailored for local Indian grocery stores (Kiranas).",
    tech: ["Inventory Management", "Billing", "Mobile First"]
  },
  {
    title: "AI-Powered Japanese App",
    description: "Engineering an AI-assisted language learning application focused on Japanese vocabulary and grammar.",
    tech: ["AI Tutors", "EdTech", "Mobile App"]
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-6 max-w-6xl py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio & Projects</h1>
        <p className="text-lg text-[var(--color-on-surface-variant)] max-w-2xl">
          A blend of enterprise-grade QA consulting work and ongoing entrepreneurial SaaS and automation projects.
        </p>
      </motion.div>

      {/* Enterprise Projects */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <FolderGit2 className="w-8 h-8 text-[var(--color-gradient-start)]" />
          <h2 className="text-3xl font-semibold text-white">Enterprise Case Studies</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col group hover:border-[var(--color-gradient-start)] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-[var(--color-on-surface)] leading-relaxed text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-white mb-1 uppercase tracking-wider">Business Impact</h4>
                    <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(tech => (
                      <Badge key={tech} variant="outline" className="text-[10px] border-white/10 py-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Active Independant Projects */}
      <div>
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <Rocket className="w-8 h-8 text-[var(--color-accent-blue)]" />
          <h2 className="text-3xl font-semibold text-white">Active Developments (In-Progress)</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {activeProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:border-[var(--color-accent-blue)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3">
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2 group-hover:text-[var(--color-accent-blue)] transition-colors pr-6">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-[var(--color-on-surface-variant)] leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <Badge key={tech} variant="secondary" className="bg-white/5 border-transparent text-xs font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
