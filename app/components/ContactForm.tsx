"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", description: "" });

  return (
    <section className="bg-white flex flex-col gap-[30px] items-start p-5 rounded-[24px] mx-5">
      <h2 className="font-extrabold text-[30px] leading-[32px] text-[#171717]">
        Готовы обсудить ваш проект?
      </h2>

      <div className="flex flex-col gap-[10px] w-full">
        <input
          type="text"
          placeholder="Имя"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="bg-[#f5f5f5] font-semibold text-[16px] text-[#171717] placeholder-[#c6c6c6] px-[10px] py-[14px] rounded-[10px] w-full outline-none"
        />
        <input
          type="tel"
          placeholder="Телефон"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="bg-[#f5f5f5] font-semibold text-[16px] text-[#171717] placeholder-[#c6c6c6] px-[10px] py-[14px] rounded-[10px] w-full outline-none"
        />
        <textarea
          placeholder="Описание задачи (опционально)"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows={4}
          className="bg-[#f5f5f5] font-semibold text-[16px] text-[#171717] placeholder-[#c6c6c6] px-[10px] py-[14px] rounded-[10px] w-full outline-none resize-none h-[105px]"
        />
      </div>

      <button className="bg-[#171717] font-semibold text-[20px] text-[#f9fafa] text-center px-[10px] py-[14px] rounded-[15px] w-full">
        Оставить заявку
      </button>

      <p className="font-normal text-[16px] leading-[20px] text-[#737373]">
        Нажимая на кнопку, я соглашаюсь
        <br />
        на{" "}
        <a href="/privacy" className="underline">
          обработку персональных данных
        </a>
      </p>
    </section>
  );
}
