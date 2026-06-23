"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, CalendarClock } from "lucide-react";
import { SOCIAL_LINKS, WEB3FORMS_ACCESS_KEY } from "@/lib/constants";

/** Simple email regex — catches the majority of invalid addresses */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
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
      setStatus("Message sent successfully!");
      return;
    }

    // ── Client‑side rate limit: 1 submission per 30 s ──
    const now = Date.now();
    if (now - lastSubmitRef.current < 30_000) {
      setIsSuccess(false);
      setStatus("Please wait a moment before sending another message.");
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
        setStatus("Message sent successfully!");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setIsSuccess(false);
        // Never render untrusted API text directly
        setStatus("Something went wrong. Please try again.");
        console.error("[ContactForm] Web3Forms error:", data.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setStatus("Failed to send message. Please try again later.");
      console.error("[ContactForm] Submission failed:", error);
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let&apos;s Connect</h1>
        <p className="text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
          Whether you have a question, a project proposal, or just want to talk about the future of AI in testing, my inbox is open.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit} id="contact-form">
                {/* ── Honeypot: invisible to humans, filled by bots ── */}
                <input
                  type="text"
                  name="_honey"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-white">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    maxLength={100}
                    className="w-full bg-[var(--color-surface-container)] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-white">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    maxLength={200}
                    className="w-full bg-[var(--color-surface-container)] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-white">Message</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    name="message"
                    required
                    maxLength={2000}
                    className="w-full bg-[var(--color-surface-container)] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-accent-blue)] transition-colors resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={status === "Sending..."}>
                  {status === "Sending..." ? "Sending..." : "Send Message"}
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
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-3 text-[var(--color-on-surface-variant)] hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--color-gradient-start)] transition-colors">
                  <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <span>{SOCIAL_LINKS.email}</span>
              </a>
              <div className="flex items-center gap-3 text-[var(--color-on-surface-variant)]">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <span>Jaipur, Rajasthan, India (Remote Worldwide)</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schedule a Call</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--color-on-surface-variant)] mb-4">
                Want to skip the emails? Grab a 30-minute slot on my calendar to discuss your QA challenges.
              </p>
              <a
                href={`${SOCIAL_LINKS.calcom}?email=${encodeURIComponent(SOCIAL_LINKS.email)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="w-full">
                  <CalendarClock className="w-4 h-4 mr-2" />
                  Book a Free Call
                </Button>
              </a>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </Button>
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                GitHub
              </Button>
            </a>
            <a href={SOCIAL_LINKS.trailhead} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M17.5 19c2.5 0 4.5-2 4.5-4.5a4.5 4.5 0 0 0-4.08-4.48A7 7 0 0 0 4 11.5 5.5 5.5 0 0 0 5.5 22h11a2.5 2.5 0 0 0 0-5z"/></svg>
                Trailhead
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
