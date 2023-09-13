import React from "react";
import SmallPlantCard from "@/Components/Shared/SmallPlantCard";
import BigPlantCard from "@/Components/Shared/BigPlantCard";

function NewReleases({
  data,
}: {
  data: {
    configuration: {
      dir: string;
    };
    NewRelease: {
      title: string;
      font: string;
      buttonText: string;
    };
  };
}) {
  return (
    <section className="flex flex-col justify-center items-center py-10 w-full relative mt-10 gap-10">
      <div
        className={`w-full text-center font-bold text-3xl lg:text-4xl ${data.NewRelease.font}`}
      >
        {data.NewRelease.title}
      </div>
      <div className="flex flex-row gap-4 max-w-[100vw] overflow-x-hidden">
        <BigPlantCard
          font={data.NewRelease.font}
          dir={data.configuration.dir}
          name="Adansonii Mint"
          price={29.95}
          unit="$"
          type="Monstera"
          image="/assets/Images/pl.avif"
        />
        <div className="flex flex-row lg:grid  lg:grid-cols-3 overflow-x-auto overflow-y-hidden no-scrollbar gap-4 px-3 md:max-w-[70vw] pb-3">
          <SmallPlantCard
            name="Adansonii Mint"
            price={29.95}
            unit="$"
            type="Monstera"
            image="/assets/Images/pl.avif"
            inStock={5}
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
        {data.NewRelease.buttonText}
      </button>
    </section>
  );
}

export default NewReleases;
