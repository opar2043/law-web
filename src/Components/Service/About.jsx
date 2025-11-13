import React from "react";
import { motion } from "framer-motion";
import {
  FiMessageCircle,
  FiShield,
  FiUsers,
  FiLock,
  FiTarget,
} from "react-icons/fi";

const cardIconBg = "bg-[#161B22]";
const iconColor = "#3B5774";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <div className="bg-[#0C0F15] text-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 py-16 space-y-20">
        {/* Top Description / Intro */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#3B5774]/40 text-xs tracking-[0.2em] uppercase"
          >
            <FiMessageCircle size={16} style={{ color: iconColor }} />
            <span className="text-[#F5F7FA]/70">About Advocium</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            Smart Legal Guidance,{" "}
            <span className="text-[#C08D5D]">Powered by Chatbot</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[#F5F7FA]/70 text-sm md:text-base"
          >
            Our AI legal assistant gives you clear, human-friendly answers to
            your questions at no cost. Your first{" "}
            <span className="font-semibold text-[#F5F7FA]">
              two suggestions are completely free
            </span>
            . After that, you can unlock deeper strategy, document support, and
            ongoing guidance with a simple paid plan.
          </motion.p>
        </motion.section>

        {/* SECTION 1 – Guiding Principles */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-[1.1fr,1fr] gap-10 my-10 items-center"
        >
          {/* Left: Values */}
          <div className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-xs tracking-[0.25em] uppercase text-[#F5F7FA]/60 flex items-center gap-2"
            >
              <span className="h-px w-8 bg-[#3B5774]/60" />
              Our Values
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold leading-snug"
            >
              Guiding Principles For{" "}
              <span className="text-[#C08D5D]">Lasting Trust</span>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-[#F5F7FA]/65"
            >
              Every answer our chatbot gives is backed by clear standards of
              integrity, confidentiality, and client care. Whether it&apos;s
              your first free question or a paid consultation, we treat every
              matter with the same level of attention and respect.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-5 pt-4"
            >
              {/* Card 1 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`${cardIconBg} rounded-xl p-4 border border-[#3B5774]/25`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-black/40">
                    <FiShield size={20} style={{ color: iconColor }} />
                  </div>
                  <h4 className="font-semibold text-sm md:text-base">
                    Integrity First
                  </h4>
                </div>
                <p className="text-xs md:text-sm text-[#F5F7FA]/65">
                  Every suggestion is designed to be honest, balanced, and
                  aligned with core legal ethics.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`${cardIconBg} rounded-xl p-4 border border-[#3B5774]/25`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-black/40">
                    <FiTarget size={20} style={{ color: iconColor }} />
                  </div>
                  <h4 className="font-semibold text-sm md:text-base">
                    Client Focus
                  </h4>
                </div>
                <p className="text-xs md:text-sm text-[#F5F7FA]/65">
                  We tailor our guidance to your situation, highlighting risks,
                  options, and next steps clearly.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`${cardIconBg} rounded-xl p-4 border border-[#3B5774]/25`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-black/40">
                    <FiUsers size={20} style={{ color: iconColor }} />
                  </div>
                  <h4 className="font-semibold text-sm md:text-base">
                    Team Strength
                  </h4>
                </div>
                <p className="text-xs md:text-sm text-[#F5F7FA]/65">
                  Behind the chatbot stands a team of legal experts refining
                  answers and upgrading our knowledge base.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`${cardIconBg} rounded-xl p-4 border border-[#3B5774]/25`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-lg bg-black/40">
                    <FiLock size={20} style={{ color: iconColor }} />
                  </div>
                  <h4 className="font-semibold text-sm md:text-base">
                    Confidential Care
                  </h4>
                </div>
                <p className="text-xs md:text-sm text-[#F5F7FA]/65">
                  Your chats are treated as private and sensitive. We focus on
                  protecting your story and your documents.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-md mx-auto overflow-hidden rounded border border-[#3B5774]/30"
          >
            <motion.img
              src="https://advocium.tokotema.xyz/wp-content/uploads/2025/09/image-42.jpg"
              alt="Advisors discussing legal strategy"
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F15]/70 via-transparent" />
          </motion.div>
        </motion.section>

        {/* SECTION 2 – Expertise & Metrics */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-[1fr,1.1fr] gap-10 my-10 items-center"
        >
          {/* Left: Image */}
          <motion.div
            variants={itemVariants}
            className="relative justify-center items-center max-w-md mx-auto overflow-hidden rounded border border-[#3B5774]/30"
          >
            <motion.img
              src="https://advocium.tokotema.xyz/wp-content/uploads/2025/09/image-43.jpg"
              alt="Handshake with legal consultants"
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F15]/70 via-transparent" />
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-xs tracking-[0.25em] uppercase text-[#F5F7FA]/60 flex items-center gap-2"
            >
              <span className="h-px w-8 bg-[#3B5774]/60" />
              Our Expertise
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold leading-snug"
            >
              Delivering Excellence{" "}
              <span className="text-[#C08D5D]">In Every Case</span>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base text-[#F5F7FA]/65"
            >
              From quick chatbot answers to full paid consultations, Advocium
              supports you across corporate, civil, and contract matters. Our
              blended human + AI approach keeps your costs lower and your
              decisions sharper.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-6 pt-2"
            >
              <motion.div variants={itemVariants}>
                <p className="text-3xl md:text-4xl font-semibold">15+</p>
                <p className="text-[11px] md:text-xs text-[#F5F7FA]/60 mt-1">
                  Years Combined <br /> Experience
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="text-3xl md:text-4xl font-semibold">520+</p>
                <p className="text-[11px] md:text-xs text-[#F5F7FA]/60 mt-1">
                  Legal Chats &amp; <br /> Consults
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="text-3xl md:text-4xl font-semibold">40+</p>
                <p className="text-[11px] md:text-xs text-[#F5F7FA]/60 mt-1">
                  Complex Matters <br /> Resolved
                </p>
              </motion.div>
            </motion.div>

            {/* Skill / Focus Bars */}
            <div className="space-y-4 pt-4">
              {[
                { label: "Corporate Law", value: 90 },
                { label: "Intellectual Property", value: 86 },
                { label: "Civil & Contract Litigation", value: 90 },
              ].map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <div className="flex justify-between text-xs md:text-sm mb-1">
                    <span>{item.label}</span>
                    <span className="text-[#F5F7FA]/70">{item.value}%</span>
                  </div>
                  <div className="h-3 rounded bg-[#161B22] overflow-hidden">
                    <motion.div
                      className="h-full rounded"
                      style={{ backgroundColor: "#3B5774" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
