import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      maxWidth: {
        app: '700px'
      },
      colors: {
        "primary": "#f97316",
      }
    },
  },
  plugins: [],
};
export default config;
