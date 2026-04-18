"use client";

import { useState } from "react";
import Image from "next/image";
import { RippleButton } from "@/app/components/RippleButton";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", description: "" });
  const [contactError, setContactError] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async () => {
    if (!isValidContact(form.phone)) {
      setContactError(true);
      return;
    }
    setStatus("loading");
    const parts = [
      form.name && `Имя: ${form.name}`,
      `Контакт: ${form.phone}`,
      form.description && `Описание: ${form.description}`,
    ].filter(Boolean);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: parts.join(" | ") }),
      });
      console.log("[ContactForm] response status:", res.status);
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("success");
      setForm({ name: "", phone: "", description: "" });
    } catch (err) {
      console.error("[ContactForm] submit error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-[90px] bg-white flex flex-col gap-[30px] items-start p-5 rounded-[24px] mx-5 lg:mx-[40px] lg:rounded-[44px] lg:px-[30px] lg:py-[50px]"
    >
      {status === "success" && <SuccessPopup onClose={() => setStatus("idle")} />}

      {/* Mobile heading */}
      <h2 className="font-extrabold text-[30px] leading-[32px] text-[#171717] lg:hidden">
        Готовы обсудить ваш проект?
      </h2>

      {/* Mobile form */}
      <div className="flex flex-col gap-[10px] w-full lg:hidden">
        <FormFields form={form} setForm={setForm} contactError={contactError} setContactError={setContactError} />
        <SubmitButton status={status} onSubmit={handleSubmit} />
        {status === "error" && <p className="text-[#E84D2A] text-[14px]">Ошибка отправки. Попробуйте ещё раз.</p>}
        <Disclaimer />
      </div>

      {/* Desktop two-column layout */}
      <div className="hidden lg:flex lg:gap-[30px] lg:items-start lg:w-full">
        {/* Left column — heading only */}
        <div className="flex flex-1 min-w-0">
          <h2 className="font-extrabold text-[54px] leading-[54px] text-[#171717]">
            Готовы обсудить ваш проект?
          </h2>
        </div>

        {/* Right column */}
        <div className="flex flex-1 flex-col gap-[30px] min-w-0">
          <div className="flex flex-col gap-[10px]">
            <FormFields form={form} setForm={setForm} contactError={contactError} setContactError={setContactError} desktop />
          </div>
          <SubmitButton status={status} onSubmit={handleSubmit} desktop />
          {status === "error" && <p className="text-[#E84D2A] text-[16px]">Ошибка отправки. Попробуйте ещё раз.</p>}
          <Disclaimer />
        </div>
      </div>
    </section>
  );
}

function isValidContact(value: string): boolean {
  const v = value.trim();
  if (!v) return false;
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const digits = v.replace(/[\s\-\(\)]/g, "");
  const isPhone =
    /^\+\d{7,15}$/.test(digits) ||
    /^[78]\d{10}$/.test(digits) ||
    /^\d{10}$/.test(digits);
  const isTelegram = /^@[a-zA-Z0-9_]{3,}$/.test(v);
  return isEmail || isPhone || isTelegram;
}

function FormFields({
  form,
  setForm,
  contactError,
  setContactError,
  desktop,
}: {
  form: { name: string; phone: string; description: string };
  setForm: (f: { name: string; phone: string; description: string }) => void;
  contactError: boolean;
  setContactError: (v: boolean) => void;
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
      <div className="w-full">
        <input
          type="text"
          placeholder="Email / телефон / @telegram"
          value={form.phone}
          onChange={(e) => {
            setForm({ ...form, phone: e.target.value });
            if (contactError && isValidContact(e.target.value)) setContactError(false);
          }}
          onBlur={() => {
            if (form.phone && !isValidContact(form.phone)) setContactError(true);
          }}
          className={`${inputClass} ${contactError ? "ring-2 ring-[#E84D2A]" : ""}`}
        />
        {contactError && (
          <p className={`text-[#E84D2A] mt-1 ${desktop ? "text-[16px]" : "text-[13px]"}`}>
            Введите email, телефон или @telegram
          </p>
        )}
      </div>
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

function SubmitButton({
  status,
  onSubmit,
  desktop,
}: {
  status: Status;
  onSubmit: () => void;
  desktop?: boolean;
}) {
  const loading = status === "loading";

  return (
    <RippleButton
      onClick={onSubmit}
      disabled={loading}
      className={
        desktop
          ? "bg-[#171717] font-semibold text-[28px] text-[#f9fafa] text-center px-[10px] py-[20px] rounded-[14px] w-full disabled:opacity-60"
          : "bg-[#171717] font-semibold text-[20px] text-[#f9fafa] text-center px-[10px] py-[14px] rounded-[15px] w-full disabled:opacity-60"
      }
    >
      {loading ? "Отправка..." : "Оставить заявку"}
    </RippleButton>
  );
}

function Disclaimer() {
  return (
    <p className="font-normal text-[16px] leading-[20px] text-[#737373]">
      Нажимая на кнопку, я соглашаюсь на{" "}
      <a href="/privacy" className="underline">
        обработку персональных данных
      </a>
    </p>
  );
}

function SuccessPopup({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5"
      onClick={onClose}
    >
      <div
        className="relative bg-[#171717] rounded-[24px] flex flex-col gap-[20px] lg:gap-[30px] items-center justify-center p-[30px] lg:p-[60px] w-full max-w-[400px] lg:max-w-[560px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px] text-[#f5f5f5] hover:opacity-60 transition-opacity"
          aria-label="Закрыть"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className="relative shrink-0 size-[60px] lg:size-[100px]">
          <Image src="/envelope.png" alt="Конверт" fill className="object-cover" unoptimized />
        </div>
        <div className="flex flex-col gap-[4px] items-center text-center text-[#f5f5f5] font-semibold text-[16px] leading-[20px] lg:text-[22px] lg:leading-[24px]">
          <p>Заявка успешно отправлена!</p>
          <p>В ближайшее время мы с вами свяжемся</p>
        </div>
      </div>
    </div>
  );
}
