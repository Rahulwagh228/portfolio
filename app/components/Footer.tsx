'use client';

import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19C4 20.5 4 16.5 2 16M22 16V22L22 16C22 13 20 12 17 12H7C4 12 2 13 2 16V16C2 16.5 4 20.5 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8C18.5 8 20.5 10 20.5 12.5V21H17V12.5C17 11.5 16 10.5 15 10.5C14 10.5 13 11.5 13 12.5V21H9.5V8H13V9.5C13.5 8.5 14.5 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 8H6.5V21H3V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="4.75" cy="4.75" r="1.75" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: '#',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61173 13.2884 4.19445 12.773 4.95371C12.2575 5.71297 11.9877 6.61435 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39624C5.36074 6.60667 4.01032 5.43666 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:rahul.wagh@example.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href.replace('#', '.'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">Rahul</span>
                <span className="logo-dot">.</span>
              </div>
              <p className="footer-description">
                Full Stack Developer & UI/UX Designer passionate about creating 
                beautiful, functional, and user-centered digital experiences.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    className="social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="footer-links">
              <div className="links-section">
                <h4>Quick Links</h4>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="links-section">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Mobile Apps</a></li>
                  <li><a href="#">UI/UX Design</a></li>
                  <li><a href="#">Consultation</a></li>
                </ul>
              </div>
              
              <div className="links-section">
                <h4>Contact Info</h4>
                <ul>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:rahul.wagh@example.com">rahul.wagh@example.com</a>
                  </li>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </li>
                  <li>
                    <span>Location:</span>
                    <span>Mumbai, India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} Rahul Wagh. All rights reserved.</p>
            </div>
            <button 
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;