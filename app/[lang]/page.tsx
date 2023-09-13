import Hero from "@/Components/Home/Hero";
import Image from "next/image";
import { getDictionary } from "./Dictionary";
import TopSellers from "@/Components/Home/TopSellers";
import TopCategories from "@/Components/Home/TopCategories";
import Offers from "@/Components/Home/Offers";
import MoreInfo from "@/Components/Home/MoreInfo";
import PlantOfTheMonth from "@/Components/Home/PlantOfTheMonth";
import Footer from "@/Components/Shared/Footer";
import NewReleases from "@/Components/Home/NewReleases";

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <main className="">
      <Hero data={dict} />
      <TopSellers data={dict} />
      <MoreInfo data={dict} />
      <TopCategories data={dict} />
      <NewReleases data={dict} />
      <Offers data={dict} />
      <PlantOfTheMonth data={dict} />
      <Footer data={dict} />
    </main>
  );
}
