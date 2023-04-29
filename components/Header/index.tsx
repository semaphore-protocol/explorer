"use client";
import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.section className="w-full" initial="initial" animate="animate">
      <p className="text-sm uppercase tracking-widest opacity-70 xl:text-lg">
        Semaphorus &mdash; A Sempahore Explorer
      </p>
      <div className="p-3"></div>
      <motion.div variants={fadeInUp}>
        <h1>
          See what&apos;s happening <br /> on Semaphore
        </h1>
      </motion.div>
      <motion.a
        href="https://semaphore.appliedzkp.org/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2, x: 4 }}
        className="mt-3 inline-flex items-center gap-2 py-1 text-slate-400 transition hover:text-blue-300 active:text-blue-300"
      >
        <span className="border-b-2 border-dotted border-current">
          Learn about Semaphore
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </motion.a>
    </motion.section>
  );
}

export default Header;
