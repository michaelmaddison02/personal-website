import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'crit': ['var(--font-crit)'],
        'squidboy': ['var(--font-squidboy)'],
        'stamp-one': ['var(--font-stamp-one)'],
        'stamp-two': ['var(--font-stamp-two)'],
        'stamp-three': ['var(--font-stamp-three)'],
        'stamp-smudge': ['var(--font-stamp-smudge)'],
      },
    },
  },
  plugins: [],
};

export default config; 