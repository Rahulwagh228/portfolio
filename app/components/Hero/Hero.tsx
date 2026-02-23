"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Code2, Database, Server } from "lucide-react";
import "./Hero.scss";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      setMousePosition({ x, y });
      mouseX.set(x * 30);
      mouseY.set(y * 30);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "80+", label: "Problems Solved" },
    { value: "5+", label: "Production Deployments" },
    { value: "10+", label: "Technologies Mastered" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const, // Smooth cubic-bezier
      },
    },
  };

  const floatingIcons = [
    { Icon: Code2, delay: 0 },
    { Icon: Database, delay: 0.2 },
    { Icon: Server, delay: 0.4 },
  ];

  return (
    <motion.section
      ref={heroRef}
      className="hero"
      style={{ opacity, scale }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated Background */}
      <div className="hero-background">
        {/* Gradient Orbs */}
        <motion.div
          className="orb orb-1"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="orb orb-2"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="orb orb-3"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * -40,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />

        {/* Floating Particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
                y: [-20, 20, -20],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Grid Lines */}
        <div className="grid-overlay" />
      </div>

      {/* Floating Tech Icons */}
      <div className="floating-icons">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + delay, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon size={32} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div className="hero-content" style={{ y }}>
        <div className="container">
          <div className="hero-main">
            {/* Left Content */}
            <div className="hero-text">
              <motion.div className="hero-badge" variants={itemVariants}>
                <span className="badge-dot" />
                <span>Available for opportunities</span>
              </motion.div>

              <motion.h1 className="hero-title" variants={itemVariants}>
                <span className="title-line">Hi, I&apos;m</span>
                <span className="title-name">
                  <span className="gradient-text">Rahul Wagh</span>
                </span>
              </motion.h1>

              <motion.div className="hero-role" variants={itemVariants}>
                <span className="role-text">Full Stack Developer</span>
                <span className="role-divider">|</span>
                <span className="role-text">Backend Engineer</span>
                <span className="role-divider">|</span>
                <span className="role-text">System Design Enthusiast</span>
              </motion.div>

              <motion.p className="hero-description" variants={itemVariants}>
                Building scalable systems, beautiful interfaces, and
                performance-driven applications that make a difference.
              </motion.p>

              <motion.div className="hero-cta" variants={itemVariants}>
                <motion.a
                  href="#contact"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
              </motion.div>

              <motion.div className="hero-socials" variants={itemVariants}>
                {[
                  { Icon: Github, href: "https://github.com/Rahulwagh228", label: "GitHub" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/rahul-wagh-845061218/", label: "LinkedIn" },
                  { Icon: Mail, href: "mailto:Waghrahul228@gmail.com", label: "Email" },
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Avatar/Illustration Section */}
            <motion.div 
              className="hero-avatar"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="avatar-container">
                <div className="avatar-glow" />
                <div className="avatar-ring" />
                <motion.div 
                  className="avatar-image"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Placeholder avatar - replace with actual cartoon image */}
                  <div className="avatar-placeholder">
                    <span className="avatar-initials">RW</span>
                  </div>
                </motion.div>
                <div className="avatar-badge">
                  <Code2 size={16} />
                  <span>Developer</span>
                </div>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div className="hero-stats" variants={itemVariants}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
