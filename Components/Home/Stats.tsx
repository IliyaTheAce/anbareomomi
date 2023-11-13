import Stat from "./Stat";

const data = [
	{
		title: "تعداد شعب",
		icon: "fi fi-ss-code-branch",
		value: 6,
	},
	{
		title: "مشتری فعال",
		icon: "fi fi-ss-user",
		value: 1124,
	},
	{
		title: "کانتینر های ما",
		icon: "fi fi-rs-truck-container",
		value: 1500,
	},
	{
		title: "متراژ سوله",
		icon: "fi fi-ss-garage-open",
		value: 20000,
	},
];

export default function Stats() {
	return (
		<section className="mt-5 bg-secondary">
			<div className="mx-auto max-w-[1200px] w-full flex py-5 px-5 flex-col  md:flex-wrap md:flex-row justify-evenly items-center gap-2">
				{data.map((item, index) => (
					<Stat key={"stat-" + index} {...item} />
				))}
			</div>
		</section>
	);
}
