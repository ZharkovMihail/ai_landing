"use client";
import { useState, useRef, useEffect, useCallback } from "react";

const QUESTIONS = [
  {
    question: "Что нужно сделать?",
    options: ["AI-решение", "Приложение с нуля", "Доработка"],
  },
  {
    question: "На каком этапе вы сейчас?",
    options: ["Есть идея", "Есть ТЗ", "Есть прототип"],
  },
  {
    question: "Когда нужен результат?",
    options: ["Срочно", "1–2 месяца", "Не горит"],
  },
];

function AnimatedBlock({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div
      style={{
        transform: visible ? "translateY(0)" : "translateY(30px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.35s ease-out, opacity 0.35s ease-out",
      }}
    >
      {children}
    </div>
  );
}

interface QuestionBlockProps {
  question: string;
  options: string[];
  answer: string | null;
  pending: string | null;
  isActive: boolean;
  onSelect: (opt: string) => void;
  isNew: boolean;
}

function QuestionBlock({
  question,
  options,
  answer,
  pending,
  isActive,
  onSelect,
  isNew,
}: QuestionBlockProps) {
  const selected = answer ?? pending;

  const inner = (
    <div className="flex flex-col gap-[4px] items-start">
      <div className="bg-[#e15b34] rounded-[10px] pl-[10px] pr-[30px] py-[10px]">
        <p className="text-[#f5f5f5] text-[16px] leading-[20px] whitespace-nowrap">
          {question}
        </p>
      </div>
      <div className="bg-[#e15b34] rounded-[10px] pl-[10px] pr-[30px] py-[10px] flex flex-col gap-[10px]">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => isActive && !selected && onSelect(opt)}
            className="flex items-center gap-[8px] text-left"
          >
            <div
              className="shrink-0 size-[12px] rounded-full transition-colors duration-200"
              style={{
                backgroundColor:
                  selected === opt ? "#ffffff" : "#171717",
              }}
            />
            <span className="text-[#f5f5f5] text-[16px] leading-[20px] whitespace-nowrap">
              {opt}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  return isNew ? <AnimatedBlock>{inner}</AnimatedBlock> : inner;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Quiz({ isOpen, onClose }: Props) {
  const [visibleBlocks, setVisibleBlocks] = useState(1);
  const [answers, setAnswers] = useState<(string | null)[]>([null, null, null]);
  const [pending, setPending] = useState<{
    index: number;
    option: string;
  } | null>(null);
  const [showInput, setShowInput] = useState(false);
  const [contact, setContact] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [newBlockIndex, setNewBlockIndex] = useState<number | null>(null);

  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Animate first block in on open
  useEffect(() => {
    if (isOpen) {
      setVisibleBlocks(1);
      setAnswers([null, null, null]);
      setPending(null);
      setShowInput(false);
      setContact("");
      setIsDone(false);
      setNewBlockIndex(0);
    }
  }, [isOpen]);

  // Scroll to bottom when content changes
  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;
    const id = setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 50);
    return () => clearTimeout(id);
  }, [visibleBlocks, showInput]);

  // Focus input when it appears
  useEffect(() => {
    if (showInput && inputRef.current) {
      const id = setTimeout(() => inputRef.current?.focus(), 400);
      return () => clearTimeout(id);
    }
  }, [showInput]);

  const selectOption = useCallback(
    (blockIndex: number, option: string) => {
      if (pending !== null) return;
      if (answers[blockIndex] !== null) return;

      setPending({ index: blockIndex, option });

      setTimeout(() => {
        setAnswers((prev) => {
          const next = [...prev];
          next[blockIndex] = option;
          return next;
        });
        setPending(null);

        if (blockIndex < 2) {
          setNewBlockIndex(blockIndex + 1);
          setVisibleBlocks(blockIndex + 2);
        } else {
          // Delay input appearance so it doesn't overlap with the last message
          setTimeout(() => {
            setShowInput(true);
          }, 400);
        }
      }, 500);
    },
    [pending, answers]
  );

  const handleBack = useCallback(() => {
    if (showInput) {
      setShowInput(false);
      setContact("");
      setAnswers((prev) => {
        const next = [...prev];
        next[2] = null;
        return next;
      });
      setNewBlockIndex(null);
    } else if (visibleBlocks > 1) {
      const prevVisible = visibleBlocks - 1;
      setVisibleBlocks(prevVisible);
      setAnswers((prev) => {
        const next = [...prev];
        next[prevVisible - 1] = null;
        return next;
      });
      setPending(null);
      setNewBlockIndex(null);
    }
  }, [showInput, visibleBlocks]);

  const handleSubmit = useCallback(() => {
    if (!contact.trim()) return;
    setIsDone(true);
  }, [contact]);

  const handleReset = useCallback(() => {
    setVisibleBlocks(1);
    setAnswers([null, null, null]);
    setPending(null);
    setShowInput(false);
    setContact("");
    setIsDone(false);
    setNewBlockIndex(0);
  }, []);

  if (!isOpen) return null;

  const filledDots = isDone ? 4 : showInput ? 4 : visibleBlocks;
  const showBackButton = visibleBlocks > 1 || showInput;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end items-end px-5 pb-5 gap-5">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Card */}
      <div className="relative w-full bg-[#171717] rounded-[24px] h-[400px] flex flex-col overflow-hidden">
        {isDone ? (
          /* Success screen */
          <div className="flex flex-col items-center justify-center h-full gap-5 p-5 text-center">
            <p className="font-extrabold text-[30px] leading-[32px] text-[#f5f5f5] w-full">
              Ваша оценка отправлена
            </p>
            <button
              onClick={handleReset}
              className="font-semibold text-[16px] leading-[20px] text-[#f5f5f5]"
            >
              Начать сначала
            </button>
          </div>
        ) : (
          <>
            {/* Messages area */}
            <div
              ref={messagesRef}
              className="flex-1 flex flex-col gap-5 px-5 pt-5 pb-[70px] overflow-y-auto"
              style={
                {
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                } as React.CSSProperties
              }
            >
              {QUESTIONS.slice(0, visibleBlocks).map((q, i) => (
                <QuestionBlock
                  key={i}
                  question={q.question}
                  options={q.options}
                  answer={answers[i]}
                  pending={pending?.index === i ? pending.option : null}
                  isActive={i === visibleBlocks - 1 && !showInput}
                  onSelect={(opt) => selectOption(i, opt)}
                  isNew={newBlockIndex === i}
                />
              ))}
              {showInput && (
                <AnimatedBlock>
                  <div className="bg-[#e15b34] rounded-[10px] px-[10px] py-[10px] w-full">
                    <p className="text-[#f5f5f5] text-[16px] leading-[20px]">
                      Куда нам отправить вашу оценку?
                    </p>
                    <p className="text-[#f5f5f5] text-[16px] leading-[20px]">
                      (Номер телефона или Telegram)
                    </p>
                  </div>
                </AnimatedBlock>
              )}
            </div>

            {/* Bottom bar */}
            <div className="shrink-0 px-5 pb-5 pt-[14px] flex flex-col gap-[10px]">
              {showInput && (
                <div className="bg-[#e15b34] rounded-[10px] flex items-center px-[14px] py-[14px] gap-[10px]">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Ваш телефон или Telegram"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    className="flex-1 bg-transparent text-[16px] leading-[20px] outline-none placeholder:text-white/60"
                    style={{ color: "#f5f5f5" }}
                  />
                  <button
                    onClick={handleSubmit}
                    className="shrink-0 size-[20px] flex items-center justify-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M18.3334 1.66669L9.16675 10.8334M18.3334 1.66669L12.5001 18.3334L9.16675 10.8334M18.3334 1.66669L1.66675 7.50002L9.16675 10.8334"
                        stroke="#f5f5f5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}
              {/* Progress dots + Назад */}
              <div className="flex items-center justify-between">
                <div className="flex gap-[6px]">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-[3px] w-[20px] rounded-full transition-colors duration-300"
                      style={{
                        backgroundColor: i < filledDots ? "#e15b34" : "#444",
                      }}
                    />
                  ))}
                </div>
                {showBackButton && (
                  <button
                    onClick={handleBack}
                    className="font-semibold text-[12px] leading-[20px] text-[#f5f5f5]"
                  >
                    Назад
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Chevron close button */}
      <button
        onClick={onClose}
        className="relative shrink-0 size-[60px] bg-[#171717] rounded-[14px] flex items-center justify-center z-10"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9L12 15L18 9"
            stroke="#f5f5f5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
