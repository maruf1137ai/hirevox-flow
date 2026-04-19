"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="section-padding relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-screen overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-[20%] left-[10%] w-[60vw] h-[60vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, color-mix(in srgb, var(--primary), transparent 85%) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, color-mix(in srgb, var(--secondary), transparent 85%) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="container text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-[var(--primary)] text-sm font-bold mb-10 border border-[var(--border)]"
        >
          <Sparkles size={16} fill="currentColor" /> AI-Augmented Hiring Operating System
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-foreground mx-auto mb-5"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
            maxWidth: '1000px',
            lineHeight: 1.1,
          }}
        >
          The Future of Hiring is <br />
          <span className="gradient-text italic">Human-in-the-Loop</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="subtitle-text mx-auto"
          style={{ maxWidth: '700px', marginBottom: '2.5rem' }}
        >
          Hirevox Flow compresses your hiring time by 80% using context-aware AI that sources, screens, and ranks candidates.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href="/signup"
            className="gradient-bg flex items-center gap-2 rounded-xl font-bold"
            style={{
              padding: '16px 34px',
              fontSize: '14px',
              boxShadow: '0 15px 30px -10px color-mix(in srgb, var(--primary), transparent 70%)',
            }}
          >
            Build Your Team <ArrowRight size={18} />
          </Link>
          <button
            className="glass flex items-center gap-2 rounded-xl font-bold text-foreground"
            style={{ padding: '16px 34px', fontSize: '14px' }}
          >
            <div
              className="flex items-center justify-center rounded-full text-white"
              style={{ background: 'var(--primary)', width: '24px', height: '24px' }}
            >
              <Play size={12} fill="currentColor" />
            </div>
            Watch Demo
          </button>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto"
          style={{ marginTop: '2rem', maxWidth: '1100px' }}
        >
          {mounted && (
            <img
              src={theme === 'dark' ? "/assets/dashboard-dark.png" : "/assets/dashboard-light.png"}
              alt="Hirevox Dashboard"
              className="w-full h-auto block rounded-2xl shadow-2xl border border-[var(--border)]"
            />
          )}
          {!mounted && <div className="w-full aspect-video rounded-2xl bg-[var(--surface)] animate-pulse border border-[var(--border)]" />}
        </motion.div>
      </div>
    </section>
  );
}
