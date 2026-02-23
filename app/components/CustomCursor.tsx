"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import "./CustomCursor.scss";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smoother spring config for elegant feel
  const springConfig = { damping: 35, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    const hasHover = window.matchMedia("(hover: hover)").matches;
    setShouldRender(hasHover);
    if (!hasHover) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = !!(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        getComputedStyle(target).cursor === "pointer"
      );

      setIsHovering(isClickable);
      
      // Check for custom cursor text
      const cursorTextAttr = target.getAttribute("data-cursor-text") || 
                             target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");
      setCursorText(cursorTextAttr || "");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleElementHover);
    document.body.classList.add("custom-cursor-active");

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleElementHover);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (!isMounted || !shouldRender) return null;

  return (
    <motion.div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? "hovering" : ""} ${cursorText ? "has-text" : ""}`}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Typing indicator cursor */}
      <motion.div
        className="cursor-line"
        animate={{
          scaleY: isHovering ? 1.4 : 1,
          opacity: [1, 0.3, 1],
        }}
        transition={{
          scaleY: { duration: 0.2 },
          opacity: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      
      {/* Trailing dot */}
      <motion.div
        className="cursor-trail"
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
      
      {/* Text label */}
      {cursorText && (
        <motion.span
          className="cursor-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
