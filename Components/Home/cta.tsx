"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

export default function Page({ items }: { items: string[] }) {
	const [dropdown, setDropdown] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		mode: "free",
		loop: true,
		breakpoints: {
			"(min-width: 400px)": {
				slides: { perView: 4, spacing: 5 },
			},
			"(min-width: 1000px)": {
				slides: { perView: 7, spacing: 10 },
			},
		},
		slides: { perView: 3 },
	});
	return (
		<div className="relative">
			<button
				className="polygon-shape pl-8 pr-3 py-2 bg-gray-500 text-white absolute top-0 right-10 z-[2]"
				onClick={() => {
					setDropdown((prev) => !prev);
				}}>
				مشتری های ما
			</button>

			<div
				className={`${
					dropdown ? "h-[200px] pt-5  border-y-[1px]" : "h-0"
				} transition-all overflow-hidden duration-700  bg-gray-200 border-gray-300`}>
				<div ref={sliderRef} className="keen-slider items-center my-auto">
					{items.map((item) => {
						return (
							<div className="keen-slider__slide" key={item}>
								<Image
									src={item}
									alt={"slider"}
									width={100}
									height={0}
									sizes="100vw"
									className="w-[100px] h-auto my-auto"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
