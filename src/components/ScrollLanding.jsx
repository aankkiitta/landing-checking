import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollLanding.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollLanding() {
  const sectionRef = useRef(null);
  const portalRef = useRef(null);
  const imageRef = useRef(null);
  const floorRef = useRef(null);
  const captionRef = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Mobile check
      const isMobile = window.innerWidth <= 700;

      timeline
        // 1. Portal expand
        .to(portalRef.current, {
          width: isMobile ? "75vw" : "42vw",
          height: isMobile ? "55vh" : "58vh",
          borderRadius: "22vw 22vw 0 0",
          ease: "none",
        }, 0)
        .to(portalRef.current, {
          width: isMobile ? "90vw" : "68vw",
          height: isMobile ? "72vh" : "72vh",
          borderRadius: "34vw 34vw 0 0",
          ease: "none",
        }, 1)
        .to(portalRef.current, {
          width: isMobile ? "100vw" : "90vw",
          height: isMobile ? "88vh" : "86vh",
          borderRadius: isMobile ? "40vw 40vw 0 0" : "45vw 45vw 0 0",
          ease: "none",
        }, 2)
        .to(portalRef.current, {
          width: "100vw",
          height: "100vh",
          bottom: 0,
          borderRadius: "0px",
          borderWidth: 0,
          ease: "none",
        }, 3)
        // 2. Image zoom
        .to(imageRef.current, {
          scale: 1.12,
          ease: "none",
        }, 0)
        // 3. Caption scale
        .to(captionRef.current, {
          scale: isMobile ? 1.4 : 1.8,
          ease: "none",
        }, 0)
        // 4. Background layer ko portal ke saath sync karo
        .to(bgRef.current, {
          scale: 1.05,
          opacity: 0,
          ease: "none",
        }, 0)
        // 5. Floor fade
        .to(floorRef.current, {
          opacity: 0,
          ease: "none",
        }, 2);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <section className="scroll-hero" ref={sectionRef} id="home">
        <div className="scroll-bg" ref={bgRef} />

        <header className="site-header">
          <a className="brand" href="#home" aria-label="Terrova home">
            <span className="brand-mark">T</span>
            TERROVA
          </a>
          <nav aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#collections">Collections</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="menu-button" aria-label="Menu">
            <span />
            <span />
          </button>
        </header>

        <div className="intro-copy">
          <p>DESIGNED FOR LIVING</p>
          <h1>Spaces that feel like home.</h1>
          <span>Scroll to discover ↓</span>
        </div>

        <div className="portal-shadow" aria-hidden="true" />

        <div className="portal" ref={portalRef}>
          <div className="portal-image" ref={imageRef} />
          <div className="portal-caption" ref={captionRef}>
            <h2>Modern Furniture for<br />Minimalist Lovers</h2>
            <p>Experience the ultimate relaxation with our collection of serene and tranquil spa-inspired designs</p>
            <button className="explore-btn">
              Explore More <span>→</span>
            </button>
          </div>
        </div>

        <div className="foreground-floor" ref={floorRef} />
      </section>

      <section className="next-section" id="about">
        <p>THE TERROVA EXPERIENCE</p>
        <h2>Beauty in every detail.</h2>
        <p>
          Thoughtfully designed interiors, timeless materials, and spaces made
          for the way you live.
        </p>
      </section>

      <section className="content-section" id="products">
        <p>OUR PHILOSOPHY</p>
        <h2>Made to be lived in.</h2>
        <p>
          A considered balance of natural textures, warm tones, and enduring
          forms.
        </p>
      </section>

      <footer className="site-footer" id="contact">
        <a className="brand" href="#home">
          <span className="brand-mark">T</span> TERROVA
        </a>
        <span>Thoughtfully made spaces.</span>
      </footer>
    </main>
  );
}