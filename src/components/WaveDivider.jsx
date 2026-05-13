export default function WaveDivider({ variant = 'to-secondary' }) {
  return (
    <div className={`wave-divider ${variant}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,20 C320,55 640,0 960,25 C1120,38 1320,10 1440,20 L1440,60 L0,60 Z" />
      </svg>
    </div>
  );
}
