import { clsx, type ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]) => {
  return clsx(inputs);
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

