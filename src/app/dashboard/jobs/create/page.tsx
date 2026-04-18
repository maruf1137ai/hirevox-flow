"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, CheckCircle2, Bot, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateJobPage() {
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Welcome! Let's build your ideal role. What role are you looking to hire for? (e.g. Lead React Developer)" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue) return;

    const newMessages = [...messages, { role: 'user', text: inputValue }];
    setMessages(newMessages);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      let nextMessage = "";
      if (step === 0) {
        nextMessage = "Got it, a " + inputValue + ". What are the top 3 must-have technical skills for this role?";
      } else if (step === 1) {
        nextMessage = "Perfect. And finally, what's the most important culture trait for your team? (e.g. Extreme ownership, collaborative, fast-paced)";
      } else {
        nextMessage = "Excellent. I've generated the job description and screening criteria. Would you like to launch the automated sourcing now?";
      }
      setMessages(prev => [...prev, { role: 'ai', text: nextMessage }]);
      setStep(prev => prev + 1);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/dashboard/jobs" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted-foreground)', marginBottom: '32px', fontSize: '0.875rem' }}>
        <ArrowLeft size={16} /> Back to Jobs
      </Link>

      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '1.875rem', marginBottom: '8px' }}>Create New Role</h1>
        <p style={{ color: 'var(--muted-foreground)' }}>Our AI will help you define the role and start screening immediately.</p>
      </div>

      <div className="glass" style={{ borderRadius: '24px', height: '600px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Chat Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <AnimatePresence>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: m.role === 'ai' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                  display: 'flex',
                  flexDirection: m.role === 'ai' ? 'row' : 'row-reverse',
                  gap: '12px',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: m.role === 'ai' ? 'var(--primary)' : 'var(--surface-hover)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  flexShrink: 0
                }}>
                  {m.role === 'ai' ? <Bot size={18} /> : 'U'}
                </div>
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  background: m.role === 'ai' ? 'var(--surface)' : 'var(--primary)',
                  color: m.role === 'ai' ? 'var(--foreground)' : 'white',
                  maxWidth: '80%',
                  fontSize: '0.9375rem',
                  lineHeight: 1.5,
                  border: m.role === 'ai' ? '1px solid var(--border)' : 'none'
                }}>
                  {m.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div style={{ padding: '24px', borderTop: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your response..."
              style={{
                flex: 1,
                padding: '14px 20px',
                borderRadius: '12px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSend}
              className="gradient-bg"
              style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
            >
              <Send size={20} />
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', color: 'var(--muted-foreground)', fontSize: '0.75rem' }}>
            <Sparkles size={12} color="var(--primary)" />
            AI is analyzing your requirements in real-time
          </div>
        </div>
      </div>
    </div>
  );
}
