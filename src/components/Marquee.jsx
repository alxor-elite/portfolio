const items = [
  'FRONTEND DEVELOPER',
  'WEB DESIGNER',
  '3D WEB BUILDER',
  'FREELANCER',
  'PIXEL PERFECTIONIST',
  'CLEAN CODE',
  'DARK MODE ENTHUSIAST',
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-text">{item}</span>
            <span className="marquee-star">{'\u2726'}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
