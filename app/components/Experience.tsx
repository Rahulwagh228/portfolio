"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import "./Experience.scss";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  projects?: string[];
}

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Increditex Solutions Pvt Ltd",
      role: "Software Developer",
      period: "Aug 2025 – Jan 2026",
      location: "India",
      description: [
        "Developed full-stack web applications with modern technologies",
        "Implemented backend optimization strategies for improved performance",
        "Built data analysis pipelines using Python libraries (Pandas, NumPy, Matplotlib, Seaborn)",
        "Integrated multiple API services and optimized endpoint performance",
      ],
      technologies: ["Next.js", "Node.js", "Python", "Pandas", "NumPy", "PostgreSQL"],
    },
    {
      id: 2,
      company: "Bluepen Assignment Pvt Ltd",
      role: "Full-Stack Developer",
      period: "May 2024 – July 2025",
      location: "India",
      description: [
        "Built and optimized multiple production websites including writeyfy.com, bluepen.co.in, and greenguide.co.in",
        "Improved application load times by 25% through code optimization and caching strategies",
        "Developed robust backend systems using Node.js, Express, and Redis",
        "Implemented cron jobs for automated tasks and scheduled operations",
        "Deployed and managed applications on AWS EC2 and S3",
      ],
      technologies: ["Next.js", "Node.js", "Express", "Redis", "AWS EC2", "AWS S3", "MongoDB"],
      projects: ["writeyfy.com", "bluepen.co.in", "greenguide.co.in"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section ref={sectionRef} className="experience" id="experience">
      {/* Background */}
      <div className="experience-background">
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
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Professional
            <br />
            <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <motion.div
                className="timeline-dot"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.3 }}
              >
                <div className="dot-inner" />
                <div className="dot-glow" />
              </motion.div>

              {/* Card */}
              <motion.div
                className="experience-card"
                whileHover={{ y: -8 }}
              >
                <div className="card-header">
                  <div className="company-icon">
                    <Briefcase size={24} />
                  </div>
                  <div className="company-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <span className="role">{exp.role}</span>
                  </div>
                </div>

                <div className="card-meta">
                  <span className="meta-item">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="meta-item">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul className="card-description">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.2 + i * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {exp.projects && (
                  <div className="card-projects">
                    <span className="projects-label">Key Projects:</span>
                    <div className="projects-list">
                      {exp.projects.map((project) => (
                        <span key={project} className="project-badge">
                          <ExternalLink size={12} />
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="card-technologies">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
