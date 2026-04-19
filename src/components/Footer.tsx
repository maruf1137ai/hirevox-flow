"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (pathname?.startsWith('/dashboard') || pathname === '/signin' || pathname === '/signup') return null;

  return (
    <footer className="py-16 pb-10" style={{ background: 'color-mix(in srgb, var(--foreground), transparent 97%)' }}>
      <div className="container">
        {/* Top Row */}
        <div className="flex justify-between items-start mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-8 flex items-center justify-center">
                {mounted && (
                  <img src={theme === 'dark' ? "/assets/logo-white.png" : "/assets/logo-black.png"} alt="Hirevox Flow Logo" className="h-full object-contain" />
                )}
                {!mounted && <div className="gradient-bg h-7 rounded-md" />}
              </div>
              {/* <span
                className="text-lg font-extrabold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Hirevox <span className="gradient-text">Flow</span>
              </span> */}
            </div>
            <p className="text-sm max-w-[300px] leading-relaxed" style={{ color: 'color-mix(in srgb, var(--foreground), transparent 30%)' }}>
              The AI-Augmented Hiring OS for teams who value speed, quality, and human-in-the-loop intelligence.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-20">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold mb-2">Product</h4>
              <Link href="/product" className="footer-link text-sm">Features</Link>
              <Link href="/pricing" className="footer-link text-sm">Pricing</Link>
              <Link href="#" className="footer-link text-sm">Security</Link>
              <Link href="#" className="footer-link text-sm">API</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold mb-2">Company</h4>
              <Link href="/about" className="footer-link text-sm">About</Link>
              <Link href="#" className="footer-link text-sm">Blog</Link>
              <Link href="#" className="footer-link text-sm">Careers</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold mb-2">Legal</h4>
              <Link href="#" className="footer-link text-sm">Privacy Policy</Link>
              <Link href="#" className="footer-link text-sm">Terms of Service</Link>
              <Link href="#" className="footer-link text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border)] pt-8 flex justify-between items-center">
          <p className="text-xs" style={{ color: 'color-mix(in srgb, var(--foreground), transparent 30%)' }}>
            © 2026 Hirevox Flow. All rights reserved. Built for the future of work.
          </p>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-5">
              {/* Facebook */}
              <Link href="#" aria-label="Facebook" className="footer-link flex">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              {/* Twitter */}
              <Link href="#" aria-label="Twitter" className="footer-link flex">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link href="#" aria-label="LinkedIn" className="footer-link flex">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
            <div className="h-6 w-px bg-[var(--border)]" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
