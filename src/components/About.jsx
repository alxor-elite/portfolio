import { useScrollReveal } from '../hooks/useScrollReveal';

const techStack = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js',
  'Three.js', 'Framer Motion', 'Tailwind CSS', 'Git',
  'Vercel', 'Render', 'Claude Code',
];

export default function About() {
  const titleRef = useScrollReveal();
  const bioRef = useScrollReveal();
  const techRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title scroll-reveal" ref={titleRef}>
          Building the future, one pixel at a time.
        </h2>
        <div className="about-grid">
          <div className="about-bio scroll-reveal" ref={bioRef}>
            <p>
              I'm Mohammad Afnaan — a 19-year-old CS student from Hyderabad, India,
              who believes you don't need a degree to build great things. While most of
              my classmates are still learning to code in theory, I've already shipped 4
              real-world websites — from 3D product showcases to AI-powered apps.
            </p>    
            <p>
              I specialize in building modern, animated websites that look like they cost
              10x more than they do. Fast delivery, clean code, and pixel-perfect design
              — that's my promise to every client.
            </p>
          </div>
          <div className="about-tech scroll-reveal" ref={techRef}>
            <h3>Tech Stack</h3>
            <div className="tech-badges">
              {techStack.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="about-card scroll-reveal" ref={cardRef}>
          <div className="about-card-item">
            <span className="about-card-icon">&#127891;</span>
            <span>B.Tech Computer Science — 1st Year</span>
          </div>
          <div className="about-card-item">
            <span className="about-card-icon">&#127758;</span>
            <span>Hyderabad, India</span>
          </div>
          <div className="about-card-item">
            <span className="about-card-icon">&#128188;</span>
            <span>Open to Freelance Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
