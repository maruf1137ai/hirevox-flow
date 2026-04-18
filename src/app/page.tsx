"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Zap,
  ShieldCheck,
  Search,
  MessageSquare,
  BarChart3
} from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navbar />
      <Hero />

      {/* Logos Section */}
      {/* <section style={{ padding: '6rem 0', background: 'color-mix(in srgb, var(--foreground), transparent 98%)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3rem' }}>
            Trusted by modern hiring teams
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5rem', opacity: 0.5 }}>
            {["STRIPE", "VERCEL", "NEXTJS", "OPENAI", "FIGMA", "RAILWAY"].map(logo => (
              <span key={logo} style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em', color: 'var(--foreground)' }}>{logo}</span>
            ))}
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      <section id="features" className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="badge" style={{ background: 'color-mix(in srgb, var(--primary), transparent 90%)', color: 'var(--primary)', marginBottom: '1.5rem' }}>The Pipeline</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.1 }}>A fully automated <span className="gradient-text">hiring OS</span></h2>
            <p className="subtitle-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
              We've redesigned the hiring process from the ground up to be AI-first and candidate-centric.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            <motion.div {...fadeIn} className="card">
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'color-mix(in srgb, var(--primary), transparent 90%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '2rem' }}>
                <Search size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>No Resume Sourcing</h3>
              <p className="subtitle-text">
                Hirevox builds dynamic profiles from GitHub, Behance, and technical assessments to verify real talent.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="card">
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'color-mix(in srgb, var(--secondary), transparent 90%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', marginBottom: '2rem' }}>
                <MessageSquare size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>AI Interview Core</h3>
              <p className="subtitle-text">
                Our AI conducts first-round voice and text interviews, evaluating communication and cultural nuance.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="card">
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'color-mix(in srgb, var(--accent), transparent 90%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', marginBottom: '2rem' }}>
                <BarChart3 size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Explainable Scoring</h3>
              <p className="subtitle-text">
                Get a structured 0-100 score for every candidate with a detailed breakdown of why they matched.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="blob" style={{ bottom: '-10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'var(--primary)', opacity: 0.05 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Simple, transparent <span className="gradient-text">pricing</span></h2>
            <p className="subtitle-text">Choose the plan that matches your hiring volume.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Starter</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, margin: '2rem 0' }}>$0 <span style={{ fontSize: '1rem', color: 'var(--muted)', fontWeight: 400 }}>/ month</span></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={16} color="var(--primary)" /> 1 Active Job</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={16} color="var(--primary)" /> AI Screening Q&A</li>
              </ul>
              <button className="glass" style={{ padding: '14px', borderRadius: '12px', fontWeight: 700 }}>Get Started</button>
            </div>

            <div className="card" style={{ border: '2px solid var(--primary)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700 }}>MOST POPULAR</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Pro</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, margin: '2rem 0' }}>$49 <span style={{ fontSize: '1rem', color: 'var(--muted)', fontWeight: 400 }}>/ month</span></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={16} color="var(--primary)" /> Unlimited Jobs</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={16} color="var(--primary)" /> Voice AI Interviews</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={16} color="var(--primary)" /> Custom Culture RAG</li>
              </ul>
              <button className="gradient-bg" style={{ width: '100%', padding: '14px', borderRadius: '12px', fontWeight: 700 }}>Try Pro Free</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
