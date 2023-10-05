"use client";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import styles from "../styles/Responsive.module.css";
export function Sliders({ items }: { items: any[] }) {
  return (
    <AliceCarousel
      items={items}
      infinite={true}
      mouseTracking
      touchTracking
      autoPlay={true}
      autoPlayInterval={6000}
      disableButtonsControls={true}
    />
  );
}
