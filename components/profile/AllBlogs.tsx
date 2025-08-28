import React from "react";
import { ExternalLink, Calendar } from "lucide-react";
import { BLOG_DATA } from "@/data/blogs";

const AllBlogCard = () => {
  return (
    <div className="relative max-w-full  md:max-w-4xl lg:max-w-4xl mx-auto rounded-sm  pl-15 pr-15 lg:p-6 overflow-hidden">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {BLOG_DATA.map((post, id) => (
          <a
            href={post.url}
            key={post.id}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-sm  p-5 transition-all duration-300 hover:border-gray-600 hover:bg-[#2F2F2F]  "
          >
            <div
              key={post.id}
              className="group relative overflow-hidden rounded-sm border border-gray-700 bg-[#2A2A2A] p-5 transition-all duration-300 hover:border-gray-600 hover:bg-[#2F2F2F]"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar size={12} />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <ExternalLink size={16} />
              </div>

              <h3 className="font-semibold text-base leading-tight mb-3 text-white group-hover:text-gray-100">
                {post.title}
              </h3>

              <p className="text-sm text-gray-400 mb-4 leading-relaxed font-light">
                {post.description}
              </p>

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
            </div>
          </a>
        ))}
      </div>

      {/* Shadow below BlogCard */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10 h-32 lg:h-24 lg:w-full w-[calc(100%-120px)] mx-auto bg-gradient-to-t from-[#1E1E1E] via-[#1e1e1eef] to-transparent" /> */}
    </div>
  );
};

export default AllBlogCard;
