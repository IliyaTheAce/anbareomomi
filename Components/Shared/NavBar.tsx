"use client";
import Image from "next/image";
import Link from "next/link";
import { MutableRefObject, useRef, useState } from "react";
import { usePathname } from "next/navigation";
export default function NavBar() {
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
        "pointer-events-auto"
      );
      currentOpenedMenu.current.classList.add(
        "opacity-0",
        "pointer-events-none"
      );
      currentOpenedMenu = null;
    }
  };
  const OpenMenu = (
    menu: MutableRefObject<HTMLDivElement>,
    button: HTMLButtonElement
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
        "pointer-events-none"
      );
      currentOpenedMenu.current.classList.remove(
        "opacity-100",
        "pointer-events-auto"
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
    <>
      <div className="fixed top-0 w-full bg-[#343a40] z-10 text-white">
        {/* <nav
          className={`md:py-4 relative ${
            toggle ? "flex py-4 " : "h-0 md:h-auto md:flex py-0 "
          } transition-all px-4 items-center justify-between  max-w-[1200px] mx-auto`}
        > */}
        <nav
          className={`md:py-4 relative h-auto flex py-4 transition-all px-4 items-center justify-between  max-w-[1200px] mx-auto flex-col lg:flex-row`}
        >
          <Image
            src={"/assets/Images/arta-white.png"}
            alt={"logo"}
            width={263}
            height={80}
          />
          {/* 
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 ">
            <Link
              href={"/"}
              id={"housePlants"}
              className={"flex gap-1 justify-center items-center"}
            >
              خانه{" "}
            </Link>
          </div> */}

          <div className="flex flex-col md:flex-row justify-center gap-3 items-start md:items-center">
            <Link
              href={"tel:+989056723180"}
              className={
                "bg-gray-500 px-3 py-2 rounded-md flex items-center gap-3 hover:text-[#c96b1e] transition-all"
              }
            >
              <span>09056723180</span>
              <i className="fi fi-rr-phone-call flex items-center"></i>{" "}
            </Link>
            <Link
              href={"tel:+982637773335"}
              className={
                "bg-gray-500 px-3 py-2 rounded-md flex items-center gap-3 hover:text-[#c96b1e] transition-all"
              }
            >
              <span>026-37773335</span>
              <i className="fi fi-rr-phone-call flex items-center"></i>{" "}
            </Link>
          </div>
          <div
            className={
              "flex absolute top-[100%] w-full bg-white px-14 py-10 flex-row justify-evenly gap-10 duration-400 opacity-0 transition-all pointer-events-none"
            }
            ref={houseplantsMenu}
          >
            <div className={"flex flex-wrap gap-10"}>
              {/*{data.navbar.subHousePlants.map((sub) => {*/}
              {/*  return (*/}
              {/*    <div*/}
              {/*      className={"flex flex-col gap-3"}*/}
              {/*      key={sub.header + "house"}*/}
              {/*    >*/}
              {/*      <h3 className={"font-semibold underline"}>{sub.header}</h3>*/}
              {/*      <ul>*/}
              {/*        {sub.items.map((item) => {*/}
              {/*          return (*/}
              {/*            <li key={item.title}>*/}
              {/*              <Link*/}
              {/*                href={"/" + data.lang + item.link}*/}
              {/*                onClick={() => CloseMenu()}*/}
              {/*              >*/}
              {/*                {item.title}*/}
              {/*              </Link>*/}
              {/*            </li>*/}
              {/*          );*/}
              {/*        })}*/}
              {/*      </ul>*/}
              {/*    </div>*/}
              {/*  );*/}
              {/*})}*/}
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
              {/*{data.navbar.subHousePlants.map((sub) => {*/}
              {/*  return (*/}
              {/*    <div*/}
              {/*      className={"flex flex-col gap-3"}*/}
              {/*      key={sub.header + "house"}*/}
              {/*    >*/}
              {/*      <h3 className={"font-semibold underline"}>{sub.header}</h3>*/}
              {/*      <ul>*/}
              {/*        {sub.items.map((item) => {*/}
              {/*          return (*/}
              {/*            <li key={item.title}>*/}
              {/*              <Link*/}
              {/*                onClick={() => {*/}
              {/*                  CloseMenu();*/}
              {/*                }}*/}
              {/*                href={"/" + data.lang + item.link}*/}
              {/*              >*/}
              {/*                {item.title}*/}
              {/*              </Link>*/}
              {/*            </li>*/}
              {/*          );*/}
              {/*        })}*/}
              {/*      </ul>*/}
              {/*    </div>*/}
              {/*  );*/}
              {/*})}*/}
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
              {/*{data.navbar.subHousePlants.map((sub) => {*/}
              {/*  return (*/}
              {/*    <div*/}
              {/*      className={"flex flex-col gap-3"}*/}
              {/*      key={sub.header + "house"}*/}
              {/*    >*/}
              {/*      <h3 className={"font-semibold underline"}>{sub.header}</h3>*/}
              {/*      <ul>*/}
              {/*        {sub.items.map((item) => {*/}
              {/*          return (*/}
              {/*            <li key={item.title}>*/}
              {/*              <Link*/}
              {/*                onClick={() => {*/}
              {/*                  CloseMenu();*/}
              {/*                }}*/}
              {/*                href={"/" + data.lang + item.link}*/}
              {/*              >*/}
              {/*                {item.title}*/}
              {/*              </Link>*/}
              {/*            </li>*/}
              {/*          );*/}
              {/*        })}*/}
              {/*      </ul>*/}
              {/*    </div>*/}
              {/*  );*/}
              {/*})}*/}
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
              {/*{data.navbar.subHousePlants.map((sub) => {*/}
              {/*  return (*/}
              {/*    <div*/}
              {/*      className={"flex flex-col gap-3"}*/}
              {/*      key={sub.header + "house"}*/}
              {/*    >*/}
              {/*      <h3 className={"font-semibold underline"}>{sub.header}</h3>*/}
              {/*      <ul>*/}
              {/*        {sub.items.map((item) => {*/}
              {/*          return (*/}
              {/*            <li key={item.title}>*/}
              {/*              <Link*/}
              {/*                onClick={() => {*/}
              {/*                  CloseMenu();*/}
              {/*                }}*/}
              {/*                href={"/" + data.lang + item.link}*/}
              {/*              >*/}
              {/*                {item.title}*/}
              {/*              </Link>*/}
              {/*            </li>*/}
              {/*          );*/}
              {/*        })}*/}
              {/*      </ul>*/}
              {/*    </div>*/}
              {/*  );*/}
              {/*})}*/}
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
      {/*<div*/}
      {/*  className={*/}
      {/*    "absolute top-[113px] bg-opacity-0 border-white border-b-[0.75px] z-[2] "*/}
      {/*  }*/}
      {/*>*/}
      {/*  Hello*/}
      {/*</div>*/}
    </>
  );
}
