import Image from "next/image";
import Link from "next/link";
import Stats from "../Home/Stats";

function Footer() {
	return (
		<>
			<div className="flex flex-wrap gap-4 w-full  mx-auto items-center justify-center  pt-10">
				<div
					key="map-1"
					className={
						"flex flex-col gap-2 items-center p-4 shadow-xl rounded-xl "
					}>
					<Link
						href={
							"https://maps.google.com/maps?ll=35.675028,51.232624&z=16&t=m&hl=en&gl=US&mapclient=embed"
						}>
						<Image
							src={"/assets/Images/slider/map-1.png"}
							alt={"tehran central office location"}
							width={150}
							height={0}
							className={"h-auto"}
						/>
					</Link>
					<span>شعبه گمرک غرب</span>
				</div>
				<div
					key="map-2"
					className={
						"flex flex-col gap-2 items-center p-4 shadow-xl rounded-xl "
					}>
					<Link
						href={
							"https://maps.google.com/maps?ll=35.697111,51.196917&z=16&t=m&hl=en&gl=US&mapclient=embed"
						}>
						<Image
							src={"/assets/Images/slider/map-2.png"}
							alt={"tehran central office location"}
							width={150}
							height={0}
							className={"h-auto"}
						/>
					</Link>
					<span>شعبه ایران خودرو</span>
				</div>
				<div
					key="map-3"
					className={
						"flex flex-col gap-2 items-center p-4 shadow-xl rounded-xl "
					}>
					<Link
						href={
							"https://maps.google.com/maps?ll=35.699212,50.317933&z=16&t=m&hl=en&gl=US&mapclient=embed"
						}>
						<Image
							src={"/assets/Images/slider/map-3.png"}
							alt={"tehran central office location"}
							width={150}
							height={0}
							className={"h-auto"}
						/>
					</Link>
					<span>شعبه مرکز کرج</span>
				</div>

				<div
					key="map-4"
					className={
						"flex flex-col gap-2 items-center p-4 shadow-xl rounded-xl "
					}>
					<Link
						href={
							"https://maps.google.com/maps?ll=35.688386,51.185848&z=16&t=m&hl=en&gl=US&mapclient=embed"
						}>
						<Image
							src={"/assets/Images/slider/map-4.png"}
							alt={"tehran central office location"}
							width={150}
							height={0}
							className={"h-auto"}
						/>
					</Link>
					<span>شعبه سه راه شهریار</span>
				</div>

				<div
					key="map-5"
					className={
						"flex flex-col gap-2 items-center p-4 shadow-xl rounded-xl "
					}>
					<Link href={"https://maps.google.com/?q=35.748962,50.254086"}>
						<Image
							src={"/assets/Images/slider/map-5.png"}
							alt={"Qazvin office location"}
							width={150}
							height={0}
							className={"h-auto"}
						/>
					</Link>
					<span>شعبه قزوین</span>
				</div>
				<div
					key="map-6"
					className={
						"flex flex-col gap-2 items-center p-4 shadow-xl rounded-xl "
					}>
					<Link
						href={
							"https://www.google.com/maps/place/35%C2%B041'57.7%22N+50%C2%B019'01.7%22E/@35.6993638,50.3145625,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.6993638!4d50.3171374?hl=en&entry=ttu"
						}>
						<Image
							src={"/assets/Images/slider/map-6.png"}
							alt={"Qazvin office location"}
							width={150}
							height={0}
							className={"h-auto"}
						/>
					</Link>
					<span>شعبه دوم اشتهارد</span>
				</div>
			</div>
			<Stats />

			<section
				className={
					"bg-secondary w-full py-5 px-5 md:px-10 text-white flex flex-col"
				}>
				<div
					className={
						"flex lg:flex-row flex-col-reverse justify-center max-w-[1200px] w-full mx-auto "
					}>
					<div
						className={
							"flex flex-col gap-5 justify-center items-center flex-grow"
						}>
						<Image
							src={"/assets/Images/arta-white.png"}
							alt={"logo"}
							width={263}
							height={80}
						/>
						<div className={"text-sm text-center font-IranSans"}>
							جهت اطلاع از هزینه ها و خدمات آرتا با
							<Link href={"tel:+989056723180"} target="_blank">
								09056723180
							</Link>
							تماس حاصل نمایید
						</div>
					</div>
					<div className="items-center justify-start text-white text-xl p-10 rounded-xl text-right grid grid-cols-1 lg:grid-cols-2">
						<div
							className={
								"text-lg  flex flex-row gap-2 text-right items-center"
							}>
							<i className="fi fi-rr-calendar-day flex items-center"></i>
							<span> عضو رسمی اتحادیه انبارداران</span>
						</div>
						<div
							className={
								"text-lg  flex flex-row gap-2 text-right items-center"
							}>
							<i className="fi fi-rr-time-quarter-to flex items-center"></i>
							<span> نگهبانی 24 ساعته تحت نظارت نیرو انتظامی</span>
						</div>
						<div className={"text-lg  flex flex-row gap-2 items-center"}>
							<i className="fi fi-rr-camera-security flex  items-center"></i>
							<span> دوربین مداربسته هوشمند</span>
						</div>
						<div className={"text-lg  flex flex-row gap-2 items-center"}>
							<i className="fi fi-rr-camera-cctv flex items-center"></i>
							<span> دوربین اختصاصی</span>
						</div>
						<div className={"text-lg  flex flex-row gap-2 items-center"}>
							<i className="fi fi-rr-file-medical-alt flex items-center"></i>
							<span> ارائه گزارش انبارداری</span>
						</div>
						<div className={"text-lg  flex flex-row gap-2 "}>
							<i className="fi fi-rr-box-open flex items-center"></i>
							<span> نصب گاو صندوق اختصاصی</span>
						</div>
						<div
							className={
								"text-lg  flex flex-row gap-2 items-center text-right"
							}>
							<i className="fi fi-rr-bank flex items-center"></i>
							<span> ضمانت نامه بانکی (برای کالا خاص)</span>
						</div>
						<div
							className={
								"text-lg  flex flex-row gap-2 text-right items-center"
							}>
							<i className="fi fi-rr-shield-check flex items-center"></i>
							<span> ضد زلزله، ضد آتش سوزی و ضد آب</span>
						</div>
					</div>
					{/* <Sliders items={mapItems} /> */}
				</div>
			</section>
		</>
	);
}

export default Footer;
