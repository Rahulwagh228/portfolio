import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <section className="hero" id="home">
        <Hero />
      </section>
      <section className="about" id="about">
        <About />
      </section>
      <section className="skills" id="skills">
        <Skills />
      </section>
      <section className="projects" id="projects">
        <Projects />
      </section>
      <section className="contact" id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}