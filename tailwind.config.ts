import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        // MonoGlass Gallery custom colors
        cream: {
          50: 'hsl(45 30% 98%)',
          100: 'hsl(45 25% 95%)',
          200: 'hsl(45 20% 90%)',
          300: 'hsl(45 18% 85%)',
          400: 'hsl(45 15% 75%)',
          500: 'hsl(45 12% 65%)',
          600: 'hsl(45 10% 55%)',
        },
        'warm-gray': {
          50: 'hsl(30 10% 96%)',
          100: 'hsl(30 8% 92%)',
          200: 'hsl(30 7% 88%)',
          300: 'hsl(30 6% 82%)',
          400: 'hsl(30 5% 70%)',
          500: 'hsl(30 4% 55%)',
          600: 'hsl(30 3% 45%)',
        },
        glass: {
          100: 'hsla(45 20% 98% 0.6)',
          200: 'hsla(45 18% 95% 0.7)',
          300: 'hsla(45 15% 90% 0.8)',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'glass': '12px',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-manrope)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      fontSize: {
        'display-xs': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'display-sm': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'display-md': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0em' }],
        'display-lg': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-2xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-3xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
        'glass-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.08)',
        'glass-active': '0 4px 16px 0 rgba(0, 0, 0, 0.06)',
        'subtle': '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px 0 rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    }
  },
  plugins: [tailwindcssAnimate],
};
export default config;
