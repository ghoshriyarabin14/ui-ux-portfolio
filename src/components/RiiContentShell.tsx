"use client";

import { useRiiChat } from "@/context/RiiChatContext";

const PANEL_WIDTH = 440;

export function RiiContentShell({ children }: { children: React.ReactNode }) {
  const { open } = useRiiChat();
  return (
    <div
      style={{
        marginRight: open ? `${PANEL_WIDTH}px` : "0px",
        transition: "margin-right 0.35s cubic-bezier(0.22,1,0.36,1)",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
