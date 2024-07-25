import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content',
      },

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
