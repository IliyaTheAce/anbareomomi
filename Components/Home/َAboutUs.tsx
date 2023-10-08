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
            "text-4xl text-secondary text-right  border-b-2 border-b-primary pb-5 w-[70%]"
          }
        >
          درباره آرتا
        </h2>
        <p className={"text-xl text-dimText text-justify "}>
          شرکت آرتا بازرگان با ربع قرن تجربه، به عنوان شرکت مادر اقدام به تاسیس
          انبارهای زنجیره ای آرتا با 6 شعبه فعال نمود. این شرکت در حال حاضر در
          شهرهای تهران، کرج و قزوین با بیش از 1200 مشتری آماده خدمت رسانی
          میباشد.
        </p>
      </div>
      <div className=" flex flex-col gap-4 items-center ">
        <h3 className="text-4xl text-secondary">مزیت های آرتا</h3>
        <div className="animate-pulse text-dimText text-xl ">
          <br />
          عضو رسمی اتحادیه انبارداران
          <br />
          نگهبانی 24 ساعته تحت نظارت نیرو انتظامی
          <br />
          دوربین مداربسته هوشمند
          <br />
          دوربین اختصاصی
          <br />
          ارائه گزارش انبارداری
          <br />
          نصب گاو صندوق اختصاصی
          <br />
          ضمانت نامه بانکی (برای کالا خاص)
          <br />
          ضد زلزله، ضد آتش سوزی و ضد آب
        </div>
      </div>
    </section>
  );
}
