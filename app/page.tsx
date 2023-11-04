import AboutUs from "@/Components/Home/AboutUs";
import AnbarTypes from "@/Components/Home/AnbarTypes";
import Features from "@/Components/Home/Features";
import Hero from "@/Components/Home/Hero";
import { IntroSlider } from "@/Components/Home/IntroSlider";
import Reviews from "@/Components/Home/Reviews";
import { Security } from "@/Components/Home/Security";
import Stats from "@/Components/Home/Stats";
import TopCategories from "@/Components/Home/TopCategories";

export default async function Home() {
	const reviewResponce = await fetch(
		new URL("reviews", process.env.NEXT_PUBLIC_API_BASE_URL),
		{ next: { revalidate: 10 } }
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
			{/* <CTA items={[]} /> */}

			<Stats />
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
