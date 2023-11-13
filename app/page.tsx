import AboutUs from "@/Components/Home/AboutUs";
import AnbarTypes from "@/Components/Home/AnbarTypes";
import Features from "@/Components/Home/Features";
import Hero from "@/Components/Home/Hero";
import { IntroSlider } from "@/Components/Home/IntroSlider";
import Reviews from "@/Components/Home/Reviews";
import { Security } from "@/Components/Home/Security";
import TopCategories from "@/Components/Home/TopCategories";
import CTA from "@/Components/Home/cta";
import { brands } from "@/Constants/brands";
export default async function Home() {
	const reviewResponce = await fetch(
		new URL("reviews", process.env.NEXT_PUBLIC_API_BASE_URL),
		{ next: { revalidate: 1800 } }
	);
	const reviewResult: {
		status: "success" | "failed";
		data: {
			id: number;
			composer: string;
			review: string;
		}[];
	} = await reviewResponce.json();
	return (
		<main className="bg-gray-100">
			<Hero />
			<CTA items={brands} />

			<TopCategories />
			<AboutUs />
			<IntroSlider />
			<Security />

			<AnbarTypes />
			<Features />
			<Reviews data={reviewResult.data} />
		</main>
	);
}
