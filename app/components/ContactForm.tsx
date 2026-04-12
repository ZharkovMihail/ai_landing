"use client";

import { useState } from "react";
import Image from "next/image";
import { imgSocialIcon } from "@/app/lib/assets";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", description: "" });

  return (
    <section
      id="contact"
      className="bg-white flex flex-col gap-[30px] items-start p-5 rounded-[24px] mx-5 lg:mx-0 lg:rounded-tl-[44px] lg:rounded-tr-[44px] lg:rounded-bl-none lg:rounded-br-none lg:px-[70px] lg:pt-[50px] lg:pb-[60px] lg:p-0"
    >
      {/* Desktop branding header */}
      <p
        className="hidden lg:block font-extrabold text-[32px] text-[#171717] tracking-[-0.04em] w-full"
        style={{ fontFamily: "var(--font-geologica), sans-serif" }}
      >
        ToTheMoonTeam
      </p>

      {/* Mobile heading */}
      <h2 className="font-extrabold text-[30px] leading-[32px] text-[#171717] lg:hidden">
        Готовы обсудить ваш проект?
      </h2>

      {/* Mobile form */}
      <div className="flex flex-col gap-[10px] w-full lg:hidden">
        <FormFields form={form} setForm={setForm} />
        <SubmitButton />
        <Disclaimer />
      </div>

      {/* Desktop two-column layout */}
      <div className="hidden lg:flex lg:gap-[30px] lg:items-start lg:w-full">
        {/* Left column */}
        <div className="flex flex-1 flex-col gap-[30px] min-w-0">
          <h2 className="font-extrabold text-[54px] leading-[54px] text-[#171717]">
            Готовы обсудить<br />ваш проект?
          </h2>
          <div className="flex flex-col justify-between flex-1 gap-[30px]">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[22px] leading-[24px] text-[#171717]">
                tothemoonteam@gmail.com
              </p>
              <a
                href="https://t.me/isaev_wrk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[25px] h-[25px] shrink-0 block"
              >
                <Image src={imgSocialIcon} alt="Telegram" fill className="object-cover" unoptimized />
              </a>
            </div>
            <p className="font-semibold text-[12px] leading-[20px] text-[#171717]">
              Политика конфиденциальности
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-1 flex-col gap-[30px] min-w-0">
          <div className="flex flex-col gap-[10px]">
            <FormFields form={form} setForm={setForm} desktop />
          </div>
          <SubmitButton desktop />
          <Disclaimer />
        </div>
      </div>
    </section>
  );
}

function FormFields({
  form,
  setForm,
  desktop,
}: {
  form: { name: string; phone: string; description: string };
  setForm: (f: { name: string; phone: string; description: string }) => void;
  desktop?: boolean;
}) {
  const inputClass = desktop
    ? "bg-[#f5f5f5] font-normal text-[22px] text-[#171717] placeholder-[#c6c6c6] px-[20px] py-[20px] rounded-[14px] w-full outline-none leading-[26px]"
    : "bg-[#f5f5f5] font-semibold text-[16px] text-[#171717] placeholder-[#c6c6c6] px-[10px] py-[14px] rounded-[10px] w-full outline-none";

  return (
    <>
      <input
        type="text"
        placeholder="Имя"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={inputClass}
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={inputClass}
      />
      <textarea
        placeholder="Описание задачи (опционально)"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        rows={4}
        className={`${inputClass} resize-none ${desktop ? "h-[150px]" : "h-[105px]"}`}
      />
    </>
  );
}

function SubmitButton({ desktop }: { desktop?: boolean }) {
  return (
    <button
      className={
        desktop
          ? "bg-[#171717] font-semibold text-[28px] text-[#f9fafa] text-center px-[10px] py-[20px] rounded-[14px] w-full"
          : "bg-[#171717] font-semibold text-[20px] text-[#f9fafa] text-center px-[10px] py-[14px] rounded-[15px] w-full"
      }
    >
      Оставить заявку
    </button>
  );
}

function Disclaimer() {
  return (
    <p className="font-normal text-[16px] leading-[20px] text-[#737373]">
      Нажимая на кнопку, я соглашаюсь
      <br />
      на{" "}
      <a href="/privacy" className="underline">
        обработку персональных данных
      </a>
    </p>
  );
}
