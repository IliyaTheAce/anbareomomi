import Image from "next/image";

export default async function TopCategories({
  data,
}: {
  data: {
    configuration: { dir: string };
    popularCategories: {
      header: string;
      font: string;
      categories: [{ title: string; image: string; id: string }];
    };
  };
}) {
  return (
    <section className="flex flex-col justify-center items-center py-10 w-full relative mt-10 gap-10 px-5 ">
      <div
        className={`w-full text-center font-bold text-3xl lg:text-4xl ${data.popularCategories.font}`}
      >
        {data.popularCategories.header}
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 md:gap-4 max-w-[1270px] overflow-hidden">
        {data.popularCategories.categories.map((item) => {
          return (
            <div className="relative">
              <h3
                className={`absolute bottom-2 z-[2] ${
                  data.configuration.dir === "ltr" ? "left-2" : "right-2"
                } bg-white px-3 py-2 font-semibold ${
                  data.popularCategories.font
                }`}
              >
                {item.title}
              </h3>
              <Image
                alt={item.title}
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-auto hover:scale-110 transition-all duration-400 z-[1]"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
