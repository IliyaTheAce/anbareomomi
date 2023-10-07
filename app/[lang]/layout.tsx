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
        <title>آرتا بازرگان</title>
        <meta
          name={"description"}
          content={
            "انبارهای عمومی | انبارهای زنجیره ای آرتا | خرید و فروش کانتینر ، اجاره سوله و سردخانه و انبار تجاری و وسایل منزل با بیش از ربع قرن تجربه"
          }
        />
      </head>
      <style>{`
        html {
          font-family: ${dict.configuration.bodyFont};
        }
      `}</style>
      <html lang={lang} dir={dict.configuration.dir}>
        <body>
          <NavBar data={dict} />
          <main className="mt-[150px] md:mt-[113px] relative">{children}</main>
           {/* @ts-ignore */}
          <Footer data={dict} />
        </body>
      </html>
    </>
  );
}
