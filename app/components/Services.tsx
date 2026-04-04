import Image from "next/image";
import { imgServiceAi, imgServiceVibe, imgServiceImprove } from "@/app/lib/assets";

const services = [
  {
    title: "AI-решения под заказ",
    items: ["чат-боты", "AI-ассистенты", "автоматизация процессов", "интеграция AI в существующие системы"],
    image: imgServiceAi,
    imageStyle: "left-[89px] top-[96px] w-[250px] h-[250px]",
    imageRotate: "",
  },
  {
    title: "Вайбкодинг приложений и сервисов",
    items: ["MVP", "SaaS", "внутренние инструменты", "мобильные приложения", "веб-сервисы"],
    image: imgServiceVibe,
    imageStyle: "left-[100px] top-[-60px] w-[200px] h-[200px]",
    imageRotate: "rotate-[27deg]",
  },
  {
    title: "Доработка существующих продуктов",
    items: ["добавление AI-функционала", "оптимизация", "масштабирование"],
    image: imgServiceImprove,
    imageStyle: "left-[85px] top-[90px] w-[180px] h-[180px]",
    imageRotate: "-rotate-[21deg]",
  },
];

export default function Services() {
  return (
    <section className="bg-[#171717] flex flex-col gap-[30px] items-start overflow-clip p-5 rounded-[24px] mx-5">
      <h2 className="font-extrabold text-[30px] leading-[32px] text-white">
        Какие задачи мы решаем
      </h2>
      <div className="flex flex-col gap-[30px] items-start w-full">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white flex flex-col gap-5 h-[250px] items-start overflow-hidden p-5 relative rounded-[14px] w-full"
          >
            <p className="font-semibold text-[16px] leading-[20px] text-[#171717] relative z-10">
              {service.title}
            </p>
            <ul className="list-disc font-normal text-[16px] leading-[20px] text-[#454545] relative z-10 space-y-0">
              {service.items.map((item) => (
                <li key={item} className="ms-6">
                  {item}
                </li>
              ))}
            </ul>
            <div className={`absolute ${service.imageStyle} pointer-events-none`}>
              <Image
                src={service.image}
                alt=""
                fill
                className={`object-cover ${service.imageRotate}`}
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
