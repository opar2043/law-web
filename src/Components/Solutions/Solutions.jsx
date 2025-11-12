import React from "react";
import {
  FaBalanceScale,
  FaBuilding,
  FaFileSignature,
  FaGavel,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 * i },
  }),
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const Solutions = () => {
  const services = [
    {
      title: "Corporate Law",
      desc: "Guidance on contracts, compliance, and business formation.",
      Icon: FaBuilding,
      href: "#corporate-law",
    },
    {
      title: "Contract Review",
      desc: "Ensure legal accuracy and protection in every agreement.",
      Icon: FaFileSignature,
      href: "#contract-review",
    },
    {
      title: "Litigation Support",
      desc: "Strong representation in disputes and courtroom advocacy.",
      Icon: FaGavel,
      href: "#litigation-support",
    },
  ];

  return (
    <section className="bg-[#161B22]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center text-center"
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="mb-3 flex items-center gap-2 text-sm font-medium text-[#C08D5D]"
          >
            <FaBalanceScale className="text-base" />
            <span>What We Do</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-semibold text-[#E6EAF0]"
          >
            Trusted Legal Solutions
            <span className="block">for Clients</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-3xl text-sm md:text-base text-[#98A2B3]"
          >
            With a commitment to excellence and innovation, Advocium delivers
            strategic legal services that combine tradition with modern
            approaches.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="my-10 grid grid-cols-1 gap-5 md:grid-cols-3 w-full md:w-10/12 mx-auto md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {services.map(({ title, desc, Icon, href }, idx) => (
            <motion.article
              key={title}
              variants={fadeUp}
              custom={idx + 1}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-[#0e1118] bg-[#0E1520]/60 p-6 shadow
                         transition-all hover:shadow-lg hover:shadow-black/20"
            >
              {/* Floating icon badge */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0F1724] ring-1 ring-[#0C0F15]"
              >
                <Icon className="text-xl text-[#C8D2E0]" />
              </motion.div>

              <h3 className="text-lg font-semibold text-[#E6EAF0]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#9AA6B2]">{desc}</p>

              <motion.a
                href={href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#C08D5D]"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <span>Learn More</span>
                <motion.span
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 6, transition: { type: "spring", stiffness: 300 } },
                  }}
                >
                  <BsArrowRight />
                </motion.span>
              </motion.a>
            </motion.article>
          ))}
        </motion.div>

        {/* Footer blurb + CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 flex flex-col items-center text-center"
        >
          <motion.p variants={fadeUp} className="max-w-3xl text-sm md:text-base text-[#98A2B3]">
            From corporate law to personal matters, our services are built
            around your unique challenges, ensuring clarity and effective
            representation at every step.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 rounded-full bg-[#F5F7FA] px-5 py-2 text-sm font-semibold text-slate-900
                       transition hover:bg-white hover:text-slate-950"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
