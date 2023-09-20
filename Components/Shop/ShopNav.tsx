import Link from "next/link";

export default function ShopNav() {
  return (
    <nav
      className={
        "flex flex-row gap-5 justify-evenly overflow-x-scroll px-8 py-4 bg-gray-300 text-sm font-light no-scrollbar whitespace-nowrap"
      }
    >
      <Link
        href={"#"}
        className={
          "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
        }
      >
        All Plants
      </Link>{" "}
      <Link
        href={"#"}
        className={
          "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
        }
      >
        Baby Plants
      </Link>{" "}
      <Link
        href={"#"}
        className={
          "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
        }
      >
        New Releases
      </Link>{" "}
      <Link
        href={"#"}
        className={
          "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
        }
      >
        Rare Plants
      </Link>{" "}
      <Link
        href={"#"}
        className={
          "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
        }
      >
        Pots
      </Link>{" "}
      <Link
        href={"#"}
        className={
          "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
        }
      >
        Accessories
      </Link>
      <Link
        href={"#"}
        className={
          "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
        }
      >
        Care Products
      </Link>
      <Link
        href={"#"}
        className={
          "text-gray-500 px-3 py-2 border-2 border-opacity-0 hover:border-opacity-100  border-gray-400 rounded-full"
        }
      >
        Gift
      </Link>
    </nav>
  );
}
