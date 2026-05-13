import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const titleRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title scroll-reveal" ref={titleRef}>
          Let's Create Something Cool
        </h2>
        <div className="contact-content scroll-reveal" ref={contentRef}>
          <p className="contact-text">
            Got a project in mind? A wild idea? A brand that needs a glow-up?
            <br />
            I'm literally one message away. Let's make it happen.
          </p>
          <div className="contact-buttons">
            {/* Replace the email below with your actual email address */}
            <a href="mailto:your.email@example.com" className="btn btn-primary">
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
