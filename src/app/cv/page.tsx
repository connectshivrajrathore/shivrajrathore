"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Download, 
  FileText, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Terminal, 
  Cloud, 
  Database, 
  Copy, 
  Check,
  ArrowRight,
  Globe
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { RESUME_PDF_PATH, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function CVPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 7790931957");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const quickStats = [
    {
      label: "Experience",
      value: "Around 6 Yrs",
      detail: "Web, Mobile & Salesforce CRM Platforms",
      icon: Briefcase,
      color: "from-blue-500/20 to-indigo-500/20",
      accent: "text-blue-400",
    },
    {
      label: "Salesforce Certified",
      value: "4x Certified",
      detail: "Associate, AI, Admin, Foundations",
      icon: Cloud,
      color: "from-sky-500/20 to-cyan-500/20",
      accent: "text-sky-400",
    },
    {
      label: "ISTQB Certified",
      value: "2x Certified",
      detail: "Foundation CTFL & Agile CTFL-AT",
      icon: Award,
      color: "from-purple-500/20 to-pink-500/20",
      accent: "text-purple-400",
    },
    {
      label: "AI-Powered Testing",
      value: "Agentic QE",
      detail: "MCP Workflows, AI Agents & LLM Testing",
      icon: Sparkles,
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400",
    },
  ];

  const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "salesforce", label: "Salesforce & CPQ" },
    { id: "automation", label: "Automation & CI/CD" },
    { id: "ai", label: "AI & Modern QE" },
    { id: "api_data", label: "API, SOQL & SQL" },
    { id: "domain", label: "Domain & Process" },
  ];

  const skillsData = [
    // Salesforce & CPQ
    { name: "Salesforce CPQ & Pricing Engine", category: "salesforce", highlight: true },
    { name: "Sales Cloud & Service Cloud", category: "salesforce", highlight: true },
    { name: "Experience Cloud & Other Clouds", category: "salesforce", highlight: false },
    { name: "Lead-to-Cash (L2Q / Q2C)", category: "salesforce", highlight: true },
    { name: "Product Bundling & Discount Rules", category: "salesforce", highlight: true },
    { name: "Approval Workflows & Amendments", category: "salesforce", highlight: false },
    { name: "Salesforce Workbench & Inspector", category: "salesforce", highlight: true },
    { name: "Developer Console & Setup Audit Trail", category: "salesforce", highlight: false },
    { name: "Data Loader & SOQL Builder", category: "salesforce", highlight: false },

    // Automation & CI/CD
    { name: "Selenium WebDriver (Java)", category: "automation", highlight: true },
    { name: "Playwright Automation", category: "automation", highlight: true },
    { name: "Opkey (No-Code Automation)", category: "automation", highlight: true },
    { name: "CI/CD Pipeline Integration (Jenkins/Git)", category: "automation", highlight: true },
    { name: "Git & GitHub Version Control", category: "automation", highlight: false },
    { name: "QTest, Jira & TestRail", category: "automation", highlight: false },
    { name: "Defect Lifecycle Management", category: "automation", highlight: false },
    { name: "Cross-Browser & Mobile QA (iOS/Android)", category: "automation", highlight: false },

    // AI & Modern QE
    { name: "AI-Assisted Test Optimization", category: "ai", highlight: true },
    { name: "Agentic AI Workflows & AI Agents", category: "ai", highlight: true },
    { name: "MCP (Model Context Protocol) Integrations", category: "ai", highlight: true },
    { name: "AI Data Enrichment Validation", category: "ai", highlight: true },
    { name: "Speech-to-Text AI (Vaani NLP QA)", category: "ai", highlight: true },
    { name: "ChatGPT, Claude, Gemini & Cursor", category: "ai", highlight: false },
    { name: "OpenAI Codex & AI Coding Models", category: "ai", highlight: false },

    // API & Data
    { name: "Postman API Testing (OAuth 2.0)", category: "api_data", highlight: true },
    { name: "REST APIs & SOAP Web Services", category: "api_data", highlight: true },
    { name: "JSON & XML Payload Validation", category: "api_data", highlight: false },
    { name: "SOQL Backend Validation", category: "api_data", highlight: true },
    { name: "SQL Database Integrity Testing", category: "api_data", highlight: true },

    // Domain & Process
    { name: "Lead Capture & Qualification", category: "domain", highlight: false },
    { name: "Billing, Invoicing & Payments", category: "domain", highlight: true },
    { name: "Healthcare Management (GDPR)", category: "domain", highlight: false },
    { name: "Agile, Scrum & Kanban", category: "domain", highlight: false },
    { name: "V-Model & BDD Methodologies", category: "domain", highlight: false },
    { name: "Aircall CTI Telephony Integration", category: "domain", highlight: false },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  const experiences = [
    {
      role: "Software QA Engineer",
      company: "Metacube Software Pvt. Ltd.",
      period: "June 2022 — Present",
      location: "Jaipur, Rajasthan, India",
      description: "Leading end-to-end QA across Salesforce Sales Cloud, Service Cloud, CPQ implementations, and cutting-edge AI integrations.",
      highlights: [
        "Led QA across Salesforce Sales Cloud, Salesforce Service Cloud, and Salesforce CPQ projects, delivering end-to-end validation of key business workflows including lead management, opportunity lifecycle, case handling, billing, quote generation, and renewals.",
        "Designed and executed complex CPQ test scenarios covering bundling, pricing rules, discount approvals, and amendment/renewal flows, while ensuring data integrity through SOQL-based backend validation.",
        "Acted as the sole QA for an AI Data Enrichment initiative and led QA for a speech-to-text (Vaani) integration, validating AI-driven data population, transcription accuracy, and cross-system data flow.",
        "Managed full QA lifecycle using Jira and QTest, supported CI/CD-driven regression cycles, and performed API testing via Postman with OAuth 2.0 validation.",
        "Collaborated with developers and architects on defect resolution and CPQ configurations, validated Salesforce admin components post-deployment, tested Aircall CTI integrations, and leveraged Opkey to optimize automation and reduce regression effort."
      ],
      technologies: ["Salesforce Sales Cloud", "Service Cloud", "Salesforce CPQ", "SOQL", "Postman (OAuth 2.0)", "AI Data Enrichment", "Vaani AI (Speech-to-Text)", "Opkey (No-Code)", "QTest", "Jira", "Aircall CTI", "CI/CD Jenkins"]
    },
    {
      role: "Software QA Engineer",
      company: "Software Management Applications",
      period: "December 2020 — June 2022",
      location: "Jaipur, Rajasthan, India",
      description: "Led end-to-end testing for multi-module SaaS and vehicle software management platforms across web, mobile, API, and database layers.",
      highlights: [
        "Led end-to-end QA for a vehicle software management application, covering functional, UI, API, and backend testing across modules like vehicle management, user management, service scheduling, billing, and third-party integrations.",
        "Designed and executed comprehensive test plans, performed cross-browser and device UI validation for consistent UX, and conducted REST API testing using Postman to verify payloads, authentication, and data accuracy.",
        "Ensured backend integrity through SQL-based validation, identifying discrepancies between UI and database layers.",
        "Collaborated within Agile sprints, managing defects via Jira, and executed regression, smoke, sanity, and UAT cycles before releases, while maintaining traceability matrices and detailed test summary reports.",
        "Gained exposure to CRM workflows, including customer data management, service interactions, and validation of customer-related processes and integrations."
      ],
      technologies: ["Web Testing", "Mobile QA (Android/iOS)", "REST APIs", "Postman", "SQL Validation", "Jira", "Agile/Scrum", "Test Plans & Matrices", "UAT"]
    }
  ];

  const keyProjects = [
    {
      title: "Core Sales – CRM & CPQ",
      platform: "Salesforce Sales Cloud & CPQ",
      summary: "Validated complete Sales Cloud CRM workflows: lead-to-opportunity, opportunity-to-quote, CPQ pricing, approvals, and order generation. Tested advanced CPQ features including configuration attributes, product options, price rules, discount schedules, and contract amendments.",
      tags: ["Sales Cloud", "Salesforce CPQ", "Pricing Engine", "Approvals", "SOQL"]
    },
    {
      title: "Billing & Payments",
      platform: "Salesforce Service Cloud",
      summary: "Conducted functional and integration testing of billing workflows, payment gateway connections, invoice generation, and credit memo processes within Service Cloud.",
      tags: ["Service Cloud", "Billing Workflows", "Payment Gateways", "Invoices"]
    },
    {
      title: "Vaani – Speech-to-Text AI Integration",
      platform: "Voice AI & Salesforce Integration",
      summary: "Sole QA resource for AI-driven voice transcription product; built test cases for voice capture accuracy, NLP entity extraction, and Salesforce record auto-population. Validated integration touchpoints across speech engine, middleware, and Salesforce CRM objects.",
      tags: ["Speech AI", "Vaani NLP", "Middleware", "Salesforce Objects", "Data Flow"]
    },
    {
      title: "Lead Enrichment AI",
      platform: "Salesforce AI Innovation",
      summary: "Tested AI-powered lead enrichment tool — validated data accuracy, field population logic, enrichment trigger conditions, and UI consistency in Salesforce.",
      tags: ["AI Lead Enrichment", "Data Accuracy", "Field Mapping", "CRM Validation"]
    },
    {
      title: "Aircall CTI Integration with Salesforce",
      platform: "Telephony CRM Integration",
      summary: "Validated telephony-CRM integration including call logging, screen-pop functionality, task creation, and reporting accuracy.",
      tags: ["Aircall CTI", "Call Logging", "Screen Pops", "Task Creation"]
    },
    {
      title: "Vehicle Service & Insurance Mobile App",
      platform: "Mobile Application (Android & iOS)",
      summary: "Performed end-to-end mobile application testing on Android and iOS platforms, covering functional flows, UI validation, API integration tests, and regression cycles.",
      tags: ["Android QA", "iOS QA", "Mobile API Testing", "Regression"]
    },
    {
      title: "VCP Website (UK Healthcare)",
      platform: "Web Application & Compliance",
      summary: "Led QA for UK-based healthcare platform; executed functional, regression, and cross-browser testing to ensure GDPR-compliant data handling and user experience consistency.",
      tags: ["UK Healthcare", "GDPR Compliance", "Cross-Browser", "Functional QA"]
    }
  ];

  const certifications = [
    {
      title: "ISTQB Certified Tester – Foundation Level (CTFL)",
      issuer: "ISTQB®",
      type: "ISTQB",
      verified: true
    },
    {
      title: "ISTQB Certified Tester – Foundation Level Agile Extension (CTFL-AT)",
      issuer: "ISTQB®",
      type: "ISTQB",
      verified: true
    },
    {
      title: "Salesforce Certified Associate",
      issuer: "Salesforce",
      type: "Salesforce",
      verified: true
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      type: "Salesforce",
      verified: true
    },
    {
      title: "Salesforce Certified Platform Foundations",
      issuer: "Salesforce",
      type: "Salesforce",
      verified: true
    },
    {
      title: "Salesforce Certified Platform Administrator",
      issuer: "Salesforce",
      type: "Salesforce",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen py-10 pb-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Top Breadcrumb / Status */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Full-Time & Consulting Roles
            </span>
          </div>
        </motion.div>

        {/* Hero / Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl glass p-6 sm:p-10 border border-white/10 mb-10"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--color-gradient-start)]/15 via-[var(--color-accent-blue)]/10 to-transparent blur-3xl -z-10 pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="default" className="bg-[var(--color-gradient-start)]">
                  Recruiter & ATS Profile
                </Badge>
                <Badge variant="secondary" className="border border-white/10">
                  Updated 2026
                </Badge>
              </div>

              <div>
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                  Shivraj Singh Rathore
                </h1>
                <p className="text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                  QA Engineer | Salesforce | AI-Powered Testing
                </p>
              </div>

              <p className="text-[var(--color-on-surface-variant)] text-sm sm:text-base leading-relaxed">
                Results-oriented Hybrid QA Engineer with <strong>around 6 years of experience</strong> in software testing across Web, Mobile, and Salesforce CRM platforms (Sales Cloud, Service Cloud, CPQ). Proven expertise in Lead-to-Cash validation, CPQ pricing engines, discount approvals, test automation (Selenium, Playwright, Opkey), Postman API testing (OAuth 2.0), SOQL/SQL backend integrity, and Agentic AI testing solutions.
              </p>

              {/* Quick Contact Chips */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm text-[var(--color-on-surface)]">
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  title="Click to copy email"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>{SOCIAL_LINKS.email}</span>
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400 ml-1" /> : <Copy className="w-3 h-3 text-white/40 ml-1" />}
                </button>

                <button 
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  title="Click to copy phone"
                >
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <span>+91 7790931957</span>
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-400 ml-1" /> : <Copy className="w-3 h-3 text-white/40 ml-1" />}
                </button>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[var(--color-on-surface-variant)]">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Jaipur, India (Open to Remote / Hybrid)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-64">
              <a 
                href={RESUME_PDF_PATH} 
                download="Shivraj_Singh_Rathore_CV.pdf"
                className="w-full"
              >
                <Button size="lg" className="w-full flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] hover:opacity-95 text-white font-semibold">
                  <Download className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
                </Button>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a 
                  href={SOCIAL_LINKS.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a 
                  href={SOCIAL_LINKS.trailhead} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors"
                >
                  <span>Trailhead</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              <Link href="/freelance" className="w-full">
                <Button variant="secondary" size="sm" className="w-full text-xs">
                  Schedule an Interview / Hire
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Quick Highlights / Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {quickStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
              >
                <div className="h-full p-5 rounded-xl glass border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[var(--color-on-surface-variant)] uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} border border-white/5`}>
                      <Icon className={`w-4 h-4 ${stat.accent}`} />
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-[var(--color-on-surface-variant)] leading-snug">{stat.detail}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Competencies & Skills Matrix (Skimmable Keywords) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-6 h-6 text-indigo-400" />
                Core Competencies & Keyword Index
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] mt-1">
                Recruiter and ATS optimized skills across Salesforce CRM, test automation frameworks, and AI workflows.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                    activeCategory === cat.id
                      ? "bg-[var(--color-gradient-start)] text-white shadow-sm"
                      : "text-[var(--color-on-surface-variant)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl glass border border-white/10">
            <div className="flex flex-wrap gap-2.5">
              {filteredSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border transition-all ${
                    skill.highlight
                      ? "bg-indigo-500/10 text-indigo-200 border-indigo-500/30 hover:border-indigo-500/60"
                      : "bg-white/5 text-[var(--color-on-surface)] border-white/10 hover:border-white/20"
                  }`}
                >
                  {skill.highlight && <Sparkles className="w-3 h-3 text-indigo-400 shrink-0" />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Professional Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-14"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-400" />
              Professional Experience
            </h2>
            <Badge variant="outline">Chronological Work History</Badge>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <Card key={idx} className="border-white/10 hover:border-white/20 transition-all overflow-hidden">
                <CardHeader className="border-b border-white/5 pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold text-white">
                        {exp.role}
                      </CardTitle>
                      <div className="text-sm font-medium text-blue-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-on-surface-variant)]">
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono">
                        {exp.period}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-on-surface-variant)] mt-2 italic">
                    {exp.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-6 space-y-6">
                  <ul className="space-y-3">
                    {exp.highlights.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-sm text-[var(--color-on-surface)] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/5">
                    <div className="text-xs font-semibold text-[var(--color-on-surface-variant)] mb-2 uppercase tracking-wider">
                      Key Technologies & Methodologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, techIdx) => (
                        <span 
                          key={techIdx} 
                          className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-[var(--color-on-surface-variant)] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Featured Case Studies / Key Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-14"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-6 h-6 text-purple-400" />
                Key Project Highlights
              </h2>
              <p className="text-xs sm:text-sm text-[var(--color-on-surface-variant)] mt-1">
                Real-world Salesforce implementations, AI integrations, and testing milestones.
              </p>
            </div>
            <Link href="/projects" className="hidden sm:inline-flex text-xs text-blue-400 hover:text-blue-300 font-medium items-center gap-1">
              <span>View Full Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyProjects.map((project, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl glass border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-xs font-semibold text-purple-400 mb-1">
                    {project.platform}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[var(--color-on-surface-variant)] leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-[var(--color-on-surface-variant)] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certifications, Education & Additional Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {/* Certifications (2 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-white/10">
              <CardHeader className="pb-4 border-b border-white/5">
                <CardTitle className="flex items-center gap-2 text-xl text-white">
                  <Award className="w-5 h-5 text-yellow-400" />
                  Industry Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {certifications.map((cert, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                    >
                      <div className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white leading-snug">
                          {cert.title}
                        </div>
                        <div className="text-[11px] text-[var(--color-on-surface-variant)] mt-0.5 flex items-center gap-2">
                          <span>{cert.issuer}</span>
                          <span className="inline-block w-1 h-1 rounded-full bg-white/30"></span>
                          <span className="text-emerald-400">Verified</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education & Info (1 Col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-6"
          >
            <Card className="border-white/10">
              <CardHeader className="pb-3 border-b border-white/5">
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div>
                  <div className="text-sm font-semibold text-white">Master of Computer Applications (MCA)</div>
                  <div className="text-xs text-[var(--color-on-surface-variant)]">University of Technology • 2022</div>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <div className="text-sm font-semibold text-white">Bachelor of Computer Applications (BCA)</div>
                  <div className="text-xs text-[var(--color-on-surface-variant)]">Jaipur National University • 2019</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10">
              <CardHeader className="pb-3 border-b border-white/5">
                <CardTitle className="flex items-center gap-2 text-lg text-white">
                  <Globe className="w-5 h-5 text-emerald-400" />
                  Languages & Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-3 text-xs text-[var(--color-on-surface)]">
                <div className="flex justify-between">
                  <span className="text-[var(--color-on-surface-variant)]">Languages:</span>
                  <span className="font-medium text-white">English (Proficient), Hindi (Native)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-on-surface-variant)]">Work Mode:</span>
                  <span className="font-medium text-emerald-400">Remote / Hybrid / On-Site</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-on-surface-variant)]">Notice Period:</span>
                  <span className="font-medium text-white">Immediate / Negotiable</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recruiter Bottom Banner / Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative overflow-hidden rounded-2xl glass p-8 text-center border border-white/10 bg-gradient-to-r from-indigo-950/30 via-purple-950/30 to-blue-950/30"
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Interested in reviewing the complete offline resume?
            </h3>
            <p className="text-sm text-[var(--color-on-surface-variant)]">
              Download the standard ATS-formatted PDF version of Shivraj Singh Rathore's CV or reach out directly to schedule an introductory conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a 
                href={RESUME_PDF_PATH} 
                download="Shivraj_Singh_Rathore_CV.pdf"
              >
                <Button size="lg" className="bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] text-white font-semibold">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV (PDF)
                </Button>
              </a>
              <Link href="/freelance">
                <Button variant="secondary" size="lg">
                  Hire / Contact Shivraj
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
