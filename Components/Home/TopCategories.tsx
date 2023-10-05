import Image from "next/image";

export default async function TopCategories({
  data,
}: {
  data: {
    configuration: { dir: string };
    popularCategories: {
      header: string;
      font: string;
      categories: [
        { title: string; content: string; image: string; id: string }
      ];
    };
  };
}) {
  return (
    <section className="flex flex-col justify-center items-center py-10 w-full relative mt-10 gap-10 px-5 ">
      <div
        className={`w-full text-center font-bold text-3xl lg:text-4xl ${data.popularCategories.font}`}
      >
        خدمات تخصصی انبارهای عمومی آرتا
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 md:gap-6 max-w-[1270px] overflow-hidden">
        {data.popularCategories.categories.map((item) => {
          return (
            <div
              key={item.id}
              className="relative rounded-lg overflow-hidden  bg-white shadow-xl"
            >
              <Image
                alt={item.title}
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-auto z-[1] hover:scale-110 transition-all duration-400"
              />
              <div className={"flex flex-col gap-4 mt-6 px-5 pb-5"}>
                <h3 className={"text-[2rem] text-[#495057]"}>{item.title} </h3>
                <p className={"text-[1.3rem] text-[#adb5bd] text-justify"}>
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
