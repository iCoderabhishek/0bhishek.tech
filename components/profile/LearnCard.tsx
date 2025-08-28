import React from "react";
import { Calendar, Circle } from "lucide-react";
import { LEARNING_DATA } from "@/data/learn";

const LearnTimeline = () => {
  return (
    <div className="relative max-w-full md:max-w-4xl lg:max-w-4xl mx-auto rounded-2xl pl-15 pr-15 lg:p-6 overflow-hidden">
      <div className="relative border-l border-gray-700 pl-6 space-y-8">
        {LEARNING_DATA.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Dot */}
            <span className="absolute -left-[32px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#2A2A2A] border border-gray-600">
              <Circle size={8} className="text-gray-400" />
            </span>

            {/* Header */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
              <Calendar size={12} />
              <span>{item.date}</span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-base text-white mb-2 group-hover:text-gray-100 transition-colors">
              {item.title}
            </h3>

            {/* Note */}
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              {item.note}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 border border-white border-opacity-30 rounded-full text-gray-300 font-medium hover:border-opacity-60 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Shadow below Timeline */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-10 lg:h-10 lg:w-full w-[calc(100%-120px)] mx-auto bg-gradient-to-t from-[#1E1E1E] via-[#1e1e1eef] to-transparent" />
    </div>
  );
};

export default LearnTimeline;
