import React from "react";
import Image from "next/image";
import { Sliders } from "@/Components/Home/Slider";
import TypesSlider from "./TypesSlider";

function AnbarTypes() {
  return (
    <section
      className={
        "w-full flex flex-col gap-7 mx-auto mt-10 justify-center items-center"
      }
    >
      <h2
        className={
          "text-2xl md:text-3xl lg:text-4xl text-secondary border-b-2 border-b-primary pb-5"
        }
      >
        انواع انبارهای عمومی آرتا
      </h2>
      <div className="relative w-full h-[500px] overflow-hidden bg-black text-textColor flex items-center">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto opacity-50 object-cover absolute"
          fill
          alt="انواع انبار های آرتا"
          src="/assets/Images/Hero2.jpg"
        />
        <TypesSlider />
        <div className=" lg:grid-cols-3  justify-evenly items-center absolute w-full h-full top-0 right-0 gap-10 px-10 hidden lg:grid">
          <div className="flex flex-col gap-6 justify-center items-center opacity-[80%]">
            <h3 className="text-3xl">انبار سوله ای مسقف</h3>
            <p className="text-justify">
              گاهی برای نگهداری تجهیزات و وسایل مهم و گران قیمت کارخانه ای نیاز
              به یک محیط بسته عایق و ایمن میباشد به همین منظور انبار های مسقف
              برای نگهداری این تجهیزات مناسب بوده و توسط صاحبان مشاغل برای مدت
              زمان مشخصی اجاره می شود.
            </p>
          </div>
          <div className="flex flex-col gap-6 justify-center items-center opacity-[80%]">
            <h2 className="text-3xl"> کانتینر کولردار و سردخانه</h2>
            <p className="text-justify">
              امروزه به دلیل گسترش کارها نیاز به اجاره انبار در تمامی صتف ها و
              مشاغل افزایش پیدا کرده است. برخی از محصولات مانند مواد غذایی و
              دارویی و… جهت انبار شدن به دما حساس میباشند، بنابراین حتما باید
              برای نگهداری این نوع از کالاها از انبارهای سردخانه ای استفاده کرد.
            </p>
          </div>
          <div className="flex flex-col gap-6 justify-center items-center opacity-[80%]">
            <h2 className="text-3xl"> انبار کانتینری</h2>
            <p className="text-justify">
              کانتیرها در مدل های 20 و 40 فوتی با پوشش فلزی و ارتفاع 2.5 متر از
              کف و با طول های متفاوت مناسب نگهداری انواع کالا و اثاثیه میباشد.
              از این ها برای حمل بار در مسافت های طولانی استفاده میشود. نوع
              خارجی آن تمامی استاندارد های حمل نقل دریایی و هوایی را دارد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnbarTypes;
