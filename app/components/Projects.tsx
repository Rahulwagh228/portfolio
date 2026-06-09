"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, MessageSquare, Brain, TrendingUp, Sparkles, Layout, Store, GraduationCap } from "lucide-react";
// import "./Projects.scss";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon: React.ElementType;
  technologies: string[];
  features: string[];
  github?: string;
  live?: string;
  status: "completed" | "in-progress" | "upcoming";
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Classsly",
      description: "Classes management system",
      longDescription:
        "A comprehensive classes management system for coaching institutes — manage classes, batches, students, attendance, fees, and day-to-day operations from a single dashboard.",
      image: "/images/classly.png",
      icon: GraduationCap,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Vercel"],
      features: [
        "Batch & class management",
        "Student records",
        "Attendance tracking",
        "Admin dashboard",
      ],
      live: "https://classsly.in/",
      github: "https://github.com/Rahulwagh228",
      status: "completed",
    },
    {
      id: 2,
      title: "Kobichat",
      description: "Real-time communication platform",
      longDescription:
        "A feature-rich real-time chat application built with Socket.io, enabling instant messaging and conversation rooms. Backend hosted on Linode using Docker & Nginx, frontend deployed on Vercel.",
      image: "/images/kobichat.png",
      icon: MessageSquare,
      technologies: ["Next.js", "Socket.io", "Node.js", "MongoDB", "Docker", "Nginx", "Linode"],
      features: [
        "Real-time messaging",
        "Conversation rooms",
        "Dockerized backend",
        "Nginx reverse proxy",
      ],
      github: "https://github.com/Rahulwagh228",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Note AI App",
      description: "AI-powered intelligent note-taking",
      longDescription:
        "An intelligent note-taking application powered by OpenAI, featuring semantic search and smart organization.",
      image: "/images/noteai.png",
      icon: Brain,
      technologies: ["Next.js", "OpenAI API", "MongoDB Atlas", "Pinecone", "Tailwind", "Shadcn"],
      features: [
        "AI-powered insights",
        "Semantic search",
        "Vector embeddings",
        "Smart organization",
      ],
      github: "https://github.com/Rahulwagh228",
      status: "completed",
    },
    {
      id: 4,
      title: "Trade Vault",
      description: "Trading performance analytics",
      longDescription:
        "A comprehensive trading performance visualization dashboard with real-time analytics and portfolio tracking.",
      image: "/images/tradetracker.png",
      icon: TrendingUp,
      technologies: ["Next.js", "Supabase", "PostgreSQL", "Recharts", "Redux"],
      features: [
        "Performance visualization",
        "Real-time analytics",
        "Portfolio tracking",
        "Trade history",
      ],
      live: "https://trade-vault.in",
      github: "https://github.com/Rahulwagh228",
      status: "completed",
    },
    {
      id: 5,
      title: "Vivek Sonawane Portfolio",
      description: "Personal portfolio website",
      longDescription:
        "A visually stunning personal portfolio website built for Vivek Sonawane — featuring multilingual support, dynamic animations, and a modern dark theme.",
      image: "/images/vivek-portfolio.png",
      icon: Layout,
      technologies: ["Next.js", "TypeScript", "Framer Motion", "SCSS"],
      features: [
        "Multi-language support",
        "Dynamic animations",
        "Dark premium theme",
        "Responsive layout",
      ],
      live: "https://vivek-alpha.vercel.app/",
      github: "https://github.com/Rahulwagh228",
      status: "completed",
    },
    {
      id: 6,
      title: "Bholenath Cybercafe",
      description: "Digital services platform",
      longDescription:
        "A full-featured digital services platform for Bholenath Cybercafe — enabling online government document applications with user authentication and service management.",
      image: "/images/bholenath-cybercafe.png",
      icon: Store,
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
      features: [
        "User authentication",
        "Service management",
        "Document applications",
        "Bilingual interface",
      ],
      live: "https://bholenath-cybercafe.vercel.app/",
      github: "https://github.com/Rahulwagh228",
      status: "completed",
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "status-completed";
      case "in-progress":
        return "status-progress";
      case "upcoming":
        return "status-upcoming";
      default:
        return "";
    }
  };

  return (
    <section ref={sectionRef} className="projects" id="projects">
      {/* Background */}
      <div className="projects-background">
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
        <div className="grid-pattern" />
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
            <Sparkles size={14} />
            Featured Work
          </span>
          <h2 className="section-title">
            Creative
            <br />
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            A showcase of my recent projects, each crafted with attention to detail
            and a focus on performance.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -12 }}
            >
              {/* Animated Border */}
              <div className="card-border" />

              {/* Card Content */}
              <div className="card-inner">
                {/* Header */}
                <div className="card-header">
                  <motion.div
                    className="project-icon"
                    animate={{
                      rotate: hoveredProject === project.id ? 360 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon size={28} />
                  </motion.div>

                  <div className="project-meta">
                    <span className={`status-badge ${getStatusColor(project.status)}`}>
                      {project.status === "in-progress" ? "In Progress" : project.status}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-long-description">{project.longDescription}</p>

                {/* Features */}
                <div className="project-features">
                  {project.features.map((feature, i) => (
                    <motion.span
                      key={feature}
                      className="feature-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-actions">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="card-glow"
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* View More */}
        <motion.div className="view-more" variants={itemVariants}>
          <motion.a
            href="https://github.com/Rahulwagh228"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
