import Image from "next/image";
import { imgCase1a, imgCase1b, imgCase1c, imgCase1d } from "@/app/lib/assets";

// All three cases share the same images in the design (placeholder content)
const cases = [
  {
    tag: "вайбкодинг",
    title: "Разработка сервиса по внутренней аналитике от ИдеалТРЕЙД",
    description:
      "Реализованы интеграции с 1C, mango api, Google Docs и внутренней CRM. Реализовано распознавание голоса и аналитика звонков по голосу",
  },
  {
    tag: "AI",
    title: "Разработка сервиса по внутренней аналитике от ИдеалТРЕЙД",
    description:
      "Реализованы интеграции с 1C, mango api, Google Docs и внутренней CRM. Реализовано распознавание голоса и аналитика звонков по голосу",
  },
  {
    tag: "MVP",
    title: "Разработка сервиса по внутренней аналитике от ИдеалТРЕЙД",
    description:
      "Реализованы интеграции с 1C, mango api, Google Docs и внутренней CRM. Реализовано распознавание голоса и аналитика звонков по голосу",
  },
];

const panelImages = [imgCase1a, imgCase1b, imgCase1c, imgCase1d];

export default function Cases() {
  return (
    <section className="flex flex-col gap-[30px] items-start px-5">
      <h2 className="font-extrabold text-[30px] leading-[32px] text-[#171717]">Кейсы</h2>
      <div className="flex flex-col gap-[10px] w-full">
        {cases.map((c, i) => (
          <div key={i} className="flex flex-col gap-[10px] items-start rounded-[24px]">
            {/* Image collage */}
            <div className="aspect-video bg-[#171717] overflow-hidden relative rounded-[14px] w-full">
              <div className="absolute inset-0 flex">
                {panelImages.map((src, j) => (
                  <div key={j} className="flex-1 relative overflow-hidden">
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              {/* Tag badge */}
              <div className="absolute left-[11px] top-[10px] backdrop-blur-[5px] bg-[rgba(69,69,69,0.6)] px-[10px] py-[6px] rounded-[5px]">
                <span className="font-semibold text-[12px] leading-[20px] text-[#f5f5f5]">
                  {c.tag}
                </span>
              </div>
            </div>
            {/* Text */}
            <div className="flex flex-col gap-1 items-start text-[16px] leading-[20px]">
              <p className="font-semibold text-[#171717]">{c.title}</p>
              <p className="font-normal text-[#454545]">{c.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
