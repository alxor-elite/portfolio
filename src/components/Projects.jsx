import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'SHOPY STREET',
    description:
      'A premium streetwear e-commerce store built from scratch. Features real-time inventory, admin dashboard, Supabase backend, Stripe payments, and an Allbirds-inspired UI with scroll animations and micro-interactions.',
    tags: ['React', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    image: './shopy-screenshot.png',
    link: 'https://shopy-khaki-eta.vercel.app/',
    isPrivate: false,
  },
  {
    title: 'GRND 3D Product Landing Page',
    description:
      'An immersive 3D animated product landing page for a shaker bottle brand. Features real-time 3D model rendering, scroll-triggered animations, and a sleek dark aesthetic. Built to convert visitors into buyers.',
    tags: ['Three.js', 'CSS Animations', 'Responsive', 'JavaScript'],
    image: './grnd-screenshot.png',
    link: 'https://alxor-elite.github.io/3Dwebapp/',
    isPrivate: false,
  },
  {
    title: 'Bloomlux Luxury Brand Website',
    description:
      'A high-end beauty brand landing page designed to feel premium. Features elegant typography, smooth CSS transitions, and a mobile-first layout. Built for brands that want to look world-class.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    image: './bloomlux-screenshot.png',
    link: 'https://alxor-elite.github.io/Bloomlux/',
    isPrivate: false,
  },
  {
    title: 'Iron Forge Gym Website',
    description:
      'A complete business website for a gym brand. Includes class schedules, pricing tables, trainer profiles, and a contact section. Fully responsive and deployed on Render.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    image: './ironforge-screenshot.png',
    link: 'https://iron-forge-gym.onrender.com/',
    isPrivate: false,
  },
  {
    title: 'IARE Chat App',
    description:
      'An AI-powered chat application built for institutional use at my college. Features a full React/Next.js frontend with real-time messaging UI and clean app architecture. Not publicly available.',
    tags: ['React', 'Next.js', 'AI', 'Institutional'],
    image: './iare-screenshot.png',
    link: null,
    isPrivate: true,
  },
];

export default function Projects() {
  const titleRef = useScrollReveal();
  const subtitleRef = useScrollReveal();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title scroll-reveal" ref={titleRef}>
          Featured Projects
        </h2>
        <p className="section-subtitle scroll-reveal" ref={subtitleRef}>
          Each one built from scratch. No templates. No shortcuts.
        </p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const scrollRef = useScrollReveal();
  const tiltRef = useRef(null);
  const isTouch = typeof window !== 'undefined' && matchMedia('(pointer: coarse)').matches;

  const handleMouseMove = (e) => {
    if (isTouch) return;
    const card = tiltRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 10;
    const rotateY = (x - 0.5) * 10;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (tiltRef.current) {
      tiltRef.current.style.transform =
        'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <div
      className="project-card-wrapper scroll-reveal"
      ref={scrollRef}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div
        className="project-card"
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="project-window-bar">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="project-image">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
          <div className="project-footer">
            {project.isPrivate ? (
              <span className="private-badge">&#128274; Private Project</span>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Site ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
