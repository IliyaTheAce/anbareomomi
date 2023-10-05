"use client";
import { Disclosure, Transition } from "@headlessui/react";

function DisclosureFeatures() {
  return (
    <div className={"flex gap-3 flex-col w-full"}>
      <Disclosure>
        <Disclosure.Button className="py-2 px-3 w-full bg-white rounded-lg shadow-lg">
          نگهدازی اموال توقیفی
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="text-gray-500 py-5">
            آیا میدانید اگر از شخصی مطالبه دارید مطابق قانون اجرا اموال تا زمان
            مزایده باید به امین اموال معتبر و فضای امن سپرده شود ؟ لذا با عقد
            قرارداد با ما میتوانید اموال توقیفی محکوم علیه را به ما بسپارید زیرا
            که ما امین اموال معتبر و مورد قبول دادگستری هستیم.
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button className="py-2 px-3 w-full bg-white rounded-lg shadow-lg">
          نگهدازی جهیزیه
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="text-gray-500 py-5">
            اگر برای نگهداری جهیزیه خود نیازمند فضای امن و مناسب هستید میتوانید
            آن را به انبار کانتینریه آرتا بسپارید.
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button className="py-2 px-3 w-full bg-white rounded-lg shadow-lg">
          نگهدازی کالا های تجاری
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="text-gray-500 py-5">
            قابل توجه وارد کنندگان و صادر کنندگان و توزیع کنندگان نگهداری انواع
            کالا تجاری در انبارهای مسقف و کانتینر های ما با نازلترین قیمت ها
            بصورت شبانه روزی با پرسنل مجرب و تجهیزات تخلیه و بارگیری و حمل و نقل
            در مقابل گمرک غرب تهران
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
      <Disclosure>
        <Disclosure.Button className="py-2 px-3 w-full bg-white rounded-lg shadow-lg">
          توزیع کننده مویرگی و بنکداران عزیز{" "}
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="text-gray-500 py-5">
            آیا میدانید در انبار کانتینری آرتا میتوانید با داشتن چند کانتینر یا
            انبار مسقف با فضای مناسب دفتری و تجهیزات اداری کاملا مبله و با
            تجهیزات تخلیه و بارگیری و حمل و نقل با دسترسی خوب خ فتح و اتوبان
            آزادگان کاملا بدون نگرانی کالاهای خود را توزیع نمایید .
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
}

export default DisclosureFeatures;
