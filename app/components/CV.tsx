"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, FileText } from "lucide-react";
import "./CV.scss";

const CV = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Rahul_resume.pdf";
    link.download = "Rahul_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <section ref={sectionRef} className="cv" id="cv">
      {/* Background Elements */}
      <div className="cv-background">
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
          <span className="section-label">Resume</span>
          <h2 className="section-title">
            Download my
            <br />
            <span className="gradient-text">CV & Resume</span>
          </h2>
          <p className="section-description">
            Get a comprehensive overview of my professional experience, skills, and projects.
          </p>
        </motion.div>

        {/* CV Card */}
        <motion.div className="cv-content" variants={itemVariants}>
          <div className="cv-card glass-card">
            <div className="cv-icon">
              <FileText size={48} />
            </div>
            <div className="cv-info">
              <h3>Rahul Resume</h3>
              <p>PDF Document • Professional Resume</p>
            </div>
            <motion.button
              onClick={handleDownload}
              className="download-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download CV"
            >
              <Download size={20} />
              Download
            </motion.button>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div className="cv-info-section" variants={itemVariants}>
          <div className="info-grid">
            <div className="info-item glass-card-subtle">
              <div className="info-number">2+</div>
              <div className="info-text">Years of Experience</div>
            </div>
            <div className="info-item glass-card-subtle">
              <div className="info-number">20+</div>
              <div className="info-text">Projects Completed</div>
            </div>
            <div className="info-item glass-card-subtle">
              <div className="info-number">5+</div>
              <div className="info-text">Technologies</div>
            </div>
            <div className="info-item glass-card-subtle">
              <div className="info-number">80+</div>
              <div className="info-text">DSA Problems Solved</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CV;
