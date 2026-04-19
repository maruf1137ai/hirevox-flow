"use client";

import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav
      className="glass fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-40px)] max-w-[1200px] rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
    >
      <div className="h-16 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 flex items-center justify-center">
            {mounted && (
              <img src={theme === 'dark' ? "/assets/logo-white.png" : "/assets/logo-black.png"} alt="Hirevox Flow Logo" className="h-full object-contain" />
            )}
            {!mounted && <div className="gradient-bg h-7 rounded-md" />}
          </div>
          {/* <span
            className="text-lg font-extrabold text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Hirevox <span className="gradient-text">Flow</span>
          </span> */}
        </Link>

        <div className="flex items-center gap-6">
          {[
            { name: "About", href: "/about" },
            { name: "Product", href: "/product" },
            { name: "Pricing", href: "/pricing" },
            { name: "Sign In", href: "/signin" }
          ].map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.8125rem] font-medium transition-all duration-200 ${isActive
                  ? 'text-white'
                  : 'footer-link hover:text-foreground'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/signup"
            className="gradient-bg px-5 py-2 rounded-[10px] text-[0.8125rem] font-semibold flex items-center gap-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
