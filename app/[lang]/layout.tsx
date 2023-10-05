import NavBar from "@/Components/Shared/NavBar";
import "../globals.css";
import { getDictionary } from "./Dictionary";
import Footer from "@/Components/Shared/Footer";
import React from "react";
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "en" | "fa" | "ar" };
}) {
  const { lang } = params;
  const dict: any = await getDictionary(lang);

  return (
    <>
      <head>
        <title>{dict.metaData.title}</title>
        <meta name={"description"} content={dict.metaData.description} />
      </head>
      <style>{`
        html {
          font-family: ${dict.configuration.bodyFont};
        }
      `}</style>
      <html lang={lang} dir={dict.configuration.dir}>
        <body>
          <NavBar data={dict} />
          <main className="mt-[58px] md:mt-[113px] relative">{children}</main>
          <Footer data={dict} />
        </body>
      </html>
    </>
  );
}
