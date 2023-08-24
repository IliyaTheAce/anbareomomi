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
    <section className="w-full overflow-x-hidden flex justify-center">
      <Image
        src={"/assets/Images/hero-bg.avif"}
        alt="plant background"
        width={0}
        height={0}
        sizes="140vw"
        className="w-[140%]"
      />
      <div
        className={`bg-[#DEC048] bg-opacity-85  absolute top-0 h-full right-[7%] font-Yeseva text-white  px-10 lg:w-1/3 md:1/2 justify-center flex items-center gap-7 flex-col`}
      >
        <div className="text-4xl font-semibold font-Yeseva">
          {data.hero.title}
        </div>
        <div className="text-md font-light">{data.hero.content}</div>
      </div>
    </section>
  );
}
