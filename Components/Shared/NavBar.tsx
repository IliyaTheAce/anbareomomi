"use client";
import Image from "next/image";
import Link from "next/link";
import { MutableRefObject, useRef, useState } from "react";
import { usePathname } from "next/navigation";
export default function NavBar({
  data,
}: {
  data: {
    lang: string;
    navbar: {
      housePlants: string;
      pots: string;
      care: string;
      doctor: string;
      inspiration: string;
      wholesale: string;
      gifts: string;
      accessories: string;
      otherLang: {
        url: string;
        title: string;
      };
      subHousePlants: [
        { header: string; items: [{ title: string; link: string }] },
      ];
    };
  };
}) {
  const router = usePathname();
  const [toggle, setToggle] = useState(false);
  const houseplantsMenu = useRef() as MutableRefObject<HTMLInputElement>;
  let currentOpenedMenu: MutableRefObject<HTMLDivElement> | null;
  const OpenMenu = (menu: MutableRefObject<HTMLDivElement>) => {
    if (currentOpenedMenu) {
      currentOpenedMenu.current.classList.add("lg:hidden");
      currentOpenedMenu.current.classList.remove("lg:flex");
      if (currentOpenedMenu === menu) {
        currentOpenedMenu = null;
        return;
      }
      currentOpenedMenu = null;
    }
    menu.current.classList.remove("lg:hidden");
    menu.current.classList.add("lg:flex");
    currentOpenedMenu = menu;
  };
  return (
    <div className="fixed top-0 w-full bg-white z-10">
      <div className="border-b-[1.5px] border-gray-400 px-4 py-4  flex items-center justify-center">
        <div className="w-full flex items-center justify-between 2xl:max-w-none xl:max-w-7xl lg:max-w-6xl md:max-w-4xl whitespace-nowrap">
          <div className="inline-flex gap-3 items-center justify-center">
            <button
              className="md:hidden text-2xl"
              onClick={() => setToggle(!toggle)}
            >
              <i className="fi fi-rr-menu-burger flex items-center"></i>
            </button>
            <Image
              src={"/assets/Images/Logo.png"}
              alt="Logo"
              width={145}
              height={35}
              className="w-[50px]"
            />
          </div>
          {/*<p className="font-Yekan font-lg font-bold">*/}
          {/*بسم الله الرحمن الرحیم*/}
          {/*</p>*/}
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
        className={`md:py-4 relative ${
          toggle ? "flex py-4 " : "h-0 md:h-auto md:flex py-0 "
        }  border-b-[1.5px] transition-all border-gray-400 px-4 items-center justify-center`}
      >
        <div
          className={`${
            toggle ? "flex" : "h-0 md:h-auto md:flex"
          } w-full flex-col md:flex-row items-start md:items-center justify-between gap-6 2xl:max-w-none xl:max-w-7xl lg:max-w-5xl md:max-w-4xl  text-gray-600 overflow-hidden`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 ">
            <button
              onClick={() => {
                OpenMenu(houseplantsMenu);
              }}
            >
              {data.navbar.housePlants}
            </button>
            <Link href={"#"}>{data.navbar.pots}</Link>
            <Link href={"#"}>{data.navbar.care}</Link>
            <Link href={"#"}>{data.navbar.accessories}</Link>
            <Link href={"#"}>{data.navbar.gifts}</Link>
            <Link href={"#"}>{data.navbar.wholesale}</Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 items-start md:items-center">
            <Link href={"#"}>{data.navbar.inspiration}</Link>
            <Link href={"#"}>{data.navbar.doctor}</Link>
            <Link href={data.navbar.otherLang.url}>
              {data.navbar.otherLang.title}
            </Link>
          </div>
        </div>
        <div
          className={
            "hidden lg:hidden absolute top-[100%] w-full bg-white px-14 py-10 flex-row justify-evenly gap-10"
          }
          ref={houseplantsMenu}
        >
          <div className={"flex flex-wrap gap-10"}>
            {data.navbar.subHousePlants.map((sub) => {
              return (
                <div
                  className={"flex flex-col gap-3"}
                  key={sub.header + "house"}
                >
                  <h3 className={"font-semibold underline"}>{sub.header}</h3>
                  <ul>
                    {sub.items.map((item) => {
                      return (
                        <li key={item.title}>
                          <Link href={data.lang + item.link}>{item.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div>
            <Image
              src={"/assets/Images/navbar/nav-1.jpg"}
              alt={"HousePlants"}
              width={0}
              height={0}
              sizes={"100%"}
              className={"w-auto h-auto min-w-[335px]"}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
