import InfoCard from "@/Components/ContactUs/InfoCard";
import React from "react";
const InformationData = [
  {
    title: "آدرس دفتر مرکزی",
    description: "تهران ، بزرگراه فتح",
    icon: "fi fi-rr-marker",
  },
  {
    title: "تارنما",
    description: "info@anbareomomi.com",
    icon: "fi fi-rr-envelope",
  },
  {
    title: "شماره تماس شرکت",
    description: "09056723180 - 02637773335",
    icon: "fi fi-rr-phone-flip",
  },
];
function AboutUs() {
  return (
    <section className="flex flex-col gap-10 px-10 pt-16">
      <div className={"flex flex-col gap-4 justify-center items-center"}>
        <h1 className="text-primary text-4xl ">ارتباط با ما</h1>
        <p className="text-secondary text-justify lg:text-xl">
          جهت سفارش خدمات و یا مشاوره با کارشناسان با انتخاب یکی از راه های
          زیر با ما تماس حاصل کنید
        </p>
      </div>
      <div className="flex flex-wrap lg:flex-row gap-10 justify-center">
        {InformationData.map((info, index) => (
          <InfoCard
            icon={info.icon}
            key={"info-" + index}
            title={info.title}
            description={info.description}
          />
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
