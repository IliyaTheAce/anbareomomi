import helishot from "@/public/assets/Images/helishot.png";
import Image from "next/image";
export const IntroSlider = () => {
	return (
		<section
			className={
				"w-full max-w-[1200px] md:grid md:grid-cols-2 flex flex-col-reverse gap-6 justify-between mx-auto px-5 mt-10"
			}>
			{/* <Sliders
        items={[
          "/assets/Images/slider/slider-1.jpg",
          "/assets/Images/slider/slider-2.jpg",
          "/assets/Images/slider/slider-3.jpg",
        ]}
      /> */}
			<Image
				src={helishot}
				alt={"slider"}
				// width={0}
				// height={0}
				// sizes="100vw"
				placeholder={"blur"}
				className="w-full h-auto"
			/>
			<div className={"flex gap-10 flex-col"}>
				<h2
					className={
						"text-2xl md:text-3xl lg:text-4xl text-[#495057] border-b-2 border-b-primary pb-5"
					}>
					بی نظیر ترین مجموعه انبار عمومی در ایران
				</h2>
				<p className={"text-xl text-dimText text-justify px-5"}>
					هزینه نازل، کیفیت خدمات دهی بالا و امنیت عالی کالاهای انبار شده از
					مهمترین شاخص ها در نزد مشتریان برای انتخاب ما میباشد.حال پس از تجربه
					ای طولانی و موفقیت آمیز در بحث انبارداری آمادگی خود را در جهت ارایه
					خدمات بیشتر و بهتر بدین شرح تقدیم حضور می نماییم.
				</p>
				<span className={"text-xl text-dimText text-center px-5"}>
					تماس فوری با کارشناسان ما : 09056723180
				</span>
			</div>
		</section>
	);
};
