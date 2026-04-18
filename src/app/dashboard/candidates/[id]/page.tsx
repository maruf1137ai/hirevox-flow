"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  GitBranch,
  Globe,
  Star,
  Sparkles,
  MessageSquare,
  Terminal,
  Brain,
  CheckCircle2,
  Calendar,
  XCircle,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function CandidateDetailPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <Link href="/dashboard/candidates" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted)', marginBottom: '24px', fontSize: '0.875rem', fontWeight: 600 }}>
          <ArrowLeft size={16} /> Back to Talent Pool
        </Link>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'var(--surface-hover)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>
              LV
            </div>
            <div>
              <h1 style={{ fontSize: '2.25rem', marginBottom: '4px' }}>Lucas Vance</h1>
              <p style={{ color: 'var(--muted)', fontSize: '1.125rem' }}>Fullstack Engineer • San Francisco, CA</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="glass" style={{ padding: '12px 24px', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <XCircle size={18} /> Reject
            </button>
            <button className="gradient-bg" style={{ padding: '12px 32px', borderRadius: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 20px 40px -10px color-mix(in srgb, var(--primary), transparent 70%)' }}>
              <Calendar size={18} /> Schedule Interview
            </button>
          </div>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* AI Analysis Card */}
          <section className="card" style={{ border: '2px solid var(--primary)', background: 'color-mix(in srgb, var(--primary), transparent 98%)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Sparkles size={24} color="var(--primary)" />
              <h2 style={{ fontSize: '1.25rem' }}>AI Synthesis & Match Reasoning</h2>
              <div className="badge" style={{ marginLeft: 'auto', background: 'var(--primary)', color: 'var(--background)' }}>94% Context Match</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
              <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--background)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '8px', fontWeight: 600 }}>TECHNICAL DEPTH</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Expert</div>
              </div>
              <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--background)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '8px', fontWeight: 600 }}>CULTURE FIT</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Extremely High</div>
              </div>
              <div style={{ padding: '16px', borderRadius: '16px', background: 'var(--background)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '8px', fontWeight: 600 }}>COMMUNICATION</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>9/10</div>
              </div>
            </div>
            <p style={{ lineHeight: 1.8, color: 'var(--muted)' }}>
              Lucas is a standout candidate for the Senior Fullstack role. Our RAG engine verified 4 major open-source contributions to React internals and a highly-optimized Go backend for a real-time messaging startup. During the AI Voice Screen, he demonstrated exceptional clarity in explaining how to manage state in high-concurrency environments. He shares your team's value for "extreme ownership" based on his situational analysis of project failures.
            </p>
          </section>

          {/* Experience Timeline */}
          <section className="card">
            <h2 style={{ fontSize: '1.25rem', marginBottom: '24px' }}>Verification Timeline</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { title: "Senior Software Engineer", company: "Aether Systems", period: "2022 - Present", icon: Terminal, color: "var(--primary)" },
                { title: "Fullstack Developer", company: "Swiftly AI", period: "2020 - 2022", icon: Brain, color: "var(--secondary)" },
              ].map((exp, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'color-mix(in srgb, var(--primary), transparent 90%)', color: exp.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <exp.icon size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{exp.title}</h4>
                    <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>{exp.company} • {exp.period}</p>
                    <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
                      <span className="badge" style={{ background: 'var(--surface-hover)', fontSize: '0.65rem' }}>Verified via GitHub</span>
                      <span className="badge" style={{ background: 'var(--surface-hover)', fontSize: '0.65rem' }}>Match score: 92%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interview Transcript Snippet */}
          <section className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <MessageSquare size={20} color="var(--primary)" />
              <h2 style={{ fontSize: '1.25rem' }}>AI Interview Transcript (Highlights)</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--surface-hover)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px' }}>AI SCREENER</div>
                <p style={{ fontSize: '0.9375rem' }}>"How do you handle a situation where a critical database migration fails in production?"</p>
              </div>
              <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--background)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--muted)', marginBottom: '8px' }}>LUCAS VANCE</div>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  "First, immediate rollback to the last verified snapshot. My philosophy is 'no new state during an incident'. Once stabilized, I perform a thorough post-mortem on the migration script in a dry-run environment that mirrors prod as closely as possible..."
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className="card">
            <h3 style={{ fontSize: '1rem', marginBottom: '20px' }}>Talent Verification</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent)' }}>
                <CheckCircle2 size={18} /> <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>GitHub Identity Verified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent)' }}>
                <CheckCircle2 size={18} /> <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>Technical Skills Validated</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent)' }}>
                <CheckCircle2 size={18} /> <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>Communication Screened</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ fontSize: '1rem', marginBottom: '20px' }}>Top Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { name: 'React/Next.js', score: 98 },
                { name: 'Node.js', score: 92 },
                { name: 'PostgreSQL', score: 88 },
                { name: 'Distributed Systems', score: 95 },
                { name: 'Architecture Design', score: 90 }
              ].map(s => (
                <div key={s.name} style={{ width: '100%', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.8125rem' }}>
                    <span>{s.name}</span>
                    <span style={{ fontWeight: 700 }}>{s.score}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'var(--surface-hover)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${s.score}%`, background: 'var(--primary)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 style={{ fontSize: '1rem', marginBottom: '20px' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--muted)' }}>
                <Globe size={18} /> <a href="#" style={{ fontSize: '0.9375rem' }}>lucasvance.dev</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--muted)' }}>
                <GitBranch size={18} /> <a href="#" style={{ fontSize: '0.9375rem' }}>lucasv</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--muted)' }}>
                <Globe size={18} /> <a href="#" style={{ fontSize: '0.9375rem' }}>lucas-vance</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
