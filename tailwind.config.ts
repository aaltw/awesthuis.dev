import type { Config } from 'tailwindcss';

export default {
  content: [
    './apps/*/src/**/*.{html,ts,tsx,js,jsx}',
    './libs/*/src/**/*.{html,ts,tsx,js,jsx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/typography'],
} satisfies Config;
