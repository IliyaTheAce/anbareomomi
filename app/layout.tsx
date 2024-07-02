import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/NavBar";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://ejarecantiner.com/"),
  title: "انبار های عمومی | کانتینر | انبار های زنجیره ای آرتا",
  description:
    "انبارهای عمومی | انبارهای زنجیره ای آرتا | خرید و فروش کانتینر ، اجاره سوله و سردخانه و انبار تجاری و وسایل منزل با بیش از ربع قرن تجربه",
  openGraph: {
    type: "website",
    title: "انبار های عمومی | کانتینر | انبار های زنجیره ای آرتا",
    images: "/assets/Images/Hero/hero-2.jpg",
  },
  creator: "09112079676 - Iliya farhadi",
  alternates: { languages: { fa: "/" } },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = await fetch("https://panel.ejarecantiner.com//api/navbar", {
    method: "Get",
    headers: {
      Authorization:
        "Bearer cdb40e6443b8a128dbeecc039edb54ccc2ed1795b8fe334af9cfaa6471acf6b86c43950afe9c72cd1ff728131573fea434886c3beb285593d3c1f1b8f0e1a750cd51d9c4a174f8d7fc53179bb05da08032b37c52a01e533b4b85e242ff38e3e7e27c8f23d4c89bf684514935318a530fc6c12284c988794f7557aaaa68b4f4df",
    },
    cache: "no-cache",
    // next: { revalidate: 1800 },
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
        <Script strategy={"afterInteractive"} id="GTM">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJ79LXVG');>`}
        </Script>
        <NavBar navbarLinks={navbarData} />
        <main className="mt-[140px] md:mt-[124px] lg:mt-[93px] relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
