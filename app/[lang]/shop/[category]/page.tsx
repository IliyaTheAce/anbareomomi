import { getDictionary, localeType } from "@/app/[lang]/Dictionary";
import Image from "next/image";
import Link from "next/link";
import SmallPlantCard from "@/Components/Shared/SmallPlantCard";

export default async function Shop({
  params,
}: {
  params: { lang: localeType; category: string };
}) {
  const { lang } = params;
  // @ts-ignore
  const data: {
    seeds: {
      font: string;
      title: string;
      content: string;
    };
  } = await getDictionary(lang);
  return (
    <main className="">
      <section className="w-full overflow-x-hidden flex justify-start items-start flex-col relative ">
        <div className="overflow-hidden w-full h-[93%] lg:min-h-auto min-h-[500px] relative">
          <Image
            src={"/assets/Images/seeds-banner.jpg"}
            alt="seeds background"
            layout="fill"
            objectFit={"cover"}
            priority
          />
        </div>
        <div
          className={
            "flex justify-center items-center gap-7 flex-col py-5 bg-[#c96b1e] bg-opacity-[85%] md:absolute top-0 h-full right-[7%] text-white px-10 md:w-[470px] xl:w-[550px]"
          }
        >
          <div
            className={`text-4xl text-gray-600 font-semibold ${data.seeds.font}`}
          >
            {data.seeds.title}
          </div>
          <div
            className={`text-md font-light px-2 ${data.seeds.font} text-justify`}
          >
            {data.seeds.content}
          </div>
        </div>
      </section>
      <nav
        className={
          "flex flex-row gap-5 justify-evenly overflow-x-scroll px-8 py-4 bg-gray-300 text-sm font-light no-scrollbar whitespace-nowrap"
        }
      >
        <Link
          href={"#"}
          className={
            "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
          }
        >
          All Plants
        </Link>{" "}
        <Link
          href={"#"}
          className={
            "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
          }
        >
          Baby Plants
        </Link>{" "}
        <Link
          href={"#"}
          className={
            "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
          }
        >
          New Releases
        </Link>{" "}
        <Link
          href={"#"}
          className={
            "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
          }
        >
          Rare Plants
        </Link>{" "}
        <Link
          href={"#"}
          className={
            "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
          }
        >
          Pots
        </Link>{" "}
        <Link
          href={"#"}
          className={
            "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
          }
        >
          Accessories
        </Link>
        <Link
          href={"#"}
          className={
            "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
          }
        >
          Care Products
        </Link>
        <Link
          href={"#"}
          className={
            "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
          }
        >
          Gift
        </Link>
      </nav>
      <div className={"w-full flex flex-row gap-6 overflow-x-hidden"}>
        <div>Filters</div>
        <div className={"flex-grow flex flex-col"}>
          <div
            className={"flex flex-row justify-between items-center py-4 px-10"}
          >
            <div>Sort by: Ascending Name</div>
            <div>Showing 1-20 of 21 results</div>
          </div>
          <section
            className={"grid grid-cols-2 lg:grid-cols-4 gap-5 justify-between"}
          >
            <SmallPlantCard
              name="Adansonii Mint"
              price={29.95}
              unit="$"
              type="Monstera"
              image="/assets/Images/pl.avif"
              inStock={5}
              freeWidth={true}
            />{" "}
            <SmallPlantCard
              name="Adansonii Mint"
              price={29.95}
              unit="$"
              type="Monstera"
              image="/assets/Images/pl.avif"
              inStock={5}
              freeWidth={true}
            />{" "}
            <SmallPlantCard
              name="Adansonii Mint"
              price={29.95}
              unit="$"
              type="Monstera"
              image="/assets/Images/pl.avif"
              inStock={5}
              freeWidth={true}
            />{" "}
            <SmallPlantCard
              name="Adansonii Mint"
              price={29.95}
              unit="$"
              type="Monstera"
              image="/assets/Images/pl.avif"
              inStock={5}
              freeWidth={true}
            />{" "}
            <SmallPlantCard
              name="Adansonii Mint"
              price={29.95}
              unit="$"
              type="Monstera"
              image="/assets/Images/pl.avif"
              inStock={5}
              freeWidth={true}
            />{" "}
            <SmallPlantCard
              name="Adansonii Mint"
              price={29.95}
              unit="$"
              type="Monstera"
              image="/assets/Images/pl.avif"
              inStock={5}
              freeWidth={true}
            />{" "}
            <SmallPlantCard
              name="Adansonii Mint"
              price={29.95}
              unit="$"
              type="Monstera"
              image="/assets/Images/pl.avif"
              inStock={5}
              freeWidth={true}
            />{" "}
            <SmallPlantCard
              name="Adansonii Mint"
              price={29.95}
              unit="$"
              type="Monstera"
              image="/assets/Images/pl.avif"
              inStock={5}
              freeWidth={true}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
