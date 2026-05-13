import { useState, useEffect } from 'react';

const roles = ['Frontend Developer', 'Web Designer', '3D Web Builder', 'Freelancer'];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">
          Hey there! <span className="wave-emoji">&#128075;</span>
        </p>
        <h1 className="hero-name">
          I'm <span className="name-highlight">Mohammad Afnaan</span>
        </h1>
        <div className="hero-typewriter">
          <span className="typewriter-text">{text}</span>
          <span className="typewriter-cursor">|</span>
        </div>
        <p className="hero-tagline">
          I build websites that look expensive — and I'm just getting started.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary" onClick={(e) => scrollTo(e, 'projects')}>
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => scrollTo(e, 'contact')}>
            Let's Talk
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">3D</span>
            <span className="stat-label">Web Specialist</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-dot available" />
            <span className="stat-label">Available Now</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
