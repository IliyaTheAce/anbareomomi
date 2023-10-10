import Hero from "@/Components/Home/Hero";
import TopSellers from "@/Components/Home/TopSellers";
import TopCategories from "@/Components/Home/TopCategories";
import Offers from "@/Components/Home/Offers";
import MoreInfo from "@/Components/Home/MoreInfo";
import PlantOfTheMonth from "@/Components/Home/PlantOfTheMonth";
import Footer from "@/Components/Shared/Footer";
import NewReleases from "@/Components/Home/NewReleases";
import { IntroSlider } from "@/Components/Home/IntroSlider";
import { Security } from "@/Components/Home/Security";
import AnbarTypes from "@/Components/Home/AnbarTypes";
import Features from "@/Components/Home/Features";
import AboutUs from "@/Components/Home/َAboutUs";
import CTA from "@/Components/Home/cta";

export default async function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />
      {/* <CTA items={[]} /> */}
      <TopCategories />
      <AboutUs />
      <IntroSlider />
      <Security />

      <AnbarTypes />
      <Features />
    </main>
  );
}
