import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './ProductsHero.css';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 240;
const FRAME_EXT = ".jpg";

function framePath(n) {
  return `/frames/frame_${String(n).padStart(3, "0")}${FRAME_EXT}`;
}

export default function ProductsHero() {
  const canvasRef = useRef(null);
  const heroTextRef = useRef(null);
  const scrubBarRef = useRef(null);
  const scrollIndRef = useRef(null);
  const gradRef = useRef(null);
  const stickyFrameRef = useRef(null);
  
  const frames = useRef(new Array(FRAME_COUNT));
  const currentFrameIdx = useRef(0);
  const framesLoaded = useRef(0);
  const canvasReady = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let lastWidth = 0;
    let lastHeight = 0;

    function resizeCanvas() {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      
      // On mobile, hide/show of the address bar triggers resize.
      // Ignoring height-only changes prevents clearing the canvas and breaking scroll.
      if (lastWidth === currentWidth && Math.abs(lastHeight - currentHeight) < 150 && canvas.width !== 0) {
        return;
      }
      
      lastWidth = currentWidth;
      lastHeight = currentHeight;

      canvas.width = currentWidth;
      canvas.height = currentHeight;
      if (canvasReady.current && frames.current[currentFrameIdx.current]) {
        drawFrame(currentFrameIdx.current);
      }
    }

    function drawFrame(idx) {
      const img = frames.current[idx];
      if (!img || !img.complete) return;

      const cw = canvas.width, ch = canvas.height;
      const iw = img.naturalWidth, ih = img.naturalHeight;
      if (!iw || !ih) return;

      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale, dh = ih * scale;
      const dx = (cw - dw) / 2, dy = (ch - dh) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Pass 1 loader (simplified to not block page heavily)
    const PASS1_STEP = 6;
    let pass1Done = 0;
    const pass1Count = Math.ceil(FRAME_COUNT / PASS1_STEP);

    function loadPass1() {
      for (let i = 1; i <= FRAME_COUNT; i += PASS1_STEP) {
        const idx = i - 1;
        const img = new Image();
        img.onload = () => {
          frames.current[idx] = img;
          pass1Done++;
          framesLoaded.current++;
          
          if (idx === 0 && !canvasReady.current) {
            canvasReady.current = true;
            drawFrame(0);
            startHeroEntrance();
          }

          if (pass1Done >= pass1Count) {
             loadRemainingFrames();
          }
        };
        img.onerror = () => {
          pass1Done++;
          framesLoaded.current++;
        };
        img.src = framePath(i);
      }
    }

    function loadRemainingFrames() {
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const idx = i - 1;
        if (frames.current[idx]) continue;
        const img = new Image();
        img.onload = () => {
          frames.current[idx] = img;
          framesLoaded.current++;
        };
        img.src = framePath(i);
      }
    }

    // Force entrance if it fails to load quick
    const fallbackTimer = setTimeout(() => {
      if (!canvasReady.current) {
        canvasReady.current = true;
        startHeroEntrance();
      }
    }, 3000);

    loadPass1();

    function startHeroEntrance() {
      gsap.fromTo(".h-eyebrow", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: "power3.out" });
      gsap.fromTo(".h-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.1, delay: 0.3, ease: "power3.out" });
      gsap.fromTo(".h-sub", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, delay: 0.6, ease: "power3.out" });
      gsap.fromTo(".h-cta-row", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.85, ease: "power3.out" });
      
      if (scrollIndRef.current) {
          gsap.fromTo(scrollIndRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1.2, ease: "power2.out" });
      }
      gsap.fromTo(".side-label", { opacity: 0, x: 12 }, { opacity: 1, x: 0, duration: 0.8, delay: 1, ease: "power2.out" });
      
      setTimeout(initScrollTrigger, 500);
    }

    let scrollTriggerInstance;

    function initScrollTrigger() {
      let targetFrame = 0;
      let displayFrame = 0;
      let rafRunning = false;

      function renderLoop() {
        if (!rafRunning) return;
        const diff = targetFrame - displayFrame;
        if (Math.abs(diff) > 0.5) {
          displayFrame += diff * 0.18;
        } else {
          displayFrame = targetFrame;
        }
        const idx = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(displayFrame)));
        if (idx !== currentFrameIdx.current) {
          currentFrameIdx.current = idx;
          const drawn = findNearestFrame(idx);
          if (drawn !== null) drawFrame(drawn);
        }
        rafId.current = requestAnimationFrame(renderLoop);
      }

      function findNearestFrame(idx) {
        if (frames.current[idx]) return idx;
        for (let offset = 1; offset < 10; offset++) {
          if (idx - offset >= 0 && frames.current[idx - offset]) return idx - offset;
          if (idx + offset < FRAME_COUNT && frames.current[idx + offset]) return idx + offset;
        }
        return null;
      }

      scrollTriggerInstance = ScrollTrigger.create({
        trigger: "#hero-scroll",
        start: "top top",
        end: "bottom bottom",
        onEnter() {
          rafRunning = true;
          renderLoop();
        },
        onLeave() {
          rafRunning = false;
        },
        onEnterBack() {
          rafRunning = true;
          renderLoop();
        },
        onUpdate(self) {
          const p = self.progress;
          targetFrame = p * (FRAME_COUNT - 1);
          
          if (scrubBarRef.current) scrubBarRef.current.style.width = p * 100 + "%";

          const textP = Math.max(0, Math.min(1, (p - 0.08) / 0.32));
          if (heroTextRef.current) {
            heroTextRef.current.style.opacity = 1 - textP;
            heroTextRef.current.style.transform = `translateY(${textP * -80}px)`;
          }

          if (scrollIndRef.current) {
            scrollIndRef.current.style.opacity = Math.max(0, 1 - p * 14);
          }

          if (gradRef.current) {
            gradRef.current.style.opacity = Math.min(1, 0.85 + p * 0.15);
          }

          if (stickyFrameRef.current) {
            // Start the transition in the last 15% of the scroll to create a beautiful peeling effect
            const endProgress = Math.max(0, Math.min(1, (p - 0.85) / 0.15));
            const eased = gsap.parseEase("power3.inOut")(endProgress);
            
            const radius = Math.round(eased * 80);
            const scale = 1 - (eased * 0.08); // scale down to 0.92
            
            stickyFrameRef.current.style.borderRadius = `${radius}px`;
            stickyFrameRef.current.style.transform = `scale(${scale})`;
            stickyFrameRef.current.style.willChange = "transform, border-radius";
          }
        }
      });
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(fallbackTimer);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
    };
  }, []);

  return (
    <div className="products-hero-wrapper tw-bg-white">
      <section id="hero-scroll">
        <div ref={stickyFrameRef} id="hero-sticky">
          <canvas ref={canvasRef} id="hv" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}></canvas>
          <div ref={gradRef} id="hv-grad"></div>
          <div ref={heroTextRef} id="hero-text">
            {/* <p className="h-eyebrow">Daban Holding · Solutions</p> */}
            <h1 className="">
              <span className="outline tw-text-white">Next-Gen</span><br />
              <span className=" tw-text-primary-blue">Drones</span> &<br />
              <span className="outline tw-text-white">Defense</span>
            </h1>
            {/* <p className="h-sub">Explore our comprehensive portfolio of aerial and safety technologies.</p> */}
            {/* <div className="h-cta-row">
              <a className="btn-fill" href="#products">View Products</a>
              <a className="btn-ghost" href="#contact">Contact Us</a>
            </div> */}
          </div>
          <div ref={scrollIndRef} className="scroll-ind" id="sind">
            <div className="scroll-dot"></div>
            <span>Scroll to explore</span>
          </div>
          <div className="side-label">Daban Holding · Global Reach</div>
          <div id="scrub-progress">
            <div ref={scrubBarRef} id="scrub-bar"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
