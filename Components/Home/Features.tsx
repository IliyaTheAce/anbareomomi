import React from "react";
import DisclosureFeatures from "@/Components/Home/DisclosureFeatures";

function Features() {
  return (
    <section className={" mx-auto w-full max-w-[1200px] mt-10 pb-10 "}>
      <h3 className={"text-[2.5rem] text-[#495057] w-full text-center mb-5"}>
        برخی از ویژگی های آرتا
      </h3>
      <DisclosureFeatures />
    </section>
  );
}

export default Features;
