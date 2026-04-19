"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Zap,
  ShieldCheck,
  Search,
  MessageSquare,
  BarChart3,
} from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Logos Section */}
      <section className="py-24" style={{ background: 'color-mix(in srgb, var(--foreground), transparent 98%)' }}>
        <div className="container">
          <p className="text-center text-[var(--muted)] text-sm font-semibold uppercase tracking-widest mb-12">
            Trusted by modern hiring teams
          </p>
          <div className="flex flex-wrap justify-center gap-20 opacity-50">
            {["STRIPE", "VERCEL", "NEXTJS", "OPENAI", "FIGMA", "RAILWAY"].map((logo) => (
              <span
                key={logo}
                className="font-black text-2xl text-foreground"
                style={{ letterSpacing: '-0.05em' }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="section-padding">
        <div className="container">
          <div className="text-center mb-24">
            <span
              className="badge mb-6"
              style={{
                background: 'color-mix(in srgb, var(--primary), transparent 90%)',
                color: 'var(--primary)',
              }}
            >
              The Pipeline
            </span>
            <h2 className="text-5xl mb-4" style={{ lineHeight: 1.1 }}>
              A fully automated <span className="gradient-text">hiring OS</span>
            </h2>
            <p className="subtitle-text mx-auto" style={{ maxWidth: '600px' }}>
              We&apos;ve redesigned the hiring process from the ground up to be AI-first and candidate-centric.
            </p>
          </div>

          <div className="grid gap-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <motion.div {...fadeIn} className="card">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
                style={{
                  background: 'color-mix(in srgb, var(--primary), transparent 90%)',
                  color: 'var(--primary)',
                }}
              >
                <Search size={28} />
              </div>
              <h3 className="text-2xl mb-3">No Resume Sourcing</h3>
              <p className="subtitle-text">
                Hirevox builds dynamic profiles from GitHub, Behance, and technical assessments to verify real talent.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="card">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
                style={{
                  background: 'color-mix(in srgb, var(--secondary), transparent 90%)',
                  color: 'var(--secondary)',
                }}
              >
                <MessageSquare size={28} />
              </div>
              <h3 className="text-2xl mb-3">AI Interview Core</h3>
              <p className="subtitle-text">
                Our AI conducts first-round voice and text interviews, evaluating communication and cultural nuance.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="card">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
                style={{
                  background: 'color-mix(in srgb, var(--accent), transparent 90%)',
                  color: 'var(--accent)',
                }}
              >
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl mb-3">Explainable Scoring</h3>
              <p className="subtitle-text">
                Get a structured 0-100 score for every candidate with a detailed breakdown of why they matched.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding relative overflow-hidden">
        <div
          className="blob"
          style={{
            bottom: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '600px',
            background: 'var(--primary)',
            opacity: 0.05,
          }}
        />
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-4">
              Simple, transparent <span className="gradient-text">pricing</span>
            </h2>
            <p className="subtitle-text">Choose the plan that matches your hiring volume.</p>
          </div>

          <div
            className="grid gap-8 mx-auto"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: '1000px' }}
          >
            {/* Starter */}
            <div className="card flex flex-col">
              <h3 className="text-xl mb-2">Starter</h3>
              <div className="text-4xl font-bold my-8">
                $0{" "}
                <span className="text-base text-[var(--muted)] font-normal">/ month</span>
              </div>
              <ul className="flex flex-col gap-4 mb-12 flex-1">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} color="var(--primary)" /> 1 Active Job
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} color="var(--primary)" /> AI Screening Q&A
                </li>
              </ul>
              <Link href="/signup" className="glass w-full font-bold shadow-none text-center rounded-xl" style={{ padding: '16px 34px', fontSize: '14px' }}>
                Get Started
              </Link>
            </div>

            {/* Pro */}
            <div className="card relative" style={{ border: '2px solid var(--primary)' }}>
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: 'var(--primary)' }}
              >
                MOST POPULAR
              </div>
              <h3 className="text-xl mb-2">Pro</h3>
              <div className="text-4xl font-bold my-8">
                $49{" "}
                <span className="text-base text-[var(--muted)] font-normal">/ month</span>
              </div>
              <ul className="flex flex-col gap-4 mb-12">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} color="var(--primary)" /> Unlimited Jobs
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} color="var(--primary)" /> Voice AI Interviews
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} color="var(--primary)" /> Custom Culture RAG
                </li>
              </ul>
              <Link href="/signup" className="gradient-bg w-full font-bold text-center rounded-xl" style={{ padding: '16px 34px', fontSize: '14px', boxShadow: '0 15px 30px -10px color-mix(in srgb, var(--primary), transparent 70%)' }}>
                Try Pro Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Intelligence Section */}
      <section className="section-padding bg-[var(--surface)]/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="badge mb-6" style={{ background: 'color-mix(in srgb, var(--primary), transparent 90%)', color: 'var(--primary)' }}>
                System Core
              </span>
              <h2 className="text-5xl mb-6 leading-tight">
                AI that understands <br />
                <span className="gradient-text italic">Contextual Talent</span>
              </h2>
              <p className="subtitle-text mb-8">
                Unlike simple keyword filters, Hirevox Flow uses deep-reasoning LLMs to understand the nuance behind a project, the complexity of a codebase, and the cultural alignment of a candidate&apos;s past experiences.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Semantic Matching", desc: "Matches intent, not just keywords." },
                  { title: "Bias Neutralization", desc: "Anonymized screening for true meritocracy." },
                  { title: "Voice & Text Synthesis", desc: "Natural conversational AI interviews." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><CheckCircle2 size={18} color="var(--primary)" /></div>
                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="subtitle-text text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass p-8 rounded-[24px] border border-[var(--border)] shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">JD</div>
                  <div>
                    <h4 className="font-bold">Senior Product Engineer</h4>
                    <p className="text-xs subtitle-text">Analysis in progress...</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary animate-progress" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs font-medium">
                    <span>Technical Depth</span>
                    <span className="text-primary">85% Match</span>
                  </div>

                  <div className="p-4 rounded-xl bg-background/50 border border-[var(--border)] italic text-sm subtitle-text">
                    &quot;Candidate shows strong ownership of the architectural shift from monolith to microservices at their previous role.&quot;
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 gradient-bg opacity-10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="section-padding">
        <div className="container">
          <div className="gradient-bg p-20 rounded-[40px] text-center relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <motion.div {...fadeIn} className="relative z-10">
              <h2 className="text-5xl text-white mb-6">Ready to find your <br /> next 10x hire?</h2>
              <p className="text-white/80 text-xl max-w-[600px] mx-auto mb-12">
                Join 500+ teams scaling their engineering and product organizations with AI-augmented intelligence.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link href="/signup" className="bg-white text-primary rounded-xl font-bold transition-all text-center" style={{ padding: '16px 34px', fontSize: '14px', boxShadow: '0 15px 30px -10px rgba(0,0,0,0.1)' }}>
                  Get Started Free
                </Link>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all" style={{ padding: '16px 34px', fontSize: '14px' }}>
                  Book a Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>

  );
}
