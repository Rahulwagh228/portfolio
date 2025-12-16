'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.scss';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50
      });
      
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        rotationY: 15
      });

      // Main animation timeline
      const tl = gsap.timeline();
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3")
      .to(imageRef.current, {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.8");

      // Floating elements animation
      gsap.to('.floating-element', {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

      // Continuous title animation
      gsap.to('.hero-title .char', {
        color: '#8b5cf6',
        duration: 0.3,
        stagger: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Split text into characters for animation
  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char">{char}</span>
    ));
  };

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-background">
        <div ref={floatingElementsRef} className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
          <div className="floating-element element-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 ref={titleRef} className="hero-title">
              Hi, I'm <span className="text-gradient">
                {splitText('Rahul Wagh')}
              </span>
            </h1>
            
            <p ref={subtitleRef} className="hero-subtitle">
              Full Stack Developer & UI/UX Designer
            </p>
            
            <p className="hero-description">
              Crafting beautiful, functional, and user-centered digital experiences.
              Passionate about modern web technologies and clean, efficient code.
            </p>
            
            <div ref={buttonsRef} className="hero-buttons">
              <button className="btn-primary">
                <span>View My Work</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button className="btn-secondary">
                <span>Download CV</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div ref={imageRef} className="hero-image">
            <div className="image-container">
              <div className="image-overlay">
                <div className="overlay-gradient"></div>
                <div className="overlay-pattern"></div>
              </div>
              <img 
                src="/images/hero-placeholder.jpg" 
                alt="Rahul Wagh - Full Stack Developer"
                className="profile-image"
              />
              <div className="image-decoration">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-square"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;