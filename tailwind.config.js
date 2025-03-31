/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
          'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
          'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
          'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
          'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        },
        fontFamily: {
          sans: ["var(--font-geist-sans)"],
          mono: ["var(--font-geist-mono)"],
          gilroy: ["var(--font-gilroy)"],
          inter: ["var(--font-inter)"],
        },
        fontSize: {
          "md": "16px",
        },
        transform: ['hover', 'group-hover'],
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          orange: "hsl(var(--orange))",
          description: "hsl(var(--description))",
          foreground: "hsl(var(--foreground))",
          background2: {
            DEFAULT: "hsl(var(--background2))",
            foreground: "hsl(var(--background2-foreground))",
            description: "hsl(var(--background2-description))",
          },
          background3: "hsl(var(--background3))",

          primary: {
            DEFAULT: "hsl(var(--primary))",
            faded: "hsl(var(--primary-faded))",
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
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          sidebar: {
            DEFAULT: "oklch(var(--sidebar))",
            foreground: "oklch(var(--sidebar-foreground))",
            primary: "oklch(var(--sidebar-primary))",
            "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
            accent: "oklch(var(--sidebar-accent))",
            "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
            border: "oklch(var(--sidebar-border))",
            ring: "oklch(var(--sidebar-ring))",
          },
        },
        keyframes: {
          "infinite-scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(calc(-50% - 20px))" },
          },
          "scroll": {
            to: {
              transform: "translate(calc(-50% - 0.5rem))",
            },
          },
        },
        animation: {
          "infinite-scroll": "infinite-scroll var(--animation-duration, 80s) linear infinite",
          "scroll": "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate"), addVariablesForColors],
  }
  
  
  function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
   
    addBase({
      ":root": newVars,
    });
  }