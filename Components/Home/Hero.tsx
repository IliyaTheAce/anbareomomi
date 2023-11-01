import slider_1 from "@/public/assets/Images/Hero/hero-1.jpg";
import slider_2 from "@/public/assets/Images/Hero/hero-2.jpg";
import BigButton from "../Shared/BigButton";
import Slider from "../Shared/Slider";
export default function Hero() {
	return (
		<section className="w-full overflow-y-visible flex justify-start items-start flex-col relative lg:h-[75%] ">
			<Slider slides={[slider_1, slider_2]} loop />

			<div
				className={
					"flex justify-center items-center gap-7 flex-col py-5 md:absolute pt-10 top-0 h-full right-[7%] text-secondary md:text-textColor px-10 md:w-[470px] xl:w-[550px] w-full"
				}>
				<h1 className={`text-3xl md:text-[2.4rem] font-bold font-IranSans`}>
					انبار های زنجیره ای آرتا
				</h1>

				<p
					className={`text-lg  font-semibold px-2 font-IranSans text-justify `}>
					آرتا بانک کالای شماست. با ما امنیت را تجربه کنید. <br />
					۲۵هزار متر مربع سوله <br /> ۱۵۰۰ دستگاه کانتینر <br /> ۱۵۰ هزار متر
					انبار روباز ۲۰۰۰ متر سردخانه <br /> ۱۰ دستگاه کامیونت و لیفتراک <br />{" "}
					۵۰ نفر پرسنل مجرب آموزش دیده <br /> ۳۰نفرنگهبان موسسه حفاظتی نیروی
					انتظامی
				</p>
				<div className="lg:px-16 px-10 w-full mt-5">
					<BigButton color="bg-primary text-secondary" />
				</div>
			</div>
			<div
				className={
					"top-[25%] md:top-auto md:bottom-[10%] left-[7%] absolute z-1 flex flex-col gap-1 font-bold md:text-2xl text-3xl  lg:text-4xl"
				}></div>
		</section>
	);
}
