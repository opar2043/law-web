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

export default function Footer() {
  return (
    <footer className="w-full text-[#F5F7FA]">
      {/* ===== Top brand/logo strip (optional) ===== */}
      <div className="w-full bg-[#07090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between gap-6 opacity-80">
            {["LOGO", "∞∞", "IPSUM", "◻︎◯◯◯", "◎"].map((t, i) => (
              <div
                key={i}
                className="text-2xl sm:text-3xl lg:text-4xl tracking-widest"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-white/10" />
      </div>

      {/* ===== Main footer ===== */}
      <div className="w-full bg-[#07090B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            {/* Brand + blurb */}
            <div>
              <div className="flex items-center gap-3 text-2xl font-semibold">
                <FaGavel style={{ color: gold }} />
                <span>ADVOCIUM</span>
              </div>

              <p className="mt-5 text-sm text-white/80 max-w-md">
                For more than ten years, Advocium has been the go-to legal buddy
                for businesses, entrepreneurs, and communities looking for
                reliable support.
              </p>

              {/* Socials — filled circles (#C08D5D) like the photo */}
              <div className="mt-6 flex items-center gap-3">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                  (Icon, i) => (
                    <Link
                      key={i}
                      to="#"
                      aria-label="social"
                      className="inline-grid h-10 w-10 place-items-center rounded-full transition hover:opacity-90"
                      style={{ backgroundColor: gold, color: "#07090B" }}
                    >
                      <Icon />
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* About Us */}
            <div>
              <h4 className="text-xl font-semibold">About Us</h4>
              <nav className="mt-5 space-y-3 text-sm text-white/85">
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/our-firm">Our Firm</Link>
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/lawyers">Our Lawyers</Link>
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/mission">Mission &amp; Vision</Link>
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/careers">Careers</Link>
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/testimonials">Testimonials</Link>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold">Services</h4>
              <nav className="mt-5 space-y-3 text-sm text-white/85">
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/services/corporate-law">Corporate Law</Link>
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/services/civil-litigation">Civil Litigation</Link>
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/services/family-law">Family Law</Link>
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/services/ip">Intellectual Property</Link>
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/services/real-estate">Real Estate Law</Link>
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xl font-semibold">Resources</h4>
              <nav className="mt-5 space-y-3 text-sm text-white/85">
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/case-studies">Case Studies</Link>
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/insights">Legal Insights</Link>
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/faq">FAQs</Link>
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/news">News &amp; Updates</Link>
                <Link className="block hover:text-[var(--gold)]" style={{ "--gold": gold }} to="/privacy">Privacy Policy</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Bottom bar ===== */}
      <div className="w-full bg-[#5D8DC0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-[#0C0F15]">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-sm">
            <div className="flex items-center gap-3">
              <span>Copyright © {new Date().getFullYear()} Advocium</span>
              <span className="hidden md:inline text-[#0C0F15]/40">|</span>
              <span>
                Design by{" "}
                <a href="#" className="underline underline-offset-2 hover:opacity-90">
                  Tokotema
                </a>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link to="/terms" className="hover:opacity-90">Term of use</Link>
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
}
