"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { RESUME_PDF_PATH } from "@/lib/constants";

export default function Resume() {
  return (
    <div className="container mx-auto px-6 max-w-4xl py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Resume</h1>
          <p className="text-lg text-[var(--color-on-surface-variant)]">
            Shivraj Singh Rathore
          </p>
        </div>
        <a href={RESUME_PDF_PATH} download rel="noopener noreferrer">
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </a>
      </motion.div>

      <div className="space-y-12">
        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-2xl font-semibold text-white">Experience</h2>
          </div>
          <div className="space-y-8 pl-9 border-l border-white/10 ml-3">
            <div className="relative">
              <div className="absolute w-3 h-3 bg-[var(--color-gradient-start)] rounded-full -left-[43px] top-1.5 ring-4 ring-[var(--color-background)]" />
              <h3 className="text-lg font-medium text-white">Software QA Engineer</h3>
              <div className="text-sm text-[var(--color-accent-blue)] mb-2">Systek Pro | Aug 2022 — Present</div>
              <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
                Led QA across Salesforce Sales Cloud, Service Cloud, and CPQ projects. Managed end-to-end validation of business workflows, API testing via Postman, and leveraged Opkey for test automation optimization.
              </p>
            </div>
            <div className="relative">
              <div className="absolute w-3 h-3 bg-[var(--color-gradient-start)] rounded-full -left-[43px] top-1.5 ring-4 ring-[var(--color-background)]" />
              <h3 className="text-lg font-medium text-white">Software Test Engineer</h3>
              <div className="text-sm text-[var(--color-accent-blue)] mb-2">Deltacubes Pvt. Ltd | Feb 2019 — July 2022</div>
              <p className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
                Led end-to-end QA for healthcare management applications, executing functional, UI, API, and backend testing. Managed Agile sprints via Jira.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-2xl font-semibold text-white">Education</h2>
          </div>
          <div className="space-y-6 pl-9 border-l border-white/10 ml-3">
            <div className="relative">
              <div className="absolute w-3 h-3 bg-[var(--color-gradient-end)] rounded-full -left-[43px] top-1.5 ring-4 ring-[var(--color-background)]" />
              <h3 className="text-lg font-medium text-white">Master of Computer Applications (MCA)</h3>
              <div className="text-sm text-[var(--color-on-surface-variant)]">University of Technology (DL) | 2022</div>
            </div>
            <div className="relative">
              <div className="absolute w-3 h-3 bg-[var(--color-gradient-end)] rounded-full -left-[43px] top-1.5 ring-4 ring-[var(--color-background)]" />
              <h3 className="text-lg font-medium text-white">Bachelor of Computer Applications (BCA)</h3>
              <div className="text-sm text-[var(--color-on-surface-variant)]">Jaipur National University | 2019</div>
            </div>
          </div>
        </motion.section>

        {/* Certs Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-2xl font-semibold text-white">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass px-4 py-3 rounded-lg text-sm text-[var(--color-on-surface)] border border-white/5">
              ISTQB Certified Tester – Foundation Level (CTFL)
            </div>
            <div className="glass px-4 py-3 rounded-lg text-sm text-[var(--color-on-surface)] border border-white/5">
              ISTQB Certified Tester – Agile Extension (CTFL-AT)
            </div>
            <div className="glass px-4 py-3 rounded-lg text-sm text-[var(--color-on-surface)] border border-white/5">
              Salesforce Certified Associate & AI Associate
            </div>
            <div className="glass px-4 py-3 rounded-lg text-sm text-[var(--color-on-surface)] border border-white/5">
              Salesforce Certified Platform Foundations & Admin
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
