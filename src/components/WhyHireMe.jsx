import { useScrollReveal } from '../hooks/useScrollReveal';

const reasons = [
  {
    icon: '\u26A1',
    title: 'Fast Delivery',
    description: 'Most projects delivered in 2\u20134 days. No endless waiting.',
  },
  {
    icon: '\uD83C\uDFA8',
    title: 'Premium Design',
    description: 'Every site looks like it cost 10x more than it did.',
  },
  {
    icon: '\uD83E\uDDF9',
    title: 'Clean Code',
    description: 'No messy templates. Everything is hand-crafted and maintainable.',
  },
  {
    icon: '\uD83D\uDD01',
    title: 'Free Revisions',
    description: "Not happy? I'll fix it. No questions asked.",
  },
];

export default function WhyHireMe() {
  const titleRef = useScrollReveal();

  return (
    <section id="why-hire-me" className="why-hire-me">
      <div className="container">
        <h2 className="section-title scroll-reveal" ref={titleRef}>
          Why Hire Me
        </h2>
        <div className="reasons-grid">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason, index }) {
  const cardRef = useScrollReveal();

  return (
    <div
      className="reason-card scroll-reveal"
      ref={cardRef}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <span className="reason-icon">{reason.icon}</span>
      <h3 className="reason-title">{reason.title}</h3>
      <p className="reason-description">{reason.description}</p>
    </div>
  );
}
