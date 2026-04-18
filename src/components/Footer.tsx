"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/dashboard')) return null;
  return (
    <footer style={{ padding: '60px 0 40px', background: 'color-mix(in srgb, var(--foreground), transparent 97%)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div className="gradient-bg" style={{ width: '24px', height: '24px', borderRadius: '6px' }}></div>
              <span style={{ fontSize: '1.125rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Hirevox <span className="gradient-text">Flow</span></span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem', maxWidth: '300px', lineHeight: 1.6 }}>
              The AI-Augmented Hiring OS for teams who value speed, quality, and human-in-the-loop intelligence.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '8px' }}>Product</h4>
              <Link href="#" className="footer-link" style={{ fontSize: '0.875rem' }}>Features</Link>
              <Link href="#" className="footer-link" style={{ fontSize: '0.875rem' }}>Security</Link>
              <Link href="#" className="footer-link" style={{ fontSize: '0.875rem' }}>API</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '8px' }}>Company</h4>
              <Link href="#" className="footer-link" style={{ fontSize: '0.875rem' }}>About</Link>
              <Link href="#" className="footer-link" style={{ fontSize: '0.875rem' }}>Blog</Link>
              <Link href="#" className="footer-link" style={{ fontSize: '0.875rem' }}>Careers</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '8px' }}>Legal</h4>
              <Link href="#" className="footer-link" style={{ fontSize: '0.875rem' }}>Privacy Policy</Link>
              <Link href="#" className="footer-link" style={{ fontSize: '0.875rem' }}>Terms of Service</Link>
              <Link href="#" className="footer-link" style={{ fontSize: '0.875rem' }}>Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.75rem' }}>
              © 2026 Hirevox Flow. All rights reserved. Built for the future of work.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* Facebook */}
              <Link href="#" aria-label="Facebook" className="footer-link" style={{ display: 'flex' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              {/* Twitter */}
              <Link href="#" aria-label="Twitter" className="footer-link" style={{ display: 'flex' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
              {/* LinkedIn */}
              <Link href="#" aria-label="LinkedIn" className="footer-link" style={{ display: 'flex' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
            </div>
            <div style={{ height: '24px', width: '1px', background: 'var(--border)' }}></div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
