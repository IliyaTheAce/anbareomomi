import Image from "next/image";

export default function MoreInfo({
  data,
}: {
  data: {
    LearnMore: {
      font: string;
      sentences: string[];
    };
  };
}) {
  return (
    <section
      className={
        "overflow-hidden w-full h-[93%] lg:min-h-auto min-h-[250px] md:min-h-[500px] relative"
      }
    >
      <Image
        src={"/assets/Images/LearnMore.jpg"}
        alt={"Learn More"}
        layout="fill"
        objectFit={"cover"}
      />
      <div
        className={
          "bottom-[10%] left-[7%] absolute z-1 flex flex-col gap-1 font-bold md:text-xl text-md  lg:text-4xl"
        }
      >
        <h2
          className={`bg-white bg-opacity-90 p-3 md:p-4 w-fit ${data.LearnMore.font}`}
        >
          {data.LearnMore.sentences[0]}
        </h2>
        <h2
          className={`bg-white bg-opacity-90 p-3 md:p-4 w-fit ${data.LearnMore.font}`}
        >
          {data.LearnMore.sentences[1]}
        </h2>
        <h2
          className={`bg-black bg-opacity-90 p-3 md:p-4 w-fit text-white ${data.LearnMore.font}`}
        >
          {data.LearnMore.sentences[2]}
        </h2>
      </div>
    </section>
  );
}
