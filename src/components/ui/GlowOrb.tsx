"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  color?: string;
  size?: number;
  blur?: number;
  className?: string;
  animate?: boolean;
}

export function GlowOrb({
  color = "bg-[var(--color-gradient-start)]",
  size = 300,
  blur = 100,
  className,
  animate = true,
}: GlowOrbProps) {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full opacity-30 -z-10 pointer-events-none",
        color,
        className
      )}
      style={{
        width: size,
        height: size,
        filter: `blur(${blur}px)`,
      }}
      animate={
        animate
          ? {
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }
          : undefined
      }
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
