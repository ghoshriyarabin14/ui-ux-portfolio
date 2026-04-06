"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function parseMetricValue(raw: string) {
  const value = (raw ?? "").toString().trim();
  const m = value.match(
    /^([^\d\-+]*?)\s*([\-+]?\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*([^\d\s]*)$/
  );
  if (!m) return { prefix: "", end: 0, suffix: value, decimals: 0 };
  const [, prefix, num, suffix] = m;
  const normalized = num.replace(/,/g, "");
  const end = parseFloat(normalized);
  const decimals = normalized.split(".")[1]?.length ?? 0;
  return { prefix: prefix ?? "", end: isNaN(end) ? 0 : end, suffix: suffix ?? "", decimals };
}

function MetricStat({ value, label, sub, duration = 1.6 }: {
  value: string; label: string; sub?: string; duration?: number;
}) {
  const reduceMotion = usePrefersReducedMotion();
  const { prefix, end, suffix, decimals } = parseMetricValue(value);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "24px" }}>
      <p style={{
        fontFamily: "var(--font-inter), sans-serif",
        fontWeight: 500,
        fontSize: "clamp(28px, 3vw, 40px)",
        color: "#000",
        margin: 0,
        lineHeight: 1.1,
      }}>
        {prefix}
        {reduceMotion ? (
          <span>{end.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>
        ) : (
          <CountUp end={end} decimals={decimals} duration={duration} separator="," enableScrollSpy scrollSpyOnce />
        )}
        {suffix}
      </p>
      <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: "14px", color: "#000", margin: 0 }}>
        {label}
      </p>
      {sub && (
        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "13px", color: "#757575", margin: 0 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

const caseStudies = [
  {
    id: 1,
    title: "Unified Component Library",
    quote: "With the OTT sports card system, our design team finally works in sync. Components are reusable, consistent, and we ship new features 40% faster across every sport.",
    name: "Malvika Nanda",
    role: "Senior Product Designer · YouTube TV",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
    metrics: [
      { value: "40%", label: "Faster Delivery", sub: "Feature shipping speed" },
      { value: "95%", label: "Designer Satisfaction", sub: "Based on team survey" },
    ],
  },
  {
    id: 2,
    quote: "The atomic system gave us a unified sports card experience. The ops team reduced time spent on per-sport redesigns and improved consistency across all platforms.",
    title: "One System, Every Sport",
    name: "Yun Easing",
    role: "Engineering Lead · YouTube Sports",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    metrics: [
      { value: "3.5x", label: "Efficiency Gain", sub: "Across design workflows" },
      { value: "70%", label: "Reduced Duplication", sub: "In component builds" },
    ],
  },
  {
    id: 3,
    quote: "The three-tier atomic system changed how our cross-functional teams communicate. Everything is more transparent, and onboarding new designers is seamless.",
    title: "Live on YouTube TV",
    name: "Riya Ghosh",
    role: "Product Designer · Deloitte",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
    metrics: [
      { value: "500+", label: "Components Shipped", sub: "Across both platforms" },
      { value: "2", label: "Platforms Live", sub: "YouTube TV + YTV Sport" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section style={{ padding: "64px 0 0", background: "#fff" }} aria-labelledby="case-studies-heading">
      <div style={{ maxWidth: "100%", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "600px" }}>
          <p style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#3b3fe4",
            letterSpacing: "0.55px",
            textTransform: "capitalize",
            margin: 0,
          }}>
            The Outcome
          </p>
          <h2
            id="case-studies-heading"
            style={{
              fontFamily: "var(--font-frank-ruhl), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(22px, 2.5vw, 32px)",
              color: "#000",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            500+ components. A live landing page. One source of truth.
          </h2>
          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "14px", color: "#585858", lineHeight: 1.6, margin: 0 }}>
            That was the bar: a library designers could pick up without asking questions, and an engineering handoff that didn't require a translator.
          </p>
        </div>

        {/* Case study rows */}
        <div style={{ marginTop: "52px", display: "flex", flexDirection: "column", gap: "0" }}>
          {caseStudies.map((study, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div
                key={study.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  gap: "48px",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(50,64,79,0.1)",
                  paddingBottom: "40px",
                  paddingTop: "40px",
                  direction: reversed ? "rtl" : "ltr",
                }}
              >
                {/* Image + quote */}
                <div style={{
                  display: "flex",
                  gap: "32px",
                  alignItems: "flex-start",
                  borderRight: "1px solid rgba(50,64,79,0.1)",
                  paddingRight: "48px",
                  direction: "ltr",
                }}>
                  <div style={{ flexShrink: 0, width: "180px", height: "220px", borderRadius: "16px", overflow: "hidden", position: "relative" }}>
                    <Image
                      src={study.image}
                      alt={study.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="180px"
                      loading="lazy"
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "220px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <p style={{
                        fontFamily: "var(--font-frank-ruhl), Georgia, serif",
                        fontWeight: 400,
                        fontSize: "18px",
                        color: "#000",
                        margin: 0,
                        lineHeight: 1.25,
                      }}>
                        {study.title}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#585858",
                        lineHeight: 1.6,
                        margin: 0,
                      }}>
                        {study.quote}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500, fontSize: "14px", color: "#000", margin: "0 0 2px" }}>
                        {study.name}
                      </p>
                      <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400, fontSize: "13px", color: "#757575", margin: 0 }}>
                        {study.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", direction: "ltr" }}>
                  {study.metrics.map((metric, i) => (
                    <MetricStat
                      key={`${study.id}-${i}`}
                      value={metric.value}
                      label={metric.label}
                      sub={metric.sub}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
