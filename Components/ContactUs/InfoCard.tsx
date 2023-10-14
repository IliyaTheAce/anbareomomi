import React from "react";

export default function InfoCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: string;
}) {
  return (
    <div className="relative rounded-lg overflow-hidden  bg-white shadow-2xl p-5 border-[1px] border-gray-200 md:min-w-[290px] w-full md:w-fit font-IranSans gap-2">
      {icon !== undefined && (
        <i
          className={
            icon +
            " text-8xl text-primary w-full text-center flex items-center justify-center mb-3"
          }
        ></i>
      )}
      <h3 className={"text-2xl text-primary text-center w-full"}>{title}</h3>
      <p className={"text-lg text-dimText text-center"}>{description}</p>
    </div>
  );
}
