import { getDictionary } from "@/app/[lang]/Dictionary";
import Link from "next/link";

export default async function NavBar({lang }:{lang:string}) {
  const dict = await getDictionary(lang);
  return (
    <nav className=" border-b-[1.5px] border-gray-400 px-4 py-4  flex items-center justify-center">
      <div className="w-full flex items-center justify-between 2xl:max-w-none xl:max-w-7xl lg:max-w-5xl md:max-w-3xl  text-gray-600">
        <div className="flex items-center justify-center gap-6 ">
          <Link href={"#"}>{dict.navbar.housePlants}</Link>
          <Link href={"#"}>{dict.navbar.pots}</Link>
          <Link href={"#"}>{dict.navbar.care}</Link>
          <Link href={"#"}>{dict.navbar.accessories}</Link>
          <Link href={"#"}>{dict.navbar.gifts}</Link>
          <Link href={"#"}>{dict.navbar.wholesale}</Link>
        </div>
        <div className="flex items-center justify-center gap-6 ">
          <Link href={"#"}>گیاهان خانگی</Link>
          <Link href={"#"}></Link>
          <Link href={"#"}>مراقبت</Link>
        </div>
      </div>
    </nav>
  );
}
