import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollRevealText.css';

gsap.registerPlugin(ScrollTrigger);

export const ScrollRevealText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Setup GSAP context for safe garbage collection and memory leak prevention
    const ctx = gsap.context(() => {
      if (!revealRef.current) return;

      // Animate the clip-path polygon of the Reveal Layer from 0% width (hidden left) to 100% width (fully revealed)
      gsap.to(revealRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1.2, // Smooth, weighted tracking physics linked directly to scroll
        },
      });
    }, containerRef);

    // Clean up animation context on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="scroll-reveal-container">
      <div className="text-wrapper">
        {/* Layer 1 (Base Layer): Deep black text (#000000) that remains completely static */}
        <div className="text-layer base-layer">
          <span>EXPERIENCE THE THRILL OF </span>
          <span className="highlight-phrase">RUSH ROYALE</span>
          <span> WITH EVEN </span>
          <span className="highlight-phrase">mooooore</span>
          <span> PVP BATTLES, HEROIC DECK STRATEGIES, AND TOWER DEFENSE ACTION.</span>
        </div>

        {/* Layer 2 (Reveal Layer): Absolute-positioned, identical text div sitting perfectly over Layer 1 */}
        <div ref={revealRef} className="text-layer reveal-layer" aria-hidden="true">
          <span>EXPERIENCE THE THRILL OF </span>
          <span className="highlight-phrase">RUSH ROYALE</span>
          <span> WITH EVEN </span>
          <span className="highlight-phrase">mooooore</span>
          <span> PVP BATTLES, HEROIC DECK STRATEGIES, AND TOWER DEFENSE ACTION.</span>
        </div>
      </div>
    </div>
  );
};
export default ScrollRevealText;
