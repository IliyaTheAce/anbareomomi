import Image from "next/image";
import BigButton from "../Shared/BigButton";

export default async function TopCategories() {
  const popularCategories = [
    {
      image: "/assets/images/Services/1.jpg",
      id: "1",
      title: "اجاره انبار کانتینری",
      content:
        "با انبار های کانتینری کالاهای خود را در امن ترین شرایط نگهداری کنید،انبار های کانتینری ارزان ترین و ایزوله و امن ترین محیط برای نگهداری انواع کالا و اثاثیه شما میباشد",
    },
    {
      image: "/assets/images/Services/saderat.jpg",
      id: "1",
      title: "صادرات اثاثیه",
      content:
        "صادرات اثاثیه به سراسر جهان ، آماده ارائه خدمات بسته بندی اثاث حمل تا گمرک و صادرات آن به تمامی کشور ها ، با استفاده از معتبرترین کشتیرانی های جهان در کوتاه ترین زمان",
    },
    {
      image: "/assets/images/Services/car.jpg",
      id: "1",
      title: "پارکینگ خودرو های لوکس",
      content:
        "اگر مسافر هستید خودرو گران قیمت خود را به ما بسپارید،ضد زلزله ضد سرقت ضد آتش سوزی ،نگهداری خودرو در کانتیر های ایزوله تخصص ماست",
    },
    {
      image: "/assets/images/Services/toghifi.jpg",
      id: "1",
      title: "نگهداری اموال توقیفی",
      content:
        "آیا میدانید اگر از شخصی مطالبه ای دارید یا حکم تخلیه ملکی دارید مطابق قانون اجرا اموال تا زمان مزایده باید به امین اموال معتبر و فضای امن سپرده شود لذا با عقد قرارداد با ما میتوانید اموال توقیفی محکوم علیه را به ما بسپارید زیرا که ما امین اموال معتبر و مورد قبول دادگستری هستیم",
    },
    {
      image: "/assets/images/Services/sandogh.jpg",
      id: "1",
      title: "صندوق امانی انبار کانتینری",
      content:
        "درصندوق امانی گاوصندوق دیجیتالی ما نصب شده در کانتینر اختصاصی شما صندوق ضد زلزله ضد سرقت و ضد آتش سوزی محیط امنی برای نگهداری اسناد محرمانه شما میباشد ،کلیه صندوق های امانی تحت ضمانت بانک پارسیان ،زیر پوشش بیمه ایران می باشد",
    },
    {
      image: "/assets/images/Services/negahdai-asasie.jpg",
      id: "1",
      title: "نگهداری اثاثیه",
      content:
        "پایتخت ایران تهران هر لحظه در تهدید زلزله شدید می باشد، اگر مسافر هستید اثاثیه منزل خود را در صندوق ضد زلزله، ضد آتش سوزی و ضد سرقت ما با کمترین هزینه و بدون هیچ گونه نگرانی تحت پوشش بیمه ایران و تحت ضمانت بانک پارسیان قرار دهید",
    },
    {
      image: "/assets/images/Services/asasie.png",
      id: "1",
      title: "بسته بندی اثاثیه",
      content:
        "شرکت آرتا با بهره گیری از بهترین تجهیزات و مجرب ترین پرسنل با کمترین هزینه اثاثیه یا سایر کالاهای شما را بسته بندی و به انبار های آرتا انتقال می دهد",
    },
    {
      image: "/assets/images/Services/tejari.jpg",
      id: "1",
      title: "نگهداری انواع کالاهای تجاری",
      content:
        "اگر تولید کننده هستید و برای مدتی می خواهید محصولات خود را در انباری امن و ارزان نگهداری کنید ما می توانیم انواع کالا های تجاری شما را در انبار های زنجیره ای آرتا نگهداری کنیم",
    },
    {
      image: "/assets/images/Services/shipping.jpg",
      id: "1",
      title: "حمل و نقل و باربری کالا به انبار",
      content:
        "شما می توانید با بهره گیری از یگان حمل و نقل ما اثاثیه خود را با بالاترین سرعت و کمترین هزینه از محل خود به انبار های ما یا از محل انبار ها به تمام نقاط استان یا کشور انتقال دهید",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center py-10 w-full relative mt-10 gap-10 px-5 ">
      <div
        className={`w-full lg:w-[70%] text-center font-bold text-3xl lg:text-4xl font-Yekan border-b-2 border-b-primary pb-5`}
      >
        خدمات تخصصی انبارهای عمومی آرتا
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 max-w-[1270px] overflow-hidden">
        {popularCategories.map((item) => {
          return (
            <div
              key={item.id}
              className="relative rounded-lg overflow-hidden  bg-white shadow-xl"
            >
              <Image
                alt={item.title}
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto z-[1] hover:scale-110 transition-all duration-400"
              />
              <div className={"flex flex-col gap-4 mt-6 px-5 pb-5"}>
                <h3 className={"text-[2rem] text-[#495057]"}>{item.title} </h3>
                <p className={"text-[1.3rem] text-[#adb5bd] text-justify"}>
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <BigButton minWidth />
    </section>
  );
}
