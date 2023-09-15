import Image from "next/image";

export default function PlantOfTheMonth({
  data,
}: {
  data: {
    configuration: {
      dir: string;
    };
    PlantOfTheMonth: { font: string; title: string; name: string };
  };
}) {
  return (
    <section
      className={
        "overflow-hidden w-full h-[93%] lg:min-h-auto min-h-[250px] md:min-h-[500px] relative"
      }
    >
      <Image
        src={"/assets/Images/potm.jpg"}
        alt={"Learn More"}
        layout="fill"
        objectFit={"cover"}
      />
      <div
        className={`bottom-[10%] ${
          data.configuration.dir === "rtl" ? "right-[7%]" : "left-[7%]"
        } absolute z-1 flex flex-col gap-1 font-bold md:text-xl text-md  lg:text-4xl`}
      >
        <h2
          className={`bg-white bg-opacity-90 p-3 md:p-4 w-fit ${data.PlantOfTheMonth.font}`}
        >
          {data.PlantOfTheMonth.title}
        </h2>
        <h2
          className={`bg-white bg-opacity-90 p-3 md:p-4 w-fit ${data.PlantOfTheMonth.font}`}
        >
          {data.PlantOfTheMonth.name}
        </h2>
      </div>
    </section>
  );
}
