"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Zap,
  BrainCircuit,
  Search,
  Users,
  ShieldCheck,
  BarChart,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function ProductPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden pt-48 pb-32">
        <div className="blob" style={{ top: '-10%', right: '-10%', width: '600px', height: '600px', background: 'var(--primary)', opacity: 0.1 }} />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="badge mb-6"
            style={{ background: 'color-mix(in srgb, var(--primary), transparent 90%)', color: 'var(--primary)' }}
          >
            <Sparkles size={14} className="mr-2" /> The Future of Sourcing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold mb-6"
            style={{ lineHeight: 1.1 }}
          >
            A Unified OS for <br />
            <span className="gradient-text italic">Contextual Hiring</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="subtitle-text mx-auto max-w-[700px] mb-12"
          >
            Hirevox Flow replaces fragmented tools with a single, AI-native operating system that handles everything from initial sourcing to final intelligence reports.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/signup" className="gradient-bg rounded-xl font-bold flex items-center gap-2 shadow-lg" style={{ padding: '16px 34px', fontSize: '14px' }}>
              Get Started <ArrowRight size={18} />
            </Link>
            <Link href="#features" className="glass rounded-xl font-bold" style={{ padding: '16px 34px', fontSize: '14px' }}>
              Explore Capabilities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="features" className="section-padding bg-[var(--surface)]/10">
        <div className="container">
          <div className="text-center mb-24">
            <h2 className="text-5xl mb-4">Core <span className="gradient-text">Capabilities</span></h2>
            <p className="subtitle-text">Built to compress months of work into days.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="text-primary" />,
                title: "Semantic Sourcing",
                desc: "Go beyond keywords. Our AI identifies talent based on project impact, architectural depth, and real-world problem-solving from public footprints."
              },
              {
                icon: <MessageSquare className="text-secondary" />,
                title: "Voice AI Interviews",
                desc: "Conduct high-fidelity first-round interviews at scale. Our voice agent evaluates technical communication and cultural alignment with zero bias."
              },
              {
                icon: <BarChart className="text-accent" />,
                title: "Intelligence Reports",
                desc: "Don't just see a score. Get a detailed LLM-generated report explaining exactly why a candidate is a fit for your specific team context."
              },
              {
                icon: <Globe className="text-primary" />,
                title: "Global Reach",
                desc: "Automatically source from worldwide technical communities, bypassing traditional job boards to find passive talent where they actually live."
              },
              {
                icon: <ShieldCheck className="text-secondary" />,
                title: "Anti-Fraud Proctoring",
                desc: "Integrated technical assessments with AI-powered anti-cheat monitoring ensures you're evaluating real skills, every time."
              },
              {
                icon: <Zap className="text-accent" />,
                title: "Pipeline Automation",
                desc: "Automate boring tasks like scheduling, follow-ups, and data entry. Keep your candidates engaged while you focus on the final decision."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="card group hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl mb-4">{feature.title}</h3>
                <p className="subtitle-text text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div {...fadeIn}>
              <span className="badge mb-6" style={{ background: 'color-mix(in srgb, var(--primary), transparent 90%)', color: 'var(--primary)' }}>Sourcing 2.0</span>
              <h2 className="text-5xl mb-6">Stop searching, <br /> start <span className="gradient-text">identifying</span>.</h2>
              <p className="subtitle-text mb-8">
                Traditional sourcing relies on LinkedIn profiles that candidates haven't updated in years. Hirevox Flow analyzes code commits, portfolio case studies, and stack-overflow contributions to build a real-time graph of technical competence.
              </p>
              <ul className="space-y-4">
                {["Cross-platform skill verification", "Direct contact automation", "Passive talent discovery"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Zap size={10} className="text-primary" fill="currentColor" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="relative">
              <div className="glass p-4 rounded-3xl border border-[var(--border)] shadow-2xl">
                <img src="/assets/dashboard-dark.png" alt="Sourcing Dashboard" className="rounded-2xl w-full h-auto shadow-sm" />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl border border-[var(--border)] shadow-xl animate-float lg:block hidden">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500"><Users size={16} /></div>
                  <div>
                    <p className="text-xs font-bold">12 New Matches</p>
                    <p className="text-[10px] subtitle-text">High-priority leads found</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1 relative">
              <div className="glass p-4 rounded-3xl border border-[var(--border)] shadow-2xl">
                <div className="bg-background rounded-2xl p-8 aspect-video flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <BrainCircuit size={40} className="text-primary animate-pulse" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Analyzing Candidate Response...</h4>
                  <div className="w-1/2 h-1.5 bg-primary/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary animate-progress" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="order-1 lg:order-2">
              <span className="badge mb-6" style={{ background: 'color-mix(in srgb, var(--secondary), transparent 90%)', color: 'var(--secondary)' }}>Voice Intelligence</span>
              <h2 className="text-5xl mb-6">Interviews on <br /><span className="gradient-text italic">Autopilot</span>.</h2>
              <p className="subtitle-text mb-8">
                Every candidate gets a high-quality human-like interview experience. Our AI listens not just for keywords, but for structured reasoning, experience depth, and communication clarity.
              </p>
              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <p className="text-sm italic mb-4 opacity-80">&quot;The AI asked a follow-up question about my specific approach to React server components that felt incredibly human and technically sharp.&quot;</p>
                <p className="text-xs font-bold">— Staff Engineer Candidate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container text-center">
          <div className="gradient-bg p-20 rounded-[40px] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl text-white mb-6">Built for the <br />10x Engineering Culture</h2>
              <p className="text-white/80 max-w-[600px] mx-auto mb-10">Start building your context-aware hiring pipeline today. No commitment required for the first 14 days.</p>
              <Link href="/signup" className="bg-white text-primary rounded-xl font-bold inline-block hover:shadow-xl transition-all" style={{ padding: '16px 34px', fontSize: '14px' }}>
                Create Your Account
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* <Footer /> */}
    </main>
  );
}
