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
    hero: {
      title: string;
      buttonText: string;
      content: string;
      font: string;
      threeHeader: string[];
    };
  };
}) {
  return (
    <section className="w-full overflow-y-visible flex justify-start items-start flex-col relative lg:h-[75%] mb-20">
      <div className="overflow-hidden w-full h-[70%] lg:min-h-auto min-h-[500px] relative">
        <Image
          src={"/assets/Images/slide1.jpeg"}
          alt="plant background"
          layout="fill"
          objectFit={"cover"}
          priority
        />
      </div>
      <div
        className={
          "flex justify-center items-center gap-7 flex-col py-5 bg-[#c96b1e] bg-opacity-[85%] md:absolute top-0 h-[110%] right-[7%] text-white px-10 md:w-[470px] xl:w-[550px] w-full"
        }
      >
        <div className={`text-4xl  font-semibold ${data.hero.font}`}>
          {data.hero.title}
        </div>
        <div
          className={`text-md font-light px-2 ${data.hero.font} text-justify`}
          dangerouslySetInnerHTML={{ __html: data.hero.content }}
        />
        {/*<button className="w-full rounded-full bg-[#443A2C] flex justify-center items-center py-3">*/}
        {/*  {data.hero.buttonText}*/}
        {/*</button>*/}
      </div>
      <div
        className={
          "top-[25%] md:top-auto md:bottom-[10%] left-[7%] absolute z-1 flex flex-col gap-1 font-bold md:text-2xl text-3xl  lg:text-4xl"
        }
      >
        {/*{data.hero.threeHeader.map((item, index) => (*/}
        {/*  <h2*/}
        {/*    key={index}*/}
        {/*    className={` bg-opacity-90 p-3 md:p-6 w-fit ${data.hero.font} ${*/}
        {/*      index === data.hero.threeHeader.length - 1*/}
        {/*        ? "text-white bg-black"*/}
        {/*        : "bg-white"*/}
        {/*    }`}*/}
        {/*  >*/}
        {/*    {item}*/}
        {/*  </h2>*/}
        {/*))}*/}
      </div>
    </section>
  );
}
