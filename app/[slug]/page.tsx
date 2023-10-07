import React from "react";
import Image from "next/image";

function Page() {
  return (
    <main className="bg-gray-100 w-full max-w-[1200px] flex flex-col gap-6 items-center justify-center mx-auto">
      <div
        className={
          "relative w-full h-auto flex items-center justify-center bg-gray-700 rounded-2xl"
        }
      >
        <Image
          src={"/assets/Images/slider/2.jpg"}
          alt={"خرید و فروش انواع کانتینر دست دوم و نو در کرج و تهران"}
          width={1200}
          height={0}
          className={"w-full h-auto opacity-40 rounded-2xl"}
          priority
        />
        <div className={"absolute flex flex-col gap-6 items-center"}>
          <h1 className={"text-center text-4xl text-white font-semibold"}>
            خرید و فروش انواع کانتینر دست دوم و نو در کرج و تهران
          </h1>
          <p className={"text-center font-semibold text-xl text-gray-800"}>
            {"خانه" +
              ">کانتینر" +
              ">خرید و فروش انواع کانتینر دست دوم و نو در کرج و تهران"}
          </p>
        </div>
      </div>
      <article className={""}></article>
    </main>
  );
}

export default Page;
