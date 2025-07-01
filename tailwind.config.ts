import { type Config } from "tailwindcss";

export default {
  selfURL: import.meta.url, // ✅ required by Fresh
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;