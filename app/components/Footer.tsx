import Image from "next/image";
import { imgSocialIcon } from "@/app/lib/assets";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`bg-[#171717] flex flex-col gap-5 items-start p-5 rounded-t-[24px] ${className}`}>
      <p
        className="font-extrabold text-[32px] text-white tracking-[-0.04em] w-full"
        style={{ fontFamily: "var(--font-geologica), sans-serif" }}
      >
        ToTheMoonTeam
      </p>
      <div className="flex flex-col gap-[10px] items-start w-full">
        <div className="flex items-center justify-between w-full">
          <p className="font-semibold text-[16px] leading-[20px] text-white">
            tothemoonteam@gmail.com
          </p>
          <a href="https://t.me/isaev_wrk" target="_blank" rel="noopener noreferrer" className="relative w-[40px] h-[40px] shrink-0 block">
            <Image src={imgSocialIcon} alt="Telegram" fill className="object-cover" unoptimized />
          </a>
        </div>
        <p className="font-semibold text-[12px] leading-[20px] text-white">
          Политика конфиденциальности
        </p>
      </div>
    </footer>
  );
}
