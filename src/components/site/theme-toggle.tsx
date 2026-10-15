"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const active = (theme === "system" ? resolvedTheme : theme) ?? "light";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(active === "dark" ? "light" : "dark")}
    >
      <Sun className="hidden size-4 dark:block" /><Moon className="size-4 dark:hidden" />
    </Button>
  );
}
