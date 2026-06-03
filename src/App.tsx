import ScrollRevealText from './components/ScrollRevealText';
import './App.css';

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar" id="nav">
        <div className="logo-container">
          REVEAL<span className="logo-dot">.</span>
        </div>
        <div className="nav-links">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#showcase" className="nav-link">Showcase</a>
          <a href="#features" className="nav-link">Features</a>
          <button className="cta-button">Download App</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-glow-blob"></div>
        <div className="hero-badge">GSAP + React Performance Demo</div>
        <h1 className="hero-title">
          Scroll-Driven<br />
          Dual-Layer Text Mask
        </h1>
        <p className="hero-description">
          Experience ultra-smooth, hardware-accelerated typography masks that dynamically paint your screen on scroll. Powered by GSAP ScrollTrigger.
        </p>
        <a href="#showcase" className="scroll-indicator">
          <span>Scroll to reveal</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </a>
      </section>

      {/* Showcase Section (White background contrast) */}
      <section className="showcase-section" id="showcase">
        <ScrollRevealText />
      </section>

      {/* Features Grid */}
      <section className="features-section" id="features">
        <div className="features-header">
          <h2 className="features-title">Engineered for Performance</h2>
          <p className="features-subtitle">
            A deep-dive into the technical stack enabling screen-tearing-free scrubbing animations.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3>Hardware Accelerated</h3>
            <p>Uses CSS <code>will-change: clip-path</code> to isolate layers into independent compositor threads, ensuring 60fps+ transitions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3>Perfect Lifecycle Sync</h3>
            <p>Bound to React's lifecycle hook with GSAP Context, ensuring complete garbage collection and leak-free hot reloading.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12h20M12 2v20" />
              </svg>
            </div>
            <h3>Dynamic Masking</h3>
            <p>Utilizes dual matching overlays to allow completely different styles—including gradients, stroke widths, and SVG graphics—under a unified layout.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          REVEAL<span className="logo-dot">.</span>
        </div>
        <p>Premium Web Animation Engineering Specialist Task</p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} REVEAL. Built with GSAP & React. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
