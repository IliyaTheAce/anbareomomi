import Image from "next/image";

export default function MoreInfo({
  data,
}: {
  data: {
    configuration: {
      dir: string;
    };
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
        className={`bottom-[10%] ${
          data.configuration.dir === "rtl" ? "right-[7%]" : "left-[7%]"
        } absolute z-1 flex flex-col gap-1 font-bold md:text-xl text-md  lg:text-4xl`}
      >
        {data.LearnMore.sentences.map((sentence, index) => (
          <h2
            key={index + "MoreInfo"}
            className={` bg-opacity-90 p-3 md:p-6 w-fit ${
              data.LearnMore.font
            } ${
              index === data.LearnMore.sentences.length - 1
                ? "text-white bg-black"
                : "bg-white"
            }`}
          >
            {sentence}
          </h2>
        ))}
      </div>
    </section>
  );
}
