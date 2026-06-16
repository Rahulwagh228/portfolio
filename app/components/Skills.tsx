"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Terminal,
  Layers,
  Cpu,
} from "lucide-react";
import "./Skills.scss";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  skills: Skill[];
  color: string;
}

interface Skill {
  name: string;
  level: number; // 0-100
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillCategories: SkillCategory[] = [
    {
      id: "languages",
      name: "Languages",
      icon: Code2,
      color: "#7C3AED",
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Python", level: 80 },
        { name: "C++", level: 65 },
        { name: "C", level: 60 },
      ],
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: Layout,
      color: "#00F5D4",
      skills: [
        { name: "React", level: 92 },
        { name: "Next.js", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Redux/Zustand", level: 85 },
        { name: "Shadcn UI", level: 88 },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: Server,
      color: "#FF2E63",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 88 },
        { name: "Socket.io", level: 82 },
        { name: "Redis", level: 75 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      id: "database",
      name: "Databases",
      icon: Database,
      color: "#7C3AED",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 82 },
        { name: "Supabase", level: 80 },
        { name: "Redis", level: 75 },
      ],
    },
    {
      id: "devops",
      name: "DevOps & Cloud",
      icon: Cloud,
      color: "#00F5D4",
      skills: [
        { name: "AWS (EC2, S3, Lambda)", level: 80 },
        { name: "Kubernetes", level: 82 },
        { name: "Docker", level: 75 },
        { name: "GitHub Actions", level: 78 },
        { name: "Vercel", level: 90 },
      ],
    },
    {
      id: "GenAI",
      name: "Generative AI ",
      icon: Terminal,
      color: "#FF2E63",
      skills: [
        { name: "Langchain", level: 92 },
        { name: "Langgraph", level: 95 },
        { name: "OpenAI API", level: 88 },
        { name: "Pinecone", level: 75 },
        { name: "pgvector", level: 80 },
        { name: "RAG pipelines", level: 92 },
      ],
    },
  ];

  const additionalSkills = [
    { icon: Layers, label: "System Design", color: "#7C3AED" },
    { icon: Cpu, label: "Performance Optimization", color: "#00F5D4" },
    { icon: Server, label: "API Architecture", color: "#FF2E63" },
    { icon: Database, label: "Query Optimization", color: "#7C3AED" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={sectionRef} className="skills" id="skills">
      {/* Background */}
      <div className="skills-background">
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
        <div className="glow-orb orb-3" />
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
            <Cpu size={14} />
            Tech Stack
          </span>
          <h2 className="section-title">
            Skills &
            <br />
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-description">
            A comprehensive toolkit built over years of hands-on experience
            with modern technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="category-header">
                <div
                  className="category-icon"
                  style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}80)` }}
                >
                  <category.icon size={24} />
                </div>
                <h3 className="category-name">{category.name}</h3>
              </div>

              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: [0.22, 1, 0.36, 1] as const,
                        }}
                        style={{
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div className="additional-skills" variants={itemVariants}>
          <h3 className="additional-title">Core Competencies</h3>
          <div className="additional-grid">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                className="additional-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="additional-icon"
                  style={{ background: `linear-gradient(135deg, ${skill.color}, ${skill.color}80)` }}
                >
                  <skill.icon size={24} />
                </div>
                <span className="additional-label">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
