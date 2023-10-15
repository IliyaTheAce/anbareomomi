import NavBar from "@/Components/Shared/NavBar";
import "./globals.css";
import Footer from "@/Components/Shared/Footer";
import React from "react";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://anbareomomi.com"),
  title: "انبار های عمومی | کانتینر | انبار های زنجیره ای آرتا",
  description:
    "انبارهای عمومی | انبارهای زنجیره ای آرتا | خرید و فروش کانتینر ، اجاره سوله و سردخانه و انبار تجاری و وسایل منزل با بیش از ربع قرن تجربه",
  openGraph: {
    type: "website",
    title: "انبار های عمومی | کانتینر | انبار های زنجیره ای آرتا",
    images: "/assets/Images/Hero.jpg",
  },
  creator: "09112079676 - Iliya farhadi",
  colorScheme: "light dark",
  alternates: { languages: { fa: "/" } },
  // formatDetection: {
  //   telephone: true,
  //   email: true,
  //   address: true,
  // },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = await fetch("https://panel.anbareomomi.com/api/navbar", {
    method: "Get",
    headers: {
      Authorization:
        "Bearer cdb40e6443b8a128dbeecc039edb54ccc2ed1795b8fe334af9cfaa6471acf6b86c43950afe9c72cd1ff728131573fea434886c3beb285593d3c1f1b8f0e1a750cd51d9c4a174f8d7fc53179bb05da08032b37c52a01e533b4b85e242ff38e3e7e27c8f23d4c89bf684514935318a530fc6c12284c988794f7557aaaa68b4f4df",
    },
    next: { revalidate: 1800 },
  });
  const data = await result.json();
  const navbarData = data.data.attributes.items;
  return (
    <html lang="fa" dir={"rtl"}>
      <body className={"bg-white text-secondary"}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MK3ELF3N0Y"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MK3ELF3N0Y');`}
        </Script>
        <Script id="goftino" type="text/javascript">
          {
            'if(window && document){!function(){var i="MwWBpv",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();}'
          }
        </Script>
        <Script type="application/ld+json" id="Schema">
          {`"@context: "https://schema.org/",
  "@type": "WebSite",
  "name": "انبا ر های زنجیره ای آرتا",
  "url": "https://anbareomomi.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "{search_term_string}",
    "query-input": "required name=search_term_string"
  }
  `}
        </Script>
        <NavBar navbarLinks={navbarData} />
        <main className="mt-[140px] md:mt-[93px] relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
