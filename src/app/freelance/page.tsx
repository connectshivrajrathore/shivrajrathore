"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/constants";

/** Simple email regex — catches the majority of invalid addresses */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Freelance() {
  const [status, setStatus] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);
  const lastSubmitRef = useRef<number>(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // ── Honeypot check (bots fill hidden fields) ──
    if (formData.get("_honey")) {
      setIsSuccess(true);
      setStatus("Inquiry sent successfully!");
      return;
    }

    // ── Client‑side rate limit: 1 submission per 30 s ──
    const now = Date.now();
    if (now - lastSubmitRef.current < 30_000) {
      setIsSuccess(false);
      setStatus("Please wait a moment before sending another inquiry.");
      return;
    }

    // ── Email format validation ──
    const email = String(formData.get("email") ?? "").trim();
    if (!EMAIL_REGEX.test(email)) {
      setIsSuccess(false);
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Sending...");
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        lastSubmitRef.current = Date.now();
        setIsSuccess(true);
        setStatus("Inquiry sent successfully!");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setIsSuccess(false);
        // Never render untrusted API text directly
        setStatus("Something went wrong. Please try again.");
        console.error("[FreelanceForm] Web3Forms error:", data.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setStatus("Failed to send inquiry. Please try again later.");
      console.error("[FreelanceForm] Submission failed:", error);
    }
  };

  return (
    <div className="container mx-auto px-6 max-w-4xl py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hire Me for Consulting</h1>
        <p className="text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
          Currently accepting selective freelance projects and consulting engagements. Fill out the form below to see if we&apos;re a good fit.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>Project Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit} id="freelance-form">
                {/* ── Honeypot: invisible to humans, filled by bots ── */}
                <input
                  type="text"
                  name="_honey"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="freelance-name" className="text-sm font-medium text-white">Full Name</label>
                    <input
                      id="freelance-name"
                      type="text"
                      name="name"
                      required
                      maxLength={100}
                      className="w-full bg-[var(--color-surface-container)] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="freelance-email" className="text-sm font-medium text-white">Work Email</label>
                    <input
                      id="freelance-email"
                      type="email"
                      name="email"
                      required
                      maxLength={200}
                      className="w-full bg-[var(--color-surface-container)] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="freelance-company" className="text-sm font-medium text-white">Company Name</label>
                  <input
                    id="freelance-company"
                    type="text"
                    name="company"
                    maxLength={150}
                    className="w-full bg-[var(--color-surface-container)] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="freelance-message" className="text-sm font-medium text-white">Project Description</label>
                  <textarea
                    id="freelance-message"
                    rows={5}
                    name="message"
                    required
                    maxLength={3000}
                    className="w-full bg-[var(--color-surface-container)] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors resize-none"
                    placeholder="Tell me about your QA or automation challenges..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={status === "Sending..."}>
                  {status === "Sending..." ? "Sending..." : "Submit Inquiry"}
                </Button>
                {status && status !== "Sending..." && (
                  <p
                    className={`text-sm text-center mt-2 font-medium ${
                      isSuccess ? "text-green-400" : "text-red-400"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {status}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-[var(--color-primary)]">Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white font-medium">Accepting new clients</span>
              </div>
              <p className="text-sm text-[var(--color-on-surface-variant)] mt-3">
                Available for part-time consulting, architecture reviews, and automation framework setup.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-[var(--color-primary)]">Engagement Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="relative border-l border-[var(--color-gradient-start)]/30 ml-3 space-y-6">
                <li className="pl-6 relative">
                  <div className="absolute w-3 h-3 bg-[var(--color-gradient-start)] rounded-full -left-[6.5px] top-1.5 ring-4 ring-[var(--color-background)]" />
                  <h3 className="font-medium text-white text-sm mb-1">1. Discovery</h3>
                  <p className="text-xs text-[var(--color-on-surface-variant)]">Initial call to understand scope.</p>
                </li>
                <li className="pl-6 relative">
                  <div className="absolute w-3 h-3 bg-[var(--color-gradient-start)] rounded-full -left-[6.5px] top-1.5 ring-4 ring-[var(--color-background)]" />
                  <h3 className="font-medium text-white text-sm mb-1">2. Proposal</h3>
                  <p className="text-xs text-[var(--color-on-surface-variant)]">Clear deliverables and timeline.</p>
                </li>
                <li className="pl-6 relative">
                  <div className="absolute w-3 h-3 bg-[var(--color-gradient-start)] rounded-full -left-[6.5px] top-1.5 ring-4 ring-[var(--color-background)]" />
                  <h3 className="font-medium text-white text-sm mb-1">3. Execution</h3>
                  <p className="text-xs text-[var(--color-on-surface-variant)]">Async updates & milestone delivery.</p>
                </li>
              </ol>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
