"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  Target,
  AlertCircle,
  Lightbulb
} from "lucide-react";

export default function InsightsPage() {
  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '4px' }}>AI Insights</h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.9375rem' }}>Data-driven talent analysis.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
        <div className="card">
          <div style={{ color: 'var(--primary)', fontWeight: 700, marginBottom: '8px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <TrendingUp size={14} /> PERFORMANCE
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
            Your "Senior React" candidates are 15% more qualified than market average.
          </p>
        </div>

        <div className="card">
          <div style={{ color: 'var(--muted)', fontWeight: 700, marginBottom: '8px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <AlertCircle size={14} /> SKILL GAP
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
            Found missing gap in Infrastructure-as-Code across applicant pool.
          </p>
        </div>

        <div className="card">
          <div style={{ color: 'var(--primary)', fontWeight: 700, marginBottom: '8px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Target size={14} /> EFFICIENCY
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
            Pipeline velocity increased by 42% since enabling Voice Screen.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <section className="card">
          <h2 style={{ fontSize: '1rem', marginBottom: '20px' }}>Market Comparison</h2>
          <div style={{ height: '240px', display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
            {[
              { label: 'Own', val: '92%', color: 'var(--primary)' },
              { label: 'Market', val: '74%', color: 'var(--muted)' },
              { label: 'Top 10%', val: '82%', color: 'var(--muted)', opacity: 0.5 }
            ].map(bar => (
              <div key={bar.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '100%', height: bar.val, background: bar.color, borderRadius: '4px', opacity: bar.opacity || 0.8 }}></div>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--muted)' }}>{bar.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="card" style={{ background: 'var(--surface-hover)' }}>
          <h2 style={{ fontSize: '1rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Lightbulb size={16} /> AI Tip
          </h2>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'var(--muted)' }}>
            Candidates interviewed via voice are 3x more likely to accept offers.
          </p>
          <button className="bg-primary" style={{ width: '100%', padding: '10px', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 600, marginTop: '20px' }}>Optimize Workflow</button>
        </section>
      </div>
    </div>
  );
}
