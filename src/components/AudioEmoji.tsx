"use client";

import { useState, useRef, useCallback } from "react";

interface AudioEmojiProps {
  emoji?: string;
  audioSrc?: string;
}

export const AudioEmoji = ({ 
  emoji = "🍹",
  audioSrc = "/sounds/tropical.mp3"
}: AudioEmojiProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // Stop playing
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      // Start playing
      audioRef.current.play().catch((err) => {
        console.log("Audio playback failed:", err);
      });
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const handleAudioEnd = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return (
    <span
      onClick={handleClick}
      data-cursor-label="Click Me 🤘🏽"
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        userSelect: "none",
        fontSize: "40px",
        lineHeight: 1,
        padding: "4px",
        transform: isPressed ? "scale(0.9)" : isPlaying ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.15s ease-out",
        filter: isPlaying ? "brightness(1.2)" : "none",
      }}
      role="button"
      aria-label={isPlaying ? "Stop audio" : "Play audio"}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {emoji}
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        style={{ display: "none" }}
        onEnded={handleAudioEnd}
        loop
      />
      {/* Animated ring effect when playing */}
      {isPlaying && (
        <>
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "60px",
              height: "60px",
              border: "2px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              animation: "ripple 1s ease-out infinite",
              pointerEvents: "none",
            }}
          />
          <style jsx>{`
            @keyframes ripple {
              0% {
                width: 40px;
                height: 40px;
                opacity: 1;
              }
              100% {
                width: 80px;
                height: 80px;
                opacity: 0;
              }
            }
          `}</style>
        </>
      )}
    </span>
  );
};
