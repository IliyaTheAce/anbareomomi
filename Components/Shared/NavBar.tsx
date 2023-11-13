"use client";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export type Root = Array<{
	title: string;
	link: string;
	type: "simple" | "nested";
	subLinks?: Array<{
		title: string;
		link: string;
		type: "simple" | "nested";
		subLinks: Array<{
			title: string;
			link: string;
		}>;
	}>;
}>;
// [
//   {
//     "title": "خانه",
//     "link": "/",
//     "type": "simple"
//   },
//   {
//     "title": "خدمات",
//     "link": "/services",
//     "type": "nested",
//     "subLinks": [
//       {
//         "title": "تماس ما",
//         "link": "/contact-us",
//         "type": "simple"
//       },
//       {
//         "title": "تماس ما",
//         "link": "/contact-us",
//         "type": "simple"
//       },
//       {
//         "title": "درباره ما",
//         "link": "/about-us",
//         "type": "nested",
//         "subLinks": [
//           {
//             "title": "تماس ما",
//             "link": "/contact-us",
//             "type": "simple"
//           },
//           {
//             "title": "درباره ما",
//             "link": "/about-us",
//             "type": "nested"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "title": "تماس ما",
//     "link": "/contact-us",
//     "type": "simple"
//   },
//   {
//     "title": "درباره ما",
//     "link": "/about-us",
//     "type": "simple"
//   }
// ]
export default function NavBar({ navbarLinks }: { navbarLinks: Root }) {
	const [toggle, setToggle] = useState<boolean>(false);

	return (
		<>
			<div className="fixed top-0 w-full bg-secondary z-10 text-white">
				<nav
					className={
						"w-full max-w-[1400px] justify-between flex flex-col md:flex-row py-4 px-5 mx-auto gap-2"
					}>
					<div
						className={
							"flex flex-row gap-5 items-center justify-between md:justify-start whitespace-nowrap"
						}>
						<button
							className={"md:hidden"}
							onClick={() => setToggle((prev) => !prev)}>
							<i className="fi fi-br-menu-burger text-xl flex items-center"></i>
						</button>

						<Link href={"https://anbareomomi.com"}>
							<Image
								src={"/assets/Images/arta-white.png"}
								alt={"logo"}
								width={200}
								height={0}
								className={"h-auto"}
							/>
						</Link>
						<div
							className={`${
								toggle ? "fixed top-[150px]" : "hidden md:flex"
							} md:top-0 md:relative md:bg-opacity-0 bg-white md:p-0 p-4 rounded-lg shadow-lg md:shadow-none text-secondary md:text-textColor flex flex-col md:flex-row items-center`}>
							{navbarLinks.map((topLink) => {
								return topLink.type === "nested" ? (
									<Dropdown
										theme={{
											arrowIcon: "mr-2 h-4 w-4",
											content: "py-1 focus:outline-none",
											floating: {
												target:
													"w-fit border-0 focus:outline-0 text-black md:text-textColor",
											},
										}}
										label={topLink.title}
										placement="bottom">
										{topLink.subLinks?.map((secondLinks) => {
											return secondLinks.type === "nested" ? (
												<Dropdown
													theme={{
														arrowIcon: "mr-2 h-4 w-4",
														content: "py-1 focus:outline-none",
														floating: {
															target:
																"w-fit border-0 focus:outline-0 text-black",
														},
													}}
													label={secondLinks.title}
													placement="left">
													{secondLinks.subLinks?.map((thirdLink) => {
														return (
															<Dropdown.Item key={thirdLink.link}>
																{thirdLink.title}
															</Dropdown.Item>
														);
													})}
												</Dropdown>
											) : (
												<Dropdown.Item key={secondLinks.link}>
													<Link
														href={secondLinks.link}
														onClick={() => setToggle(false)}>
														{secondLinks.title}
													</Link>
												</Dropdown.Item>
											);
										})}
									</Dropdown>
								) : (
									<Link
										href={topLink.link}
										key={topLink.link}
										onClick={() => setToggle(false)}
										className={"text-sm py-2 px-3"}>
										{topLink.title}
									</Link>
								);
							})}
						</div>
					</div>

					<div className="flex flex-wrap justify-center gap-3 items-center ">
						<Link
							href={"tel:+989056723180"}
							target="_blank"
							className={
								"bg-gray-500 px-3 py-2 rounded-md flex items-center gap-3 hover:text-[#c96b1e] transition-all"
							}>
							<span className={"font-IranSans"}>09056723180</span>
							<i className="fi fi-rr-phone-call flex items-center"></i>{" "}
						</Link>
						<Link
							target="_blank"
							href={"tel:+982637773335"}
							className={
								"bg-gray-500 px-3 py-2 rounded-md flex items-center gap-3 hover:text-[#c96b1e] transition-all"
							}>
							<span className={"font-IranSans"}>026-37773335</span>
							<i className="fi fi-rr-phone-call flex items-center"></i>{" "}
						</Link>
					</div>
				</nav>
			</div>
			<div
				className={
					"fixed top-[140px] md:top-[124px] lg:top-[93px] bg-opacity-[80%] border-white border-b-[0.75px] z-[2] w-full bg-secondary py-3 text-textColor"
				}>
				<div
					className={
						"max-w-[1300px] w-full mx-auto flex flex-row justify-between px-5"
					}>
					<span> مارا در شبکه های اجتماعی دنبال کنید.</span>
					<div className={"flex flex-row gap-2 text-2xl"}>
						<Link
							href={"https://instagram.com/anbareomomi"}
							className={
								"hover:text-primary hover:scale-[120%] transition-all duration-500  animate-pulse"
							}>
							<i className="fi fi-brands-instagram flex items-center"></i>
						</Link>
						<Link
							href={"https://t.me/+989056723180"}
							className={
								" hover:text-primary hover:scale-[120%] transition-all duration-500 delay-[600] animate-pulse"
							}>
							<i className="fi fi-brands-telegram flex items-center"></i>
						</Link>
						<Link
							href={"https://wa.me/+989056723180"}
							className={
								"hover:text-primary hover:scale-[120%] transition-all duration-500 delay-[1200] animate-pulse"
							}>
							<i className="fi fi-brands-whatsapp flex items-center"></i>
						</Link>
						<Link
							href={"https://www.linkedin.com/company/anbar-e-omomi-arta"}
							className={
								"hover:text-primary hover:scale-[120%] transition-all duration-500 delay-[1800] animate-pulse"
							}>
							<i className="fi fi-brands-linkedin flex items-center"></i>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
