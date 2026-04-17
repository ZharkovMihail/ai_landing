import Image from "next/image";
import { imgServiceAi, imgServiceVibe, imgServiceImprove } from "@/app/lib/assets";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-[80px] lg:px-[40px]">
      <div className="bg-[#171717] flex flex-col gap-[30px] items-start overflow-clip p-5 rounded-[24px] mx-5 lg:mx-0 lg:px-[30px] lg:py-[50px] lg:rounded-[44px] lg:gap-[50px]">
        <h2 className="font-extrabold text-[30px] leading-[32px] text-white lg:text-[54px] lg:leading-[54px]">
          Какие задачи мы решаем
        </h2>

        {/* Mobile: stacked cards */}
        <div className="flex flex-col gap-[30px] items-start lg:hidden">
          <div className="bg-white flex flex-col gap-5 h-[250px] items-start overflow-clip p-5 relative rounded-[14px] w-full">
            <p className="font-semibold text-[16px] leading-[20px] text-[#171717] shrink-0">
              AI-решения под{"\u00A0"}заказ
            </p>
            <ul className="list-disc font-normal text-[16px] leading-[20px] text-[#454545] shrink-0">
              <li className="ms-6">чат-боты</li>
              <li className="ms-6">AI-ассистенты</li>
              <li className="ms-6">автоматизация процессов</li>
              <li className="ms-6">интеграция AI в существующие системы</li>
            </ul>
            <div className="absolute size-[250px] pointer-events-none" style={{ right: "-45px", bottom: "-102px" }}>
              <Image src={imgServiceAi} alt="" fill className="object-cover" unoptimized />
            </div>
          </div>

          <div className="bg-white flex flex-col gap-5 h-[250px] items-start overflow-clip p-5 relative rounded-[14px] w-full">
            <p className="font-semibold text-[16px] leading-[20px] text-[#171717] shrink-0">
              Вайбкодинг приложений<br />и{"\u00A0"}сервисов
            </p>
            <ul className="list-disc font-normal text-[16px] leading-[20px] text-[#454545] shrink-0">
              <li className="ms-6">MVP</li>
              <li className="ms-6">SaaS</li>
              <li className="ms-6">внутренние инструменты</li>
              <li className="ms-6">мобильные приложения</li>
              <li className="ms-6">веб-сервисы</li>
            </ul>
            <div className="absolute flex items-center justify-center size-[396px] pointer-events-none" style={{ right: "-215px", top: "-180px" }}>
              <div className="flex-none rotate-[26.88deg]">
                <div className="relative size-[297px]">
                  <Image src={imgServiceVibe} alt="" fill className="object-cover" unoptimized />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col gap-5 h-[250px] items-start overflow-clip p-5 relative rounded-[14px] w-full">
            <p className="font-semibold text-[16px] leading-[20px] text-[#171717] shrink-0">
              Доработка существующих продуктов
            </p>
            <ul className="list-disc font-normal text-[16px] leading-[20px] text-[#454545] shrink-0">
              <li className="ms-6">добавление AI-функционала</li>
              <li className="ms-6">оптимизация</li>
              <li className="ms-6">масштабирование</li>
            </ul>
            <div className="absolute flex items-center justify-center size-[285px] pointer-events-none" style={{ right: "-65px", bottom: "-125px" }}>
              <div className="flex-none -rotate-[21.15deg]">
                <div className="relative size-[220px]">
                  <Image src={imgServiceImprove} alt="" fill className="object-cover" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: left tall card + right stacked cards */}
        <div className="hidden lg:flex lg:gap-[30px] lg:items-stretch lg:w-full">
          {/* Card 1 — AI (left, 1/3) */}
          <div className="bg-white flex flex-col gap-5 items-start overflow-clip p-[30px] relative rounded-[14px] flex-none" style={{ width: "calc((100% - 60px) / 3)" }}>
            <p className="font-semibold text-[22px] leading-[24px] text-[#171717] shrink-0">
              AI-решения под заказ
            </p>
            <ul className="list-disc font-normal text-[22px] leading-[26px] text-[#454545] shrink-0">
              <li className="ms-[33px]">чат-боты</li>
              <li className="ms-[33px]">AI-ассистенты</li>
              <li className="ms-[33px]">автоматизация процессов</li>
              <li className="ms-[33px]">интеграция AI в существующие системы</li>
            </ul>
            <div className="absolute pointer-events-none" style={{ left: "-207px", bottom: "-248px", width: "614px", height: "614px" }}>
              <Image src={imgServiceAi} alt="" fill className="object-cover" unoptimized />
            </div>
          </div>

          {/* Right column — Cards 2 & 3 (2/3) */}
          <div className="flex flex-1 flex-col gap-[30px] min-w-0">
            {/* Card 2 — Vibe */}
            <div className="bg-white flex flex-1 flex-col gap-5 items-start overflow-clip p-[30px] relative rounded-[14px]">
              <p className="font-semibold text-[22px] leading-[24px] text-[#171717] shrink-0">
                Вайбкодинг приложений и сервисов
              </p>
              <ul className="list-disc font-normal text-[22px] leading-[26px] text-[#454545] shrink-0">
                <li className="ms-[33px]">MVP</li>
                <li className="ms-[33px]">SaaS</li>
                <li className="ms-[33px]">внутренние инструменты</li>
                <li className="ms-[33px]">мобильные приложения</li>
                <li className="ms-[33px]">веб-сервисы</li>
              </ul>
              <div className="absolute flex items-center justify-center pointer-events-none" style={{ right: "-132.5px", top: "-248px", width: "575px", height: "575px" }}>
                <div className="flex-none rotate-[26.88deg]">
                  <div className="relative size-[428px]">
                    <Image src={imgServiceVibe} alt="" fill className="object-cover" unoptimized />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 — Improve */}
            <div className="bg-white flex flex-1 flex-col gap-5 items-start overflow-clip p-[30px] relative rounded-[14px]">
              <p className="font-semibold text-[22px] leading-[24px] text-[#171717] shrink-0">
                Доработка существующих продуктов
              </p>
              <ul className="list-disc font-normal text-[22px] leading-[26px] text-[#454545] shrink-0">
                <li className="ms-[33px]">добавление AI-функционала</li>
                <li className="ms-[33px]">оптимизация</li>
                <li className="ms-[33px]">масштабирование</li>
              </ul>
              <div className="absolute flex items-center justify-center pointer-events-none" style={{ right: "-111.58px", bottom: "-215.58px", width: "503px", height: "503px" }}>
                <div className="flex-none rotate-[23.48deg]">
                  <div className="relative size-[382px]">
                    <Image src={imgServiceImprove} alt="" fill className="object-cover" unoptimized />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
