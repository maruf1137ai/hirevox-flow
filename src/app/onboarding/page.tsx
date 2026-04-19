"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, ArrowRight, ArrowLeft, Sparkles, Building2, Users2, Zap, Trophy, BrainCircuit } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "../../components/ThemeProvider";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const finish = () => router.push('/dashboard');

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none" />

      {/* Brand Logo */}
      <div className="mb-12">
        {mounted && (
          <Image
            src={theme === 'dark' ? "/assets/logo-white.png" : "/assets/logo-black.png"}
            alt="Hirevox Flow Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md mb-12 flex justify-between gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1 h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
            <motion.div
              className="h-full gradient-bg"
              initial={{ width: 0 }}
              animate={{ width: step >= s ? '100%' : '0%' }}
              transition={{ duration: 0.4 }}
            />
          </div>
        ))}
      </div>

      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass p-12 rounded-[32px] border border-[var(--border)] shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white">
                  <Building2 size={24} />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Setup your workspace</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Corp"
                    className="w-full px-5 py-4 rounded-2xl bg-[var(--surface-hover)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Work Domain</label>
                  <input
                    type="text"
                    placeholder="acme.com"
                    className="w-full px-5 py-4 rounded-2xl bg-[var(--surface-hover)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-lg"
                  />
                </div>
              </div>

              <div className="mt-12 flex justify-end">
                <button
                  onClick={nextStep}
                  className="gradient-bg flex items-center gap-2 font-bold shadow-lg shadow-primary/20"
                  style={{ padding: '16px 34px', fontSize: '14px' }}
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass p-12 rounded-[32px] border border-[var(--border)] shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white">
                  <Users2 size={24} />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Tell us about your team</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, label: "Fast Growth", sub: "Hiring 10+ / mo" },
                  { icon: Trophy, label: "Steady", sub: "Hiring 1-2 / mo" },
                  { icon: Building2, label: "Enterprise", sub: "Global hiring" },
                  { icon: Sparkles, label: "Startup", sub: "Seed / Series A" }
                ].map((item) => (
                  <button
                    key={item.label}
                    className="flex flex-col items-center justify-center p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-hover)] hover:border-primary hover:bg-primary/5 transition-all text-center gap-3 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold">{item.label}</h4>
                      <p className="text-xs subtitle-text">{item.sub}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-12 flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-8 py-4 font-bold subtitle-text hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <ArrowLeft size={18} /> Back
                </button>
                <button
                  onClick={nextStep}
                  className="gradient-bg flex items-center gap-2 font-bold shadow-lg shadow-primary/20"
                  style={{ padding: '16px 34px', fontSize: '14px' }}
                >
                  Next Step <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass p-12 rounded-[32px] border border-[var(--border)] shadow-2xl text-center"
            >
              <div className="w-20 h-20 rounded-3xl gradient-bg mx-auto mb-8 flex items-center justify-center text-white shadow-2xl shadow-primary/40 animate-float">
                <BrainCircuit size={40} />
              </div>

              <h2 className="text-4xl font-bold mb-4 tracking-tight">AI Calibration Complete</h2>
              <p className="subtitle-text text-lg max-w-sm mx-auto mb-12">
                Your hiring engine is ready. We&apos;ve calibrated for your team&apos;s specific growth stage.
              </p>

              <div className="space-y-4 mb-12 text-left max-w-md mx-auto">
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold tracking-wide">Syncing with LinkedIn Core...</span>
                </div>
                <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold tracking-wide">Initializing Voice Screening Engine...</span>
                </div>
              </div>

              <button
                onClick={finish}
                className="gradient-bg w-full font-bold shadow-xl shadow-primary/30 py-5 rounded-2xl text-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.02]"
              >
                Enter Workspace <Sparkles size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8">
        <p className="text-sm subtitle-text">Need help? <Link href="#" className="underline font-medium hover:text-foreground">Contact Support</Link></p>
      </div>
    </div>
  );
}
