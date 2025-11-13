import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiFileText,
  FiShield,
  FiGlobe,
  FiHome,
  FiKey,
  FiArrowRight,
  FiCpu,
  FiMessageCircle,
  FiUserCheck,
} from "react-icons/fi";

const services = [
  {
    title: "Corporate Law",
    desc: "Guidance on contracts, compliance, and business formation.",
    icon: <FiBriefcase className="w-6 h-6" />,
  },
  {
    title: "Contract Review",
    desc: "Ensure legal accuracy and protection in every agreement.",
    icon: <FiFileText className="w-6 h-6" />,
  },
  {
    title: "Litigation Support",
    desc: "Strong representation in disputes and courtroom advocacy.",
    icon: <FiShield className="w-6 h-6" />,
  },
  {
    title: "International Law",
    desc: "Support for cross-border deals, compliance, and disputes.",
    icon: <FiGlobe className="w-6 h-6" />,
  },
  {
    title: "Real Estate Law",
    desc: "Structuring, reviewing, and securing property transactions.",
    icon: <FiHome className="w-6 h-6" />,
  },
  {
    title: "Intellectual Property",
    desc: "Protection for brands, creative works, and innovations.",
    icon: <FiKey className="w-6 h-6" />,
  },
];

const aiSteps = [
  {
    title: "1. Ask Your Question",
    desc: "From your phone or laptop, open our chatbot and describe your real situation in plain language.",
    icon: <FiMessageCircle className="w-6 h-6" />,
  },
  {
    title: "2. AI Breaks It Down",
    desc: "Our AI engine analyzes the issue, highlights key risks, and gives you up to two free, clear suggestions.",
    icon: <FiCpu className="w-6 h-6" />,
  },
  {
    title: "3. Hand-Off to Lawyers",
    desc: "When you need documents or deeper strategy, you can move into a paid consult with our legal team.",
    icon: <FiUserCheck className="w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Service = () => {
  return (
    <div className="bg-[#0C0F15] text-[#F5F7FA] my-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-16">
        {/* Top text area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-[1.3fr,1fr] gap-10 items-start"
        >
          <div className="space-y-4">
            <motion.p
              variants={itemVariants}
              className="text-xs tracking-[0.25em] uppercase text-[#F5F7FA]/60 flex items-center gap-2"
            >
              <span className="h-px w-8 bg-[#3B5774]/60" />
              What We Do
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-semibold leading-snug"
            >
              Trusted Legal Solutions <br className="hidden sm:block" /> for
              Clients
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-[#F5F7FA]/70"
            >
              Our platform blends a smart legal chatbot with experienced
              advisors. You can explore options, understand risk, and prepare
              next steps in plain language—then move into paid, attorney-led
              support when your matter needs deeper strategy or documents.
            </motion.p>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-[#F5F7FA]/65"
          >
            With a commitment to clarity, security, and practical outcomes, we
            help clients handle corporate, civil, and personal legal issues.
            From your first free chatbot question to full representation, we
            keep every step transparent and focused on your goals.
          </motion.p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded border border-[#3B5774]/25 bg-transparent px-6 py-7 text-center hover:border-[#3B5774]/60 transition-colors"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-[#161B22]">
                <span style={{ color: "#3B5774" }}>{service.icon}</span>
              </div>

              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="mb-5 text-sm text-[#F5F7FA]/70">{service.desc}</p>

              {/* <button className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#C08D5D] group-hover:underline">
                Learn More
                <FiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button> */}
            </motion.div>
          ))}
        </motion.div>

        {/* AI Service – How It Works in Real Life */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 rounded-2xl border border-[#3B5774]/25 bg-[#070a0f] px-6 md:px-10 py-10 space-y-6"
        >
          <motion.div variants={itemVariants} className="max-w-3xl">
            <p className="text-xs tracking-[0.25em] uppercase text-[#F5F7FA]/60 flex items-center gap-2">
              <span className="h-px w-8 bg-[#3B5774]/60" />
              AI-Powered Service
            </p>
            <h3 className="mt-2 text-2xl md:text-3xl font-semibold">
              How Our AI Legal Assistant Fits Into Real Life
            </h3>
            <p className="mt-3 text-sm md:text-base text-[#F5F7FA]/75">
              The chatbot is not just a demo—it&apos;s built for everyday legal
              questions. Whether you&apos;re drafting a contract, facing a
              dispute, or making a business decision, AI helps you understand
              your options before you commit to a paid consultation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-3"
          >
            {aiSteps.map((step) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded bg-[#0C0F15] border border-[#3B5774]/30 p-5 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 flex items-center justify-center rounded bg-[#161B22]">
                    <span style={{ color: "#3B5774" }}>{step.icon}</span>
                  </div>
                  <h4 className="text-sm md:text-base font-semibold">
                    {step.title}
                  </h4>
                </div>
                <p className="text-xs md:text-sm text-[#F5F7FA]/70">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Service;
