"use client";

import { useState, useRef, useEffect } from "react";
import { useRiiChat } from "@/context/RiiChatContext";

const INTER = "var(--font-inter), sans-serif";
const MANROPE = "var(--font-manrope), sans-serif";
const FRANK = "var(--font-frank-ruhl), serif";

interface Message {
  role: "user" | "bot";
  text: string;
  followUps?: string[];
}

const QA = [
  {
    keywords: ["who", "riya", "about", "yourself", "introduce", "tell me"],
    answer:
      "I'm Riya Ghosh — a Senior UX/UI Designer based in Mumbai with 4+ years building human-centered digital products at scale. I specialise in AI-powered interfaces, design systems, and translating complex problems into intuitive experiences.",
    followUps: ["What's her work experience?", "What tools does she use?", "What awards has she won?"],
  },
  {
    keywords: ["experience", "work", "job", "career", "companies", "worked", "background"],
    answer:
      "I currently work at Deloitte USI as a UI/UX Designer → Consultant (Aug 2022–Present). Key engagements:\n\n• Google — GM3 Material Design System & Play Console UX (Jan–Nov 2025)\n• YouTube TV — Sports Design System & Landing Page (Feb–Dec 2024)\n• Iris Agentic AI — 0-to-1 design for an agentic AI product\n\nBefore Deloitte, I was a UI/UX Design Intern at TCS (Mar 2021–Jul 2022).",
    followUps: ["Tell me about her Google work", "What's the YouTube TV project?", "What was the Iris AI project?"],
  },
  {
    keywords: ["google", "gm3", "material", "tetris", "play console"],
    answer:
      "At Google (via Deloitte, Jan–Nov 2025), I collaborated on the GM3 Material Design System — documenting design tokens, spacing systems, and typography scales across Google products. I also worked on Google Play Console UX covering engineer/admin flows, security, cashflow, and ad experiences.\n\n🏆 Recognised with an award for innovative design that directly influenced Google's decision to extend the engagement.",
    followUps: ["What's the YouTube TV project?", "What awards has she won?", "What tools does she use?"],
  },
  {
    keywords: ["youtube", "ott", "sports", "landing page", "tv.youtube"],
    answer:
      "For YouTube TV (Feb–Dec 2024), I led the end-to-end design of the Sports landing page — now live at tv.youtube.com/welcome. Highlights:\n\n• Built 500+ reusable UI components for the Sports design system\n• Cut designer-developer handoff friction by 40%\n• Led 15+ design reviews and usability testing sessions\n\n🏆 This work led to my promotion to Consultant at Deloitte.",
    followUps: ["Tell me about her Google work", "What's her design process?", "What awards has she won?"],
  },
  {
    keywords: ["iris", "agentic", "ai product", "poc"],
    answer:
      "Iris was a POC project where I owned the 0-to-1 visual design language for an agentic AI product — defining interaction patterns for multi-step AI reasoning, agent state changes, and trust/transparency signals with no prior design precedent.\n\nI used Claude and Midjourney for rapid concept generation, cutting ideation cycles by ~50%.",
    followUps: ["What tools does she use?", "Tell me about her Google work", "What's her design process?"],
  },
  {
    keywords: ["tcs", "crm", "intern", "internship", "b2b"],
    answer:
      "At TCS (Mar 2021–Jul 2022), I designed an AI-powered B2B CRM for enterprise sales teams — delivering 50+ high-fidelity screens, running competitive analysis across 10+ CRM platforms, and conducting 12 stakeholder interviews.\n\nImproved task completion rate by 30% through usability testing with 15 participants.",
    followUps: ["What did she do after TCS?", "What UX methods does she use?", "Where did she study?"],
  },
  {
    keywords: ["skill", "tools", "figma", "software", "use", "what can", "process", "design process"],
    answer:
      "My toolkit:\n\n🎨 Design — Figma, FigJam, Framer, Spline, Illustrator, Photoshop, Sketch, Adobe XD\n📐 UX — Design Systems, Component Architecture, WCAG 2.1, IA, Prototyping, A/B Testing\n🔬 Research — User Interviews, Usability Testing, Affinity Clustering\n🤝 Collaboration — Agile/Scrum, Stakeholder Presentations, Design Reviews\n🤖 AI — Claude Code, Copilot, Midjourney, Paper",
    followUps: ["What's her AI experience?", "Tell me about her design systems work", "What's the YouTube TV project?"],
  },
  {
    keywords: ["education", "study", "degree", "isdi", "college", "university", "school"],
    answer:
      "🎓 Indian School of Design & Innovation (ISDI) — Parsons Diploma in Product Design (4 years, 2018–2022)\n🎓 Mumbai University — BA Sociology (2018–2021)",
    followUps: ["What's her work experience?", "What tools does she use?", "Who is Riya?"],
  },
  {
    keywords: ["award", "achievement", "recognition", "promoted", "promotion"],
    answer:
      "Two major recognitions:\n\n🏆 Google Award — for innovative design approach and exceptional delivery; directly influenced Google's decision to extend the engagement and expand the team.\n\n🏆 Promoted to Consultant at Deloitte — based on demonstrated impact from the YouTube TV Sports project.",
    followUps: ["Tell me about her Google work", "What's the YouTube TV project?", "What's her work experience?"],
  },
  {
    keywords: ["contact", "hire", "email", "linkedin", "reach", "available"],
    answer:
      "Riya is open to design opportunities, collaborations, and conversations about AI and design systems. You can reach her via email or LinkedIn — both are linked in her resume on this portfolio.",
    followUps: ["Who is Riya?", "What's her work experience?", "What tools does she use?"],
  },
  {
    keywords: ["location", "based", "where", "mumbai", "india", "city"],
    answer: "Riya is based in Mumbai, India, currently working at Deloitte USI.",
    followUps: ["What's her work experience?", "Tell me about her Google work", "How can I reach her?"],
  },
  {
    keywords: ["design system", "component", "500", "system"],
    answer:
      "Design systems are Riya's core strength — she's built 500+ reusable components for YouTube TV Sports, documented the GM3 Material Design System at Google, and architected component libraries handling multi-sport data structures across platforms. All built to WCAG 2.1 standards.",
    followUps: ["Tell me about her Google work", "What's the YouTube TV project?", "What tools does she use?"],
  },
  {
    keywords: ["ai", "artificial intelligence"],
    answer:
      "Riya has deep experience designing for AI products — from the 0-to-1 Iris agentic AI interface to translating abstract AI behaviours (autonomous task execution, confidence levels, error recovery) into UI components. She actively uses Claude, Copilot, and Midjourney in her workflow.",
    followUps: ["What was the Iris AI project?", "What tools does she use?", "Tell me about her Google work"],
  },
  {
    keywords: ["deloitte", "consultant"],
    answer:
      "Riya has been at Deloitte USI since August 2022, progressing from UI/UX Designer to Consultant. She's led design workstreams for Google and YouTube TV, managing cross-functional collaboration across engineering, product, and research teams.",
    followUps: ["Tell me about her Google work", "What's the YouTube TV project?", "What awards has she won?"],
  },
  {
    keywords: ["accessibility", "wcag", "a11y"],
    answer:
      "Accessibility is baked into Riya's process. She's applied WCAG 2.1 standards across Google's GM3 Material Design System and the YouTube TV Sports components — ensuring consistent, accessible experiences across all supported viewports.",
    followUps: ["Tell me about her Google work", "What tools does she use?", "What's her design process?"],
  },
];

