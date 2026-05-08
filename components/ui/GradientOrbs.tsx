"use client";

import { useEffect, useRef } from "react";

const IDLE_MS = 1500;
const LERP = 0.08;

export function GradientOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRef.current = { x, y };

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        targetRef.current = { x: 0, y: 0 };
      }, IDLE_MS);
    };

    let raf = 0;
    const tick = () => {
      const t = targetRef.current;
      const c = currentRef.current;
      currentRef.current = {
        x: c.x + (t.x - c.x) * LERP,
        y: c.y + (t.y - c.y) * LERP,
      };
      container.style.setProperty("--mx", currentRef.current.x.toFixed(3));
      container.style.setProperty("--my", currentRef.current.y.toFixed(3));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    if (finePointer) {
      window.addEventListener("mousemove", onMove);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-x-0 top-0 h-[700px] sm:h-[850px] lg:h-[1000px] overflow-hidden"
      style={{ "--mx": "0", "--my": "0" } as React.CSSProperties}
    >
      <Orb
        position="top-[6%] left-1/2 -translate-x-1/2"
        size="h-72 w-72 sm:h-96 sm:w-96"
        color="bg-amber-200/55 dark:bg-indigo-500/22"
        parallax={[80, 55]}
        animate="animate-drift-1"
      />
      <Orb
        position="top-[26%] left-[22%]"
        size="h-64 w-64 sm:h-80 sm:w-80"
        color="bg-rose-200/45 dark:bg-blue-500/18"
        parallax={[-55, 40]}
        animate="animate-drift-2"
      />
      <Orb
        position="top-[16%] right-[22%]"
        size="h-56 w-56 sm:h-72 sm:w-72"
        color="bg-emerald-100/55 dark:bg-violet-500/18"
        parallax={[45, 65]}
        animate="animate-drift-3"
      />
      <Orb
        position="top-[55%] left-[38%]"
        size="h-64 w-64 sm:h-80 sm:w-80"
        color="bg-sky-100/40 dark:bg-fuchsia-500/12"
        parallax={[-35, -50]}
        animate="animate-drift-1"
      />
    </div>
  );
}

function Orb({
  position,
  size,
  color,
  parallax,
  animate,
}: {
  position: string;
  size: string;
  color: string;
  parallax: [number, number];
  animate: string;
}) {
  return (
    <div className={`absolute ${position}`}>
      <div
        style={{
          transform: `translate(calc(var(--mx) * ${parallax[0]}px), calc(var(--my) * ${parallax[1]}px))`,
          transition: "transform 0.05s linear",
        }}
      >
        <div className={`${size} ${color} rounded-full blur-3xl ${animate}`} />
      </div>
    </div>
  );
}
