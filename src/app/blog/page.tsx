"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Clock } from "lucide-react";

const placeholderPosts = [
  {
    slug: "ai-wont-replace-qa",
    title: "Why AI won't replace QA, but QA with AI will",
    date: "June 2026",
    category: "AI & Testing",
    readTime: "5 min read",
    excerpt: "Exploring the shift from manual testing to AI-augmented test generation and how it empowers QA engineers to focus on architecture."
  },
  {
    slug: "salesforce-cpq-deployments",
    title: "Optimizing Salesforce CPQ Deployments",
    date: "May 2026",
    category: "Salesforce",
    readTime: "8 min read",
    excerpt: "A deep dive into validating dynamic bundling and pricing rules across multiple Salesforce environments using modern CI/CD pipelines."
  },
  {
    slug: "playwright-vs-selenium",
    title: "Playwright vs Selenium for Enterprise Apps",
    date: "April 2026",
    category: "Automation",
    readTime: "6 min read",
    excerpt: "Evaluating test execution speed, flakiness, and developer experience between the two most popular testing frameworks."
  }
];

export default function Blog() {
  return (
    <div className="container mx-auto px-6 max-w-4xl py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Writing</h1>
        <p className="text-lg text-[var(--color-on-surface-variant)]">
          Thoughts on quality engineering, test automation, AI, and building scalable software.
        </p>
      </motion.div>

      <div className="space-y-6">
        {placeholderPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="block group">
              <Card className="relative overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3 text-xs text-[var(--color-on-surface-variant)]">
                      <span className="text-[var(--color-primary)]">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Badge variant="secondary" className="text-[10px] gap-1.5 shrink-0">
                      <Clock className="w-3 h-3" />
                      Coming Soon
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white/80">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--color-on-surface-variant)] leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-[var(--color-on-surface-variant)]/50">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Article in progress
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
