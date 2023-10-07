import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f58222",
        secondary: "#443A2C",
        textColor: "#fff",
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
