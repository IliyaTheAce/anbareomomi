import Image from "next/image";
import { Yeseva_One } from "next/font/google";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero({
  data,
}: {
  data: {
    hero: { title: string; buttonText: string; content: string; font: string };
  };
}) {
  return (
    <section className="w-full overflow-x-hidden flex justify-start items-start flex-col relative lg:h-screen">
      <div className="overflow-hidden w-full h-[93%] lg:min-h-auto min-h-[500px] relative">
        <Image
          src={"/assets/Images/hero-bg.avif"}
          alt="plant background"
          layout="fill"
          objectFit={"cover"}
          priority
        />
      </div>
      <div
        className={`flex justify-center items-center gap-7 flex-col py-5
         bg-[#dec048] bg-opacity-[85%] md:absolute top-0 h-full
         right-[7%]  text-white  px-10  md:w-[470px] xl:w-[550px]
           `}
      >
        <div className={`text-5xl  font-semibold ${data.hero.font}`}>
          {data.hero.title}
        </div>
        <div
          className={`text-md font-light px-2 ${data.hero.font} text-justify`}
        >
          {data.hero.content}
        </div>
        <button className="w-full rounded-full bg-[#443A2C] flex justify-center items-center py-3">
          {data.hero.buttonText}
        </button>
      </div>
      <div
        className={
          "top-[25%] md:top-auto md:bottom-[10%] left-[7%] absolute z-1 flex flex-col gap-1 font-bold md:text-2xl text-3xl  lg:text-4xl"
        }
      >
        <h2
          className={`bg-white bg-opacity-90 p-3 md:p-6 w-fit ${data.hero.font}`}
        >
          Touching the{" "}
        </h2>
        <h2
          className={`bg-white bg-opacity-90 p-3 md:p-6 w-fit ${data.hero.font}`}
        >
          Heart of all
        </h2>
        <h2
          className={`bg-black bg-opacity-90 p-3 md:p-6 w-fit text-white ${data.hero.font}`}
        >
          Plants lover{" "}
        </h2>
      </div>
    </section>
  );
}
