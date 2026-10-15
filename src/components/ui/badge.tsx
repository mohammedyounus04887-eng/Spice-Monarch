"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-md",
  {
    variants: {
      variant: {
        default: "",
        gold:
          "border-brand-gold/40 bg-brand-gold/10 text-foreground shadow-[0_10px_30px_hsl(var(--sm-gold)/0.12)]",
        green:
          "border-brand-green/40 bg-brand-green/10 text-foreground shadow-[0_10px_30px_hsl(var(--sm-green)/0.14)]",
        solidGold: "border-transparent bg-brand-gold text-accent-foreground",
        solidGreen: "border-transparent bg-brand-green text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { badgeVariants };
