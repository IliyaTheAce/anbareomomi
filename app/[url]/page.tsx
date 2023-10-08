import React from "react";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { url: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  // fetch data
  const response = await fetch(
    `https://panel.anbareomomi.com/api/articles?filters[url][$eq]=${params.url}&populate=*`,
    {
      method: "Get",
      headers: {
        Authorization:
          "Bearer cdb40e6443b8a128dbeecc039edb54ccc2ed1795b8fe334af9cfaa6471acf6b86c43950afe9c72cd1ff728131573fea434886c3beb285593d3c1f1b8f0e1a750cd51d9c4a174f8d7fc53179bb05da08032b37c52a01e533b4b85e242ff38e3e7e27c8f23d4c89bf684514935318a530fc6c12284c988794f7557aaaa68b4f4df",
      },
    }
  );
  const result = await response.json();
  const data = result.data[0].attributes;
  return {
    title: data.seo.metaTitle,
    description: data.seo.metaDescription,
  };
}

export default async function Page({ params }: { params: { url: string } }) {
  const response = await fetch(
    `https://panel.anbareomomi.com/api/articles?filters[url][$eq]=${params.url}&populate=*`,
    {
      method: "Get",
      headers: {
        Authorization:
          "Bearer cdb40e6443b8a128dbeecc039edb54ccc2ed1795b8fe334af9cfaa6471acf6b86c43950afe9c72cd1ff728131573fea434886c3beb285593d3c1f1b8f0e1a750cd51d9c4a174f8d7fc53179bb05da08032b37c52a01e533b4b85e242ff38e3e7e27c8f23d4c89bf684514935318a530fc6c12284c988794f7557aaaa68b4f4df",
      },
    }
  );
  const result = await response.json();
  const data = result.data[0].attributes;

  return (
    <>
      {/* <head>
        <title>{data.seo.metaTitle}</title>
        <meta name={"description"} content={data.seo.metaDescription} />{" "}
      </head> */}
      <main className=" w-full max-w-[1200px] flex flex-col gap-6 items-center justify-center mx-auto">
        <div
          className={
            "relative w-full h-auto flex items-center justify-center bg-gray-700 rounded-2xl"
          }
        >
          <Image
            src={
              "https://panel.anbareomomi.com" + data.cover.data.attributes.url
            }
            alt={data.Title}
            width={1200}
            height={0}
            className={"w-full h-auto opacity-40 rounded-2xl"}
            priority
          />
          <div className={"absolute flex flex-col gap-6 items-center"}>
            <h1 className={"text-center text-4xl text-white font-semibold"}>
              {data.Title}
            </h1>
            {/* <p className={"text-center font-semibold text-xl text-gray-800"}>
            {"خانه" +
              ">کانتینر" +
              ">خرید و فروش انواع کانتینر دست دوم و نو در کرج و تهران"}
          </p> */}
          </div>
        </div>
        <article
          className={"font-Yekan px-14"}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </main>
    </>
  );
}
