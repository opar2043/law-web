import React from "react";
import { motion } from "framer-motion";
import { FaBalanceScale } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const cases = [
  {
    badge: "Result: Contract Finalized",
    title: "Contract Dispute Resolution",
    cta: "Read Full Case",
    image:
      "https://images.unsplash.com/photo-1589829548853-1cfa9e7f1f5d?q=80&w=1600&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2",
  },
  {
    badge: "Result: Case Dismissed by Court",
    title: "Employment Dispute Victory",
    cta: "Read Full Case",
    image:
      "https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1600&auto=format&fit=crop",
    span: "col-span-1",
  },
  {
    badge: "Result: Mutually Fair Custody Terms",
    title: "Custody Agreement Success",
    cta: "Read Full Case",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop",
    span: "col-span-1",
  },
  {
    badge: "Result: Clean Corporate Setup",
    title: "Startup Legal Structuring",
    cta: "Read Full Case",
    image:
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1600&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.12 * i },
  }),
};

const PracticalSolution = () => {
  return (
    <section className="bg-[#0D1117]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Top heading row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <div className="md:col-span-2">
            <motion.div
              variants={fadeUp}
              className="mb-3 flex items-center gap-2 text-sm font-medium text-[#C08D5D]"
            >
              <FaBalanceScale className="text-base" />
              <span>Our Work</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold text-[#E6EAF0] leading-tight"
            >
              Practical Solutions For
              <span className="block">Complex Cases</span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            className="md:col-span-1 flex flex-col items-start justify-start"
          >
            <p className="text-[#98A2B3] text-sm md:text-base">
              From corporate disputes to international negotiations
            </p>
            <div className="mt-6 w-full">
              <button className="ml-auto hidden md:inline-flex rounded-full bg-[#F5F7FA] px-4 md:px-8 py-2 text-sm font-semibold text-slate-900 hover:bg-white">
                See All
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid of case cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              custom={i + 1}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`${c.span} overflow-hidden rounded-xl border border-[#0C0F15] bg-[#0E1520]/60 shadow`}
            >
              {/* Image + black overlay + text inside */}
              <div className="relative group h-48 md:h-60">
                <motion.img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Solid black overlay (on top of image) */}
                <motion.div
                  className="absolute inset-0 bg-black/60"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Text over the image */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <p className="mb-2 text-xs font-medium text-[#D0D7E2] opacity-90">
                    {c.badge}
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-white drop-shadow-sm">
                    {c.title}
                  </h3>

                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#F2C18D]"
                  >
                    {c.cta}
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <BsArrowRight />
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile "See All" button */}
        <div className="mt-8 md:hidden">
          <a
            href="#all-cases"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#F5F7FA] px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
          >
            See All Cases
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticalSolution;
