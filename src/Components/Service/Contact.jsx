import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

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

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submit here
  };

  return (
    <div className="bg-[#0C0F15] text-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-16">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mb-10"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs tracking-[0.25em] uppercase text-[#F5F7FA]/60 flex items-center gap-2"
          >
            <span className="h-px w-8 bg-[#3B5774]/60" />
            Contact
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold leading-snug"
          >
            Connect With Our Legal Advisors
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-3 text-sm md:text-base text-[#F5F7FA]/70"
          >
            Start with our AI chatbot for quick, free guidance. Your first{" "}
            <span className="font-semibold text-[#F5F7FA]">
              two suggestions are complimentary
            </span>
            . If you need deeper strategy, document help, or a human review,
            send us a message below and we&apos;ll follow up with paid options.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {/* Left – Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Full Name</label>
                <input
                  type="text"
                  placeholder="Please provide your full name."
                  className="w-full rounded-md bg-[#161B22] border border-[#3B5774]/30 px-3 py-3 text-sm outline-none focus:border-[#3B5774] focus:ring-1 focus:ring-[#3B5774]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Email Address</label>
                <input
                  type="email"
                  placeholder="Please enter your email."
                  className="w-full rounded-md bg-[#161B22] border border-[#3B5774]/30 px-3 py-3 text-sm outline-none focus:border-[#3B5774] focus:ring-1 focus:ring-[#3B5774]"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Enter the subject"
                className="w-full rounded-md bg-[#161B22] border border-[#3B5774]/30 px-3 py-3 text-sm outline-none focus:border-[#3B5774] focus:ring-1 focus:ring-[#3B5774]"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows="6"
                placeholder="Write your message here"
                className="w-full rounded-md bg-[#161B22] border border-[#3B5774]/30 px-3 py-3 text-sm outline-none resize-none focus:border-[#3B5774] focus:ring-1 focus:ring-[#3B5774]"
              ></textarea>
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-full bg-[#C08D5D] text-[#0C0F15] text-sm md:text-base font-medium tracking-wide shadow-lg shadow-black/30 hover:bg-[#d49b63] transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Right – Map & Contact Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {/* Map */}
            <div className="overflow-hidden rounded-xl border border-[#3B5774]/30 h-64 md:h-72">
              <iframe
                title="Dhaka, Bangladesh Map"
                src="https://www.google.com/maps?q=Dhaka%2C%20Bangladesh&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-[#161B22]">
                  <FiPhone size={18} style={{ color: "#3B5774" }} />
                </div>
                <div>
                  <p className="text-xs uppercase text-[#F5F7FA]/60 tracking-[0.18em]">
                    Call Us
                  </p>
                  <p className="text-sm md:text-base mt-1">
                    +880 1234 567 890
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-[#161B22]">
                  <FiMapPin size={18} style={{ color: "#3B5774" }} />
                </div>
                <div>
                  <p className="text-xs uppercase text-[#F5F7FA]/60 tracking-[0.18em]">
                    Office Location
                  </p>
                  <p className="text-sm md:text-base mt-1">
                    Gulshan, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-[#161B22]">
                  <FiMail size={18} style={{ color: "#3B5774" }} />
                </div>
                <div>
                  <p className="text-xs uppercase text-[#F5F7FA]/60 tracking-[0.18em]">
                    Email
                  </p>
                  <p className="text-sm md:text-base mt-1">
                    contact@advocium.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
