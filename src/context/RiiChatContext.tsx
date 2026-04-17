"use client";

import { createContext, useContext, useState } from "react";

interface RiiChatContextValue {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const RiiChatContext = createContext<RiiChatContextValue>({
  open: false,
  setOpen: () => {},
});

export function RiiChatProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <RiiChatContext.Provider value={{ open, setOpen }}>
      {children}
    </RiiChatContext.Provider>
  );
}

export const useRiiChat = () => useContext(RiiChatContext);
