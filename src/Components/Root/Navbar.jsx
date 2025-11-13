import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGavel } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const DesktopLinks = () => (
  <ul className="flex items-center gap-8 text-[#F5F7FA] text-sm">
    {[
      { to: "/", label: "Home" },
      { to: "/about", label: "About Us" },
      { to: "/service", label: "Services" },
      { to: "/contact", label: "Contact Us" },
    ].map((item) => (
      <li key={item.to} className="group relative">
        <Link
          to={item.to}
          className="inline-flex items-center px-1 py-1 font-medium tracking-wide text-[#F5F7FA]/75 transition-colors duration-200 group-hover:text-[#F5F7FA]"
        >
          {item.label}
        </Link>
        {/* animated bottom border */}
        <span
          className="
            pointer-events-none
            absolute left-0 right-0 -bottom-1
            h-[2px]
            origin-left scale-x-0
            bg-[#5D8DC0]
            transition-transform duration-300
            group-hover:scale-x-100
          "
        />
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeDrawer = () => setOpen(false);

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="navbar bg-base-200/60 backdrop-blur supports-[backdrop-filter]:bg-base-200/40 py-4 lg:py-6">
        {/* Left: hamburger + brand */}
        <div className="navbar-start">
          <button
            aria-label="Open menu"
            className="btn btn-ghost lg:hidden"
            onClick={() => setOpen(true)}
          >
            <FiMenu className="text-2xl text-[#F5F7FA]" />
          </button>

          <Link to="/" className="btn btn-ghost text-xl text-[#F5F7FA]">
            <FaGavel className="mr-2" />
            ADVOCIUM
          </Link>
        </div>

        {/* Center: desktop links */}
        <div className="navbar-center hidden lg:flex">
          <DesktopLinks />
        </div>

        {/* Right: CTA */}
        <div className="navbar-end">
          <Link
            to="/contact"
            className="btn bg-[#C08D5D] hover:bg-[#5D8DC0] duration-300 rounded-full px-7 font-normal text-slate-950 border-none hover:opacity-90"
          >
            Contact Our Team
          </Link>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* overlay */}
            <motion.button
              aria-label="Close menu overlay"
              onClick={closeDrawer}
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* panel */}
            <motion.aside
              className="fixed left-0 top-0 z-50 h-full w-[84%] max-w-sm bg-base-100 text-base-content shadow-xl flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              role="dialog"
              aria-modal="true"
            >
              {/* header */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-base-300">
                <Link
                  to="/"
                  onClick={closeDrawer}
                  className="flex items-center gap-2 text-lg"
                >
                  <FaGavel />
                  <span className="font-semibold">ADVOCIUM</span>
                </Link>
                <button
                  aria-label="Close menu"
                  className="btn btn-ghost btn-sm"
                  onClick={closeDrawer}
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* links */}
              <nav className="overflow-y-auto p-3">
                <ul className="space-y-2">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About Us" },
                    { to: "/service", label: "Services" },
                    { to: "/contact", label: "Contact Us" },
                  ].map((item) => (
                    <li
                      key={item.to}
                      className="group relative rounded-lg"
                    >
                      <Link
                        to={item.to}
                        onClick={closeDrawer}
                        className="
                          block px-3 py-2 text-sm font-medium
                          text-base-content/80
                          transition-colors duration-200
                          group-hover:text-base-content
                        "
                      >
                        {item.label}
                      </Link>
                      {/* animated border for mobile (bottom) */}
                      <span
                        className="
                          pointer-events-none
                          absolute left-3 right-3 bottom-0
                          h-[2px]
                          origin-left scale-x-0
                          bg-[#5D8DC0]
                          transition-transform duration-300
                          group-hover:scale-x-100
                        "
                      />
                    </li>
                  ))}
                </ul>
              </nav>

              {/* footer CTA */}
              <div className="mt-auto p-4 border-t border-base-300">
                <Link
                  to="/contact"
                  onClick={closeDrawer}
                  className="btn w-full bg-[#C08D5D] border-none text-slate-950 rounded-full"
                >
                  Contact Our Team
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
