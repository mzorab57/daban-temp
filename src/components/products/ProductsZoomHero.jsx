import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsZoomHero() {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
    
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: true,
          // markers: true // Disabled markers for production
        }
      })
      .to(imgRef.current, {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut"
      })
      .to(heroSectionRef.current, {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      }, "<");
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%', zIndex: 1 }}>
      <div style={{ position: 'relative', width: '100%', zIndex: 1, overflowX: 'hidden' }}>
        <section 
          ref={heroSectionRef} 
          style={{ 
            width: '100%', 
            height: '100dvh',
            backgroundImage: 'url("https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        ></section>
      </div>
      <div style={{
        width: '100%',
        height: '100dvh',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        perspective: '500px',
        overflow: 'hidden',
        pointerEvents: 'none' // Ensures this layer doesn't block scrolling/clicks if any exist
      }}>
        <img 
          ref={imgRef}
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp" 
          alt="hero cutout" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
      </div>
    </div>
  );
}
