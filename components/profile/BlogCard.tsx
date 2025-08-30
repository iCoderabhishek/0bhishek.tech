import React from "react";
import { ExternalLink, Calendar } from "lucide-react";
import { BLOG_DATA } from "@/data/blogs";

const BlogCard = () => {
  return (
    <div className="relative max-w-full  md:max-w-4xl lg:max-w-4xl mx-auto rounded-sm  pl-15 pr-15 lg:p-4 overflow-hidden">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 cursor-pointer">
        {BLOG_DATA.slice(0, 2).map((post) => (
          <a
            href={post.url}
            key={post.id}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-sm border border-gray-700 bg-[#2A2A2A] p-5 transition-all duration-300 hover:border-gray-600 hover:bg-[#2F2F2F]"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Calendar size={12} />
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <span className="opacity-60 group-hover:opacity-100 transition-opacity hover:scale-110 transform duration-200">
                <ExternalLink size={16} />
              </span>
            </div>

            {/* Content */}
            <h3 className="font-semibold text-base leading-tight mb-3 text-white group-hover:text-gray-100">
              {post.title}
            </h3>

            <p className="text-sm text-neutral-300 mb-4 leading-relaxed font-light line-clamp-3">
              {post.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 border border-white border-opacity-30 rounded-full text-gray-300 font-medium hover:border-opacity-60 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Shadow below BlogCard */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 lg:h-24 lg:w-full w-[calc(100%-120px)] mx-auto bg-gradient-to-t from-[#1E1E1E] via-[#1e1e1eef] to-transparent" />

      {/* Show More button */}
      <a
        className="absolute bottom-5 left-1/2 z-[11] flex -translate-x-1/2 items-center gap-1 rounded-sm border bg-neutral-700/40 px-2 py-1 text-xs text-neutral-200"
        href="/blogs"
      >
        Show More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-up-right"
        >
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
      </a>
    </div>
  );
};

export default BlogCard;
