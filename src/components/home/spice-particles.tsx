"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type Particle = {
  id: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
};

export function SpiceParticles({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();
  const particles = React.useMemo<Particle[]>(() => {
    const items: Particle[] = [];
    const count = 22;
    const seededBase = 0.37;
    for (let i = 0; i < count; i += 1) {
      const progress = (i + 1) / count;
      items.push({
        id: `p-${i}`,
        x: 8 + progress * 84,
        y: 10 + ((i % 5) / 4) * 72,
        size: 4 + (i % 6) * 1.5,
        opacity: 0.12 + (i % 4) * 0.04,
        delay: (i % 6) * 0.16 + seededBase,
        duration: 5 + (i % 5) * 1.2,
      });
    }
    return items;
  }, []);

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0, y: 0, x: 0, scale: 0.9 }}
          animate={reducedMotion ? { opacity: p.opacity } : {
            opacity: p.opacity,
            y: [0, -18, 0],
            x: [0, 10, 0],
            scale: [0.9, 1, 0.92],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background:
              "radial-gradient(circle at 30% 30%, hsl(var(--sm-gold) / 0.9), hsl(var(--sm-gold) / 0.15))",
            filter: "blur(0.2px)",
          }}
        />
      ))}
    </div>
  );
}

