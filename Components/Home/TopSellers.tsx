import Image from "next/image";

export default async function TopSellers({
  data,
}: {
  data: { topseller: string };
}) {
  return (
    <section className="flex flex-col justify-center py-10 w-full relative mt-10 gap-10">
      <div className="w-full text-center font-bold text-6xl">
        {data.topseller}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <div className="hover:scale-110 transition-all flex flex-col font-semibold">
          <Image alt='Plant' src={'/assets/Images/pl.avif'} width={200} height={160} className={'w-[180px] h-auto'} />
<h3 className="text-md">Adansonii mint</h3>
<h4 className="text-md font-light">Monstera</h4>
<span  className="text-sm">29$</span>
        </div>
      </div>
    </section>
  );
}
