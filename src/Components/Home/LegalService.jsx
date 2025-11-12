import React from "react";
import { motion } from "framer-motion";
import { MdGavel } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";

const gold = "#C08D5D";

export default function LegalService() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stagger = {
    show: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <section className="w-full bg-[#0C0F15]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
        {/* Stack on mobile, 2 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* LEFT: image + decorative blocks */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            {/* decorative blocks only on md+ */}
            <div
              className="hidden md:block absolute left-0 top-10 h-[78%] w-16 lg:w-20"
              style={{ backgroundColor: "#121722" }}
            />
            <div
              className="hidden md:block absolute right-8 top-10 h-[78%] w-16 lg:w-24"
              style={{ backgroundColor: "#121722" }}
            />

            {/* image wrapper to control overflow on mobile */}
            <div className="relative z-[1] w-full max-w-[520px] md:max-w-none md:w-[75%]">
              <div className="rounded-lg shadow-2xl overflow-hidden">
                {/* keep aspect ratio on small screens to avoid jumpy layout */}
                <img
                  src="https://advocium.tokotema.xyz/wp-content/uploads/2025/09/image-4.jpg"
                  alt="Professional Lawyer"
                  className="w-full h-full object-cover aspect-[4/5] md:aspect-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-left"
          >
            {/* badge */}
            <motion.div
              variants={fadeUp}
              className="mb-3 sm:mb-5 inline-flex items-center gap-2 text-xs sm:text-sm font-medium"
              style={{ color: gold }}
            >
              <FaBalanceScale className="text-sm sm:text-base" />
              <span>About Advocium</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-[#F5F7FA] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
            >
              Professional Legal
              <br className="hidden md:block" />
              {" "}Services With Integrity
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 sm:mt-6 text-[0.95rem] leading-relaxed text-[#F5F7FA]/70"
            >
              At Advocium, we combine deep legal expertise with a modern
              approach to provide effective solutions for businesses and
              individuals alike.
            </motion.p>

            {/* features */}
            <motion.div
              variants={fadeUp}
              className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              <Feature>
                <span className="text-xs mr-2" style={{ color: gold }}>◆</span>
                <b className="text-[#F5F7FA]/90">Experienced Lawyers Across</b>
              </Feature>

              <Feature>
                <span className="text-xs mr-2" style={{ color: gold }}>◆</span>
                <b className="text-[#F5F7FA]/90">Proven Track Record</b>
              </Feature>

              <Feature>
                <MdGavel className="mt-1 mr-2 shrink-0" style={{ color: gold }} />
                <b className="text-[#F5F7FA]/90">Personalized Strategies</b>
              </Feature>

              <Feature>
                <span className="text-xs mr-2" style={{ color: gold }}>◆</span>
                <b className="text-[#F5F7FA]/90">Commitment to Ethical</b>
              </Feature>
            </motion.div>

            {/* long copy */}
            <motion.p
              variants={fadeUp}
              className="mt-6 sm:mt-8 text-sm md:text-[15px] leading-6 text-[#F5F7FA]/70 max-w-2xl"
            >
              For more than ten years, Advocium has been the go-to legal buddy
              for businesses, entrepreneurs, and communities looking for
              reliable support.
            </motion.p>

            {/* CTA – full width on mobile */}
            <motion.div variants={fadeUp} className="mt-6 sm:mt-8">
              <button
                className="w-full sm:w-auto rounded-full px-6 py-3 text-base font-semibold shadow-md transition hover:opacity-90"
                style={{ backgroundColor: gold, color: "#0C0F15" }}
              >
                Learn More About Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Feature({ children }) {
  return (
    <div className="flex items-start text-[#F5F7FA] text-sm">
      <span className="inline-flex items-start leading-relaxed">{children}</span>
    </div>
  );
}
