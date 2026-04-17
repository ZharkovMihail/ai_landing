"use client";

import { useRef, useState } from "react";

type RippleState = { x: number; y: number; size: number } | null;

function useRipple() {
  const ref = useRef<HTMLElement>(null);
  const [ripple, setRipple] = useState<RippleState>(null);
  const [active, setActive] = useState(false);

  const onMouseEnter = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.sqrt(rect.width ** 2 + rect.height ** 2) * 2;
    setRipple({ x, y, size });
    setActive(true);
  };

  const onMouseLeave = () => setActive(false);

  const rippleEl = ripple ? (
    <span
      className="absolute rounded-full pointer-events-none"
      style={{
        width: ripple.size,
        height: ripple.size,
        left: ripple.x,
        top: ripple.y,
        transform: `translate(-50%, -50%) scale(${active ? 1 : 0})`,
        backgroundColor: "#E15B34",
        opacity: active ? 1 : 0,
        transition: active
          ? "transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.1s"
          : "transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s 0.1s",
      }}
    />
  ) : null;

  return { ref, onMouseEnter, onMouseLeave, rippleEl };
}

export function RippleLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const { ref, onMouseEnter, onMouseLeave, rippleEl } = useRipple();

  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={href}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {rippleEl}
      <span className="relative z-10">{children}</span>
    </a>
  );
}

export function RippleButton({
  onClick,
  className,
  children,
}: {
  onClick?: () => void;
  className: string;
  children: React.ReactNode;
}) {
  const { ref, onMouseEnter, onMouseLeave, rippleEl } = useRipple();

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {rippleEl}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
