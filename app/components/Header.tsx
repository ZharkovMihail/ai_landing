"use client";

import { useState } from "react";
import Image from "next/image";
import { imgLogoWhite, imgMenuIcon, imgSocialIcon } from "@/app/lib/assets";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#070504] rounded-b-[14px] max-w-[390px] mx-auto overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-[60px] pb-[10px]">
        <div className="relative w-10 h-10 shrink-0">
          <Image src={imgLogoWhite} alt="ToTheMoonTeam logo" fill className="object-cover" unoptimized />
        </div>
        <button onClick={() => setIsOpen((v) => !v)} className="relative shrink-0 flex items-center justify-center w-[30.5px] h-4">
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1L17 17M17 1L1 17" stroke="#f5f5f5" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <Image src={imgMenuIcon} alt="Menu" fill className="object-contain" unoptimized />
          )}
        </button>
      </div>

      {/* Expandable menu */}
      <div
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <div className="flex flex-col gap-[10px] px-5 pt-[10px] pb-[20px]">
          {/* Nav links */}
          <div className="flex flex-col gap-[10px]">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="font-extrabold text-[30px] leading-[32px] text-white"
            >
              Услуги
            </a>
            <a
              href="#cases"
              onClick={() => setIsOpen(false)}
              className="font-extrabold text-[30px] leading-[32px] text-white"
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
            <div className="relative w-[25px] h-[25px] shrink-0">
              <Image src={imgSocialIcon} alt="Telegram" fill className="object-cover" unoptimized />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
