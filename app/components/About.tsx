'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './About.scss';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(imageRef.current, 
        {
          x: -100,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current?.children || [],
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats animation
      gsap.fromTo(statsRef.current?.children || [],
        {
          y: 30,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Number counting animation
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach((number) => {
        const finalNumber = parseInt(number.textContent || '0');
        gsap.fromTo(number, 
          { textContent: 0 },
          {
            textContent: finalNumber,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: number,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: '50', suffix: '+', label: 'Projects Completed' },
    { number: '3', suffix: '+', label: 'Years Experience' },
    { number: '25', suffix: '+', label: 'Happy Clients' },
    { number: '10', suffix: '+', label: 'Technologies' }
  ];

  return (
    <section ref={aboutRef} className="about section-padding">
      <div className="container">
        <div className="about-content">
          <div ref={imageRef} className="about-image">
            <div className="image-container">
              <div className="image-background"></div>
              <img 
                src="/images/about-placeholder.jpg" 
                alt="About Rahul Wagh"
                className="about-photo"
              />
              <div className="image-overlay">
                <div className="overlay-pattern"></div>
                <div className="overlay-gradient"></div>
              </div>
              <div className="floating-elements">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-square"></div>
              </div>
            </div>
          </div>
          
          <div ref={contentRef} className="about-text">
            <div className="section-header">
              <span className="section-label">About Me</span>
              <h2>Passionate Developer with a Creative Mind</h2>
            </div>
            
            <div className="about-description">
              <p>
                I'm a passionate Full Stack Developer with over 3 years of experience 
                creating digital experiences that are not only functional but also 
                beautiful and intuitive. My journey in web development started with 
                a curiosity about how things work behind the scenes.
              </p>
              
              <p>
                I specialize in modern web technologies including React, Next.js, 
                Node.js, and various databases. I love turning complex problems 
                into simple, beautiful, and intuitive solutions.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge 
                through technical writing and mentoring.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Fast Performance</h4>
                  <p>Optimized code for lightning-fast loading times</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Clean Code</h4>
                  <p>Well-structured, maintainable, and scalable solutions</p>
                </div>
              </div>
            </div>
            
            <div className="about-actions">
              <button className="btn-primary">
                <span>Download Resume</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div ref={statsRef} className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number-container">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;