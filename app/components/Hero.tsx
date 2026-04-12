import Image from "next/image";
import { imgHeroBg } from "@/app/lib/assets";
import QuizTrigger from "./QuizTrigger";

export default function Hero() {
  return (
    <section className="relative flex flex-col gap-[50px] items-center justify-end h-[calc(100lvh+120px)] px-5 pb-[200px] pt-5 rounded-b-[24px] overflow-hidden lg:h-[845px] lg:px-[70px] lg:pb-[40px] lg:pt-0 lg:rounded-b-[44px] lg:justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#171717] rounded-b-[24px] lg:rounded-b-[44px]" />
      <Image
        src={imgHeroBg}
        alt=""
        fill
        className="object-cover rounded-b-[24px] lg:rounded-b-[44px]"
        unoptimized
        priority
      />

      {/* Content */}
      <div className="relative flex flex-col gap-[10px] items-start w-full lg:gap-[30px] lg:items-center">
        <h1 className="font-extrabold text-[30px] leading-[32px] text-white w-full lg:text-[54px] lg:leading-[54px] lg:text-center">
          Создаём<br />
          приложения, сервисы<br />
          и AI-инструменты<br />
          для бизнеса
        </h1>
        <p className="text-[#f5f5f5] text-[16px] leading-[20px] lg:text-[22px] lg:leading-[26px] lg:text-center lg:max-w-[516px]">
          Разработаем ваше AI-приложение{" "}
          <br className="lg:hidden" />
          за 2–4 недели и в{"\u00A0"}3 раза быстрее классической разработки
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="relative flex flex-col gap-[10px] items-start w-full lg:flex-row lg:justify-center lg:gap-5">
        <a
          href="#contact"
          className="w-full bg-[#171717] rounded-[10px] px-3 py-[14px] text-[#f7f7f7] text-[20px] font-semibold text-center block lg:w-[418px] lg:text-[28px] lg:py-5"
        >
          Обсудить проект
        </a>
        <QuizTrigger />
      </div>
    </section>
  );
}
