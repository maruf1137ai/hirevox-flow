"use client";

import { motion } from "framer-motion";
import {
  Search,
  Filter,
  ArrowUpDown,
  GitBranch,
  Globe,
  ChevronRight,
  ShieldCheck,
  Star,
  Sparkles
} from "lucide-react";

const candidates = [
  { id: 1, name: "Lucas Vance", role: "Fullstack Engineer", score: 94, source: "GitHub", applied: "2 hours ago", status: "Screened", skills: ["Next.js", "Python"], matchReason: "Exceptional depth in React internals." },
  { id: 2, name: "Emma Larsson", role: "Product Designer", score: 89, source: "Portfolio", applied: "5 hours ago", status: "Interviewing", skills: ["Figma", "UI/UX"], matchReason: "Strong emphasis on design tokens." },
  { id: 3, name: "David Kim", role: "Frontend Dev", score: 82, source: "Tests", applied: "1 day ago", status: "New", skills: ["React", "CSS"], matchReason: "Verified technical excellence." },
];

export default function CandidatesPage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '4px' }}>Talent Pool</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.9375rem' }}>AI-scored candidates ranked by core skill verification.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
            <input
              type="text"
              placeholder="Search..."
              style={{ padding: '8px 12px 8px 36px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--surface)', fontSize: '0.875rem', outline: 'none' }}
            />
          </div>
          <button className="glass" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
              <th style={{ padding: '16px 20px', fontSize: '0.7rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase' }}>Candidate</th>
              <th style={{ padding: '16px 20px', fontSize: '0.7rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase' }}>AI Score</th>
              <th style={{ padding: '16px 20px', fontSize: '0.7rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase' }}>Expertise</th>
              <th style={{ padding: '16px 20px', fontSize: '0.7rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase' }}>Status</th>
              <th style={{ padding: '16px 20px' }}></th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c, i) => (
              <tr
                key={c.id}
                style={{ borderBottom: i < candidates.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background 0.2s' }}
              >
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--surface-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', color: 'var(--primary)' }}>
                      {c.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{c.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        {c.role}
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge" style={{ background: 'color-mix(in srgb, var(--primary), transparent 90%)', color: 'var(--primary)', fontWeight: 700 }}>{c.score}</span>
                    <div style={{ height: '3px', width: '60px', background: 'var(--surface-hover)', borderRadius: '1.5px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${c.score}%`, background: 'var(--primary)' }}></div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {c.skills.map(s => (
                      <span key={s} className="badge" style={{ background: 'var(--surface-hover)', border: '1px solid var(--border)', fontSize: '0.65rem' }}>{s}</span>
                    ))}
                  </div>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <span className="badge" style={{ background: 'var(--surface-hover)', color: 'var(--muted)', fontSize: '0.7rem' }}>
                    {c.status}
                  </span>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <button style={{ color: 'var(--muted)' }}><ChevronRight size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
