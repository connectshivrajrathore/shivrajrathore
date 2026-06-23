"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { ArrowRight, CheckCircle, Code2, Cpu, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-6 max-w-6xl">
      {/* Hero Section */}
      <section className="py-20 md:py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-6">
            Available for Consulting & Full-Time Roles
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        >
          QA Engineer • Business Analyst <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)]">
            AI-Powered Automation Architect
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--color-on-surface-variant)] max-w-2xl mb-10"
        >
          Bridging business vision and technical execution through Quality Engineering, Business Analysis, and Intelligent Automation. I specialize in translating complex requirements into actionable solutions, designing scalable test automation frameworks, optimizing workflows, and leveraging AI to accelerate delivery. My focus is helping teams reduce risk, improve quality, and release software with confidence.

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="/projects">
            <Button size="lg" className="w-full sm:w-auto">
              View Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/freelance">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Hire Me
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Quick Stats / Highlights */}
      <section className="py-12 border-y border-white/5 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-1">7+</div>
            <div className="text-sm text-[var(--color-on-surface-variant)] uppercase tracking-wider">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1 font-mono">QA & BA</div>
            <div className="text-sm text-[var(--color-on-surface-variant)] uppercase tracking-wider">Dual Focus</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">4x</div>
            <div className="text-sm text-[var(--color-on-surface-variant)] uppercase tracking-wider">Salesforce Certified</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">2x</div>
            <div className="text-sm text-[var(--color-on-surface-variant)] uppercase tracking-wider">ISTQB Certified</div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="mb-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Focus Areas</h2>
          <p className="text-[var(--color-on-surface-variant)] max-w-xl">
            Combining analytical thinking with technical execution to drive product success at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Zap className="w-10 h-10 text-[var(--color-accent-blue)] mb-4" />
              <CardTitle>Full-Stack QA Automation</CardTitle>
              <CardDescription>
                Scalable custom frameworks using Selenium, Playwright, and Java to validate Web, Mobile, and API applications.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <Cpu className="w-10 h-10 text-[var(--color-gradient-end)] mb-4" />
              <CardTitle>Business Analysis & UAT</CardTitle>
              <CardDescription>
                Requirement elicitation, process mapping, user stories creation, stakeholder management, and facilitating UAT.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <ShieldCheck className="w-10 h-10 text-[var(--color-gradient-start)] mb-4" />
              <CardTitle>Enterprise & Salesforce Systems</CardTitle>
              <CardDescription>
                End-to-end validation of complex CRM structures, Lead-to-Cash lifecycles, and CPQ business configuration rules.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="glass rounded-2xl p-12 text-center relative overflow-hidden mb-24 border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gradient-start)]/10 to-[var(--color-accent-blue)]/10 -z-10" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to scale your product quality?</h2>
        <p className="text-[var(--color-on-surface-variant)] max-w-2xl mx-auto mb-8 text-lg">
          Whether you need a full QA transformation, an automated testing pipeline, or fractional consulting, I can help you ship with confidence.
        </p>
        <Link href="/freelance">
          <Button size="lg">Start a Conversation</Button>
        </Link>
      </section>
    </div>
  );
}
