"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code2, ArrowUp } from "lucide-react";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/Rahulwagh228", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/rahul-wagh-845061218/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:Waghrahul228@gmail.com", icon: Mail, label: "Email" },
  ];

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Background */}
      <div className="footer-background">
        <div className="glow-orb" />
      </div>

      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Logo & Description */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="brand-logo">
              <div className="logo-icon">
                <Code2 size={24} />
              </div>
              <span className="logo-text">
                Rahul<span className="accent">.</span>
              </span>
            </div>
            <p className="brand-description">
              Full Stack Developer building scalable systems and beautiful interfaces.
              Passionate about creating impactful digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4>Contact</h4>
            <ul>
              <li>
                <Mail size={16} />
                <a href="mailto:Waghrahul228@gmail.com">Waghrahul228@gmail.com</a>
              </li>
              <li>
                <span>Navi Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="footer-socials"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <motion.p
            className="copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Rahul Wagh. Built with{" "}
            <Heart size={14} className="heart-icon" /> using Next.js,
          </motion.p>

          <motion.button
            className="scroll-top"
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
