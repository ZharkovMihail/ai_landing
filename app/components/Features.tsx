import Image from "next/image";
import { imgIconTeam, imgIconProjects, imgIconMvp, imgIconPrice } from "@/app/lib/assets";

const features = [
  {
    icon: imgIconTeam,
    label: "Команда из\u00A0крупных IT-компаний",
    rotate: false,
  },
  {
    icon: imgIconProjects,
    label: "N+ завершённых проектов",
    rotate: false,
  },
  {
    icon: imgIconMvp,
    label: "MVP за\u00A0N\u00A0дней",
    rotate: false,
  },
  {
    icon: imgIconPrice,
    label: "Фиксированная цена в\u00A0договоре",
    rotate: true,
  },
];

export default function Features() {
  return (
    <section className="flex flex-col gap-[30px] items-start px-5 lg:items-center lg:px-0">
      {/* Mobile layout */}
      <div className="flex flex-col gap-[30px] lg:hidden w-full">
        <div className="flex items-start">
          <FeatureItem icon={features[0].icon} label={features[0].label} rotate={false} />
        </div>
        <div className="flex gap-5 items-start">
          <FeatureItem icon={features[1].icon} label={features[1].label} rotate={false} />
          <FeatureItem icon={features[2].icon} label={features[2].label} rotate={false} />
        </div>
        <div className="flex items-start justify-end w-full">
          <FeatureItem icon={features[3].icon} label={features[3].label} rotate />
        </div>
      </div>

      {/* Desktop layout — 2×2 grid */}
      <div className="hidden lg:flex lg:flex-col lg:gap-[30px] lg:w-[856px]">
        <div className="flex gap-[30px] items-center w-full">
          <DesktopFeatureItem icon={features[0].icon} label={features[0].label} rotate={false} />
          <DesktopFeatureItem icon={features[1].icon} label={features[1].label} rotate={false} />
        </div>
        <div className="flex gap-[30px] items-center w-full">
          <DesktopFeatureItem icon={features[2].icon} label={features[2].label} rotate={false} />
          <DesktopFeatureItem icon={features[3].icon} label={features[3].label} rotate />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  icon,
  label,
  rotate,
}: {
  icon: string;
  label: string;
  rotate: boolean;
}) {
  return (
    <div className="flex flex-col gap-1 items-start w-[165px]">
      <div className="relative w-10 h-10 shrink-0">
        <Image
          src={icon}
          alt=""
          fill
          className={`object-cover ${rotate ? "rotate-[29deg]" : ""}`}
          unoptimized
        />
      </div>
      <p className="font-semibold text-[16px] leading-[20px] text-[#171717]">{label}</p>
    </div>
  );
}

function DesktopFeatureItem({
  icon,
  label,
  rotate,
}: {
  icon: string;
  label: string;
  rotate: boolean;
}) {
  return (
    <div className="flex flex-1 gap-[10px] items-center min-w-0">
      <div className="relative size-[80px] shrink-0">
        <Image
          src={icon}
          alt=""
          fill
          className={`object-cover ${rotate ? "rotate-[29deg]" : ""}`}
          unoptimized
        />
      </div>
      <p className="font-semibold text-[22px] leading-[24px] text-[#171717]">{label}</p>
    </div>
  );
}
