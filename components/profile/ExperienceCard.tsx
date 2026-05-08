"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { EXPERIENCE_DATA } from "@/data/experience";
import { useScrollProgress } from "@/lib/useScrollProgress";

const ExperienceCard = () => {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const total = EXPERIENCE_DATA.length;

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

        {EXPERIENCE_DATA.map((item, idx) => {
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
                <Briefcase
                  size={8}
                  className="text-violet-500 dark:text-violet-400"
                />
              </span>

              {/* Role + Company */}
              <h3 className="font-semibold text-lg sm:text-xl tracking-tight text-foreground mb-1.5 transition-colors">
                {item.role}
                <span className="text-foreground/40 font-normal"> · </span>
                <span className="text-foreground/80 font-medium">{item.company}</span>
              </h3>

              {/* Meta row: date + location */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.8rem] text-foreground/60 mb-3.5">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {item.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {item.location}
                </span>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-4">
                {item.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-base text-foreground/85 leading-relaxed flex gap-2.5"
                  >
                    <span className="text-foreground/30 select-none mt-1 shrink-0">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceCard;
