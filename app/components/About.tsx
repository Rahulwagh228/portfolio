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
      // Animate rotating tech stack
      gsap.fromTo('.tech-animation-container',
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

      // Animate tech items appearing
      gsap.fromTo('.tech-item',
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.tech-animation-container',
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
            <div className="tech-animation-container">
              <div className="rotating-tech-stack">
                <div className="tech-item tech-1">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Next.js</span>
                </div>
                
                <div className="tech-item tech-2">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.23 12.004C14.23 12.004 14.247 12.003 14.25 12.003C14.247 12.003 14.23 12.004 14.23 12.004Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12ZM2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z" fill="currentColor"/>
                  </svg>
                  <span>React</span>
                </div>
                
                <div className="tech-item tech-3">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 8.5L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 8.5L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Node.js</span>
                </div>
                
                <div className="tech-item tech-4">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 2H15.5C16.881 2 18 3.119 18 4.5V8.5C18 9.881 16.881 11 15.5 11H8.5C7.119 11 6 9.881 6 8.5V4.5C6 3.119 7.119 2 8.5 2Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8.5 13H15.5C16.881 13 18 14.119 18 15.5V19.5C18 20.881 16.881 22 15.5 22H8.5C7.119 22 6 20.881 6 19.5V15.5C6 14.119 7.119 13 8.5 13Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>TypeScript</span>
                </div>
                
                <div className="tech-item tech-5">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75C19.1142 2.62421 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62421 11.75 3.75L5.99 9.5C4.86421 10.6258 4.2317 12.1528 4.2317 13.745C4.2317 15.3372 4.86421 16.8642 5.99 17.99C7.11579 19.1158 8.64277 19.7483 10.235 19.7483C11.8272 19.7483 13.3542 19.1158 14.48 17.99L20.24 12.24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>MongoDB</span>
                </div>
                
                <div className="tech-item tech-6">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>JavaScript</span>
                </div>
              </div>
              
              <div className="center-logo">
                <div className="center-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Full Stack</span>
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