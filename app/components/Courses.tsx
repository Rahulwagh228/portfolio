"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, User, CheckCircle, Clock } from "lucide-react";
import Image from "next/image";
import "./Courses.scss";

interface Course {
  id: number;
  title: string;
  instructor: string;
  platform: string;
  image: string;
  topics: string[];
  link?: string;
  status: "completed" | "in-progress";
}

const Courses = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const courses: Course[] = [
    {
      id: 1,
      title: "Fundamentals of Network Engineering",
      instructor: "Hussain Nasser",
      platform: "Udemy",
      image: "/images/courses/network-engineering.png",
      topics: [
        "OSI Model & TCP/IP",
        "DNS, TLS & Routing",
        "TCP/UDP Server Design",
        "Wireshark & TCPDUMP",
      ],
      status: "completed",
    },
    {
      id: 2,
      title: "Fundamentals of Backend Engineering",
      instructor: "Hussain Nasser",
      platform: "Udemy",
      image: "/images/courses/backend-engineering.png",
      topics: [
        "Backend Communication Patterns",
        "HTTP/1.1, HTTP/2 & HTTP/3",
        "WebSockets & gRPC",
        "TLS 1.2 & TLS 1.3",
      ],
      status: "completed",
    },
    {
      id: 3,
      title: "Troubleshooting Backend Systems",
      instructor: "Hussain Nasser",
      platform: "Udemy",
      image: "/images/courses/troubleshooting-backend.png",
      topics: [
        "Performance Diagnostics",
        "Debugging Production Issues",
        "Profiling & Monitoring",
        "System Bottleneck Analysis",
      ],
      status: "in-progress",
    },
    {
      id: 4,
      title: "Fundamentals of Database Engineering",
      instructor: "Scaler Academy",
      platform: "Udemy",
      image: "/images/courses/database-engineering.png",
      topics: [
        "ACID Properties & Indexing",
        "Partitioning & Sharding",
        "Replication & Concurrency",
        "Database Engines & Security",
      ],
      status: "completed",
    },
    {
      id: 5,
      title: "Fundamentals of Operating Systems",
      instructor: "Hussain Nasser",
      platform: "Udemy",
      image: "/images/courses/operating-systems.png",
      topics: [
        "Processes & Threads",
        "CPU Architecture & Caches",
        "Virtual Memory",
        "Socket Programming & I/O",
      ],
      status: "completed",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  return (
    <section ref={sectionRef} className="courses" id="courses">
      {/* Background Decorations */}
      <div className="courses-background">
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
            <BookOpen size={14} />
            Courses
          </span>
          <h2 className="section-title">
            Continuous
            <br />
            <span className="gradient-text">Learning</span>
          </h2>
          <p className="section-description">
            Courses I&apos;ve completed to deepen my understanding of backend
            engineering, systems design, and computer science fundamentals.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="course-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Course Image */}
              <div className="course-image-wrapper">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={480}
                  height={270}
                  className="course-image"
                />
                <div className="image-overlay">
                  <span className="platform-badge">{course.platform}</span>
                </div>
                <div className={`completed-badge ${course.status === "in-progress" ? "in-progress" : ""}`}>
                  {course.status === "in-progress" ? <Clock size={14} /> : <CheckCircle size={14} />}
                  {course.status === "in-progress" ? "In Progress" : "Completed"}
                </div>
              </div>

              {/* Course Content */}
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>

                <div className="course-instructor">
                  <User size={14} />
                  <span>{course.instructor}</span>
                </div>

                {/* Key Topics */}
                <div className="course-topics">
                  {course.topics.map((topic, i) => (
                    <motion.div
                      key={i}
                      className="topic-item"
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 0.4 + index * 0.08 + i * 0.06,
                      }}
                    >
                      <span className="topic-dot" />
                      <span>{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Card Decorative Elements */}
              <div className="card-shine" />
              <div className="card-border-glow" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Courses;
