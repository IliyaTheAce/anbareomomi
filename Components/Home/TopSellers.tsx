import Image from "next/image";
import SmallPlantCard from "../Shared/SmallPlantCard";

export default async function TopSellers({
  data,
}: {
  data: { topseller: { header: string; buttonText: string; font: string } };
}) {
  return (
    <section className="flex flex-col justify-center items-center py-10 w-full relative mt-10 gap-10">
      <div
        className={`w-full text-center font-bold text-3xl lg:text-6xl ${data.topseller.font}`}
      >
        {data.topseller.header}
      </div>
      <div className="flex flex-col gap-4 max-w-[100vw] overflow-x-hidden">
        <div className="flex overflow-x-auto no-scrollbar gap-4 px-3 md:max-w-[70vw] pb-3">
          <SmallPlantCard
            name="Adansonii Mint"
            price={29.95}
            unit="$"
            type="Monstera"
            image="/assets/Images/pl.avif"
          />
          <SmallPlantCard
            name="Adansonii Mint"
            price={29.95}
            unit="$"
            type="Monstera"
            image="/assets/Images/pl.avif"
          />
          <SmallPlantCard
            name="Adansonii Mint"
            price={29.95}
            unit="$"
            type="Monstera"
            image="/assets/Images/pl.avif"
          />
          <SmallPlantCard
            name="Adansonii Mint"
            price={29.95}
            unit="$"
            type="Monstera"
            image="/assets/Images/pl.avif"
          />
          <SmallPlantCard
            name="Adansonii Mint"
            price={29.95}
            unit="$"
            type="Monstera"
            image="/assets/Images/pl.avif"
          />
        </div>
      </div>
      <button className="border-[1.5px] border-black w-fit px-3 py-2 rounded-full hover:text-white hover:bg-black transition-colors duration-500">
        {data.topseller.buttonText}
      </button>
    </section>
  );
}
