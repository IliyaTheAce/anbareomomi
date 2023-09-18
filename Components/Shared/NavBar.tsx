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
  const potsMenu = useRef() as MutableRefObject<HTMLInputElement>;
  const CareMenu = useRef() as MutableRefObject<HTMLInputElement>;
  const AccessoriesMenu = useRef() as MutableRefObject<HTMLInputElement>;
  let currentOpenedMenu: MutableRefObject<HTMLDivElement> | null;
  let currentMenuButton: HTMLButtonElement | null;

  const CloseMenu = () => {
    if (currentMenuButton) {
      currentMenuButton.classList.remove("underline", "text-gray-500");
      currentMenuButton = null;
    }
    if (currentOpenedMenu) {
      currentOpenedMenu.current.classList.remove(
        "opacity-100",
        "pointer-events-auto",
      );
      currentOpenedMenu.current.classList.add(
        "opacity-0",
        "pointer-events-none",
      );
      currentOpenedMenu = null;
    }
  };
  const OpenMenu = (
    menu: MutableRefObject<HTMLDivElement>,
    button: HTMLButtonElement,
  ) => {
    if (currentMenuButton) {
      currentMenuButton.classList.remove("underline", "text-gray-500");
      if (currentMenuButton.id === button.id) {
        currentMenuButton = null;
      } else {
        currentMenuButton = button;
        button.classList.add("underline", "text-gray-500");
      }
    } else {
      button.classList.add("underline", "text-gray-500");
      currentMenuButton = button;
    }

    if (currentOpenedMenu) {
      currentOpenedMenu.current.classList.add(
        "opacity-0",
        "pointer-events-none",
      );
      currentOpenedMenu.current.classList.remove(
        "opacity-100",
        "pointer-events-auto",
      );
      if (currentOpenedMenu === menu) {
        currentOpenedMenu = null;
        return;
      }
      currentOpenedMenu = null;
    }
    menu.current.classList.remove("opacity-0", "pointer-events-none");
    menu.current.classList.add("pointer-events-auto", "opacity-100");
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
            <Link href={"/"}>
              <Image
                src={"/assets/Images/Logo.png"}
                alt="Logo"
                width={145}
                height={35}
                className="w-[50px]"
              />
            </Link>
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
              id={"housePlants"}
              className={"flex gap-1 justify-center items-center"}
              onClick={(event) => {
                OpenMenu(houseplantsMenu, event.currentTarget);
              }}
            >
              {data.navbar.housePlants}
            </button>
            <button
              id={"pots"}
              onClick={(event) => {
                OpenMenu(potsMenu, event.currentTarget);
              }}
            >
              {data.navbar.pots}
            </button>
            <button
              id={"care"}
              onClick={(event) => {
                OpenMenu(CareMenu, event.currentTarget);
              }}
            >
              {data.navbar.care}
            </button>
            <button
              id={"accessories"}
              onClick={(event) => {
                OpenMenu(AccessoriesMenu, event.currentTarget);
              }}
            >
              {data.navbar.accessories}
            </button>
            <Link href={"#"}>{data.navbar.gifts}</Link>
            <Link href={"#"}>{data.navbar.wholesale}</Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 items-start md:items-center">
            <Link href={"#"}>{data.navbar.inspiration}</Link>
            <Link href={"#"}>{data.navbar.doctor}</Link>
            <Link
              href={data.navbar.otherLang.url}
              onClick={() => {
                localStorage.setItem(
                  "PreferedLanguage",
                  data.navbar.otherLang.url.replace("/", ""),
                );
              }}
            >
              {data.navbar.otherLang.title}
            </Link>
          </div>
        </div>
        <div
          className={
            "flex absolute top-[100%] w-full bg-white px-14 py-10 flex-row justify-evenly gap-10 duration-400 opacity-0 transition-all pointer-events-none"
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
                          <Link
                            href={"/" + data.lang + item.link}
                            onClick={() => CloseMenu()}
                          >
                            {item.title}
                          </Link>
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
        {/*Pots menu*/}
        <div
          className={
            "flex absolute top-[100%] w-full bg-white px-14 py-10 flex-row justify-evenly gap-10 duration-400 opacity-0 transition-all pointer-events-none"
          }
          ref={potsMenu}
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
                          <Link
                            onClick={() => {
                              CloseMenu();
                            }}
                            href={"/" + data.lang + item.link}
                          >
                            {item.title}
                          </Link>
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
              src={"/assets/Images/navbar/nav-2.jpg"}
              alt={"Pots"}
              width={0}
              height={0}
              sizes={"100%"}
              className={"w-auto h-auto min-w-[335px]"}
            />
          </div>
        </div>
        {/*Care menu*/}
        <div
          className={
            "flex absolute top-[100%] w-full bg-white px-14 py-10 flex-row justify-evenly gap-10 duration-400 opacity-0 transition-all pointer-events-none"
          }
          ref={CareMenu}
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
                          <Link
                            onClick={() => {
                              CloseMenu();
                            }}
                            href={"/" + data.lang + item.link}
                          >
                            {item.title}
                          </Link>
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
              src={"/assets/Images/navbar/nav-3.jpg"}
              alt={"Pots"}
              width={0}
              height={0}
              sizes={"100%"}
              className={"w-auto h-auto min-w-[335px]"}
            />
          </div>
        </div>
        {/*Accessories menu*/}
        <div
          className={
            "flex absolute top-[100%] w-full bg-white px-14 py-10 flex-row justify-evenly gap-10 duration-400 opacity-0 transition-all pointer-events-none"
          }
          ref={AccessoriesMenu}
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
                          <Link
                            onClick={() => {
                              CloseMenu();
                            }}
                            href={"/" + data.lang + item.link}
                          >
                            {item.title}
                          </Link>
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
              src={"/assets/Images/navbar/nav-4.jpg"}
              alt={"Pots"}
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
