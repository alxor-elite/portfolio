import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const titleRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title scroll-reveal" ref={titleRef}>
          Let's Work Together
        </h2>
        <div className="contact-content scroll-reveal" ref={contentRef}>
          <p className="contact-text">
            Got a project in mind? I'd love to hear about it. Let's build
            something amazing together.
          </p>
          <div className="contact-buttons">
            <a href="mailto:alxorelite@gmail.com" className="btn btn-primary">
              Say Hello &#128075;
            </a>
            <a
              href="https://github.com/alxor-elite"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub ↗
            </a>
          </div>
          <p className="contact-note">
            Or reach out directly — I respond within a few hours.
          </p>
          <p className="contact-location">
            Based in India &#127470;&#127475; — Working with clients worldwide &#127757;
          </p>
        </div>
      </div>
    </section>
  );
}
