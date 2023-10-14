import "../Styles/ShineAnimation.css";

export default function AboutUs() {
  return (
    <section
      className={
        "w-full max-w-[1200px] md:grid md:grid-cols-2 flex flex-col gap-6 justify-between mx-auto px-5 mt-10"
      }
    >
      <div className={"flex gap-10 flex-col"}>
        <h2
          className={
            "text-2xl md:text-3xl lg:text-4xl text-secondary text-right  border-b-2 border-b-primary pb-5 w-[70%]"
          }
        >
          درباره آرتا
        </h2>
        <p className={"text-xl text-dimText text-justify px-4"}>
          شرکت آرتا بازرگان با ربع قرن تجربه، به عنوان شرکت مادر اقدام به تاسیس
          انبارهای زنجیره ای آرتا با 6 شعبه فعال نمود. این شرکت در حال حاضر در
          شهرهای تهران، کرج و قزوین با بیش از 1200 مشتری آماده خدمت رسانی
          میباشد.
        </p>
      </div>
      <div className="items-center justify-center text-secondary bg-primary animate-pulse text-xl p-10 rounded-xl text-center grid grid-cols-1 lg:grid-cols-2">
        <div className={"text-lg  flex flex-row gap-2 text-right items-center"}>
          <i className="fi fi-rr-calendar-day flex items-center"></i>
          <span> عضو رسمی اتحادیه انبارداران</span>
        </div>
        <div className={"text-lg  flex flex-row gap-2 text-right items-center"}>
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
        <div className={"text-lg  flex flex-row gap-2 items-center text-right"}>
          <i className="fi fi-rr-bank flex items-center"></i>
          <span> ضمانت نامه بانکی (برای کالا خاص)</span>
        </div>
        <div className={"text-lg  flex flex-row gap-2 text-right items-center"}>
          <i className="fi fi-rr-shield-check flex items-center"></i>
          <span> ضد زلزله، ضد آتش سوزی و ضد آب</span>
        </div>
      </div>
    </section>
  );
}
