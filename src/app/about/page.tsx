"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Globe,
  ArrowRight,
  Heart
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
      <section className="section-padding pt-48 pb-32 relative overflow-hidden">
        <div className="blob" style={{ top: '-10%', left: '-10%', width: '600px', height: '600px', background: 'var(--secondary)', opacity: 0.05 }} />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="badge mb-6"
            style={{ background: 'color-mix(in srgb, var(--primary), transparent 90%)', color: 'var(--primary)' }}
          >
            Our Mission
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold mb-6"
            style={{ lineHeight: 1.1 }}
          >
            Hiring for the <br />
            <span className="gradient-text italic">Context-Aware Era</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="subtitle-text mx-auto max-w-[800px] mb-12 text-xl"
          >
            We started Hirevox Flow with a simple observation: modern engineering talent is more than just a list of keywords on a resume. It&apos;s about architectural nuance, problem-solving, and cultural contribution.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[var(--surface)]/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl mb-8 leading-tight">Human Intelligence, <br /><span className="gradient-text">AI Velocity</span>.</h2>
              <p className="subtitle-text mb-6">
                Too many AI tools try to automate the human out of the hiring process. At Hirevox Flow, we do the opposite. We use AI to remove the administrative noise so that humans can focus on what they do best: building meaningful connections.
              </p>
              <p className="subtitle-text mb-10">
                Our system is designed to amplify your expertise, not replace it. We provide the intelligence, the scale, and the speed—you provide the culture and the decision.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-3xl font-black mb-1">80%</h4>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">Time Saved</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black mb-1">500+</h4>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">Teams Scaling</p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="card glass p-8 aspect-square flex flex-col justify-end">
                  <Target className="text-primary mb-4" size={32} />
                  <h4 className="font-bold mb-2">Precision</h4>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: 'color-mix(in srgb, var(--foreground), transparent 30%)' }}>
                    Every data point is cross-verified for maximum context and accuracy.
                  </p>
                </div>
                <div className="card bg-primary p-8 aspect-square flex flex-col justify-end text-white border-0">
                  <Sparkles className="mb-4" size={32} />
                  <h4 className="font-bold mb-2">Innovation</h4>
                  <p className="text-sm font-medium text-white/70 leading-relaxed">
                    Pushing the boundaries of LLM capabilities in modern technical hiring.
                  </p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="card bg-secondary p-8 aspect-square flex flex-col justify-end text-white border-0">
                  <Heart className="mb-4" size={32} />
                  <h4 className="font-bold mb-2">Empathy</h4>
                  <p className="text-sm font-medium text-white/70 leading-relaxed">
                    Ensuring every candidate is treated with dignity and personalized care.
                  </p>
                </div>
                <div className="card glass p-8 aspect-square flex flex-col justify-end">
                  <Users className="text-primary mb-4" size={32} />
                  <h4 className="font-bold mb-2">Unity</h4>
                  <p className="text-sm font-medium leading-relaxed" style={{ color: 'color-mix(in srgb, var(--foreground), transparent 30%)' }}>
                    Bridging the gap between global talent and meaningful opportunity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-6 font-bold">The Core <span className="gradient-text italic">Philosophy</span></h2>
            <p className="subtitle-text mx-auto max-w-[600px]">How we think about the future of work.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              {
                title: "Talent is Everywhere",
                desc: "We believe the next top engineer for your team could be in a remote village or a massive city. Our global sourcing finds them wherever they code."
              },
              {
                title: "Evidence over Status",
                desc: "A degree or a famous past employer is a signal, but real proof is in the work. We prioritize technical evidence over brand-name resumes."
              },
              {
                title: "Focus on the Outcome",
                desc: "Hiring isn't the goal—building a great product is. We optimize our pipeline to get you to the 'Offer' stage with the right person, faster."
              }
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
                <div className="w-16 h-16 rounded-[24px] bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary">
                  {i === 0 ? <Globe size={32} /> : i === 1 ? <ShieldCheck size={32} /> : <Lightbulb size={32} />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="subtitle-text text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="section-padding mb-20">
        <div className="container">
          <div className="gradient-bg p-20 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-[500px]">
              <h2 className="text-5xl text-white mb-6 leading-tight">Join the hiring <br /> revolution.</h2>
              <p className="text-white/70 mb-8">We&apos;re building more than just software. We&apos;re building the infrastructure for the future of work.</p>
              <Link href="/signup" className="bg-white text-primary rounded-xl font-bold inline-block" style={{ padding: '16px 34px', fontSize: '14px' }}>Work with us</Link>
            </div>
            <div className="relative group">
              <div className="w-64 h-64 rounded-full border-4 border-white/20 p-2 group-hover:border-white/40 transition-all">
                <div className="w-full h-full rounded-full overflow-hidden bg-white/10 flex items-center justify-center text-white/40">
                  <Users size={80} />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white shadow-xl">
                <Sparkles size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <Footer /> */}
    </main>
  );
}
