import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        ui: ["var(--font-ui)", "var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-ui)", "serif"],
      },
      borderRadius: {
        xl: "var(--radius)",
        lg: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 8px)",
        sm: "calc(var(--radius) - 12px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        brand: {
          green: "hsl(var(--sm-green))",
          gold: "hsl(var(--sm-gold))",
          cream: "hsl(var(--sm-cream))",
          charcoal: "hsl(var(--sm-charcoal))",
          white: "hsl(var(--sm-white))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "shine-x": {
          "0%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(120%)" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 220ms cubic-bezier(.2,.8,.2,1)",
        "accordion-up": "accordion-up 220ms cubic-bezier(.2,.8,.2,1)",
        "shine-x": "shine-x 2.2s linear infinite",
        "float-soft": "float-soft 6s ease-in-out infinite",
      },
      boxShadow: {
        "soft-xl":
          "0 30px 80px hsl(var(--sm-charcoal) / 0.10), 0 10px 30px hsl(var(--sm-charcoal) / 0.14)",
      },
      backgroundImage: {
        "radial-spotlight":
          "radial-gradient(1200px circle at 20% 10%, hsl(var(--sm-gold) / 0.18), transparent 42%), radial-gradient(900px circle at 80% 20%, hsl(var(--sm-green) / 0.16), transparent 46%)",
      },
    },
  },
  plugins: [animate],
};

export default config;
