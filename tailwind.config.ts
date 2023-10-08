import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f58222",
        secondary: "#343a40",
        textColor: "#fff",
        dimText: "#adb5bd",
      },
      fontFamily: {
        IranSans: ["IranSans"],
        Poppins: ["Poppins"],
        Yekan: ["Yekan"],
        Yeseva: ["Yeseva"],
      },
    },
  },
  plugins: [],
};
export default config;
