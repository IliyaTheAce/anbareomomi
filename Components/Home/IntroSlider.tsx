import { Sliders } from "@/Components/Home/Slider";
import Image from "next/image";

export const IntroSlider = () => {
  return (
    <section
      className={
        "w-full max-w-[1200px] md:grid md:grid-cols-2 flex flex-col-reverse gap-6 justify-between mx-auto px-5 mt-10"
      }
    >
      <div className={"flex gap-10 flex-col"}>
        <h2 className={"text-4xl text-[#495057]"}>
          بی نظیر ترین مجموعه انبار عمومی در ایران
        </h2>
        <p className={"text-xl text-[#adb5bd] text-justify "}>
          هزینه نازل، کیفیت خدمات دهی بالا و امنیت عالی کالاهای انبار شده از
          مهمترین شاخص ها در نزد مشتریان برای انتخاب ما میباشد.حال پس از تجربه
          ای طولانی و موفقیت آمیز در بحث انبارداری آمادگی خود را در جهت ارایه
          خدمات بیشتر و بهتر بدین شرح تقدیم حضور می نماییم.
        </p>
        <h3 className={"text-xl text-[#adb5bd] text-center"}>
          تماس فوری با کارشناسان ما : 91031682-021
        </h3>
      </div>
      <Sliders
        items={[
          <Image
            key={"slide-1"}
            src={"/assets/Images/slider/slider-1.jpeg"}
            alt={"slider-1"}
            width={0}
            height={0}
            sizes={"100vw"}
            className={"w-full h-auto"}
          />,
          <Image
            key={"slide-2"}
            src={"/assets/Images/slider/slider-2.jpg"}
            alt={"slider-1"}
            width={0}
            height={0}
            sizes={"100vw"}
            className={"w-full h-auto"}
          />,
          <Image
            key={"slide-3"}
            src={"/assets/Images/slider/slider-3.jpeg"}
            alt={"slider-1"}
            width={0}
            height={0}
            sizes={"100vw"}
            className={"w-full h-auto"}
          />,
        ]}
      />
    </section>
  );
};
