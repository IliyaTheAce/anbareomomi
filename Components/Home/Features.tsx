import React from "react";
import DisclosureFeatures from "@/Components/Home/DisclosureFeatures";

function Features() {
  return (
    <section className={" mx-auto w-full max-w-[1200px] mt-10 pb-10"}>
      <h3 className={"text-[2.5rem] text-[#495057] w-full text-center"}>
        برخی از ویژگی های آرتا
      </h3>
      <div className={"flex flex-col gap-6 md:grid md:grid-cols-2 mt-3"}>
        <DisclosureFeatures />

        <div className={"grid grid-cols-2 gap-6 items-start h-fit"}>
          <div
            className={
              "text-2xl text-[#495057] flex flex-row gap-2 items-center"
            }
          >
            <i className="fi fi-rr-credit-card flex items-center"></i>
            <span>عضو رسمی اتحادیه</span>
          </div>{" "}
          <div
            className={
              "text-2xl text-[#495057] flex flex-row gap-2 items-center"
            }
          >
            <i className="fi fi-rr-credit-card flex items-center"></i>
            <span>تحت پوشش بیمه ایران</span>
          </div>{" "}
          <div
            className={
              "text-2xl text-[#495057] flex flex-row gap-2 items-center"
            }
          >
            <i className="fi fi-rr-calendar-day flex items-center"></i>
            <span>ربع قرن سابقه</span>
          </div>{" "}
          <div
            className={
              "text-2xl text-[#495057] flex flex-row gap-2 items-center"
            }
          >
            <i className="fi fi-rr-camera-cctv flex items-center"></i>
            <span>دوربین مدار بسته</span>
          </div>{" "}
          <div
            className={
              "text-2xl text-[#495057] flex flex-row gap-2 items-center"
            }
          >
            <i className="fi fi-rr-bank flex items-center"></i>
            <span>تحت ضمانت بانک پارسیان</span>
          </div>{" "}
          <div
            className={
              "text-2xl text-[#495057] flex flex-row gap-2 items-center"
            }
          >
            <i className="fi fi-rr-shield-check flex items-center"></i>
            <span>ضد زلزله , آتش سوزی و سرقت</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
