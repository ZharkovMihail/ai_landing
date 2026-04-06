"use client";
import { useState } from "react";
import Quiz from "./Quiz";

export default function QuizTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-[#f5f5f5] rounded-[10px] px-3 py-[14px] text-[#171717] text-[20px] font-semibold text-center"
      >
        Рассчитать стоимость
      </button>
      <Quiz isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
