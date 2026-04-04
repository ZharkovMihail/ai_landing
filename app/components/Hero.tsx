import Image from "next/image";
import { imgHeroBg } from "@/app/lib/assets";

export default function Hero() {
  return (
    <section className="relative flex flex-col gap-[50px] items-center justify-end h-[768px] px-5 pb-[60px] pt-5 rounded-b-[24px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#171717] rounded-b-[24px]" />
      <Image
        src={imgHeroBg}
        alt=""
        fill
        className="object-cover rounded-b-[24px]"
        unoptimized
        priority
      />

      {/* Content */}
      <div className="relative flex flex-col gap-[10px] items-start w-full">
        <h1 className="font-extrabold text-[30px] leading-[32px] text-white w-full">
          Создаём<br />
          приложения, сервисы<br />
          и AI-инструменты<br />
          для бизнеса
        </h1>
        <p className="text-[#f5f5f5] text-[16px] leading-[20px]">
          Разработаем ваше AI-приложение{" "}
          <br />
          за 2–4 недели и в{"\u00A0"}3 раза быстрее классической разработки
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="relative flex flex-col gap-[10px] items-start w-full">
        <button className="w-full bg-[#171717] rounded-[10px] px-3 py-[14px] text-[#f7f7f7] text-[20px] font-semibold text-center">
          Обсудить проект
        </button>
        <button className="w-full bg-[#f5f5f5] rounded-[10px] px-3 py-[14px] text-[#171717] text-[20px] font-semibold text-center">
          Рассчитать стоимость
        </button>
      </div>
    </section>
  );
}
