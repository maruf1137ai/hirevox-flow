"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Sparkles, CheckCircle2 } from "lucide-react";

// Inline SVGs for social icons to ensure compatibility and premium look
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.04.69-2.21 1.14-3.71 1.14-2.85 0-5.27-1.92-6.13-4.51H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.87 14.19c-.22-.69-.35-1.43-.35-2.19s.13-1.5.35-2.19V6.97H2.18C1.43 8.47 1 10.18 1 12s.43 3.53 1.18 5.03l3.69-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.97l3.69 2.84c.86-2.59 3.28-4.51 6.13-4.51z" fill="#EA4335" />
  </svg>
);

export default function SignInPage() {
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

          <h2 className="text-5xl font-bold mb-8 leading-tight">Welcome back to the <br /><span className="italic">Future of Sourcing</span>.</h2>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl glass border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20" />
                <div>
                  <h4 className="font-bold">Next hire waiting</h4>
                  <p className="text-xs text-white/60">3 AI-vetted profiles added today</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white/40 w-3/4"></div>
              </div>
            </div>

            <p className="text-white/80 font-medium italic">
              &quot;Hirevox Flow compressed our engineering hiring window from 45 days to just 9.&quot;
            </p>
            <p className="text-sm font-bold">— Head of Talent, NextStep Tech</p>
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
            <h1 className="text-4xl font-bold mb-3">Sign in</h1>
            <p className="subtitle-text">Manage your candidate pipeline.</p>
          </div>

          <div className="space-y-4 mb-8">
            <button className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-[var(--border)] font-semibold hover:bg-[var(--surface-hover)] transition-all text-sm">
              <GoogleIcon /> Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-[var(--border)] font-semibold hover:bg-[var(--surface-hover)] transition-all text-sm">
              <GithubIcon /> Sign in with GitHub
            </button>
          </div>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[var(--border)]" /></div>
            <span className="relative bg-background px-4 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Or continue with email</span>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold mb-2">Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl bg-[var(--surface)]/50 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium py-3.5"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-bold">Password</label>
                <Link href="#" className="text-xs text-primary font-bold hover:underline">Forgot password?</Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-[var(--surface)]/50 border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium py-3.5"
              />
            </div>

            <button
              className="gradient-bg w-full font-bold rounded-xl shadow-lg shadow-primary/20 mt-4"
              style={{ padding: '16px 34px', fontSize: '14px' }}
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center text-sm subtitle-text">
            Don&apos;t have an account? <Link href="/signup" className="text-primary font-bold hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
