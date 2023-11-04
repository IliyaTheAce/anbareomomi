"use client";
import dynamic from "next/dynamic";
const CountUp = dynamic(() => import("react-countup"), {
	ssr: false,
});
export default function Stat({
	icon,
	title,
	value,
}: {
	icon: string;
	title: string;
	value: number;
}) {
	return (
		<div className="flex flex-row gap-8 p-3">
			<i
				className={`flex justify-center items-center text-[4rem] text-secondary ${icon}`}></i>
			<div className="flex flex-col gap-1 justify-center items-center">
				<span className="text-[0.8rem] text-center font-IranSans text-secondary opacity-70">
					{title}
				</span>
				<CountUp
					start={Math.pow(10, value.toString().length - 1)}
					end={value}
					delay={3}
					duration={3}
					className="font-Yekan text-[3rem] text-center text-primary"
					formattingFn={(num) => Intl.NumberFormat("fa-IR").format(num)}
				/>
			</div>
		</div>
	);
}
