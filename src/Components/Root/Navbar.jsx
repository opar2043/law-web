import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGavel } from "react-icons/fa";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const pagesItems = (
  <>
    <li><Link to="/case-studies">Case Studies</Link></li>
    <li><Link to="/attorneys">Our Attorneys</Link></li>
    <li><Link to="/faq">FAQ</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/testimonials">Testimonials</Link></li>
  </>
);

const DesktopLinks = () => (
  <ul className="menu menu-horizontal px-1 text-[#F5F7FA]">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/service">Services</Link></li>

    <li><Link to="/contact">Contact Us</Link></li>
  </ul>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
            <FiMenu className="text-2xl" />
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
            className="btn bg-[#C08D5D] rounded-full px-7 font-normal text-slate-950 border-none hover:opacity-90"
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
                <Link to="/" onClick={closeDrawer} className="flex items-center gap-2 text-lg">
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
              <nav className="overflow-y-auto p-2">
                <ul className="menu menu-sm">
                  <li>
                    <Link to="/" onClick={closeDrawer}>Home</Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={closeDrawer}>About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={closeDrawer}>Services</Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={closeDrawer}>Contact Us</Link>
                  </li>
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
