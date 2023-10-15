"use client";
import { Pagination } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
type ResultType = {
  data: [
    {
      attributes: {
        url: string;
        Title: string;
        cover: {
          data: { attributes: { url: string; alternativeText: string } };
        };
      };
    }
  ];
  meta: {
    pagination: {
      page: number;
      pageCount: number;
    };
  };
};
const Articles = () => {
  const navigate = useRouter();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<ResultType>();
  const [page, setPage] = useState(1);
  const FetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://panel.anbareomomi.com/api/articles?populate=*&filters[isPublicArticle][$eq]=true&pagination[pageSize]=12&pagination[page]=${page}`,
      {
        method: "Get",
        headers: {
          Authorization:
            "Bearer cdb40e6443b8a128dbeecc039edb54ccc2ed1795b8fe334af9cfaa6471acf6b86c43950afe9c72cd1ff728131573fea434886c3beb285593d3c1f1b8f0e1a750cd51d9c4a174f8d7fc53179bb05da08032b37c52a01e533b4b85e242ff38e3e7e27c8f23d4c89bf684514935318a530fc6c12284c988794f7557aaaa68b4f4df",
        },
        cache: "no-store",
      }
    );
    setResult(await response.json());
    setLoading(false);
  };

  useEffect(() => {
    FetchData();
  }, [page]);
  if (loading)
    return (
      <div className="h-screen w-full flex justify-center items-center text-2xl text-primary font-IranSans">
        در حال بارگذاری ...
      </div>
    );
  else
    return (
      <section className="flex flex-col lg:gap-6 gap-3 lg:px-10 px-5 pt-20 w-full max-w-[1200px] mx-auto">
        <h1 className="lg:text-3xl text-2xl text-primary w-full pb-5 border-b-2 border-secondary">
          مقالات آرتا
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {result &&
            result.data.map((item, index: number) => {
              const { attributes } = item;
              return (
                <Link
                  href={"/" + attributes.url}
                  key={"article-" + index}
                  className="w-full flex flex-col gap-5 rounded-xl shadow-xl border-[0.5px] border-secondary pb-5"
                >
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto rounded-t-xl"
                    src={
                      "https://panel.anbareomomi.com" +
                      attributes.cover.data.attributes.url
                    }
                    alt={attributes.cover.data.attributes.alternativeText}
                  />
                  <h1 className="text-secondary hover:text-primary text-xl px-5 font-IranSans transition-colors">
                    {attributes.Title}
                  </h1>
                </Link>
              );
            })}
        </div>
        <div className="flex items-center justify-center text-center">
          {result && (
            <Pagination
              currentPage={result.meta.pagination.page}
              onPageChange={(page) => {
                setPage(page);
              }}
              theme={{
                pages: {
                  base: "xs:mt-0 mt-2 flex flex-row-reverse items-center -space-x-px",
                  selector: {
                    base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white px-3 font-IranSans",
                    active: "text-primary",
                  },
                },
              }}
              nextLabel="بعدی"
              previousLabel="قبلی"
              totalPages={result.meta.pagination.pageCount}
            />
          )}
        </div>
      </section>
    );
};

export default Articles;
