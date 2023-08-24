import Image from "next/image";
import { Yeseva_One } from "next/font/google";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero({
  data,
}: {
  data: { hero: { title: string; buttonText: string; content: string } };
}) {
  return (
    <section className="w-full overflow-x-hidden flex justify-center flex-col">
      <Image
        src={"/assets/Images/hero-bg.avif"}
        alt="plant background"
        width={0}
        height={0}
        sizes="100vw"
        className="h-[248px] md:h-auto w-[120%] max-w-none"
        // style={{width:'120%'}}
      />
      <div
        className={`flex justify-center items-center gap-7 flex-col py-5
         bg-[#dec048] bg-opacity-[85%] md:absolute top-0 h-full
         right-[7%] font-Yeseva text-white  px-10  lg:w-1/3 md:w-1/2 
           `}
      >
        <div className="text-4xl font-semibold font-Yeseva">
          {data.hero.title}
        </div>
        <div className="text-md font-light">{data.hero.content}</div>
        <button className="w-full rounded-full bg-[#443A2C] flex justify-center items-center py-3">
          {data.hero.buttonText}
        </button>
      </div>
      <div
        className={
          "top-[15%] md:top-auto md:bottom-[10%] left-[7%] absolute z-1 flex flex-col gap-1 font-bold md:text-2xl text-sm  lg:text-4xl"
        }
      >
        <h2 className="bg-white bg-opacity-90 p-2 md:p-6 w-fit">
          Touching the{" "}
        </h2>
        <h2 className="bg-white bg-opacity-90 p-2 md:p-6 w-fit">
          Heart of all
        </h2>
        <h2 className="bg-black bg-opacity-90 p-2 md:p-6 w-fit text-white">
          Plants lover{" "}
        </h2>
      </div>
    </section>
  );
}
