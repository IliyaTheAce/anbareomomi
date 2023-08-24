import Image from "next/image";

export default function TopBar() {
  return (
    <div className=" border-b-[1.5px] border-gray-400 px-4 py-4  flex items-center justify-center">
      <div className="w-full flex items-center justify-between 2xl:max-w-none xl:max-w-7xl lg:max-w-5xl md:max-w-3xl">
        <div className="inline-flex gap-3 items-center justify-center">
          <button className="md:hidden text-2xl ">
            <i className="fi fi-rr-menu-burger flex items-center"></i>
          </button>
          <Image
            src={"/assets/Images/logo.svg"}
            alt="Logo"
            width={145}
            height={35}
            className="md:w-[105px] w-[85px] lg:w-[145px]"
          />
        </div>
        <div className="flex items-start justify-center gap-8 md:text-2xl text-xl text-gray-600">
          <button>
            <i className="fi fi-rr-search"></i>
          </button>
          <button>
            <i className="fi fi-rr-heart"></i>
          </button>
          <button>
            <i className="fi fi-rr-shopping-cart"></i>
          </button>
          <button>
            <i className="fi fi-rr-user"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
