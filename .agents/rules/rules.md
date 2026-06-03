---
trigger: always_on
---

Act as a front-end engineering specialist. Implement a high-performance, scroll-driven dual-layer text mask animation matching the visual behavior in "Recording 2026-06-03 161526.mp4". 

Please execute this task using the following technical setup:
1. Framework: React with TypeScript.
2. Animation Libraries: GSAP (GreenSock) and GSAP ScrollTrigger.
3. Styling: Clean, scoped CSS or CSS Modules.

Please perform the following steps sequentially and generate verifiable Artifacts for each:

STEP 1: DEPENDENCY MANAGEMENT
- Check if 'gsap' is installed. If not, open the terminal and execute: npm install gsap

STEP 2: COMPONENT CREATION
- Create a reusable component named 'ScrollRevealText.tsx'.
- Inside this component, structure a dual-layer overlay system:
  * Layer 1 (Base Layer): A static HTML div containing standard bold black typography.
  * Layer 2 (Reveal Layer): An absolute-positioned, identical text div sitting perfectly over Layer 1. Apply a CSS 'clip-path' polygon initially set to 0% width (hidden to the left side: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)).
  * Inside Layer 2, wrap specific keywords (e.g., "RUSH ROYALE" and "mooooore") in separate span classes to handle custom colorful strokes, italics, or display custom inline SVG vector scribbles.

STEP 3: GSAP ENGINE LIFECYCLE
- Use a React 'useLayoutEffect' and a 'gsap.context()' instance to handle proper garbage collection and prevent animation memory leaks on route updates.
- Code a gsap.to() animation targeting the Reveal Layer's clipPath property.
- Transition it fluidly across the screen: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'.
- Bind the timeline to a ScrollTrigger config object using:
  * scrub: 1.2 (for heavy, fluid scroll smoothing)
  * start: "top 70%" (triggers when the element enters the lower third of the viewport)
  * end: "top 20%" (completes before passing the top edge)

STEP 4: TYPOGRAPHY AND LAYOUT CSS
- Create 'ScrollRevealText.css'.
- Set layout styles using a thick, high-impact sans-serif stack (system-ui or ultra-bold font parameters) with tight tracking (letter-spacing: -0.03em) and compressed leading (line-height: 1.05) to mimic the Apple-inspired minimalism of the reference video.
- Ensure 'will-change: clip-path;' is assigned to the masking layer to prompt hardware acceleration and avoid browser screen-tearing during trackpad scrubbing.

Review your implementation plan, run the component setup, and provide the completed files for verification.