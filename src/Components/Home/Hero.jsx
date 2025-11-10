import React from "react";
import { Link } from "react-router-dom";
import { FaBalanceScale, FaArrowRight } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="w-full bg-[#0C0F15] text-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16">
        {/* Top badge */}
        <div className="flex items-center gap-2 text-sm font-medium text-[#C08D5D]">
          <FaBalanceScale className="text-base" />
          <span>Law Made Simple</span>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 md:items-center gap-8 lg:gap-12 py-10 lg:py-16">
          {/* Left copy */}
          <div className="max-w-[680px] flex flex-col justify-center items-center md:items-start">
            <h1 className=" font-serif tracking-tight leading-tight text-5xl md:text-7xl lg:leading-[1.05]">
              Reliable Legal
              <br /> Help You Can
              <br /> Count On
            </h1>


            <p className="mt-5 text-center md:text-left  text-sm sm:text-base/relaxed text-[#F5F7FA]/80 max-w-prose">
              From corporate matters to personal disputes, Advocium ensures
              clarity, precision, and results-driven representation for every
              client.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-[#F5F7FA] text-[#0C0F15] px-6 py-3 font-medium shadow hover:opacity-90 transition"
              >
                Get Consultation
                <span className="ml-3 grid h-9 w-9 place-items-center rounded-full bg-[#C08D5D] text-[#0C0F15]">
                  <FaArrowRight className="text-white" />
                </span>
              </Link>
            </div>

            {/* Optional contact strip (keeps the vibe of the design) */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#F5F7FA]/80">
              <span className="inline-flex items-center gap-2">
                <FiMail className="text-[#C08D5D]" />
                contact@advocium.com
              </span>
              <span className="inline-flex items-center gap-2">
                <FiPhone className="text-[#C08D5D]" />
                +1 (234) 567-890
              </span>
            </div>
          </div>

          {/* Right image block */}
          <div className="relative">
            {/* Decorative blocks behind the person */}
            <div className="absolute -left-6 sm:-left-10 top-10 h-[140px] w-[220px] sm:h-[180px] sm:w-[280px] rounded-md bg-[#5C83B3] opacity-90"></div>
            <div className="absolute right-6 sm:right-12 top-28 h-[120px] w-[160px] sm:h-[160px] sm:w-[200px] rounded-md bg-[#86A9D6] opacity-90"></div>

            {/* Hero main image */}
            <img
              className="relative z-[1] mx-auto max-h-[700px] object-contain"
              src="https://advocium.tokotema.xyz/wp-content/uploads/2025/09/s.png"
              alt="Judge"
            />

            {/* Floating stats card — desktop only */}
            <div className="hidden lg:flex absolute -bottom-10 left-1/2 -translate-x-2/3 w-[800px] z-[2]">
              <div className="w-full rounded-lg bg-[#161B22] border border-white/5 shadow-2xl backdrop-blur px-20 py-16">
                <div className="grid grid-cols-2 divide-x divide-white/10">
                  {/* Left block */}
                  <div className="pr-6">
                    <div className="flex items-center gap-2 text-[#C08D5D] text-sm mb-2">
                      <span className="text-sm">•</span>
                      <span>01</span>
                    </div>
                    <h3 className="text-4xl font-semibold">Strong Integrity</h3>
                    <p className="mt-3 text-[16px] font-light text-[#F5F7FA]/60">
                      We uphold the highest ethical standards in all legal
                      practices.
                    </p>
                  </div>

                  {/* Right block */}
                  <div className="pl-6">
                    <div className="flex items-center gap-2 text-[#C08D5D] text-sm mb-2">
                      <span className="text-sm">•</span>
                      <span>02</span>
                    </div>
                    <h3 className="text-4xl font-semibold">Client Focus</h3>
                    <p className="mt-3 text-[16px] font-light text-[#F5F7FA]/60">
                      Every case is handled with dedication, care, and
                      personalized attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Spacer below on desktop so the floating card doesn't overlap next sections */}
            <div className="hidden lg:block h-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
