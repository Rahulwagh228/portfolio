"use client";
import { useRef } from "react";
import Image from "next/image";
import AnimatedTypography from "../AnimatedTypography";
import "./Hero.scss";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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
            <h1 ref={titleRef} className="hero-title text-white">
              Hi, {"I'm"} <span className="text-white">Rahul Wagh</span>
            </h1>

            {/* <p ref={subtitleRef} className="hero-subtitle">
              <AnimatedTypography 
                words={[
                  "Full Stack Developer",
                  "UI/UX Designer",
                  "Problem Solver",
                  "Tech Enthusiast"
                ]} 
                duration={2}
              />
            </p> */}
            <h1 className="text-4xl font-light hero-title">
              {" "}
              <AnimatedTypography
                words={["A Full Stack ", "Node js", "Next js","Frontend", "Backend"]}
              />
              <br/>Developer
            </h1>
            <p className="hero-description">
              Crafting beautiful, functional, and user-centered digital
              experiences. Passionate about modern web technologies and clean,
              efficient code.
            </p>

            <div ref={buttonsRef} className="hero-social-buttons">
              <a
                href="https://github.com/Rahulwagh228"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <Image
                  src="/svg/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/rahul-wagh-845061218/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <Image
                  src="/svg/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href="https://leetcode.com/Rahulwagh228/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LeetCode"
              >
                <Image
                  src="/svg/leetcode.svg"
                  alt="LeetCode"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href="https://x.com/RahulWagh228"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Twitter"
              >
                <Image
                  src="/svg/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href="https://www.instagram.com/rahulwagh228/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <Image
                  src="/svg/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              {/* 
              <a href="mailto:rahulwagh3322@gmail.com" className="social-btn" aria-label="Email">
                <Image src="/svg/email.svg" alt="Email" width={24} height={24} />
              </a> */}

              {/* <a href="tel:+917620063322" className="social-btn" aria-label="Call">
                <Image src="/svg/phone.svg" alt="Phone" width={24} height={24} />
              </a> */}
            </div>
          </div>

          <div ref={imageRef} className="hero-image">
            <div className="image-container">
              <div className="image-overlay"></div>
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
