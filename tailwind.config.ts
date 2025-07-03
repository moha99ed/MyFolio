// tailwind.config.ts
import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
    "./static/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'moroccan': {
          blue: '#3b82f6',
          teal: '#06b6d4',
          sage: '#10b981',
          gold: '#f59e0b',
          coral: '#f97316',
        }
      },
      animation: {
        'scale-102': 'scale-102 0.3s ease-in-out',
      },
      keyframes: {
        'scale-102': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;