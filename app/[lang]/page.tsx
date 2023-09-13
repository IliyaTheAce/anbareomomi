import Hero from "@/Components/Home/Hero";
import { getDictionary, localeType } from "./Dictionary";
import TopSellers from "@/Components/Home/TopSellers";
import TopCategories from "@/Components/Home/TopCategories";
import Offers from "@/Components/Home/Offers";
import MoreInfo from "@/Components/Home/MoreInfo";
import PlantOfTheMonth from "@/Components/Home/PlantOfTheMonth";
import Footer from "@/Components/Shared/Footer";
import NewReleases from "@/Components/Home/NewReleases";

export default async function Home({
  params,
}: {
  params: { lang: localeType };
}) {
  const { lang } = params;
  const dict: any = await getDictionary(lang);
  return (
    <main className="">
      <Hero data={dict} />
      <TopSellers data={dict} />
      <MoreInfo data={dict} />
      <TopCategories data={dict} />
      <NewReleases data={dict} />
      <Offers data={dict} />
      <PlantOfTheMonth data={dict} />
    </main>
  );
}
