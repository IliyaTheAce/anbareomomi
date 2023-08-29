import Image from "next/image";
import SmallPlantCard from "../Shared/SmallPlantCard";

export default async function TopSellers({
  data,
}: {
  data: { topseller: { header: string; buttonText: string } };
}) {
  return (
    <section className="flex flex-col justify-center items-center py-10 w-full relative mt-10 gap-10">
      <div className="w-full text-center font-bold text-3xl lg:text-6xl">
        {data.topseller.header}
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2  gap-3 lg:grid-cols-5 xl:gap-4  place-items-center mx-auto">
<SmallPlantCard name="Adansonii Mint" price={29.95} unit="$" type="Monstera" image="/assets/Images/pl.avif"/>
      </div>
      <button className="border-[1.5px] border-black w-fit px-3 py-2 rounded-full hover:text-white hover:bg-black transition-colors duration-500">
        {data.topseller.buttonText}
      </button>
    </section>
  );
}
