import React from "react";
import { motion } from "framer-motion";
import { MdGavel } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";

const gold = "#C08D5D";

export default function LegalService() {
  // simple framer-motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stagger = {
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section className="w-full bg-[#0C0F15]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 lg:py-28">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10  lg:gap-14 items-center">
          {/* Left: Image with gray decorative blocks */}
          <motion.div
            className="relative "
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            
          >
            {/* left gray bar */}
            <div className="hidden md:block absolute top-10 h-[80%] w-20 "
                 style={{ backgroundColor: "#121722" }} />
            {/* right gray bar */}
            <div className="hidden md:block absolute right-12 top-10 w-24 h-[80%]  "
                 style={{ backgroundColor: "#121722" }} />

            <img
              src="https://advocium.tokotema.xyz/wp-content/uploads/2025/09/image-4.jpg"
              alt="Professional Lawyer"
              className="relative z-[1] left-12  w-full md:w-[70%] md:h-[70%] rounded shadow-2xl object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* badge */}
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: gold }}
            >
              <FaBalanceScale />
              <span>About Advocium</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-[#F5F7FA] text-3xl md:text-5xl"
            >
              Professional Legal
              <br className="hidden md:block" />
              {" "}Services With Integrity
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base text-[15px] leading-relaxed text-[#F5F7FA]/70"
            >
              At Advocium, we combine deep legal expertise with a modern
              approach to provide effective solutions for businesses and
              individuals alike.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
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
                <MdGavel className="mt-1 mr-2" style={{ color: gold }} />
                <b className="text-[#F5F7FA]/90">Personalized Strategies</b>
              </Feature>

              <Feature>
                <span className="text-xs mr-2 " style={{ color: gold }}>◆</span>
                <b className="text-[#F5F7FA]/90">Commitment to Ethical</b> 
              </Feature>
            </motion.div>

            {/* Long copy */}
            <motion.p
              variants={fadeUp}
              className="mt-8 text-sm md:text-[15px] leading-6 text-[#F5F7FA]/70 max-w-2xl"
             
            >
              For more than ten years, Advocium has been the go-to legal
              buddy for businesses, entrepreneurs, and communities looking for
              reliable support.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-8">
              <button
                className="rounded-full px-6 py-3 text-base font-semibold shadow-md transition hover:opacity-90"
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

/* small helper to keep markup tidy */
function Feature({ children }) {
  return (
    <div className="flex items-start text-[#F5F7FA]">
      <span className="inline-flex items-start text-sm leading-relaxed">
        {children}
      </span>
    </div>
  );
}
