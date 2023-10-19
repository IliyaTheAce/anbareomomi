import Hero from "@/Components/Home/Hero";
import TopCategories from "@/Components/Home/TopCategories";
import { IntroSlider } from "@/Components/Home/IntroSlider";
import { Security } from "@/Components/Home/Security";
import AnbarTypes from "@/Components/Home/AnbarTypes";
import Features from "@/Components/Home/Features";
import AboutUs from "@/Components/Home/َAboutUs";

export default function Home() {
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
