"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  CheckCircle2,
  TrendingUp,
  MoreVertical,
  Star,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

const stats = [
  { name: "Active Jobs", value: "12", icon: Briefcase, trend: "+2 this week", color: "var(--primary)" },
  { name: "Total Candidates", value: "842", icon: Users, trend: "+124 this month", color: "var(--primary)" },
  { name: "AI Screened", value: "621", icon: CheckCircle2, trend: "74% conversion", color: "var(--primary)" },
  { name: "Match Rate", value: "18%", icon: TrendingUp, trend: "+5% from LY", color: "var(--primary)" },
];

const jobs = [
  { id: 1, title: "Senior React Developer", team: "Engineering", candidates: 45, status: "Active", matchScale: 85 },
  { id: 2, title: "Product Designer", team: "Design", candidates: 28, status: "Active", matchScale: 92 },
  { id: 3, title: "Backend Engineer", team: "Engineering", candidates: 12, status: "Draft", matchScale: 0 },
];

const topCandidates = [
  { id: 1, name: "Sarah Jenkins", role: "Sr. React Dev", score: 98, skills: ["React", "TypeScript", "Node.js"], avatar: "SJ" },
  { id: 2, name: "Michael Chen", role: "Product Designer", score: 94, skills: ["Figma", "Design Systems"], avatar: "MC" },
  { id: 3, name: "Elena Rodriguez", role: "Sr. React Dev", score: 91, skills: ["Next.js", "Tailwind", "AWS"], avatar: "ER" },
];

export default function DashboardOverview() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '4px' }}>Dashboard</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.9375rem' }}>Welcome back. Here's your overview.</p>
        </div>
        <button className="glass" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600, border: '1px solid var(--border)', color: 'var(--foreground)' }}>
          Export Report
        </button>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {stats.map((stat, i) => (
          <div key={stat.name} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ color: 'var(--primary)' }}><stat.icon size={20} /></div>
              <span style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 600 }}>{stat.trend}</span>
            </div>
            <h3 style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '4px', fontWeight: 500 }}>{stat.name}</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
        {/* Active Jobs Section */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.125rem' }}>Active Jobs</h2>
            <Link href="/dashboard/jobs" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary)', fontSize: '0.8125rem', fontWeight: 600 }}>
              View all <ArrowUpRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {jobs.map((job) => (
              <div key={job.id} className="card" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--surface-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 600 }}>{job.title}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{job.team} • {job.candidates} candidates</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  {job.matchScale > 0 && (
                    <div style={{ textAlign: 'right', width: '80px' }}>
                      <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>{job.matchScale}% Match</div>
                      <div style={{ height: '3px', width: '100%', background: 'color-mix(in srgb, var(--foreground), transparent 95%)', borderRadius: '1.5px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${job.matchScale}%`, background: 'var(--primary)' }}></div>
                      </div>
                    </div>
                  )}
                  <button style={{ color: 'var(--muted)' }}><MoreVertical size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Insight / Top Candidates */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.125rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="var(--primary)" /> Top Recs
            </h2>
          </div>

          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            {topCandidates.map((candidate, i) => (
              <div
                key={candidate.id}
                style={{
                  padding: '16px',
                  borderBottom: i < topCandidates.length - 1 ? '1px solid var(--border)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--surface-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--primary)'
                }}>
                  {candidate.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 600 }}>{candidate.name}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{candidate.role}</p>
                </div>
                <div className="badge" style={{ background: 'color-mix(in srgb, var(--primary), transparent 90%)', color: 'var(--primary)' }}>
                  <Star size={12} fill="currentColor" /> {candidate.score}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
