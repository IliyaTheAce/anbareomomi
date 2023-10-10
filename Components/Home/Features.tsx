import React from "react";
import DisclosureFeatures from "@/Components/Home/DisclosureFeatures";

function Features() {
  return (
    <section className={" mx-auto w-full max-w-[1200px] mt-10 pb-10 "}>
      <h2
        className={
          "text-2xl md:text-3xl lg:text-4xl text-[#495057] w-full text-center mb-5"
        }
      >
        برخی از ویژگی های آرتا
      </h2>
      <DisclosureFeatures />
    </section>
  );
}

export default Features;
