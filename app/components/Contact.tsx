"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import "./Contact.scss";

interface ContactInfo {
  id: string;
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
}

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const contactInfo: ContactInfo[] = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "Waghrahul228@gmail.com",
      href: "mailto:Waghrahul228@gmail.com",
      copyable: true,
    },
    {
      id: "phone",
      icon: Phone,
      label: "Phone",
      value: "+91 9588622796",
      href: "tel:+919588622796",
      copyable: true,
    },
    {
      id: "location",
      icon: MapPin,
      label: "Location",
      value: "Navi Mumbai, Maharashtra, India",
    },
  ];

  const socialLinks = [
    {
      id: "github",
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Rahulwagh228",
      username: "@Rahulwagh228",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rahul-wagh-845061218/",
      username: "Rahul Wagh",
    },
  ];

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(id);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section ref={sectionRef} className="contact" id="contact">
      {/* Background */}
      <div className="contact-background">
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
        <div className="glow-orb orb-3" />
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
            Get in Touch
          </span>
          <h2 className="section-title">
            Let&apos;s Work
            <br />
            <span className="gradient-text">Together</span>
          </h2>
          <p className="section-description">
            Ready to bring your ideas to life? Feel free to reach out for
            collaborations, opportunities, or just a friendly chat.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <motion.div className="contact-info" variants={itemVariants}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.id}
                className="info-card"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <div className="info-icon">
                  <info.icon size={24} />
                </div>
                <div className="info-content">
                  <span className="info-label">{info.label}</span>
                  {info.href ? (
                    <a href={info.href} className="info-value">
                      {info.value}
                    </a>
                  ) : (
                    <span className="info-value">{info.value}</span>
                  )}
                </div>
                {info.copyable && (
                  <motion.button
                    className="copy-btn"
                    onClick={() => handleCopy(info.value, info.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Copy ${info.label}`}
                  >
                    {copiedItem === info.id ? (
                      <Check size={18} className="copied" />
                    ) : (
                      <Copy size={18} />
                    )}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div className="social-links" variants={itemVariants}>
            <h3 className="social-title">Connect with me</h3>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="social-icon">
                    <social.icon size={28} />
                  </div>
                  <div className="social-info">
                    <span className="social-label">{social.label}</span>
                    <span className="social-username">{social.username}</span>
                  </div>
                  <ArrowUpRight size={20} className="arrow-icon" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div className="contact-cta" variants={itemVariants}>
            <div className="cta-content">
              <h3>Ready to start your project?</h3>
              <p>
                I&apos;m currently available for freelance work and full-time
                positions. Let&apos;s create something amazing together.
              </p>
              <motion.a
                href="mailto:Waghrahul228@gmail.com"
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Send me an Email
              </motion.a>
            </div>
            <div className="cta-decoration">
              <div className="decoration-circle" />
              <div className="decoration-circle" />
              <div className="decoration-circle" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
