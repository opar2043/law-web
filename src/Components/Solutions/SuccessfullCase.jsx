import React from "react";
import { motion } from "framer-motion";
import { FaBalanceScale, FaGavel, FaUserTie } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 * i },
  }),
};

const SuccessfullCase = () => {
  return (
    <section className="bg-transparent my-9 md:my-20">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left: Image with badges */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <motion.div
              className="relative overflow-hidden rounded-lg border border-[#232A33] bg-[#0E1520]"
              variants={fadeUp}
            >
              <motion.img
                src="https://advocium.tokotema.xyz/wp-content/uploads/2025/09/image-11.jpg"
                alt="Attorney at desk"
                className="h-[520px] w-full object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Top-left badge */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="absolute -left-6 top-8 rounded-md border border-[#232A33] bg-[#0C0F15] px-3 py-5 shadow"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-sm font-semibold text-[#E6EAF0]">
                250+ <span className="font-normal text-[#C8D2E0]">Successful Cases</span>
              </p>
            </motion.div>

            {/* Bottom-right badge */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="absolute -right-6 bottom-16 rounded-md border border-[#232A33] bg-[#0C0F15] px-3 py-5 shadow"
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-sm font-semibold text-[#E6EAF0]">
                50+ <span className="font-normal text-[#C8D2E0]">Expert Lawyers</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center"
          >
            <motion.div
              variants={fadeUp}
              className="mb-3 flex items-center gap-2 text-sm font-medium text-[#C08D5D]"
            >
              <FaBalanceScale className="text-base" />
              <span>Why Choose Advocium</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-4xl font-semibold leading-tight text-[#E6EAF0]"
            >
              Trusted Legal Partner
              <span className="block">For Every Case</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-4 max-w-xl text-[#98A2B3]"
            >
              Choosing the right legal partner can define the outcome of your case.
              At Advocium, we bring together expertise, dedication, and innovation
              to deliver results that matter.
            </motion.p>

            {/* Feature rows */}
            <div className="mt-8 space-y-6">
              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex items-start gap-4"
              >
                <div className="rounded-lg border border-[#232A33] bg-[#0F1724] p-3">
                  <FaGavel className="text-lg text-[#C8D2E0]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E6EAF0]">Legal Expertise</h3>
                  <p className="mt-1 text-sm text-[#9AA6B2]">
                    Our lawyers offer deep knowledge across multiple practice areas
                    with proven success.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={4}
                className="flex items-start gap-4"
              >
                <div className="rounded-lg border border-[#232A33] bg-[#0F1724] p-3">
                  <FaUserTie className="text-lg text-[#C8D2E0]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E6EAF0]">Client Focus</h3>
                  <p className="mt-1 text-sm text-[#9AA6B2]">
                    We put clients first, tailoring strategies that align with their
                    specific goals and needs.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div variants={fadeUp} custom={5} className="mt-8">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-[#F5F7FA] px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
              >
                Get Started Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessfullCase;
