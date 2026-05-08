import React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BLOG_DATA } from "@/data/blogs";

const AllBlogCard = () => {
  return (
    <div className="relative max-w-full md:max-w-4xl lg:max-w-4xl mx-auto rounded-sm px-5 sm:px-15 lg:p-6 overflow-hidden">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {BLOG_DATA.map((post) => (
          <a
            href={post.url}
            key={post.id}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-sm border border-foreground/15 bg-foreground/4 p-5 transition-all duration-300 hover:border-foreground/25 hover:bg-foreground/7 hover:-translate-y-0.5 flex flex-col"
          >
            {/* Date caption */}
            <div className="flex items-center gap-2 text-xs text-foreground/55 mb-2">
              <Calendar size={12} />
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title with animated arrow */}
            <h3 className="text-xl font-semibold tracking-tight leading-tight mb-3 text-foreground flex items-start gap-2">
              <span className="grow">{post.title}</span>
              <ArrowUpRight
                size={18}
                className="text-foreground/60 shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-foreground"
              />
            </h3>

            {/* Description */}
            <p className="text-base text-foreground/85 leading-relaxed mb-4 line-clamp-3">
              {post.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 border border-foreground/25 rounded-full text-foreground/70 font-medium hover:border-foreground/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Violet hairline that scales in on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-violet-500/70 dark:bg-violet-400/65 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AllBlogCard;
