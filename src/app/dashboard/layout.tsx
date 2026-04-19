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
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navItems = [
    { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Jobs", icon: Briefcase, href: "/dashboard/jobs" },
    { name: "Talent Pool", icon: Users, href: "/dashboard/candidates" },
    { name: "AI Insights", icon: Sparkles, href: "/dashboard/insights" },
  ];

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <aside className="w-60 border-r border-[var(--border)] flex flex-col px-4 py-6 bg-[var(--surface)]">
        <Link href="/dashboard" className="flex items-center gap-2.5 px-2 pb-10">
          <div className="h-8 flex items-center justify-center">
            {mounted && (
              <img src={theme === 'dark' ? "/assets/logo-white.png" : "/assets/logo-black.png"} alt="Hirevox Flow Logo" className="h-full object-contain" />
            )}
            {!mounted && <div className="gradient-bg h-7 rounded-md" />}
          </div>
        </Link>

        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all duration-200"
                style={{
                  color: isActive ? 'var(--primary)' : 'var(--muted)',
                  background: isActive ? 'color-mix(in srgb, var(--primary), transparent 90%)' : 'transparent',
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-1 border-t border-[var(--border)] pt-6">
          <button
            className="flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium w-full text-left"
            style={{ color: 'var(--muted)' }}
          >
            <Settings size={18} /> Settings
          </button>
          <button
            className="flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium w-full text-left"
            style={{ color: 'var(--destructive)' }}
          >
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 border-b border-[var(--border)] flex items-center justify-between px-8 bg-background">
          <div className="relative w-80">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: 'var(--muted)' }}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-9 pr-3 rounded-lg text-sm outline-none"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
              }}
            />
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/jobs/create"
              className="gradient-bg flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white"
            >
              <Plus size={16} /> New Job
            </Link>
            <button className="p-2" style={{ color: 'var(--muted)' }}>
              <Bell size={20} />
            </button>
            <div
              className="w-8 h-8 rounded-full border border-[var(--border)]"
              style={{ background: 'var(--surface-hover)' }}
            />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-background">
          {children}
        </div>
      </main>
    </div>
  );
}
