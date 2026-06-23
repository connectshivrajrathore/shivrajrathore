"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const experiences = [
  {
    role: "QA Engineer & Consultant",
    companyType: "Enterprise Consulting Firm",
    duration: "Aug 2022 — Present",
    technologies: ["Salesforce CPQ", "Requirements Analysis", "BPMN Mapping", "UAT Facilitation", "Opkey", "Postman", "SOQL"],
    responsibilities: [
      "Led end-to-end Quality Assurance and requirements alignment for enterprise CRM implementations, validating complex Lead-to-Cash, billing, and quote generation workflows.",
      "Collaborated with business stakeholders to map business processes, draft user stories, define acceptance criteria, and formulate UAT strategies for complex Salesforce CPQ rules.",
      "Served as the key bridge between product owners and developers for a groundbreaking AI Lead Enrichment initiative, validating speech-to-text accuracy and data integrity.",
      "Designed and executed automation strategies by translating critical user paths into No-Code test scripts (Opkey) and managing DevOps continuous testing pipelines.",
      "Performed deep integration and backend validation using Postman (REST/SOAP APIs, OAuth 2.0) and SOQL queries."
    ]
  },
  {
    role: "Software Test Engineer & Requirements Analyst",
    companyType: "Healthcare Technology Solutions",
    duration: "Feb 2019 — July 2022",
    technologies: ["Requirements Analysis", "Java", "Selenium", "Postman", "SQL", "Agile/Scrum", "Jira"],
    responsibilities: [
      "Facilitated requirements elicitation sessions with product owners to draft functional specifications and user acceptance criteria for healthcare modules.",
      "Led end-to-end QA validation across patient management, billing, and scheduling workflows, ensuring strict GDPR compliance and functional correctness.",
      "Created and maintained traceability matrices to map business requirements to test cases and defects, ensuring 100% test coverage.",
      "Verified microservices integration via Postman API testing, confirming data schemas and payloads against business requirements.",
      "Collaborated closely with developers and stakeholders during Agile sprints, running defect triage meetings and coordinating sprint reviews."
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h1>
        <p className="text-lg text-[var(--color-on-surface-variant)]">
          A track record of engineering quality into complex enterprise systems. 
          <br className="hidden md:block" />
          <span className="text-sm opacity-70">(Client and employer names have been anonymized to respect confidentiality agreements).</span>
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
                      {exp.companyType}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">{exp.duration}</Badge>
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
