import React from "react";
import { Link } from "react-router-dom";
import { FaGavel } from "react-icons/fa";
import { FiChevronDown, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const servicesItems = (
    <>
      <li><Link to="/services/corporate-law">Corporate Law</Link></li>
      <li><Link to="/services/family-law">Family Law</Link></li>
      <li><Link to="/services/criminal-defense">Criminal Defense</Link></li>
      <li><Link to="/services/immigration">Immigration</Link></li>
      <li><Link to="/services/real-estate">Real Estate</Link></li>
    </>
  );

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

      {/* Services dropdown (desktop) */}
      <li tabIndex={0}>
        <details>
          <summary className="flex items-center gap-1">
            Services <FiChevronDown className="text-sm" />
          </summary>
          <ul className="p-2 bg-base-100 text-base-content min-w-56 shadow rounded-box">
            {servicesItems}
          </ul>
        </details>
      </li>

      {/* Pages dropdown (desktop) */}
      <li tabIndex={0}>
        <details>
          <summary className="flex items-center gap-1">
            Pages <FiChevronDown className="text-sm" />
          </summary>
          <ul className="p-2 bg-base-100 text-base-content min-w-56 shadow rounded-box">
            {pagesItems}
          </ul>
        </details>
      </li>

      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  );

  const MobileLinks = () => (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-80 p-2 shadow text-base-content"
    >
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>

      <li>
        <details>
          <summary className="flex items-center justify-between">
            <span>Services</span> <FiChevronDown />
          </summary>
          <ul className="p-2">{servicesItems}</ul>
        </details>
      </li>

      <li>
        <details>
          <summary className="flex items-center justify-between">
            <span>Pages</span> <FiChevronDown />
          </summary>
          <ul className="p-2">{pagesItems}</ul>
        </details>
      </li>

      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  );

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="navbar bg-base-200/60 backdrop-blur supports-[backdrop-filter]:bg-base-200/40 py-6">
        {/* Left: hamburger + brand */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              aria-label="Open menu"
              className="btn btn-ghost lg:hidden"
            >
              <FiMenu className="text-xl" />
            </button>
            <MobileLinks />
          </div>

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
            className="btn bg-[#C08D5D] text-slate-950 border-none hover:opacity-90"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
