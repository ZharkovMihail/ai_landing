import Image from "next/image";
import { imgCaseCover, imgCaseCover1, imgCaseCover3, imgCaseCoverBlaber } from "@/app/lib/assets";

const cases = [
  {
    // Featured on desktop (full-width), first on mobile
    tag: "AI-решение",
    image: imgCaseCoverBlaber,
    title: "Приложение для OZON — my.blaber.ai",
    description:
      "AI-платформа, которая автоматически анализирует вебконтент. Благодаря алгоритмам AI платформа проводит анализ выдачи поисковой системы Google и\u00A0Yandex и\u00A0дает оценку каждому сайту на\u00A0наличие негативной и\u00A0позитивной информации.",
  },
  {
    tag: "вайбкодинг",
    image: imgCaseCover3,
    title: "REPUTATE",
    description:
      "AI-платформа, которая автоматически анализирует вебконтент. Благодаря алгоритмам AI платформа проводит анализ выдачи поисковой системы Google и\u00A0Yandex и\u00A0дает оценку каждому сайту на\u00A0наличие негативной и\u00A0позитивной информации.",
  },
  {
    tag: "автоматизация",
    image: imgCaseCover,
    title: "Сервис по внутренней аналитике от\u00A0ИдеалТРЕЙД",
    description:
      "Реализованы интеграции с\u00A01C, mango api, Google Docs и\u00A0внутренней CRM. Реализовано распознавание голоса и\u00A0аналитика звонков по\u00A0голосу.",
  },
  {
    tag: "вайбкодинг",
    image: imgCaseCover1,
    title: "Проект под NDA",
    description:
      "Разработан веб-сервис для общения с\u00A0языковой моделью в\u00A0стиле заданного персонажа или набора характеристик с\u00A0возможностью гибкой настройки. Платформа поддерживает генерацию AI-контента, включая изображения, с\u00A0перспективой добавления аудио и\u00A0видео.",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="scroll-mt-[80px] flex flex-col gap-[30px] items-start px-5 lg:px-[70px] lg:gap-[50px]">
      <h2 className="font-extrabold text-[30px] leading-[32px] text-[#171717] lg:text-[54px] lg:leading-[54px]">
        Кейсы
      </h2>

      {/* Mobile: all cases stacked */}
      <div className="flex flex-col gap-[30px] w-full lg:hidden">
        {cases.map((c, i) => (
          <CaseCard key={i} {...c} />
        ))}
      </div>

      {/* Desktop: featured case full-width + 3 in a row */}
      <div className="hidden lg:flex lg:flex-col lg:gap-[50px] lg:w-full">
        {/* Featured case */}
        <div className="flex flex-col gap-[10px] w-full">
          <div className="relative rounded-[14px] w-full overflow-hidden shrink-0" style={{ height: 0, paddingTop: "calc((100% - 60px) * 3 / 16)" }}>
            <Image
              src={cases[0].image}
              alt=""
              fill
              className="object-cover rounded-[14px]"
              unoptimized
            />
            {cases[0].tag && (
              <div className="absolute left-[11px] top-[10px] backdrop-blur-[5px] bg-[rgba(69,69,69,0.6)] px-[10px] py-[4px] rounded-[5px]">
                <span className="font-semibold text-[12px] leading-none text-[#f5f5f5]">
                  {cases[0].tag}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="font-semibold text-[22px] leading-[24px] text-[#171717]">
              {cases[0].title}
            </p>
            <p className="font-normal text-[22px] leading-[26px] text-[#454545]">
              {cases[0].description}
            </p>
          </div>
        </div>

        {/* 3-column row */}
        <div className="flex gap-[30px] w-full">
          {cases.slice(1).map((c, i) => (
            <div key={i} className="flex flex-1 flex-col gap-[20px] min-w-0">
              <div className="aspect-video relative rounded-[14px] w-full overflow-hidden">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  className="object-cover rounded-[14px]"
                  unoptimized
                />
                {c.tag && (
                  <div className="absolute left-[11px] top-[10px] backdrop-blur-[5px] bg-[rgba(69,69,69,0.6)] px-[10px] py-[4px] rounded-[5px]">
                    <span className="font-semibold text-[12px] leading-none text-[#f5f5f5]">
                      {c.tag}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-semibold text-[22px] leading-[24px] text-[#171717] min-h-[48px]">
                  {c.title}
                </p>
                <p className="font-normal text-[22px] leading-[26px] text-[#454545]">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  tag,
  image,
  title,
  description,
}: {
  tag?: string;
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-[10px] items-start w-full">
      <div className="overflow-hidden relative rounded-[14px] w-full aspect-video">
        <Image src={image} alt="" fill className="object-cover" unoptimized />
        {tag && (
          <div className="absolute left-[11px] top-[10px] backdrop-blur-[5px] bg-[rgba(69,69,69,0.6)] px-[10px] py-[4px] rounded-[5px]">
            <span className="font-semibold text-[12px] leading-none text-[#f5f5f5]">
              {tag}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-[4px] text-[16px] leading-[20px]">
        <p className="font-semibold text-[#171717]">{title}</p>
        <p className="font-normal text-[#454545]">{description}</p>
      </div>
    </div>
  );
}
