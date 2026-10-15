"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView={reducedMotion ? {} : { y: [y, 0] }}
      viewport={{ once, amount: 0.1 }}
      transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeOut", delay }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
