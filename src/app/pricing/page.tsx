"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Sparkles, Building2, HelpCircle, Plus, Minus } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <motion.div
        initial={false}
        className={`group rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-[var(--surface)] border-primary shadow-lg shadow-primary/5' : 'bg-[var(--surface)]/40 border-[var(--border)] hover:border-primary/50'}`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-8 py-6 flex items-center justify-between text-left"
        >
          <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>
            {question}
          </span>
          <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-primary/10 text-primary'}`}>
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          </div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-6 text-sm leading-relaxed subtitle-text border-t border-primary/5 pt-4">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  const plans = [
    {
      name: "Starter",
      desc: "For small teams and startups testing the waters.",
      price: isAnnual ? "0" : "0",
      features: [
        "1 Active Job Board",
        "Semantic Profile Building",
        "AI Screening Q&A (Text)",
        "Standard Analytics",
        "Community Support"
      ],
      button: "Get Started",
      highlight: false
    },
    {
      name: "Pro",
      desc: "Advanced AI power for growing scale-ups.",
      price: isAnnual ? "39" : "49",
      features: [
        "Unlimited Job Boards",
        "Voice AI Interviews",
        "Detailed Intelligence Reports",
        "Anti-Fraud Proctoring",
        "Custom Branding",
        "Priority Support"
      ],
      button: "Try Pro Free",
      highlight: true
    },
    {
      name: "Enterprise",
      desc: "Maximum control and security for deep custom needs.",
      price: "Custom",
      features: [
        "Self-Hosted Data Option",
        "Custom Source Integrations",
        "Dedicated Account Lead",
        "SOC2/GDPR Compliance Deck",
        "Unlimited Seats",
        "On-Premise Deployment"
      ],
      button: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding pt-48 pb-20 text-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="badge mb-6"
            style={{ background: 'color-mix(in srgb, var(--primary), transparent 90%)', color: 'var(--primary)' }}
          >
            Flexible Plans
          </motion.div>
          <h1 className="text-6xl font-bold mb-6">Simple, Honest <span className="gradient-text">Pricing</span></h1>
          <p className="subtitle-text mx-auto max-w-[600px] mb-12 text-xl font-medium">
            Scale your hiring team without scaling your complexity.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-foreground' : 'text-muted'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 rounded-full bg-primary/10 relative p-1 transition-all"
            >
              <div className={`w-6 h-6 rounded-full bg-primary shadow-lg transition-all ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold ${isAnnual ? 'text-foreground' : 'text-muted'}`}>Annual</span>
              <span className="text-[10px] bg-green-500/10 text-green-500 font-black px-2 py-0.5 rounded-full">Save 20%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 relative">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className={`card flex flex-col p-8 ${plan.highlight ? 'relative border-2 border-primary shadow-2xl scale-105 z-20' : ''}`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="subtitle-text text-sm leading-relaxed">{plan.desc}</p>
                </div>
                <div className="mb-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black">{plan.price !== "Custom" ? `$${plan.price}` : plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted font-bold text-lg">/mo</span>}
                  </div>
                  {isAnnual && plan.price !== "0" && plan.price !== "Custom" && (
                    <p className="text-[10px] text-primary font-bold mt-2 uppercase tracking-widest">Billed annually</p>
                  )}
                </div>
                <ul className="space-y-4 mb-12 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-medium">
                      <CheckCircle2 size={18} className="text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`${plan.highlight ? 'gradient-bg' : 'glass'} w-full rounded-xl font-bold text-center hover:scale-[1.02] transition-all`}
                  style={{ padding: '16px 34px', fontSize: '14px' }}
                >
                  {plan.button}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section-padding bg-[var(--surface)]/10">
        <div className="container">
          <div className="text-center mb-20 font-bold">
            <h2 className="text-4xl mb-4">Deep Dive <span className="gradient-text">Comparison</span></h2>
            <p className="subtitle-text">Every tool you need to find the top 1%.</p>
          </div>

          <div className="max-w-[800px] mx-auto glass rounded-[32px] overflow-hidden border border-[var(--border)]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="p-6 font-bold text-muted uppercase text-xs tracking-widest">Capability</th>
                  <th className="p-6 font-bold text-muted uppercase text-xs tracking-widest text-center">Starter</th>
                  <th className="p-6 font-bold text-muted uppercase text-xs tracking-widest text-center">Pro</th>
                </tr>
              </thead>
              <tbody className="subtitle-text">
                {[
                  { name: "Semantic Search", s: "Basic", p: "Deep Context" },
                  { name: "Voice Interviews", s: "—", p: "Unlimited" },
                  { name: "Intelligence Reports", s: "Standard", p: "Comprehensive" },
                  { name: "Custom Guardrails", s: "Fixed", p: "Fully Custom" },
                  { name: "Integration Hooks", s: "Webhooks", p: "API + SDK" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[var(--border)] last:border-0 hover:bg-white/5 transition-colors">
                    <td className="p-6 font-bold text-foreground text-sm">{row.name}</td>
                    <td className="p-6 text-center text-sm">{row.s}</td>
                    <td className="p-6 text-center text-sm font-bold text-primary">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-20 font-bold">
            <h2 className="text-4xl mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="subtitle-text">Clear answers to help you build the best team.</p>
          </div>
          <div className="max-w-[800px] mx-auto space-y-4">
            {[
              { q: "How does the AI verify technical depth?", a: "We go beyond keywords. Our system analyzes structured reasoning in voice interviews and maps it against historical technical patterns to detect depth, architectural nuance, and problem-solving patterns." },
              { q: "Can I cancel my Pro plan at any time?", a: "Yes, we believe in value-based software. Cancel anytime and you'll keep access until the end of your billing cycle. If you're on an annual plan, you'll remain active for the duration of the prepaid period." },
              { q: "Do you offer discounts for educational startups?", a: "Absolutely. We love supporting the ecosystem. We offer a 50% discount for non-profits and educational startups for their first year. Contact our support team to apply." },
              { q: "Is candidate data encrypted and secure?", a: "Security is built-in. All audio and text data is encrypted at rest and in transit (AES-256). We are SOC2 Type II compliant and never train our global models on your private candidate data." },
              { q: "How accurate are the Voice AI interviews?", a: "Our models are trained on millions of technical conversations and maintain a 98% correlation with human-led first-round technical screens. Every interview includes a detailed transcript for your review." },
              { q: "Can I integrate Hirevox with my current ATS?", a: "Yes, the Pro and Enterprise plans include built-in integrations for popular ATS systems like Greenhouse, Lever, and Ashby. Custom Webhooks and API access are also available." }
            ].map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
          </div>
        </div>
      </section>


      {/* <Footer /> */}
    </main>
  );
}
