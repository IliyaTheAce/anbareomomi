import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sliders } from "@/Components/Home/Slider";

function Footer() {
  const mapItems = [
    <div key="map-1" className={"flex flex-col gap-2 items-center"}>
      <Link
        href={
          "https://maps.google.com/maps?ll=35.675028,51.232624&z=16&t=m&hl=en&gl=US&mapclient=embed"
        }
      >
        <Image
          src={"/assets/Images/slider/map-1.png"}
          alt={"tehran central office location"}
          width={300}
          height={0}
          className={"h-auto"}
        />
      </Link>
      <h4>شعبه مرکزی تهران</h4>
    </div>,
    <div key="map-2" className={"flex flex-col gap-2 items-center"}>
      <Link
        href={
          "https://maps.google.com/maps?ll=35.697111,51.196917&z=16&t=m&hl=en&gl=US&mapclient=embed"
        }
      >
        <Image
          src={"/assets/Images/slider/map-2.png"}
          alt={"tehran central office location"}
          width={300}
          height={0}
          className={"h-auto"}
        />
      </Link>
      <h4>شعبه دوم تهران</h4>
    </div>,
    <div key="map-3" className={"flex flex-col gap-2 items-center"}>
      <Link
        href={
          "https://maps.google.com/maps?ll=35.699212,50.317933&z=16&t=m&hl=en&gl=US&mapclient=embed"
        }
      >
        <Image
          src={"/assets/Images/slider/map-3.png"}
          alt={"tehran central office location"}
          width={300}
          height={0}
          className={"h-auto"}
        />
      </Link>
      <h4>شعبه سوم کرج ( اشتهارد)</h4>
    </div>,
    <div key="map-4" className={"flex flex-col gap-2 items-center"}>
      <Link
        href={
          "https://maps.google.com/maps?ll=35.688386,51.185848&z=16&t=m&hl=en&gl=US&mapclient=embed"
        }
      >
        <Image
          src={"/assets/Images/slider/map-4.png"}
          alt={"tehran central office location"}
          width={300}
          height={0}
          className={"h-auto"}
        />
      </Link>
      <h4>شعبه چهارم ( سه راه شهریار)</h4>
    </div>,
  ];
  return (
    <section className={"bg-gray-500 w-full py-14 px-10 text-white"}>
      <div
        className={
          "flex flex-col md:grid md:grid-cols-2 justify-between max-w-[1200px] w-full mx-auto"
        }
      >
        <div
          className={
            "flex flex-col gap-5 justify-center items-center flex-grow"
          }
        >
          <Image
            src={"/assets/images/arta-white.png"}
            alt={"logo"}
            width={263}
            height={80}
          />
          <div className={"text-xl"}>
            جهت اطلاع از هزینه ها و خدمات آرتا با ۰۲۱۹۱۰۳۱۶۸۲ تماس حاصل نمایید
          </div>
        </div>
        <Sliders items={mapItems} />
      </div>
    </section>
  );
}

export default Footer;
