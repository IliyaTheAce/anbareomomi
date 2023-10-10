import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f58222",
        secondary: "#343a40",
        textColor: "#fff",
        dimText: "#65686e",
      },
      fontFamily: {
        IranSans: ["IranSans"],
        Poppins: ["Poppins"],
        Yekan: ["Yekan"],
        Yeseva: ["Yeseva"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
