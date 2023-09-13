import Image from "next/image";

interface props {
  name: string;
  type: string;
  price: number;
  unit: string;
  image: string;
  font: string;
  dir: string;
}

export default function BigPlantCard({
  dir,
  font,
  name,
  type,
  price,
  unit,
  image,
}: props) {
  return (
    <div className="flex-shrink-0 sm:flex-shrink  flex-col font-semibold relative hidden lg:flex">
      <div className={"relative hover:scale-110 transition-all"}>
        <Image
          alt={name}
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          className={
            "xl:w-[480px] lg:w-[400px] md:w-[340px] w-[300px] h-auto mb-2 z-[1]"
          }
        />
        <div
          className={`bottom-[5%] ${
            dir === "rtl" ? "right-[5%]" : "left-[5%]"
          } absolute z-1 flex flex-col gap-1 font-bold md:text-xl text-md  lg:text-3xl`}
        >
          <h2
            className={` bg-opacity-90 p-3 md:p-6 w-fit ${font}  bg-white
             `}
          >
            {name}
          </h2>
          <h2
            className={` bg-opacity-90 p-3 md:p-6 w-fit ${font}  bg-white
             `}
          >
            {type}
          </h2>
          <h2
            className={` bg-opacity-90 p-3 md:p-6 w-fit ${font} text-white bg-black
             `}
          >
            {price + unit}
          </h2>
        </div>
      </div>
    </div>
  );
}
