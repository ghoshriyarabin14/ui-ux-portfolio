"use client";

interface ScrollProgressProps {
  current: number;
}

const isLightSection = (section: number) => section === 0 || section === 4;

export function ScrollProgress({ current }: ScrollProgressProps) {
  const light = isLightSection(current);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2">
      {/* Slide counter */}
      <span
        className="label-xs"
        style={{ color: light ? "rgba(18,18,18,0.5)" : "rgba(255,255,255,0.5)" }}
      >
        {String(current + 1).padStart(2, "0")} / 05
      </span>

      {/* Progress segments */}
      <div className="flex flex-row items-center gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="block rounded-full"
            style={{
              width: 40,
              height: 2,
              background:
                i === current
                  ? "#ee6813"
                  : light
                  ? "rgba(0,0,0,0.2)"
                  : "rgba(255,255,255,0.3)",
              transition: "background 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
