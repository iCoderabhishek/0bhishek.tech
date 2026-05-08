"use client";

import React from "react";
import { Calendar, Circle } from "lucide-react";
import { LEARNING_DATA } from "@/data/learn";
import { useScrollProgress } from "@/lib/useScrollProgress";

const LearnTimeline = () => {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const total = LEARNING_DATA.length;

  return (
    <div
      ref={ref}
      className="relative max-w-full md:max-w-4xl lg:max-w-4xl mx-auto rounded-2xl px-5 sm:px-15 lg:p-6 overflow-hidden"
    >
      <div className="relative pl-6 space-y-8">
        {/* Static rail backdrop (faint) */}
        <div
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-px bg-foreground/10"
        />
        {/* Animated colored rail (scroll-driven) */}
        <div
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-px bg-violet-500/70 dark:bg-violet-400/65 origin-top"
          style={{
            transform: `scaleY(${progress})`,
          }}
        />

        {LEARNING_DATA.map((item, idx) => {
          const threshold = idx / total;
          const dotProgress = Math.max(
            0,
            Math.min(1, (progress - threshold) * 6),
          );
          return (
            <div key={idx} className="relative group">
              {/* Dot */}
              <span
                className="absolute -left-8 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-violet-500/50 dark:border-violet-400/50"
                style={{
                  opacity: dotProgress,
                  transform: `scale(${0.5 + dotProgress * 0.5})`,
                }}
              >
                <Circle
                  size={8}
                  className="text-violet-500 dark:text-violet-400"
                />
              </span>

              {/* Header */}
              <div className="flex items-center gap-2 text-[0.8rem] text-foreground/60 mb-2">
                <Calendar size={13} />
                <span>{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg sm:text-xl tracking-tight text-foreground mb-2.5 transition-colors">
                {item.title}
              </h3>

              {/* Note */}
              <p className="text-base text-foreground/85 leading-relaxed mb-4">
                {item.note}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 border border-foreground/25 rounded-full text-foreground/70 font-medium hover:border-foreground/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Shadow below Timeline */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-10 w-full bg-linear-to-t from-background via-background/90 to-transparent" />
    </div>
  );
};

export default LearnTimeline;