const SUGGESTIONS = [
  "Who is Riya?",
  "Tell me about her Google work",
  "What's the YouTube TV project?",
  "What tools does she use?",
  "What awards has she won?",
  "Where did she study?",
];

function getAnswer(input: string): { answer: string; followUps: string[] } {
  const lower = input.toLowerCase();
  for (const qa of QA) {
    if (qa.keywords.some((k) => lower.includes(k))) {
      return { answer: qa.answer, followUps: qa.followUps ?? [] };
    }
  }
  return {
    answer: "I'm not sure about that — try asking about Riya's experience, skills, education, or projects like YouTube TV or Google.",
    followUps: ["Who is Riya?", "What's her work experience?", "What tools does she use?"],
  };
}

export function RiiChat() {
  const { open, setOpen } = useRiiChat();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);


  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text: text.trim() }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const { answer, followUps } = getAnswer(text);
      setMessages((m) => [...m, { role: "bot", text: answer, followUps }]);
    }, 750);
  };

  const reset = () => setMessages([]);

  const hasMessages = messages.length > 0 || typing;

  return (
    <>
      {/* Side panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Rii chatbot"
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 9999,
          width: "min(440px, 100vw)",
          background: "#0a0a0a",
          display: "flex", flexDirection: "column",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center",
          padding: "20px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          flexShrink: 0, gap: "12px",
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}>
            <img
              src="https://www.figma.com/api/mcp/asset/188c7f8e-4292-4f60-b1ab-8de4027ce9b8"
              alt=""
              style={{ width: "16px", height: "17px", display: "block", flexShrink: 0 }}
            />
            <span style={{
              fontFamily: INTER, fontSize: "14px", fontWeight: 500,
              color: "#fff", letterSpacing: "-0.14px", whiteSpace: "nowrap",
            }}>
              Rii LLM
            </span>
          </div>

          {/* Reset */}
          <button
            onClick={reset}
            title="Reset conversation"
            aria-label="Reset"
            style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#555", fontSize: "21px", lineHeight: 1, padding: "4px",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#555")}
          >
            ↺
          </button>

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "#2a2a2a", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: "16px", lineHeight: 1,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#3a3a3a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#2a2a2a")}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{
          flex: 1, overflowY: "auto", scrollbarWidth: "none",
          display: "flex", flexDirection: "column",
        }}>
          {!hasMessages ? (
            /* Empty state — heading + suggestions */
            <div style={{
              flex: 1, display: "flex", flexDirection: "column",
              justifyContent: "flex-end", padding: "40px 28px 32px",
              gap: "24px",
            }}>
              <h2 style={{
                fontFamily: FRANK, fontWeight: 300,
                fontSize: "clamp(28px, 5vw, 36px)",
                color: "#fff", lineHeight: 1.25, margin: 0,
                letterSpacing: "-0.01em",
              }}>
                What would you<br />like to know?
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      display: "flex", alignItems: "flex-start", gap: "10px",
                      padding: "10px 0",
                      textAlign: "left",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      const btn = e.currentTarget as HTMLButtonElement;
                      btn.style.paddingLeft = "6px";
                      const arrow = btn.querySelector(".rii-arrow") as HTMLElement;
                      const label = btn.querySelector(".rii-label") as HTMLElement;
                      if (arrow) arrow.style.color = "#a78bfa";
                      if (label) label.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      const btn = e.currentTarget as HTMLButtonElement;
                      btn.style.paddingLeft = "0px";
                      const arrow = btn.querySelector(".rii-arrow") as HTMLElement;
                      const label = btn.querySelector(".rii-label") as HTMLElement;
                      if (arrow) arrow.style.color = "#555";
                      if (label) label.style.color = "#888";
                    }}
                  >
                    <span className="rii-arrow" style={{
                      fontFamily: INTER, fontSize: "13px", color: "#555",
                      transition: "color 0.15s", marginTop: "1px", flexShrink: 0,
                    }}>↳</span>
                    <span className="rii-label" style={{
                      fontFamily: INTER, fontSize: "14px", color: "#888",
                      transition: "color 0.15s", lineHeight: 1.5,
                    }}>{s}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Conversation */
            <div style={{
              flex: 1, padding: "28px 24px",
              display: "flex", flexDirection: "column", gap: "20px",
            }}>
              {messages.map((m, i) =>
                m.role === "bot" ? (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{
                      width: "26px", height: "26px", borderRadius: "50%",
                      background: "linear-gradient(135deg,#6b6ef9,#a78bfa)",
                      flexShrink: 0, display: "flex", alignItems: "center",
                      justifyContent: "center", marginTop: "2px",
                    }}>
                      <img src="https://www.figma.com/api/mcp/asset/188c7f8e-4292-4f60-b1ab-8de4027ce9b8" alt="" style={{ width: "12px", height: "13px", display: "block", filter: "brightness(0) invert(1)" }} />
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                      <p style={{
                        fontFamily: INTER, fontSize: "14px", color: "#d4d4d4",
                        lineHeight: 1.7, margin: 0, whiteSpace: "pre-line",
                      }}>{m.text}</p>
                      {m.followUps && m.followUps.length > 0 && (
                        <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "10px", gap: "2px" }}>
                          {m.followUps.map((q) => (
                            <button
                              key={q}
                              onClick={() => send(q)}
                              style={{
                                background: "none", border: "none", cursor: "pointer",
                                display: "flex", alignItems: "flex-start", gap: "8px",
                                padding: "7px 0", textAlign: "left",
                                borderBottom: "1px solid rgba(255,255,255,0.05)",
                                transition: "all 0.15s",
                              }}
                              onMouseEnter={(e) => {
                                const btn = e.currentTarget as HTMLButtonElement;
                                btn.style.paddingLeft = "4px";
                                (btn.querySelector(".fu-arrow") as HTMLElement).style.color = "#a78bfa";
                                (btn.querySelector(".fu-label") as HTMLElement).style.color = "#fff";
                              }}
                              onMouseLeave={(e) => {
                                const btn = e.currentTarget as HTMLButtonElement;
                                btn.style.paddingLeft = "0px";
                                (btn.querySelector(".fu-arrow") as HTMLElement).style.color = "#444";
                                (btn.querySelector(".fu-label") as HTMLElement).style.color = "#666";
                              }}
                            >
                              <span className="fu-arrow" style={{ fontFamily: INTER, fontSize: "12px", color: "#444", transition: "color 0.15s", flexShrink: 0, marginTop: "1px" }}>↳</span>
                              <span className="fu-label" style={{ fontFamily: INTER, fontSize: "13px", color: "#666", transition: "color 0.15s", lineHeight: 1.5 }}>{q}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div key={i} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{
                      background: "#1e1e1e",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "14px 4px 14px 14px",
                      padding: "11px 16px", maxWidth: "78%",
                      fontFamily: INTER, fontSize: "14px", color: "#fff",
                      lineHeight: 1.6,
                    }}>{m.text}</div>
                  </div>
                )
              )}

              {typing && (
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div style={{
                    width: "26px", height: "26px", borderRadius: "50%",
                    background: "linear-gradient(135deg,#6b6ef9,#a78bfa)",
                    flexShrink: 0, display: "flex", alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <img src="https://www.figma.com/api/mcp/asset/188c7f8e-4292-4f60-b1ab-8de4027ce9b8" alt="" style={{ width: "12px", height: "13px", display: "block", filter: "brightness(0) invert(1)" }} />
                  </div>
                  <div style={{ display: "flex", gap: "5px", alignItems: "center", paddingTop: "6px" }}>
                    {[0, 1, 2].map((i) => (
                      <span key={i} style={{
                        width: "5px", height: "5px", borderRadius: "50%",
                        background: "#555", display: "block",
                        animation: `riiDot 1.2s ${i * 0.2}s ease-in-out infinite`,
                      }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          )}
        </div>

        {/* Input bar */}
        <div style={{
          padding: "16px 24px 28px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          flexShrink: 0,
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "10px",
            background: "#161616",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px", padding: "10px 14px",
          }}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") send(input); }}
              placeholder="Ask about Riya…"
              style={{
                flex: 1, background: "none", border: "none",
                fontFamily: INTER, fontSize: "14px", color: "#fff",
                outline: "none",
              }}
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              aria-label="Send"
              style={{
                background: "none", border: "none", cursor: input.trim() ? "pointer" : "default",
                color: input.trim() ? "#a78bfa" : "#444",
                fontSize: "18px", lineHeight: 1, padding: "2px",
                transition: "color 0.15s", display: "flex", alignItems: "center",
              }}
            >
              ↑
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes riiDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40%            { transform: scale(1);   opacity: 1;   }
        }
      `}</style>
    </>
  );
}
