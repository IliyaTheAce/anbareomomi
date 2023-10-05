import Image from "next/image";

export const Security = () => {
  return (
    <section
      className={
        "w-full max-w-[1200px] md:grid md:grid-cols-2 flex flex-col gap-6 justify-between mx-auto px-5 mt-10"
      }
    >
      <Image
        src={"/assets/Images/security.jpg"}
        alt={"arta co security"}
        width={0}
        height={0}
        sizes={"100vw"}
        className={"w-full h-auto"}
      />
      <div className={"flex flex-col gap-10 "}>
        <h2 className={"text-[2.5rem] text-[#495057]"}>
          تیم حفاظتی و امنیتی مستقر در انبارهای آرتا
        </h2>
        <p className={"text-[1.3rem] text-[#adb5bd] text-justify"}>
          تیم حفاظتی و امنیتی مستقر در انبارهای زنجیره ای آرتا زیر نظر نیروی
          انتظامی جمهوری اسلامی ایران به صورت 24 ساعته محافظ اموال و امنیت کالای
          شما در انبارهای آرتا می باشد.
        </p>
      </div>
    </section>
  );
};
