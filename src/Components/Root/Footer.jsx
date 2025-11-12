import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGavel,
} from "react-icons/fa";

const gold = "#C08D5D";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-[#F5F7FA]">
      {/* Top brand strip */}
      <div className="w-full bg-[#07090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-12 opacity-80 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
            {["LOGO", "∞∞", "IPSUM", "◻︎◯◯◯", "◎"].map((t) => (
              <div
                key={t}
                className="snap-start shrink-0 text-xl sm:text-2xl lg:text-4xl tracking-widest"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-white/10" />
      </div>

      {/* Main footer */}
      <div className="w-full bg-[#07090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 text-xl sm:text-2xl font-semibold">
                <FaGavel style={{ color: gold }} />
                <span>ADVOCIUM</span>
              </div>

              <p className="mt-4 sm:mt-5 text-sm text-white/80 max-w-md">
                For more than ten years, Advocium has been the go-to legal buddy
                for businesses, entrepreneurs, and communities looking for
                reliable support.
              </p>

              <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                  (Icon, i) => (
                    <Link
                      key={i}
                      to="#"
                      aria-label="social"
                      className="inline-grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full transition hover:opacity-90"
                      style={{ backgroundColor: gold, color: "#07090B" }}
                    >
                      <Icon className="text-sm" />
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* About Us */}
            <FooterCol title="About Us">
              <FooterLink to="/our-firm">Our Firm</FooterLink>
              <FooterLink to="/lawyers">Our Lawyers</FooterLink>
              <FooterLink to="/mission">Mission &amp; Vision</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/testimonials">Testimonials</FooterLink>
            </FooterCol>

            {/* Services */}
            <FooterCol title="Services">
              <FooterLink to="/services/corporate-law">Corporate Law</FooterLink>
              <FooterLink to="/services/civil-litigation">Civil Litigation</FooterLink>
              <FooterLink to="/services/family-law">Family Law</FooterLink>
              <FooterLink to="/services/ip">Intellectual Property</FooterLink>
              <FooterLink to="/services/real-estate">Real Estate Law</FooterLink>
            </FooterCol>

            {/* Resources */}
            <FooterCol title="Resources">
              <FooterLink to="/case-studies">Case Studies</FooterLink>
              <FooterLink to="/insights">Legal Insights</FooterLink>
              <FooterLink to="/faq">FAQs</FooterLink>
              <FooterLink to="/news">News &amp; Updates</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
            </FooterCol>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full bg-[#5D8DC0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-[#0C0F15]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Copyright © {year} Advocium</span>
              <span className="hidden md:inline text-[#0C0F15]/40">|</span>
              <span>
                Design by{" "}
                <a href="#" className="underline underline-offset-2 hover:opacity-90">
                  Tokotema
                </a>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link to="/terms" className="hover:opacity-90">Terms of Use</Link>
              <span className="hidden md:inline text-[#0C0F15]/40">|</span>
              <Link to="/privacy" className="hover:opacity-90">Privacy Policy</Link>
              <span className="hidden md:inline text-[#0C0F15]/40">|</span>
              <Link to="/cookie" className="hover:opacity-90">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* helpers (plain JS, no types) */
const FooterCol = ({ title, children }) => (
  <div>
    <h4 className="text-lg sm:text-xl font-semibold">{title}</h4>
    <nav className="mt-4 sm:mt-5 space-y-2 sm:space-y-3 text-sm text-white/85">
      {children}
    </nav>
  </div>
);

const FooterLink = ({ to, children }) => (
  <Link to={to} className="block hover:text-[#C08D5D]">
    {children}
  </Link>
);

export default Footer;
