import React from "react";
import Image from "next/image";
import { Sliders } from "@/Components/Home/Slider";

function AnbarTypes() {
  return (
    <section
      className={"w-full max-w-[1200px] flex flex-col gap-7 mx-auto mt-10"}
    >
      <h2 className={"text-[2.4rem] text-[#495057]"}>
        انواع انبارهای عمومی آرتا
      </h2>
      <p className={"text-[1.3rem] text-[#adb5bd]"}>
        انبار ها با توجه به کاربردهایی که برای مشتریان دارند از انواع مختلفی
        برخوردار هستند که در ادامه به برخی از این انبارها اشاره خواهیم نمود.
      </p>
      <div
        className={
          "flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0"
        }
      >
        <div className={"flex flex-row gap-2"}>
          <Image
            src={"/assets/Images/icons/png3.png"}
            alt={"icon"}
            width={80}
            height={80}
          />
          <div className={"flex flex-col gap-3"}>
            <h3 className={"text-[#495057] text-[1.7rem]"}>انبار کانتینری</h3>
            <span className={"text-[#495057] text-[1rem]"}>
              اجاره انبار های کانتینری برای کالا
            </span>
          </div>
        </div>
        <div className={"flex flex-row gap-2"}>
          <Image
            src={"/assets/Images/icons/png1.png"}
            alt={"icon"}
            width={80}
            height={80}
          />
          <div className={"flex flex-col gap-3"}>
            <h3 className={"text-[#495057] text-[1.7rem]"}>
              انبار های سردخانه ای
            </h3>
            <span className={"text-[#495057] text-[1rem]"}>
              اجاره انبارهای روباز و سردخانه ای
            </span>
          </div>
        </div>
        <div className={"flex flex-row gap-2"}>
          <Image
            src={"/assets/Images/icons/png2.png"}
            alt={"icon"}
            width={80}
            height={80}
          />
          <div className={"flex flex-col gap-3"}>
            <h3 className={"text-[#495057] text-[1.7rem]"}>
              انبار سوله ای مسقف
            </h3>
            <span className={"text-[#495057] text-[1rem]"}>
              اجاره انواع انبار سوله ای
            </span>
          </div>
        </div>
      </div>
      <Sliders
        items={[
          <Image
            key={"slide-1"}
            src={"/assets/Images/slider/slider-1.jpg"}
            alt={"slider-1"}
            width={0}
            height={0}
            sizes={"100vw"}
            className={"w-auto h-auto max-h-[499px] overflow-hidden mx-auto"}
          />,
          <Image
            key={"slide-2"}
            src={"/assets/Images/slider/slider-2.jpg"}
            alt={"slider-1"}
            width={0}
            height={0}
            sizes={"100vw"}
            className={"w-auto h-auto max-h-[499px] overflow-hidden mx-auto"}
          />,
          <Image
            key={"slide-3"}
            src={"/assets/Images/slider/slider-3.jpg"}
            alt={"slider-1"}
            width={0}
            height={0}
            sizes={"100vw"}
            className={"w-auto h-auto max-h-[499px] overflow-hidden mx-auto"}
          />,
        ]}
      />
    </section>
  );
}

export default AnbarTypes;
