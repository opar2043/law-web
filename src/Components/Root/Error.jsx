import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiRefreshCw, FiMail } from "react-icons/fi";

export default function Error() {
  const err = useRouteError?.() || {};
  const status = err?.status || 404;
  const message =
    err?.statusText || err?.message || "The page you’re looking for can’t be found.";

  return (
    <section className="min-h-screen w-full grid place-items-center bg-[#0C0F15] text-[#F5F7FA] px-6">
      <div className="max-w-3xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm"
             style={{ backgroundColor: "rgba(192,141,93,.15)", color: "#C08D5D" }}>
          Error {status}
        </div>

        {/* Big Title */}
        <h1 className="mt-6 font-serif tracking-tight text-4xl sm:text-6xl lg:text-7xl">
          Something Went Wrong
        </h1>

        {/* Message */}
        <p className="mt-4 text-base sm:text-lg text-white/80">
          {message}
        </p>

        {/* Illustration-ish block */}
        <div className="relative mt-10 mb-8">
          <div className="mx-auto h-40 sm:h-48 w-full max-w-xl rounded-2xl bg-[#121722] shadow-inner" />
          <div className="absolute inset-0 -z-10 translate-y-6 blur-2xl opacity-40"
               style={{ background: "radial-gradient(600px circle at 50% 0%, #C08D5D33, transparent)" }} />
        </div>

        {/* Actions */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="btn h-11 min-h-11 px-4 border border-white/15 bg-transparent hover:bg-white/10 transition"
          >
            <FiRefreshCw className="mr-2" /> Reload
          </button>

          <Link
            to="/"
            className="btn h-11 min-h-11 px-5 border-none"
            style={{ backgroundColor: "#C08D5D", color: "#0C0F15" }}
          >
            <FaHome className="mr-2" /> Go Home
          </Link>

          <Link
            to="/contact"
            className="btn h-11 min-h-11 px-5 border border-white/15 bg-transparent hover:bg-white/10 transition"
          >
            <FiMail className="mr-2" /> Contact Support
          </Link>
        </div>

        {/* Small hint */}
        <p className="mt-6 text-xs text-white/60">
          If this keeps happening, please include the URL and what you were doing when it occurred.
        </p>
      </div>
    </section>
  );
}
