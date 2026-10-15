"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

const points = [
  { id: "in", x: 58, y: 46, label: "India" },
  { id: "eu", x: 45, y: 30, label: "Europe" },
  { id: "me", x: 54, y: 36, label: "Middle East" },
  { id: "us", x: 20, y: 34, label: "North America" },
  { id: "af", x: 48, y: 52, label: "Africa" },
  { id: "se", x: 70, y: 52, label: "SE Asia" },
];

export function WorldMapMini() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-brand-green/10 via-background to-brand-gold/10 shadow-soft-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,hsl(var(--sm-gold)/0.20),transparent_52%),radial-gradient(circle_at_70%_60%,hsl(var(--sm-green)/0.18),transparent_58%)]" />
      <svg
        viewBox="0 0 100 70"
        className="relative h-44 w-full md:h-52"
        role="img"
        aria-label="Spice Monarch global export map"
      >
        <defs>
          <linearGradient id="sm-map-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--sm-green) / 0.55)" />
            <stop offset="55%" stopColor="hsl(var(--sm-gold) / 0.55)" />
            <stop offset="100%" stopColor="hsl(var(--sm-green) / 0.55)" />
          </linearGradient>
        </defs>

        <path
          d="M7 25c7-8 13-10 22-9 6 1 10 3 16 2 6-1 10-7 17-8 10-1 18 6 23 9 4 3 8 5 9 10 1 4-2 9-7 12-7 4-14 4-21 4-8 0-12-2-19-1-8 1-14 4-22 3-7-1-17-4-20-11-2-4-1-8 2-11z"
          fill="transparent"
          stroke="url(#sm-map-stroke)"
          strokeWidth="0.8"
          opacity="0.75"
        />

        <path
          d="M16 42c6-3 10-3 16-2 5 1 7 3 12 3 7 0 10-4 16-5 8-1 17 4 23 8"
          fill="transparent"
          stroke="hsl(var(--sm-gold) / 0.30)"
          strokeWidth="0.6"
        />

        <path
          d="M58 46C51 41 48 36 45 30"
          fill="transparent"
          stroke="hsl(var(--sm-gold) / 0.45)"
          strokeWidth="0.6"
        />
        <path
          d="M58 46C54 42 53 38 54 36"
          fill="transparent"
          stroke="hsl(var(--sm-gold) / 0.45)"
          strokeWidth="0.6"
        />
        <path
          d="M58 46C45 44 34 41 20 34"
          fill="transparent"
          stroke="hsl(var(--sm-gold) / 0.38)"
          strokeWidth="0.6"
        />

        {points.map((p, idx) => (
          <g key={p.id} transform={`translate(${p.x} ${p.y})`}>
            <motion.circle
              r="1.7"
              fill="hsl(var(--sm-gold) / 0.9)"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 + idx * 0.08 }}
            />
            <motion.circle
              r="1.7"
              fill="transparent"
              stroke="hsl(var(--sm-gold) / 0.65)"
              strokeWidth="0.6"
              animate={reducedMotion ? { opacity: 0.5 } : { r: [1.7, 4.8, 1.7], opacity: [0.7, 0.15, 0.7] }}
              transition={{ duration: 2.8, delay: idx * 0.12, repeat: Infinity }}
            />
          </g>
        ))}
      </svg>

      <div className="relative -mt-2 px-4 pb-4 text-xs text-muted-foreground">
        Export planning from India · Confirm destination availability with the team
      </div>
    </div>
  );
}

