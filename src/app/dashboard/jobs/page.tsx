"use client";

import { motion } from "framer-motion";
import {
  Plus,
  MoreVertical,
  Briefcase,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    team: "Engineering",
    candidates: 45,
    status: "Active",
    posted: "2 days ago",
    matchAvg: 85,
    screened: 32,
  },
  {
    id: 2,
    title: "Product Designer",
    team: "Design",
    candidates: 28,
    status: "Active",
    posted: "5 days ago",
    matchAvg: 92,
    screened: 28,
  },
  {
    id: 3,
    title: "Backend Engineer (Go)",
    team: "Engineering",
    candidates: 12,
    status: "Draft",
    posted: "12 hours ago",
    matchAvg: 0,
    screened: 0,
  },
];

export default function JobsPage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '4px' }}>Jobs</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.9375rem' }}>Manage your hiring pipelines.</p>
        </div>
        <Link href="/dashboard/jobs/create" className="bg-primary" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={16} /> New Role
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {jobs.map((job) => (
          <div key={job.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ color: 'var(--primary)' }}><Briefcase size={20} /></div>
              <div className="badge" style={{ background: 'var(--surface-hover)', color: 'var(--muted)', fontSize: '0.7rem' }}>{job.status}</div>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '2px' }}>{job.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.8125rem' }}>{job.team} • {job.posted}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', padding: '12px', borderRadius: '8px', background: 'var(--surface-hover)' }}>
              <div>
                <div style={{ color: 'var(--muted)', fontSize: '0.65rem', fontWeight: 600, marginBottom: '2px' }}>CANDIDATES</div>
                <div style={{ fontSize: '1rem', fontWeight: 700 }}>{job.candidates}</div>
              </div>
              <div>
                <div style={{ color: 'var(--muted)', fontSize: '0.65rem', fontWeight: 600, marginBottom: '2px' }}>SCREENED</div>
                <div style={{ fontSize: '1rem', fontWeight: 700 }}>{job.screened}</div>
              </div>
            </div>

            <Link href={`#`} style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '0.8125rem', color: 'var(--primary)' }}>
              Open Pipeline <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
