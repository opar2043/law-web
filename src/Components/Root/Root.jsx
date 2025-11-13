import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Root = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="max-w-7xl w-full mx-auto relative">
      <Navbar />
      <Outlet />
      <Footer />

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat panel */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mb-3 w-[320px] max-w-[90vw] rounded-2xl bg-[#161B22] border border-[#3B5774]/40 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#3B5774]/40">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#F5F7FA]/60">
                    AI Legal Assistant
                  </p>
                  <p className="text-sm font-semibold text-[#F5F7FA]">
                    Ask Advocium Chatbot
                  </p>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="p-1 rounded-full hover:bg-white/5 transition-colors"
                  aria-label="Close chat"
                >
                  <X size={16} className="text-[#F5F7FA]/70" />
                </button>
              </div>

              {/* Body – replace with your real chatbot component */}
              <div className="px-4 py-3 text-sm text-[#F5F7FA]/80 space-y-2">
                <p>
                  Start by asking any legal question in simple language. Your
                  first two suggestions are{" "}
                  <span className="font-semibold text-[#F5F7FA]">free</span>.
                </p>
                <p className="text-xs text-[#F5F7FA]/60">
                  After that, we’ll guide you to paid options if your matter
                  needs deeper review or documents.
                </p>
              </div>

              <div className="px-4 pb-4">
                <input
                  type="text"
                  placeholder="Type your question here..."
                  className="w-full rounded-xl bg-[#0C0F15] border border-[#3B5774]/40 px-3 py-2 text-xs text-[#F5F7FA] outline-none focus:border-[#3B5774]"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating button */}
        <motion.button
          onClick={() => setIsChatOpen((prev) => !prev)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(192, 141, 93, 0.6)",
              "0 0 0 14px rgba(192, 141, 93, 0)",
            ],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#C08D5D] text-[#0C0F15] shadow-lg shadow-black/40"
          aria-label="Open chatbot"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
};

export default Root;
