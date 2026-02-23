"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Code, Zap, Target } from "lucide-react";
import "./About.scss";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern technologies",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Creating lightning-fast applications that scale",
    },
    {
      icon: Target,
      title: "System Design",
      description: "Architecting robust and maintainable systems",
    },
  ];

  const techHighlights = [
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "TypeScript",
    "System Design",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={sectionRef} className="about" id="about">
      {/* Background Elements */}
      <div className="about-background">
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
      </div>

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate about building
            <br />
            <span className="gradient-text">scalable solutions</span>
          </h2>
        </motion.div>

        <div className="about-content">
          {/* Main About Text */}
          <motion.div className="about-main" variants={itemVariants}>
            <div className="about-card glass-card">
              <div className="about-intro">
                <div className="location-badge">
                  <MapPin size={16} />
                  <span>Navi Mumbai, Maharashtra, India</span>
                </div>

                <p className="about-text">
                  Full-Stack Developer with <strong>2+ years of experience</strong> building 
                  scalable web applications. I specialize in modern technologies like 
                  <span className="highlight"> Next.js</span>, 
                  <span className="highlight"> Node.js</span>, 
                  <span className="highlight"> PostgreSQL</span>, and 
                  <span className="highlight"> MongoDB</span>.
                </p>

                <p className="about-text">
                  My expertise spans across backend engineering, frontend development, 
                  and system design. I&apos;m passionate about building efficient, 
                  performant applications that solve real-world problems.
                </p>

                <p className="about-text">
                  Currently diving deep into <span className="highlight">C++</span> for 
                  high-performance systems and expanding my knowledge in distributed 
                  systems architecture.
                </p>
              </div>

              {/* Tech Tags */}
              <div className="tech-tags">
                {techHighlights.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="highlight-card"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="highlight-icon">
                  <item.icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Info */}
          <motion.div className="about-info" variants={itemVariants}>
            <div className="info-card">
              <Briefcase size={20} />
              <div>
                <span className="info-label">Currently</span>
                <span className="info-value">Full-Stack Developer</span>
              </div>
            </div>
            <div className="info-card">
              <GraduationCap size={20} />
              <div>
                <span className="info-label">Education</span>
                <span className="info-value">B.E. in Computer Science</span>
              </div>
            </div>
            <div className="info-card">
              <Code size={20} />
              <div>
                <span className="info-label">Problem Solving</span>
                <span className="info-value">80+ LeetCode & CodeChef</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
