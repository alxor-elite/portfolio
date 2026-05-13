import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WaveDivider from './components/WaveDivider';
import About from './components/About';
import Projects from './components/Projects';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <>
      <CustomCursor />
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WaveDivider variant="to-secondary" />
        <About />
        <WaveDivider variant="to-primary" />
        <Projects />
        <WaveDivider variant="to-secondary" />
        <WhyHireMe />
        <WaveDivider variant="to-primary" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
