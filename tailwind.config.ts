import type { Config } from 'tailwindcss';

export default {
  content: [
    './apps/*/src/**/*.{html,ts,tsx,js,jsx}',
    './libs/*/src/**/*.{html,ts,tsx,js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/typography'],
} satisfies Config;
