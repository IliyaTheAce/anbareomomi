import Image from "next/image";

interface props{
    name:string,
    type:string,
    price:number,
    discount?:number,
    unit:string,
image:string
}

export default function SmallPlantCard({name,type,price,discount , unit ,image} : props){
   return <div className="hover:scale-110 transition-all flex flex-col font-semibold">
    <Image
      alt={name}
      src={image}
    //   src={"/assets/Images/pl.avif"}
      width={0}
      height={0}
      sizes="100vw"
      className={
        "xl:w-[240px] lg:w-[200px] md:w-[170px] w-[150px] h-auto"
      }
    />
    <h3 className="text-md">{name}</h3>
    <h4 className="text-md font-light">{type}</h4>
    <div className="text-sm">{
        discount ? <><span className="line-through mr-2 text-gray-600">{price+ unit}</span><span className="text-[#C62719]">{discount + unit}</span></> : <span className="text-[#C62719]">{price + unit}</span>
    }</div>
  </div>
}