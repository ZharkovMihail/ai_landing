"use client";

import { useState } from "react";
import Image from "next/image";
import { imgLogoWhite, imgSocialIcon } from "@/app/lib/assets";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#070504] rounded-b-[14px] overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-[20px] pb-[10px] lg:px-[70px] lg:py-[20px]">
        <div className="relative w-10 h-10 shrink-0">
          <Image src={imgLogoWhite} alt="ToTheMoonTeam logo" fill className="object-cover" unoptimized />
        </div>
        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-[40px]">
          <a href="#services" className="font-semibold text-[22px] leading-[24px] text-[#f5f5f5] transition-colors duration-200 hover:text-[#E15B34]">Услуги</a>
          <a href="#cases" className="font-semibold text-[22px] leading-[24px] text-[#f5f5f5] transition-colors duration-200 hover:text-[#E15B34]">Кейсы</a>
          <a href="#footer" className="font-semibold text-[22px] leading-[24px] text-[#f5f5f5] transition-colors duration-200 hover:text-[#E15B34]">Контакты</a>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setIsOpen((v) => !v)} className="relative shrink-0 flex items-center justify-center w-[30.5px] h-4 lg:hidden">
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
            <line
              x1="0" y1="1" x2="24" y2="1"
              stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round"
              style={{
                transformOrigin: "12px 1px",
                transform: isOpen ? "translateY(7px) rotate(45deg)" : "none",
                transition: "transform 0.3s ease",
              }}
            />
            <line
              x1="0" y1="8" x2="24" y2="8"
              stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round"
              style={{
                transformOrigin: "12px 8px",
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? "scaleX(0)" : "none",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
            />
            <line
              x1="0" y1="15" x2="24" y2="15"
              stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round"
              style={{
                transformOrigin: "12px 15px",
                transform: isOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                transition: "transform 0.3s ease",
              }}
            />
          </svg>
        </button>
      </div>

      {/* Expandable menu (mobile only) */}
      <div
        className="lg:hidden transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <div className="flex flex-col gap-[10px] px-5 pt-[10px] pb-[20px] lg:px-[70px] lg:pb-[30px]">
          {/* Nav links */}
          <div className="flex flex-col gap-[10px]">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="font-extrabold text-[30px] leading-[32px] text-white transition-colors duration-200 hover:text-[#E15B34]"
            >
              Услуги
            </a>
            <a
              href="#cases"
              onClick={() => setIsOpen(false)}
              className="font-extrabold text-[30px] leading-[32px] text-white transition-colors duration-200 hover:text-[#E15B34]"
            >
              Кейсы
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[10px] items-end mt-[10px]">
            <a
              href="mailto:tothemoonteam@gmail.com"
              className="font-semibold text-[16px] leading-[20px] text-white"
            >
              tothemoonteam@gmail.com
            </a>
            <a href="https://t.me/isaev_wrk" target="_blank" rel="noopener noreferrer" className="relative w-[40px] h-[40px] shrink-0 block">
              <Image src={imgSocialIcon} alt="Telegram" fill className="object-cover" unoptimized />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
