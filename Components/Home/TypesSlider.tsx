"use client";
import { useKeenSlider } from "keen-slider/react";
import "../Styles/slider.css";

export default function TypesSlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: {
        spacing: 20,
      },
      drag: true,
      loop: true,

      rtl: true,
    },
    []
  );
  return (
    // <div className=" lg:hidden">
    <div ref={sliderRef} className="keen-slider lg:hidden">
      <div className="flex lg:hidden flex-col gap-6 justify-center items-center opacity-[80%] keen-slider__slide px-10">
        <h2 className="text-3xl">انبار سوله ای مسقف</h2>
        <p className="text-justify">
          گاهی برای نگهداری تجهیزات و وسایل مهم و گران قیمت کارخانه ای نیاز به
          یک محیط بسته عایق و ایمن میباشد به همین منظور انبار های مسقف برای
          نگهداری این تجهیزات مناسب بوده و توسط صاحبان مشاغل برای مدت زمان مشخصی
          اجاره می شود.
        </p>
      </div>
      <div className="flex lg:hidden flex-col gap-6 justify-center items-center opacity-[80%] keen-slider__slide px-10">
        <h2 className="text-3xl"> کانتینر کولردار و سردخانه</h2>
        <p className="text-justify">
          امروزه به دلیل گسترش کارها نیاز به اجاره انبار در تمامی صتف ها و مشاغل
          افزایش پیدا کرده است. برخی از محصولات مانند مواد غذایی و دارویی و… جهت
          انبار شدن به دما حساس میباشند، بنابراین حتما باید برای نگهداری این نوع
          از کالاها از انبارهای سردخانه ای استفاده کرد.
        </p>
      </div>
      <div className="flex lg:hidden flex-col gap-6 justify-center items-center opacity-[80%] keen-slider__slide px-10">
        <h2 className="text-3xl"> انبار کانتینری</h2>
        <p className="text-justify">
          کانتیرها در مدل های 20 و 40 فوتی با پوشش فلزی و ارتفاع 2.5 متر از کف و
          با طول های متفاوت مناسب نگهداری انواع کالا و اثاثیه میباشد. از این ها
          برای حمل بار در مسافت های طولانی استفاده میشود. نوع خارجی آن تمامی
          استاندارد های حمل نقل دریایی و هوایی را دارد.
        </p>
      </div>
    </div>
    // </div>
  );
}
