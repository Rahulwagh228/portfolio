'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './Projects.scss';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate filter buttons
      gsap.fromTo(filtersRef.current?.children || [],
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: filtersRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate project cards
      gsap.fromTo('.project-card',
        {
          y: 50,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, projectsRef);

    return () => ctx.revert();
  }, []);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ui', label: 'UI/UX' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/images/project1.jpg',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app with real-time collaboration features. Built with Next.js, TypeScript, and Prisma with a modern, intuitive interface.',
      image: '/images/project2.jpg',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Mobile Weather App',
      description: 'A React Native weather application with location-based forecasts, beautiful animations, and offline support.',
      image: '/images/project3.jpg',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A stunning portfolio website with smooth animations, dark mode, and responsive design. Built with modern web technologies.',
      image: '/images/project4.jpg',
      category: 'ui',
      technologies: ['Next.js', 'GSAP', 'SCSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media management with real-time data visualization and reporting features.',
      image: '/images/project5.jpg',
      category: 'web',
      technologies: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Design System',
      description: 'A comprehensive design system with reusable components, design tokens, and documentation for consistent UI development.',
      image: '/images/project6.jpg',
      category: 'ui',
      technologies: ['Figma', 'Storybook', 'React', 'Design Tokens'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section ref={projectsRef} className="projects section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">My Work</span>
          <h2>Featured Projects</h2>
          <p className="section-description">
            A collection of projects that showcase my skills in web development, 
            mobile apps, and UI/UX design. Each project represents a unique challenge solved.
          </p>
        </div>
        
        <div ref={filtersRef} className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn ${
                activeFilter === filter.id ? 'active' : ''
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div ref={projectsGridRef} className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a href={project.liveUrl} className="action-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href={project.githubUrl} className="action-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19C4 20.5 4 16.5 2 16M22 16V22L22 16C22 13 20 12 17 12H7C4 12 2 13 2 16V16C2 16.5 4 20.5 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta text-center">
          <button className="btn-secondary">
            <span>View All Projects</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;