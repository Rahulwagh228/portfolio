"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.scss";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

 
  return (
    <section ref={heroRef} className="hero">
      <div className="hero-background">
        <div className="floating-elements">
          <div className="floating-element element-1" />
          <div className="floating-element element-2" />
          <div className="floating-element element-3" />
          <div className="floating-element element-4" />
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 ref={titleRef} className="hero-title">
              Hi, I'm{" "}
              <span className="text-gradient">Rahul Wagh</span>
            </h1>

            <p ref={subtitleRef} className="hero-subtitle">
              Full Stack Developer & UI/UX Designer
            </p>

            <p className="hero-description">
              Crafting beautiful, functional, and user-centered digital
              experiences. Passionate about modern web technologies and clean,
              efficient code.
            </p>

            <div ref={buttonsRef} className="hero-buttons">
              <button className="btn-primary">
                <span>View My Work</span>
               
              </button>

              <button className="btn-secondary">
                <span>Download CV</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div ref={imageRef} className="hero-image">
            <div className="image-container">
              <div className="image-overlay">
              </div>
              <img
                src="/myassets/myphoto.jpg"
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

   
      </div>
    </section>
  );
};

export default Hero;
