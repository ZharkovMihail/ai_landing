import Image from "next/image";
import { imgServiceAi, imgServiceVibe, imgServiceImprove } from "@/app/lib/assets";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-[80px] bg-[#171717] flex flex-col gap-[30px] items-start overflow-clip p-5 rounded-[24px] mx-5">
      <h2 className="font-extrabold text-[30px] leading-[32px] text-white">
        Какие задачи мы решаем
      </h2>
      <div className="flex flex-col gap-[30px] items-start">

        {/* Card 1 — AI */}
        <div className="bg-white flex flex-col gap-5 h-[250px] items-start overflow-clip p-5 relative rounded-[14px] w-[310px]">
          <p className="font-semibold text-[16px] leading-[20px] text-[#171717] shrink-0">
            AI-решения под{"\u00A0"}заказ
          </p>
          <ul className="list-disc font-normal text-[16px] leading-[20px] text-[#454545] shrink-0">
            <li className="ms-6">чат-боты</li>
            <li className="ms-6">AI-ассистенты</li>
            <li className="ms-6">автоматизация процессов</li>
            <li className="ms-6">интеграция AI в существующие системы</li>
          </ul>
          {/* image: bottom-right, no rotation */}
          <div className="absolute left-[89px] top-[96px] size-[250px] pointer-events-none">
            <Image src={imgServiceAi} alt="" fill className="object-cover" unoptimized />
          </div>
        </div>

        {/* Card 2 — Vibe (snake) */}
        <div className="bg-white flex flex-col gap-5 h-[250px] items-start overflow-clip p-5 relative rounded-[14px] w-[310px]">
          <p className="font-semibold text-[16px] leading-[20px] text-[#171717] shrink-0">
            Вайбкодинг приложений и{"\u00A0"}сервисов
          </p>
          <ul className="list-disc font-normal text-[16px] leading-[20px] text-[#454545] shrink-0">
            <li className="ms-6">MVP</li>
            <li className="ms-6">SaaS</li>
            <li className="ms-6">внутренние инструменты</li>
            <li className="ms-6">мобильные приложения</li>
            <li className="ms-6">веб-сервисы</li>
          </ul>
          {/* image: top-right, large rotated wrapper */}
          <div className="absolute flex items-center justify-center left-[101px] top-[-205px] size-[470px] pointer-events-none">
            <div className="flex-none rotate-[26.88deg]">
              <div className="relative size-[350px]">
                <Image src={imgServiceVibe} alt="" fill className="object-cover" unoptimized />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 — Improve (cube) */}
        <div className="bg-white flex flex-col gap-5 h-[250px] items-start overflow-clip p-5 relative rounded-[14px] w-[310px]">
          <p className="font-semibold text-[16px] leading-[20px] text-[#171717] shrink-0">
            Доработка существующих продуктов
          </p>
          <ul className="list-disc font-normal text-[16px] leading-[20px] text-[#454545] shrink-0">
            <li className="ms-6">добавление AI-функционала</li>
            <li className="ms-6">оптимизация</li>
            <li className="ms-6">масштабирование</li>
          </ul>
          {/* image: bottom-right, rotated */}
          <div className="absolute flex items-center justify-center left-[85px] top-[89px] size-[285px] pointer-events-none">
            <div className="flex-none -rotate-[21.15deg]">
              <div className="relative size-[220px]">
                <Image src={imgServiceImprove} alt="" fill className="object-cover" unoptimized />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
