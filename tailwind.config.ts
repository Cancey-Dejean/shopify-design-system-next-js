import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    fontFamily: {
      sans: "var(--p-font-family-sans)",
      mono: "var(--p-font-family-mono)",
    },

    fontSize: {
      275: "var(--p-font-size-275)",
      300: "var(--p-font-size-300)",
      325: "var(--p-font-size-325)",
      350: "var(--p-font-size-350)",
      400: "var(--p-font-size-400)",
      450: "var(--p-font-size-450)",
      500: "var(--p-font-size-500)",
      550: "var(--p-font-size-550)",
      600: "var(--p-font-size-600)",
      750: "var(--p-font-size-750)",
      800: "var(--p-font-size-800)",
      900: "var(--p-font-size-900)",
      1000: "var(--p-font-size-1000)",
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
    },
    space: {
      0: "var(--p-space-0)",
      25: "var(--p-space-025)",
      50: "var(--p-space-050)",
      100: "var(--p-space-100)",
      150: "var(--p-space-150)",
      200: "var(--p-space-200)",
      300: "var(--p-space-300)",
      400: "var(--p-space-400)",
      500: "var(--p-space-500)",
      600: "var(--p-space-600)",
      800: "var(--p-space-800)",
      1000: "var(--p-space-1000)",
      1200: "var(--p-space-1200)",
      1600: "var(--p-space-1600)",
      2000: "var(--p-space-2000)",
      2400: "var(--p-space-2400)",
      2800: "var(--p-space-2800)",
      3200: "var(--p-space-3200)",
    },
    borderRadius: {
      0: "var(--p-border-radius-0)",
      50: "var(--p-border-radius-050)",
      100: "var(--p-border-radius-100)",
      150: "var(--p-border-radius-150)",
      200: "var(--p-border-radius-200)",
      300: "var(--p-border-radius-300)",
      400: "var(--p-border-radius-400)",
      500: "var(--p-border-radius-500)",
      750: "var(--p-border-radius-750)",
      full: "9999px",
    },
    boxShadow: {
      0: "none",
      100: "var(--p-shadow-100)",
      200: "var(--p-shadow-200)",
      300: "var(--p-shadow-300)",
      400: "var(--p-shadow-400)",
      500: "var(--p-shadow-500)",
      600: "var(--p-shadow-600)",
    },
    screens: {
      xs: "0rem",
      sm: "30.625rem",
      md: "48rem",
      lg: "65rem",
      xl: "90rem",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
