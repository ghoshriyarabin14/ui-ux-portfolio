"use client";

import { useState, useEffect } from "react";
import { formatTime } from "@/lib/utils";

export const LiveClock = () => {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      setTime(formatTime(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <span
        className="font-mono text-sm tabular-nums"
        style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#ffffff" }}
      >
        --:--:-- --
      </span>
    );
  }

  return (
    <span
      className="font-mono text-sm tabular-nums"
      style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#ffffff" }}
    >
      {time}
    </span>
  );
};
