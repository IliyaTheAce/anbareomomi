import Stat from "./Stat";

const data = [
  {
    title: "مشتری فعال",
    icon: "fi fi-ss-garage-open",
    value: 1124,
  },
  {
    title: "تعداد شعب",
    icon: "fi fi-ss-garage-open",
    value: 6,
  },
  {
    title: "کانتینر های ما",
    icon: "fi fi-ss-garage-open",
    value: 21000,
  },
  {
    title: "کانتینر های ما",
    icon: "fi fi-ss-garage-open",
    value: 21000,
  },
];

export default function Stats() {
  return (
    <section className="w-full mx-auto max-w-[1200px] flex py-5 mt-5 px-5 flex-col md:flex-row justify-evenly items-center">
      {data.map((item, index) => (
        <Stat key={"stat-" + index} {...item} />
      ))}
    </section>
  );
}
