import BigButton from "../Shared/BigButton";
import Slider from "../Shared/Slider";

export default function Hero() {
  return (
    <section className="w-full overflow-y-visible flex justify-start items-start flex-col relative lg:h-[75%] ">
      <Slider
        slides={["/assets/Images/Hero.jpg", "/assets/Images/Hero2.jpg"]}
        loop
      />
      {/* <div className="overflow-hidden w-full h-[70%] lg:min-h-auto min-h-[500px] relative">
        <Image
          src={"/assets/Images/Hero.jpg"}
          alt="plant background"
          layout="fill"
          objectFit={"cover"}
          priority
        />
      </div> */}
      <div
        className={
          "flex justify-center items-center gap-7 flex-col py-5 md:absolute top-0 h-full right-[7%] text-secondary md:text-textColor px-10 md:w-[470px] xl:w-[550px] w-full"
        }
      >
        <div className={`text-3xl md:text-4xl font-semibold font-IranSans`}>
          انبار های زنجیره ای آرتا
        </div>
        {/* <div className={`text-md font-light px-2 font-IranSans text-justify `}>
          ۲۵هزار متر مربع سوله , ۱۵۰۰ دستگاه کانتینر , ۱۵۰ هزار متر انبار روباز
          , ۲۰۰۰ متر سردخانه , ۱۰ دستگاه کامیونت و لیفتراک , ۵۰ نفر پرسنل مجرب
          آموزش دیده , ۳۰نفر نگهبان موسسه حفاظتی نیروی انتظامی
        </div> */}
        <div className={`text-md font-light px-2 font-IranSans text-justify `}>
          آرتا بانک کالای شماست. با ما امنیت را تجربه کنید. ۲۵هزار متر مربع سوله
          , ۱۵۰۰ دستگاه کانتینر , ۱۵۰ هزار متر انبار روباز , ۲۰۰۰ متر سردخانه ,
          ۱۰ دستگاه کامیونت و لیفتراک , ۵۰ نفر پرسنل مجرب آموزش دیده , ۳۰نفر
          نگهبان موسسه حفاظتی نیروی انتظامی
        </div>
        <BigButton color="bg-primary text-secondary" />
      </div>
      <div
        className={
          "top-[25%] md:top-auto md:bottom-[10%] left-[7%] absolute z-1 flex flex-col gap-1 font-bold md:text-2xl text-3xl  lg:text-4xl"
        }
      ></div>
    </section>
  );
}
