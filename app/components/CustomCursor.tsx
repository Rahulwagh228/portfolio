"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import "./CustomCursor.scss";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    // Check if device supports hover (not touch)
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
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleElementHover);

    // Add class to body for hiding default cursor
    document.body.classList.add("custom-cursor-active");

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleElementHover);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  // Don't render until mounted and on hover-capable devices
  if (!isMounted || !shouldRender) return null;

  return (
    <motion.div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? "hovering" : ""}`}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        className="cursor-dot"
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderWidth: isHovering ? "2px" : "1px",
        }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  );
};

export default CustomCursor;
