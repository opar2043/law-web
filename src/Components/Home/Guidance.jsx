import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBalanceScale, FaArrowRight } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const Guidance = () => {
  const gold = "#C08D5D";

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  return (
    <section className="w-full bg-[#0C0F15] text-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 bg-[#10141a] lg:px-8 py-12 lg:py-20">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image with blue block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute left-8 sm:left-10 top-24 h-[180px] w-[260px] sm:h-[230px] sm:w-[330px] rounded-md bg-[#5C83B3]" />
            <img
              src="https://advocium.tokotema.xyz/wp-content/uploads/2025/09/Col-2.png"
              alt="Attorney"
              className="relative z-[1] w-full max-w-[560px] mx-auto object-cover rounded-md"
            />
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 text-sm font-medium mb-4"
              style={{ color: gold }}
            >
              <FaBalanceScale className="text-base" />
              <span>Need Legal Support?</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="font-serif tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-tight"
            >
              Get Trusted Guidance
              <br /> For Every Case
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg leading-relaxed text-[#F5F7FA]/85 max-w-2xl"
            >
              Our experienced attorneys are ready to assist you with reliable
              legal advice, representation, and strategies tailored to your
              situation.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-white text-[#0C0F15] px-6 sm:px-8 py-3 text-base font-medium shadow hover:opacity-95 transition"
              >
                Request Consultation
                <span
                  className="ml-3 grid h-9 w-9 place-items-center rounded-full"
                  style={{ backgroundColor: gold }}
                >
                  <FaArrowRight className="text-[#0C0F15]" />
                </span>
              </Link>
            </motion.div>

            {/* Experience row */}
            <motion.ul
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
            >
              {[
                "Experienced Lawyers",
                "Confidential Approach",
                "Tailored Strategies",
              ].map((label) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
                >
                  <FiCheckCircle style={{ color: gold }} />
                  <span className="text-[#F5F7FA]/90">{label}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guidance;
