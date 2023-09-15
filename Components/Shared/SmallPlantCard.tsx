import Image from "next/image";

interface props {
  name: string;
  type: string;
  price: number;
  discount?: number;
  unit: string;
  image: string;
  inStock?: number;
  freeWidth?: boolean;
}

export default function SmallPlantCard({
  name,
  type,
  price,
  discount,
  unit,
  image,
  inStock,
  freeWidth,
}: props) {
  return (
    <div className="flex-shrink-0 sm:flex-shrink flex flex-col font-semibold relative">
      <button className="absolute w-7 h-7 top-2 right-2 bg-white rounded-full z-[2]">
        <i className="fi fi-rr-heart text-[20px] flex items-center justify-center"></i>
      </button>

      <div className={"relative hover:scale-110 transition-all"}>
        {inStock && inStock <= 10 && (
          <span
            className={
              "absolute h-fit w-fit bottom-[10%] bg-black bg-opacity-60 px-2 py-1 text-white text-xs lg:text-sm font-light"
            }
          >
            Only {inStock} in stock
          </span>
        )}
        <Image
          alt={name}
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          className={`${
            freeWidth
              ? "w-auto"
              : "xl:w-[200px] lg:w-[160px] md:w-[130px] w-[120px]"
          } h-auto mb-2 z-[1]`}
        />
      </div>
      <h3 className="text-md">{name}</h3>
      <h4 className="text-md font-light">{type}</h4>
      <div className="text-sm">
        {discount ? (
          <>
            <span className="line-through mr-2 text-gray-600">
              {price + unit}
            </span>
            <span className="text-[#C62719]">{discount + unit}</span>
          </>
        ) : (
          <span className="text-[#C62719]">{price + unit}</span>
        )}
      </div>
    </div>
  );
}
