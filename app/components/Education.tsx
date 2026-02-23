"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import "./Education.scss";

interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  type: "on-campus" | "distance";
  highlights?: string[];
}

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const educations: Education[] = [
    {
      id: 1,
      institution: "VPP College of Engineering",
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      period: "2020 – 2024",
      location: "Mumbai, India",
      type: "on-campus",
      highlights: [
        "Specialized in Computer Science and Engineering",
        "Active participation in technical clubs and events",
        "Strong foundation in algorithms and data structures",
      ],
    },
    {
      id: 2,
      institution: "World Quant University",
      degree: "Master of Science",
      field: "Financial Engineering",
      period: "Oct 2025 – Present",
      location: "Distance Learning",
      type: "distance",
      highlights: [
        "Quantitative finance and risk management",
        "Advanced mathematical modeling",
        "Machine learning applications in finance",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={sectionRef} className="education" id="education">
      {/* Background */}
      <div className="education-background">
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
          <span className="section-label">
            <GraduationCap size={14} />
            Education
          </span>
          <h2 className="section-title">
            Academic
            <br />
            <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="education-grid">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Card Header */}
              <div className="card-header">
                <motion.div
                  className="edu-icon"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 12 }}
                >
                  <GraduationCap size={28} />
                </motion.div>
                <div className="edu-type">
                  <span className={`type-badge ${edu.type}`}>
                    {edu.type === "on-campus" ? "On Campus" : "Distance Learning"}
                  </span>
                </div>
              </div>

              {/* Institution Info */}
              <h3 className="institution-name">{edu.institution}</h3>
              <div className="degree-info">
                <span className="degree">{edu.degree}</span>
                <span className="field">in {edu.field}</span>
              </div>

              {/* Meta Info */}
              <div className="edu-meta">
                <span className="meta-item">
                  <Calendar size={14} />
                  {edu.period}
                </span>
                <span className="meta-item">
                  <MapPin size={14} />
                  {edu.location}
                </span>
              </div>

              {/* Highlights */}
              {edu.highlights && (
                <div className="edu-highlights">
                  {edu.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      className="highlight-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.1 }}
                    >
                      <Award size={14} />
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Decorative Element */}
              <div className="card-decoration" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
