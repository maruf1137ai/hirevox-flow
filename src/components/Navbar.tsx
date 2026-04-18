"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="glass"
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        width: 'calc(100% - 40px)',
        maxWidth: '1200px',
        borderRadius: '16px',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
      }}
    >
      <div style={{ height: '64px', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="gradient-bg" style={{ width: '28px', height: '28px', borderRadius: '6px' }}></div>
          <span style={{ fontSize: '1.125rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}>Hirevox <span className="gradient-text">Flow</span></span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link href="#features" className="footer-link" style={{ fontSize: '0.8125rem', fontWeight: 500 }}>Product</Link>
          <Link href="#pricing" className="footer-link" style={{ fontSize: '0.8125rem', fontWeight: 500 }}>Pricing</Link>
          <Link href="/dashboard" className="footer-link" style={{ fontSize: '0.8125rem', fontWeight: 500 }}>Sign In</Link>
          <Link href="/signup" className="gradient-bg" style={{ padding: '8px 20px', borderRadius: '10px', fontSize: '0.8125rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
