"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Sparkles, CheckCircle2, Eye, EyeOff } from "lucide-react";

// Inline SVGs for social icons to ensure compatibility and premium look
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.04.69-2.21 1.14-3.71 1.14-2.85 0-5.27-1.92-6.13-4.51H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.87 14.19c-.22-.69-.35-1.43-.35-2.19s.13-1.5.35-2.19V6.97H2.18C1.43 8.47 1 10.18 1 12s.43 3.53 1.18 5.03l3.69-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.97l3.69 2.84c.86-2.59 3.28-4.51 6.13-4.51z" fill="#EA4335" />
  </svg>
);

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground overflow-hidden">
      {/* Left Panel - Branding & Social Proof */}
      <div className="hidden lg:flex w-1/2 gradient-bg relative items-center justify-center p-20 flex-col text-white">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="relative z-10 w-full max-w-md">
          <Link href="/" className="inline-flex items-center gap-2 mb-20 text-white/90 hover:text-white transition-colors">
            <ArrowLeft size={18} /> Back to website
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-2.5 shadow-lg">
              <Image src="/assets/icon.png" alt="Hirevox Logo" width={32} height={32} />
            </div>
            <span className="text-2xl font-black italic tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Hirevox Flow</span>
          </div>

          <h2 className="text-5xl font-bold mb-8 leading-tight">Build your team with AI-augmented <span className="italic">precision</span>.</h2>

          <div className="space-y-6">
            {[
              "80% faster candidate screening",
              "Unbiased AI voice interviews",
              "Context-aware talent ranking"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-white/80 font-medium">
                <CheckCircle2 size={20} className="text-white" /> {text}
              </div>
            ))}
          </div>

          {/* Floating UI Mockup */}
          <div className="mt-20 glass p-6 rounded-2xl border-white/20 animate-float">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/20" />
              <div className="h-2 w-24 bg-white/20 rounded-full" />
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full mb-2" />
            <div className="h-2 w-2/3 bg-white/10 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background relative">
        <div className="w-full max-w-md">
          <div className="mb-10 lg:hidden">
            <Link href="/" className="flex items-center gap-2 text-2xl font-black italic tracking-tight text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              <Image src="/assets/logo-black.png" alt="Hirevox Logo" width={28} height={28} />
              Hirevox <span className="gradient-text">Flow</span>
            </Link>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-3">Create an account</h1>
            <p className="subtitle-text">Start hiring candidates in minutes.</p>
          </div>

          <div className="space-y-4 mb-8">
            <button className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-[var(--border)] font-semibold hover:bg-[var(--surface-hover)] transition-all">
              <GoogleIcon /> Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-[var(--border)] font-semibold hover:bg-[var(--surface-hover)] transition-all">
              <GithubIcon /> Continue with GitHub
            </button>
          </div>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[var(--border)]" /></div>
            <span className="relative bg-background px-4 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Or continue with email</span>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold mb-2">Work Email</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[var(--surface)]/50 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium py-3.5"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-bold mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface)]/50 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium py-3.5 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-foreground transition-colors p-1"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-bold mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface)]/50 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium py-3.5 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-foreground transition-colors p-1"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              className="gradient-bg w-full font-bold rounded-xl shadow-lg shadow-primary/20 mt-4"
              style={{ padding: '16px 34px', fontSize: '14px' }}
            >
              Sign Up
            </button>
          </form>

          <p className="mt-8 text-center text-sm subtitle-text">
            Already have an account? <Link href="/signin" className="text-primary font-bold hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
