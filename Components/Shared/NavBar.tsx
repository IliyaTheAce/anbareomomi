"use client";
import { getDictionary } from "@/app/[lang]/Dictionary";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar({ data }: { data: object }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed top-0 w-full bg-white z-10">
      <div className=" border-b-[1.5px] border-gray-400 px-4 py-4  flex items-center justify-center">
        <div className="w-full flex items-center justify-between 2xl:max-w-none xl:max-w-7xl lg:max-w-5xl md:max-w-3xl">
          <div className="inline-flex gap-3 items-center justify-center">
            <button
              className="md:hidden text-2xl"
              onClick={() => setToggle(!toggle)}
            >
              <i className="fi fi-rr-menu-burger flex items-center"></i>
            </button>
            <Image
              src={"/assets/Images/logo.svg"}
              alt="Logo"
              width={145}
              height={35}
              className="w-[50px]"
            />
          </div>
          <p className="font-Yekan font-lg font-bold">
          بسم الله الرحمن الرحیم
          </p>
          <div className="flex items-start justify-center gap-8 md:text-2xl text-xl text-gray-600">
            <button>
              <i className="fi fi-rr-search flex items-center"></i>
            </button>
            <button>
              <i className="fi fi-rr-heart flex items-center"></i>
            </button>
            <button>
              <i className="fi fi-rr-shopping-cart flex items-center"></i>
            </button>
            <button>
              <i className="fi fi-rr-user flex items-center"></i>
            </button>
          </div>
        </div>
      </div>
      <nav
        className={`md:py-4 ${
          toggle ? "flex py-4 " : "h-0 md:h-auto md:flex py-0 "
        } overflow-hidden border-b-[1.5px] transition-all border-gray-400 px-4 items-center justify-center`}
      >
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 2xl:max-w-none xl:max-w-7xl lg:max-w-5xl md:max-w-3xl  text-gray-600">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 ">
            {/* @ts-ignore */}
            <Link href={"#"}>{data.navbar.housePlants}</Link>
            {/* @ts-ignore */}
            <Link href={"#"}>{data.navbar.pots}</Link>
            {/* @ts-ignore */}
            <Link href={"#"}>{data.navbar.care}</Link>
            {/* @ts-ignore */}
            <Link href={"#"}>{data.navbar.accessories}</Link>
            {/* @ts-ignore */}
            <Link href={"#"}>{data.navbar.gifts}</Link>
            {/* @ts-ignore */}
            <Link href={"#"}>{data.navbar.wholesale}</Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 items-start md:items-center">
            {/* @ts-ignore */}
            <Link href={"#"}>{data.navbar.inspiration}</Link>
            {/* @ts-ignore */}
            <Link href={"#"}>{data.navbar.doctor}</Link>
            <Link href={"#"}>En</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
