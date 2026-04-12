import Image from "next/image";
import { imgCaseCover1, imgCaseCover2, imgCaseCover3 } from "@/app/lib/assets";

const cases = [
  {
    tag: "вайбкодинг",
    image: imgCaseCover1,
    title: "Проект под NDA",
    description:
      "Разработан веб-сервис для общения с языковой моделью в стиле заданного персонажа или набора характеристик с возможностью гибкой настройки. Платформа поддерживает генерацию AI-контента, включая изображения, с перспективой добавления аудио и видео.",
  },
  {
    tag: "AI-аналитика",
    image: imgCaseCover2,
    title: "Приложение для OZON — my.blaber.ai",
    description:
      "AI-платформа, которая автоматически анализирует вебконтент. Благодаря алгоритмам AI платформа проводит анализ выдачи поисковой системы Google и Yandex и дает оценку каждому сайту на наличие негативной и позитивной информации.",
  },
  {
    tag: "AI-платформа",
    image: imgCaseCover3,
    title: "REPUTATE",
    description:
      "AI-платформа, которая автоматически анализирует вебконтент. Благодаря алгоритмам AI платформа проводит анализ выдачи поисковой системы Google и Yandex и дает оценку каждому сайту на наличие негативной и позитивной информации.",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="scroll-mt-[80px] flex flex-col gap-[30px] items-start px-5">
      <h2 className="font-extrabold text-[30px] leading-[32px] text-[#171717]">Кейсы</h2>

      {cases.map((c, i) => (
        <div key={i} className="flex flex-col gap-[10px] items-start w-full">
          {/* Image */}
          <div className="overflow-hidden relative rounded-[14px] w-full aspect-video">
            <Image src={c.image} alt="" fill className="object-cover" unoptimized />
            {c.tag && (
              <div className="absolute left-[11px] top-[10px] backdrop-blur-[5px] bg-[rgba(69,69,69,0.6)] px-[10px] py-[6px] rounded-[5px]">
                <span className="font-semibold text-[12px] leading-[20px] text-[#f5f5f5]">
                  {c.tag}
                </span>
              </div>
            )}
          </div>
          {/* Text */}
          <div className="flex flex-col gap-[4px] text-[16px] leading-[20px]">
            <p className="font-semibold text-[#171717]">{c.title}</p>
            <p className="font-normal text-[#454545]">{c.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
