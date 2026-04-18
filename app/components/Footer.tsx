import Image from "next/image";
import { imgSocialIcon } from "@/app/lib/assets";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer id="footer" className={`text-white ${className}`}>
      {/* Mobile */}
      <div className="bg-[#171717] flex flex-col gap-5 items-start p-5 rounded-t-[24px] lg:hidden">
        <p
          className="font-extrabold text-[32px] tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-geologica), sans-serif" }}
        >
          ToTheMoonTeam
        </p>
        <div className="flex flex-col gap-[10px] items-start w-full">
          <div className="flex items-center justify-between w-full">
            <p className="font-semibold text-[16px] leading-[20px]">
              tothemoonteam@gmail.com
            </p>
            <a href="https://t.me/isaev_wrk" target="_blank" rel="noopener noreferrer" className="relative w-[40px] h-[40px] shrink-0 block">
              <Image src={imgSocialIcon} alt="Telegram" fill className="object-cover" unoptimized />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="bg-[#171717] hidden lg:flex gap-[30px] items-end px-[70px] py-[100px] rounded-tl-[44px] rounded-tr-[44px]">
        <div className="flex flex-col gap-[10px] items-start shrink-0 w-[414px] pb-[13px]">
          <p className="font-semibold text-[22px] leading-[24px]">Напишите нам</p>
          <div className="flex gap-[20px] items-center">
            <a
              href="mailto:tothemoonteam@gmail.com"
              className="font-semibold text-[22px] leading-[24px] transition-colors duration-200 hover:text-[#E15B34]"
            >
              tothemoonteam@gmail.com
            </a>
            <a
              href="https://t.me/isaev_wrk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[22px] leading-[24px] transition-colors duration-200 hover:text-[#E15B34]"
            >
              telegram
            </a>
          </div>
        </div>
        <p
          className="flex-1 font-extrabold text-[106px] leading-none tracking-[-4.24px] min-w-0"
          style={{ fontFamily: "var(--font-geologica), sans-serif" }}
        >
          ToTheMoonTeam
        </p>
      </div>
    </footer>
  );
}
