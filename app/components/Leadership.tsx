"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Star, Shield, FileText, Target } from "lucide-react";
import "./Leadership.scss";

interface LeadershipItem {
  id: number;
  title: string;
  organization: string;
  description: string;
  icon: React.ElementType;
  color: string;
  achievements?: string[];
}

const Leadership = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const leadershipItems: LeadershipItem[] = [
    {
      id: 1,
      title: "NCC Cadet Leader",
      organization: "National Cadet Corps",
      description:
        "Led a team of 40 students during intensive training camps, developing strategic planning and team coordination skills.",
      icon: Shield,
      color: "#7C3AED",
      achievements: [
        "Led 40+ cadets in training exercises",
        "Developed leadership and discipline",
        "Coordinated team activities and drills",
        "Maintained troop morale and performance",
      ],
    },
    {
      id: 2,
      title: "Documentation Head",
      organization: "ED-Cell (Entrepreneurship Development Cell)",
      description:
        "Managed comprehensive event documentation and planning, ensuring smooth execution of entrepreneurship initiatives.",
      icon: FileText,
      color: "#00F5D4",
      achievements: [
        "Documented major entrepreneurship events",
        "Coordinated with multiple teams",
        "Streamlined documentation processes",
        "Supported event planning and execution",
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
    <section ref={sectionRef} className="leadership" id="leadership">
      {/* Background */}
      <div className="leadership-background">
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
            <Users size={14} />
            Leadership
          </span>
          <h2 className="section-title">
            Beyond
            <br />
            <span className="gradient-text">Coding</span>
          </h2>
          <p className="section-description">
            Leadership experiences that shaped my ability to collaborate, lead,
            and inspire teams.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="leadership-grid">
          {leadershipItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="leadership-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Icon Section */}
              <div className="card-icon-section">
                <motion.div
                  className="leadership-icon"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon size={32} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="card-content">
                <span
                  className="organization-badge"
                  style={{ borderColor: `${item.color}50`, color: item.color }}
                >
                  {item.organization}
                </span>
                <h3 className="leadership-title">{item.title}</h3>
                <p className="leadership-description">{item.description}</p>

                {/* Achievements */}
                {item.achievements && (
                  <div className="achievements-list">
                    {item.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="achievement-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.08 }}
                      >
                        <Target
                          size={14}
                          style={{ color: item.color }}
                        />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              <div
                className="card-glow"
                style={{
                  background: `radial-gradient(circle at 80% 20%, ${item.color}15 0%, transparent 60%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div className="leadership-stats" variants={itemVariants}>
          {[
            { icon: Users, value: "40+", label: "Team Members Led" },
            { icon: Award, value: "5+", label: "Events Organized" },
            { icon: Star, value: "2+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">
                <stat.icon size={24} />
              </div>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Leadership;
