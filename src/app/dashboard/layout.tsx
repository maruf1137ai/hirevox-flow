"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Search,
  Bell,
  Plus,
  Settings,
  LogOut,
  Sparkles,
  Command
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Jobs", icon: Briefcase, href: "/dashboard/jobs" },
    { name: "Talent Pool", icon: Users, href: "/dashboard/candidates" },
    { name: "AI Insights", icon: Sparkles, href: "/dashboard/insights" },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--background)', color: 'var(--foreground)', overflow: 'hidden' }}>
      {/* Sidebar */}
      <aside style={{
        width: '240px',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
        background: 'var(--surface)'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 8px 40px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Command size={18} color="white" />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--foreground)' }}>Hirevox <span style={{ color: 'var(--primary)' }}>Flow</span></span>
        </Link>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  color: isActive ? 'var(--primary)' : 'var(--muted)',
                  background: isActive ? 'color-mix(in srgb, var(--primary), transparent 90%)' : 'transparent',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.875rem'
                }}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 14px',
            color: 'var(--muted)',
            width: '100%',
            textAlign: 'left',
            fontSize: '0.875rem',
            fontWeight: 500
          }}>
            <Settings size={18} /> Settings
          </button>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 14px',
            color: 'var(--destructive)',
            width: '100%',
            textAlign: 'left',
            fontSize: '0.875rem',
            fontWeight: 500
          }}>
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Topbar */}
        <header style={{
          height: '64px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          background: 'var(--background)'
        }}>
          <div style={{ position: 'relative', width: '320px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} />
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                outline: 'none',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link href="/dashboard/jobs/create" className="bg-primary" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Plus size={16} /> New Job
            </Link>
            <button style={{ padding: '8px', color: 'var(--muted)' }}>
              <Bell size={20} />
            </button>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--surface-hover)', border: '1px solid var(--border)' }}></div>
          </div>
        </header>

        {/* Content Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '32px', background: 'var(--background)' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
