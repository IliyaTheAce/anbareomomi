export default function Offers({
  data,
}: {
  data: {
    Offers: {
      shipping: string;
      guarantee: string;
      font: string;
    };
  };
}) {
  return (
    <section
      className={`flex flex-row gap-7 w-full p-10 bg-[rgb(243,244,243)] items-center justify-center ${data.Offers.font}`}
    >
      <div className="flex lg:flex-row flex-col lg:gap-2 gap-1 text-center">
        <i className="fi fi-rr-box-check text-4xl"></i>
        <span className="flex items-center">{data.Offers.shipping}</span>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-2 gap-1 text-center">
        <i className="fi fi-rr-shield-check text-4xl" />
        <span className="flex items-center"> {data.Offers.guarantee}</span>
      </div>
    </section>
  );
}
