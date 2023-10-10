"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import Image, { StaticImageData } from "next/image";

export default function Slider({
  slides,
  dots,
  buttons,
  loop,
}: {
  slides: string[] | StaticImageData[];
  dots?: boolean;
  buttons?: boolean;
  loop?: boolean;
}) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slideChanged() {
        console.log("slide changed");
      },
      drag: true,
      loop: true,
      rtl: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 10000);
        }
        slider.on("created", () => {
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div
      ref={sliderRef}
      className="keen-slider overflow-hidden w-full h-[70%] lg:min-h-auto min-h-[500px] relative"
    >
      {slides.map((item, index) => (
        <div className="keen-slider__slide h-auto" key={index + "2"}>
          <Image
            src={item}
            alt={index + "slider"}
            fill
            className="h-auto object-cover"
            placeholder={"blur"}
          />
        </div>
      ))}
    </div>
  );
}
