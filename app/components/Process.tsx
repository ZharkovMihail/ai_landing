const steps = [
  {
    number: "01",
    title: "Бесплатная оценка",
    description: "Опишите задачу, мы оценим сроки и стоимость за 24 часа",
    showDescription: true,
  },
  { number: "02", title: "Фиксация условий", showDescription: false },
  { number: "03", title: "Разработка", showDescription: false },
  { number: "04", title: "Запуск + поддержка", showDescription: false },
];

export default function Process() {
  return (
    <section className="flex flex-col gap-[30px] items-center px-5">
      <h2 className="font-extrabold text-[30px] leading-[32px] text-[#171717] w-full">
        От идеи до запуска —{" "}
        <span className="block">4 простых шага</span>
      </h2>
      <div className="bg-white flex flex-col gap-[10px] items-start p-5 rounded-[24px] w-full">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-[#f5f5f5] border border-[#f7f7f7] flex gap-5 items-start p-[14px] rounded-[10px] w-full"
          >
            <div className="flex flex-col gap-[10px] flex-1 min-w-0">
              <p className="font-semibold text-[16px] leading-[20px] text-[#171717]">
                {step.number} {step.title}
              </p>
              {step.showDescription && (
                <p className="font-normal text-[16px] leading-[20px] text-[#737373]">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
