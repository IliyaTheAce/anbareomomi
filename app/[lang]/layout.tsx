import NavBar from "@/Components/Shared/NavBar";
import "../globals.css";
import type { Metadata } from "next";
import { getDictionary } from "./Dictionary";
export const metadata: Metadata = {
  title: "BaoLand",
  description: "Paradise of plants",
};
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <style>{`
        html {
          font-family: ${dict.configuration.bodyFont};
        }
      `}</style>
      <html lang={lang} dir={dict.configuration.dir}>
        <body>
          <NavBar data={dict} />
          <main className="mt-[58px] md:mt-[126px] relative">{children}</main>
        </body>
      </html>
    </>
  );
}
