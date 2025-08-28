"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-neutral-300 font-mono text-sm">
      <div className="max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 py-6 gap-2 sm:gap-4">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link
            href="https:x.com/0bhishek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:underline transition duration-300">
              0bhishek
            </span>
          </Link>
        </p>

        {/* Middle divider */}
        <span className="hidden sm:inline-block text-neutral-500">|</span>

        <p>
          The source code is open on{" "}
          <Link
            href="https://github.com/iCoderabhishek/0bhishek.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition"
          >
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  );
}
