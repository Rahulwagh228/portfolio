"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  words: string[];
  typeSpeed?: number;   // seconds per character
  eraseSpeed?: number;  // seconds per character
  holdDelay?: number;   // pause after word is typed
};

export default function AnimatedTypography({
  words,
  typeSpeed = 0.06,
  eraseSpeed = 0.04,
  holdDelay = 1,
}: Props) {
  const textRef = useRef<HTMLSpanElement>(null);
  const wordIndex = useRef(0);

  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current;
    const tl = gsap.timeline({ repeat: -1 });

    const typeWord = (word: string) => {
      const chars = word.split("");

      chars.forEach((_, i) => {
        tl.to(el, {
          textContent: chars.slice(0, i + 1).join(""),
          duration: typeSpeed,
          ease: "none",
        });
      });

      tl.to({}, { duration: holdDelay });

      chars.reverse().forEach((_, i) => {
        tl.to(el, {
          textContent: chars.slice(0, chars.length - i - 1).join(""),
          duration: eraseSpeed,
          ease: "none",
        });
      });
    };

    words.forEach((word) => typeWord(word));

    return () => {
      tl.kill();
    };
  }, [words, typeSpeed, eraseSpeed, holdDelay]);

  return (
    <span
      ref={textRef}
      className="inline-block font-semibold tracking-tight"
    />
  );
}
