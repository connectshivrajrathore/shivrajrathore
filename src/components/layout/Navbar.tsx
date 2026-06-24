"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the drawer whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 h-16">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight text-white flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[var(--color-accent-blue)]"
            >
              <rect width="40" height="40" rx="8" fill="currentColor" />
              <text
                x="20"
                y="28"
                textAnchor="middle"
                fill="white"
                style={{ fontSize: '24px', fontWeight: 700 }}
              >
                SR
              </text>
            </svg>
            <span>Shivraj Singh Rathore</span>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive ? "text-white" : "text-[var(--color-on-surface-variant)] hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent-blue)] rounded-t-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/freelance" className="hidden sm:block">
              <Button size="sm">Hire Me</Button>
            </Link>

            {/* Mobile hamburger toggle */}
            <button
              className="md:hidden p-2 text-white hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-16 left-0 right-0 glass border-b border-white/10 z-50 bg-[#131313]/90"
            >
              <div className="flex flex-col p-4 gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "text-white bg-white/5 border-l-2 border-[var(--color-accent-blue)]"
                          : "text-[var(--color-on-surface-variant)] hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="border-t border-white/10 mt-2 pt-3 px-4">
                  <Link href="/freelance">
                    <Button size="sm" className="w-full">Hire Me</Button>
                  </Link>
                </div>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
