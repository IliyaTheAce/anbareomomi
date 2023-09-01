import Hero from "@/Components/Home/Hero";
import Image from "next/image";
import { getDictionary } from "./Dictionary";
import TopSellers from "@/Components/Home/TopSellers";
import TopCategories from "@/Components/Home/TopCategories";
import Offers from "@/Components/Home/Offers";

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <main className="">
      <Hero data={dict} />
      <TopSellers data={dict} />
      <TopCategories data={dict} />
      <Offers data={dict} />
    </main>
  );
}
