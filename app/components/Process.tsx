"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const STEP_DURATION = 4500;

const steps = [
  {
    number: "01",
    title: "Бесплатная оценка",
    description: "Опишите задачу, мы оценим сроки и стоимость за\u00A024\u00A0часа",
    video: "/images/Main1.mp4",
  },
  {
    number: "02",
    title: "Фиксация условий",
    description: "Договор с фиксированной ценой, чёткие сроки, никаких сюрпризов",
    video: "/images/Main2.mp4",
  },
  {
    number: "03",
    title: "Разработка",
    description: "Работаем спринтами, показываем промежуточные результаты каждую неделю",
    video: "/images/Main3.mp4",
  },
  {
    number: "04",
    title: "Запуск + поддержка",
    description: "Деплой, тестирование, передача и гарантийная поддержка",
    video: "/images/Main4.mp4",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const activeStepRef = useRef(0);
  const progressRef = useRef(0);
  const lastTsRef = useRef<number | null>(null);
  const isRunningRef = useRef(false);
  const userPausedRef = useRef(false);

  const stop = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    lastTsRef.current = null;
    isRunningRef.current = false;
  }, []);

  const start = useCallback(() => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    lastTsRef.current = null;

    const tick = (ts: number) => {
      if (!isRunningRef.current) return;

      if (lastTsRef.current === null) lastTsRef.current = ts;
      const delta = ts - lastTsRef.current;
      lastTsRef.current = ts;

      progressRef.current = Math.min(progressRef.current + delta / STEP_DURATION, 1);
      setProgress(progressRef.current);

      if (progressRef.current >= 1) {
        const next = (activeStepRef.current + 1) % steps.length;
        activeStepRef.current = next;
        setActiveStep(next);
        progressRef.current = 0;
        setProgress(0);
        lastTsRef.current = null;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const activate = useCallback(
    (index: number) => {
      userPausedRef.current = true;
      stop();
      activeStepRef.current = index;
      progressRef.current = 1;
      setActiveStep(index);
      setProgress(1);
    },
    [stop]
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPausedRef.current) {
          start();
        } else if (!entry.isIntersecting) {
          stop();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      stop();
    };
  }, [start, stop]);

  return (
    <section ref={sectionRef} className="flex flex-col gap-[30px] items-center px-5 lg:px-[70px]">
      <h2 className="font-extrabold text-[30px] leading-[32px] text-[#171717] w-full lg:text-[54px] lg:leading-[54px]">
        От идеи до запуска -{" "}
        <span className="block lg:inline">4 простых шага</span>
      </h2>

      {/* Mobile layout */}
      <div className="bg-white flex flex-col gap-[10px] items-start p-5 rounded-[24px] w-full lg:hidden">
        {steps.map((step, i) => {
          const isActive = activeStep === i;
          return (
            <button
              key={step.number}
              onClick={() => activate(i)}
              className={`bg-[#f5f5f5] border border-[#f7f7f7] flex gap-5 p-[14px] rounded-[10px] w-full text-left transition-all duration-300 ${isActive ? "items-start" : "items-center"}`}
            >
              <div className="relative shrink-0 self-stretch w-[2px] bg-[#d1d1d1] overflow-hidden rounded-full">
                <div
                  className="absolute top-0 left-0 w-full bg-[#E84D2A] rounded-full"
                  style={{
                    height: "100%",
                    transform: `scaleY(${isActive ? progress : 0})`,
                    transformOrigin: "top",
                  }}
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <p
                  className="font-semibold text-[16px] leading-[20px] transition-colors duration-200"
                  style={{ color: isActive ? "#171717" : "#737373" }}
                >
                  {step.number} {step.title}
                </p>
                {step.description && (
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: isActive ? "100px" : "0px",
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? "10px" : "0px",
                    }}
                  >
                    <p className="font-normal text-[16px] leading-[20px] text-[#737373]">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Desktop layout: steps list (left) + video panel (right) */}
      <div className="hidden lg:flex bg-white gap-[30px] items-start px-[30px] py-[50px] rounded-[44px] w-full">
        {/* Left: step buttons with inline description */}
        <div className="flex flex-col gap-[10px] flex-none" style={{ width: "calc((100% - 60px) / 3)" }}>
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <button
                key={step.number}
                onClick={() => activate(i)}
                className={`bg-[#f5f5f5] border border-[#f7f7f7] flex gap-[30px] p-[20px] rounded-[14px] w-full text-left transition-all duration-300 ${isActive ? "items-start" : "items-center"}`}
              >
                <div className="relative shrink-0 self-stretch w-[2px] bg-[#d1d1d1] overflow-hidden rounded-full">
                  <div
                    className="absolute top-0 left-0 w-full bg-[#E84D2A] rounded-full transition-transform duration-75"
                    style={{
                      height: "100%",
                      transform: `scaleY(${isActive ? progress : 0})`,
                      transformOrigin: "top",
                    }}
                  />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <p
                    className="font-semibold text-[22px] leading-[24px] transition-colors duration-200"
                    style={{ color: isActive ? "#171717" : "#737373" }}
                  >
                    {step.number} {step.title}
                  </p>
                  {step.description && (
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: isActive ? "120px" : "0px",
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? "10px" : "0px",
                      }}
                    >
                      <p className="font-normal text-[22px] leading-[26px] text-[#737373]">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: video for active step */}
        <div className="flex flex-1 items-center justify-center min-h-[328px] overflow-hidden rounded-[24px] bg-[#f5f5f5]">
          <video
            key={steps[activeStep].video}
            src={steps[activeStep].video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[24px]"
          />
        </div>
      </div>
    </section>
  );
}
