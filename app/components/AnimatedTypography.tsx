// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// type Props = {
//   words: string[];
//   typeSpeed?: number;   // seconds per character
//   eraseSpeed?: number;  // seconds per character
//   holdDelay?: number;   // pause after word is typed
// };

// export default function AnimatedTypography({
//   words,
//   typeSpeed = 0.06,
//   eraseSpeed = 0.04,
//   holdDelay = 1,
// }: Props) {
//   const textRef = useRef<HTMLSpanElement>(null);
//   const wordIndex = useRef(0);

//   useEffect(() => {
//     if (!textRef.current) return;

//     const el = textRef.current;
//     const tl = gsap.timeline({ repeat: -1 });

//     const typeWord = (word: string) => {
//       const chars = word.split("");

//       chars.forEach((_, i) => {
//         tl.to(el, {
//           textContent: chars.slice(0, i + 1).join(""),
//           duration: typeSpeed,
//           ease: "none",
//         });
//       });

//       tl.to({}, { duration: holdDelay });

//       chars.forEach((_, i) => {
//         tl.to(el, {
//           textContent: chars.slice(0, chars.length - i - 1).join(""),
//           duration: eraseSpeed,
//           ease: "none",
//         });
//       });
//     };

//     words.forEach((word) => typeWord(word));

//     return () => {
//       tl.kill();
//     };
//   }, [words, typeSpeed, eraseSpeed, holdDelay]);

//   return (
//     <span
//       ref={textRef}
//       className="inline-block font-semibold tracking-tight"
//     />
//   );
// }


"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  typeSpeed?: number;   // ms per character
  eraseSpeed?: number;  // ms per character
  holdDelay?: number;   // ms after full word
};

export default function AnimatedTypography({
  words,
  typeSpeed = 80,
  eraseSpeed = 50,
  holdDelay = 1000,
}: Props) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isErasing && charIndex < currentWord.length) {
      // TYPE
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typeSpeed);
    } else if (!isErasing && charIndex === currentWord.length) {
      // HOLD
      timeout = setTimeout(() => {
        setIsErasing(true);
      }, holdDelay);
    } else if (isErasing && charIndex > 0) {
      // ERASE
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, eraseSpeed);
    } else if (isErasing && charIndex === 0) {
      // NEXT WORD
      setIsErasing(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isErasing,
    wordIndex,
    words,
    typeSpeed,
    eraseSpeed,
    holdDelay,
  ]);

  return (
    <span className="inline-block font-semibold tracking-tight">
      {text}
    </span>
  );
}
