"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      {/* Preserved New Background Glows */}
      <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '100vh', zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, color-mix(in srgb, var(--primary), transparent 85%) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, color-mix(in srgb, var(--secondary), transparent 85%) 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
      </div>

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '99px',
            color: 'var(--primary)',
            fontSize: '0.875rem',
            fontWeight: 700,
            marginBottom: '2.5rem',
            border: '1px solid var(--border)'
          }}
        >
          <Sparkles size={16} fill="currentColor" /> AI-Augmented Hiring Operating System
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
            maxWidth: '1000px',
            margin: '0 auto 1.25rem',
            lineHeight: 1.1,
            color: 'var(--foreground)'
          }}
        >
          The Future of Hiring is <br />
          <span className="gradient-text" style={{ fontStyle: 'italic' }}>Human-in-the-Loop</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="subtitle-text"
          style={{
            maxWidth: '700px',
            margin: '0 auto 2.5rem'
          }}
        >
          Hirevox Flow compresses your hiring time by 80% using context-aware AI that sources, screens, and ranks candidates.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}
        >
          <button className="gradient-bg" style={{ padding: '16px 34px', borderRadius: '12px', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 15px 30px -10px color-mix(in srgb, var(--primary), transparent 70%)' }}>
            Build Your Team <ArrowRight size={18} />
          </button>
          <button className="glass" style={{ padding: '16px 34px', borderRadius: '12px', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--foreground)' }}>
            <div style={{ background: 'var(--primary)', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><Play size={12} fill="currentColor" /></div> Watch Demo
          </button>
        </motion.div>

        {/* Dashboard Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ marginTop: '2rem', maxWidth: '1100px', margin: '2rem auto 0' }}
        >
          <img
            src="/assets/dashboard.png"
            alt="Hirevox Dashboard"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
