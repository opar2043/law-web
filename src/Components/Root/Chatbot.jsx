import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm the BD Legal Ai. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userInput = inputValue.trim();
    setInputValue("");
    setIsLoading(true);

    // Add user message safely
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: userInput,
        sender: "user",
        timestamp: new Date(),
      },
    ]);

    try {
      // ✅ Use your BD Legal Ai API exactly
      const response = await fetch(
        `https://BD Legal Ai-chatbot-fastapi.onrender.com/chatbot/stream?msg=${encodeURIComponent(
          userInput
        )}`
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      const botText =
        data.data ||
        data.response ||
        "I couldn't process that. Please try again.";

      // Add bot message
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: botText,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "Sorry, I'm having trouble connecting. Please try again.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed md:bottom-4 bottom-20 right-4 md:right-16 z-50 w-96 max-w-[90vw] bg-[#0C0F15] text-[#F5F7FA] border border-[#3B5774]/60 shadow-2xl flex flex-col"
            style={{ height: "550px" }} // square box, no rounded
          >
            {/* Header */}
            <div className="p-4 text-white flex items-center justify-between bg-gradient-to-r from-[#0C0F15] via-[#101623] to-[#1B2534] border-b border-[#3B5774]/60">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💬</span>
                <div>
                  <h2 className="font-semibold text-sm tracking-[0.18em] uppercase text-[#F5F7FA]/70">
                    AI Legal Assistant
                  </h2>
                  <p className="text-sm">Ask BD Legal Ai Agent</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/5 p-1 transition"
              >
                <X className="w-5 h-5 text-[#F5F7FA]/80" />
              </motion.button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 text-sm leading-relaxed ${
                      message.sender === "user"
                        ? "bg-[#C08D5D] text-[#0C0F15]"
                        : "bg-[#141A24] text-[#F5F7FA]/90 border border-[#3B5774]/50"
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#141A24] text-[#F5F7FA]/80 px-4 py-3 border border-[#3B5774]/50 flex gap-1 items-center text-xs">
                    <span>Typing</span>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="w-1.5 h-1.5 bg-[#F5F7FA]/70"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                      className="w-1.5 h-1.5 bg-[#F5F7FA]/70"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                      className="w-1.5 h-1.5 bg-[#F5F7FA]/70"
                    />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Section – NOT rounded */}
            <div className="p-4 border-t border-[#3B5774]/60 bg-[#0C0F15] space-y-2">
              <p className="text-[11px] text-[#F5F7FA]/50">
                This assistant provides general information only and does not
                create a lawyer–client relationship.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your legal question..."
                  className="flex-1 px-3 py-2 border border-[#3B5774]/70 bg-[#0C0F15] text-xs text-[#F5F7FA] focus:outline-none focus:border-[#C08D5D] rounded-none"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="px-4 py-2 bg-[#C08D5D] text-[#0C0F15] font-semibold hover:bg-[#b37a49] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 rounded-none"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button (can stay rounded) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1.0,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 10px 25px rgba(192, 141, 93, 0.3)",
              "0 10px 35px rgba(192, 141, 93, 0.6)",
              "0 10px 25px rgba(192, 141, 93, 0.3)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-14 h-14 bg-[#C08D5D] rounded-full flex items-center justify-center shadow-lg hover:bg-[#b37a49] transition-colors relative"
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-2xl text-[#0C0F15]">💬</span>
          </motion.div>

          {/* Notification pulse */}
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 bg-[#C08D5D]/40 rounded-full pointer-events-none"
          />
        </motion.button>
      </motion.div>
    </>
  );
};

export default ChatBot;
