import React, { useEffect, useRef, useState } from 'react';

const defaultLayers = [
  {
    src: 'https://cdn.21st.dev/assets/mirror/bf/bfb8ca258f591d2b7388d05d79ac2332b695867281627c1bc8c7165ca6429a6d.png',
    alt: 'background',
    speedX: 0.03,
    speedY: 0.038,
    speedZ: 0,
    rotation: 0,
    distance: -200,
    zIndex: 1,
    initialTop: 'calc(50% - 50px)',
    initialLeft: 'calc(50% + 0px)',
    width: '3200px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/c8/c878e14d1f8e481f6f70b31fb01de352338db5353f5b8852a241062bb251b558.png',
    alt: 'fog-7',
    speedX: 0.27,
    speedY: 0.32,
    speedZ: 0,
    rotation: 0,
    distance: 850,
    zIndex: 2,
    initialTop: 'calc(50% - 100px)',
    initialLeft: 'calc(50% + 300px)',
    width: '1900px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/e9/e94a2247aa54feee12cd1580a7c3abf97d6f55bbe7e50006d8dda6e4dffbe921.png',
    alt: 'mountain-10',
    speedX: 0.095,
    speedY: 0.005,
    speedZ: 0,
    rotation: 0,
    distance: 1110,
    zIndex: 3,
    initialTop: 'calc(50% + 169px)',
    initialLeft: 'calc(50% + 330px)',
    width: '1200px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/99/9955626de3f10d97d27b7b89f7be180c02e1700f288db28e0c6824142871523f.png',
    alt: 'fog-6',
    speedX: 0.25,
    speedY: 0.28,
    speedZ: 0,
    rotation: 0,
    distance: 1400,
    zIndex: 4,
    initialTop: 'calc(50% + 285px)',
    initialLeft: 'calc(50%)',
    width: '2200px',
    className: 'tw-opacity-30',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/dd/dd999609be149c46fcb65fce4d267cad8d5651b0c31901b399054da5146cb46e.png',
    alt: 'mountain-9',
    speedX: 0.125,
    speedY: 0.155,
    speedZ: 0.15,
    rotation: 0.02,
    distance: 1700,
    zIndex: 51,
    initialTop: 'calc(50% + 313px)',
    initialLeft: 'calc(50% - 557px)',
    width: '670px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/d5/d579e64ddeb3a32d04dff5391980b827eb4d6d4aafa2cc3231e2cbe02d66a7c7.png',
    alt: 'fog-5',
    speedX: 0.16,
    speedY: 0.105,
    speedZ: 0,
    rotation: 0,
    distance: 1900,
    zIndex: 7,
    initialTop: 'calc(50% + 360px)',
    initialLeft: 'calc(50% + 40px)',
    width: '650px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/b7/b74be54427fd5b9568571ba97684bc8a4334d366a3f3b32c353d31fd1501c09b.png',
    alt: 'mountain-7',
    speedX: 0.1,
    speedY: 0.1,
    speedZ: 0,
    rotation: 0.09,
    distance: 2000,
    zIndex: 19,
    initialTop: 'calc(50% + 223px)',
    initialLeft: 'calc(50% + 495px)',
    width: '738px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/ed/edf306a4225b6188283aa94ecec1553b2e0855038a3acaed402001f38c64af1d.png',
    alt: 'mountain-6',
    speedX: 0.065,
    speedY: 0.05,
    speedZ: 0.05,
    rotation: 0.12,
    distance: 2300,
    zIndex: 18,
    initialTop: 'calc(50% + 120px)',
    initialLeft: 'calc(50% + 590px)',
    width: '408px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/8d/8d12582b7eac71f981eca3a8bb19157fb57fc4b05c14f9ef80fd029e5fecfab5.png',
    alt: 'fog-4',
    speedX: 0.135,
    speedY: 0.1,
    speedZ: 0,
    rotation: 0,
    distance: 2400,
    zIndex: 11,
    initialTop: 'calc(50% + 223px)',
    initialLeft: 'calc(50% + 460px)',
    width: '590px',
    className: 'tw-opacity-50',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/9c/9c1a1b7f4b165011788c27d440d920e407d70f148cbc9a01eacfecb49126efcb.png',
    alt: 'mountain-5',
    speedX: 0.08,
    speedY: 0.05,
    speedZ: 0.13,
    rotation: 0.1,
    distance: 2550,
    zIndex: 12,
    initialTop: 'calc(50% + 320px)',
    initialLeft: 'calc(50% + 230px)',
    width: '725px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/0e/0e7888cc6d1732222b5c1f38b925cf1ecdb7fec02fd1193dd1cfef280a453c5a.png',
    alt: 'fog-3',
    speedX: 0.11,
    speedY: 0.018,
    speedZ: 0,
    rotation: 0,
    distance: 2800,
    zIndex: 113,
    initialTop: 'calc(50% + 210px)',
    initialLeft: 'calc(50% + 5px)',
    width: '1600px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/fa/fa0946f924ad025b207616cfe20ce022bcccd22ac9db4038a584ace23b7d9721.png',
    alt: 'mountain-4',
    speedX: 0.059,
    speedY: 0.024,
    speedZ: 0.35,
    rotation: 0.14,
    distance: 3200,
    zIndex: 15,
    initialTop: 'calc(50% + 196px)',
    initialLeft: 'calc(50% - 698px)',
    width: '1100px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/90/90863919566208c1eb7a78136d1dd493dd402f4d5a5efe2fc890a288a6b07449.png',
    alt: 'mountain-3',
    speedX: 0.04,
    speedY: 0.018,
    speedZ: 0.32,
    rotation: 0.05,
    distance: 3400,
    zIndex: 20,
    initialTop: 'calc(50% - 20px)',
    initialLeft: 'calc(50% + 750px)',
    width: '630px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/b2/b2d0ba5c7f17d038a04475b8f36563aea22cfee00983db3b5477f1ac4c9a5097.png',
    alt: 'fog-2',
    speedX: 0.15,
    speedY: 0.0115,
    speedZ: 0,
    rotation: 0,
    distance: 3600,
    zIndex: 16,
    initialTop: 'calc(50% - 20px)',
    initialLeft: 'calc(50% + 698px)',
    width: '1100px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/c4/c4ae700b3a0070eae9f3c005a17572ae68fcb8373d322f279d28c5bf19cd501d.png',
    alt: 'mountain-2',
    speedX: 0.0235,
    speedY: 0.013,
    speedZ: 0.42,
    rotation: 0.15,
    distance: 3800,
    zIndex: 17,
    initialTop: 'calc(50% + 256px)',
    initialLeft: 'calc(50% + 528px)',
    width: '800px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/41/414097ad4507410ac1dc884afcc92bb3f4f45763fd17b2986bf82dd43c31da97.png',
    alt: 'mountain-1',
    speedX: 0.027,
    speedY: 0.018,
    speedZ: 0.53,
    rotation: 0.2,
    distance: 4000,
    zIndex: 18,
    initialTop: 'calc(50% + 196px)',
    initialLeft: 'calc(50% - 728px)',
    width: '1100px',
  },
  {
    src: 'https://cdn.21st.dev/assets/mirror/aa/aa8ace86d9779fcccce3a1a28b8ac0cb86336b5980706659f2c8889c3daaf5a1.png',
    alt: 'fog-1',
    speedX: 0.12,
    speedY: 0.01,
    speedZ: 0,
    rotation: 0,
    distance: 4200,
    zIndex: 21,
    initialTop: 'calc(100% - 355px)',
    initialLeft: 'calc(50% + 100px)',
    width: '1900px',
    className: 'tw-opacity-50',
  },
];

const ParallaxHero = ({
  layers = defaultLayers,
  title = 'DABAN',
  className = '',
}) => {
  const containerRef = useRef(null);
  const layerRefs = useRef([]);
  const textRef = useRef(null);
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [rotateDegree, setRotateDegree] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newXValue = e.clientX - window.innerWidth / 2;
      const newYValue = e.clientY - window.innerHeight / 2;
      const newRotateDegree = (newXValue / (window.innerWidth / 2)) * 20;

      setXValue(newXValue);
      setYValue(newYValue);
      setRotateDegree(newRotateDegree);

      updateLayers(e.clientX, newXValue, newYValue, newRotateDegree);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const updateLayers = (cursorPosition, xVal, yVal, rotateDeg) => {
    layerRefs.current.forEach((el, index) => {
      if (!el) return;

      const layer = layers[index];
      const { speedX, speedY, speedZ, rotation } = layer;

      const computedLeft = parseFloat(getComputedStyle(el).left.replace('px', ''));
      const isInLeft = computedLeft < window.innerWidth / 2 ? 1 : -1;
      const zValue = (cursorPosition - computedLeft) * isInLeft * 0.1;

      el.style.transform = `perspective(2300px) translateZ(${zValue * speedZ}px) rotateY(${rotateDeg * rotation}deg) translateX(calc(-50% + ${-xVal * speedX}px)) translateY(calc(-50% + ${yVal * speedY}px))`;
    });

    if (textRef.current) {
      const textSpeedX = 0.07;
      const textSpeedY = 0.05;
      const textSpeedZ = 0.08;
      const textRotation = 0.04;

      const computedLeft = parseFloat(getComputedStyle(textRef.current).left.replace('px', ''));
      const isInLeft = computedLeft < window.innerWidth / 2 ? 1 : -1;
      const zValue = (cursorPosition - computedLeft) * isInLeft * 0.1;

      textRef.current.style.transform = `perspective(2300px) translateZ(${zValue * textSpeedZ}px) rotateY(${rotateDeg * textRotation}deg) translateX(calc(-50% + ${-xVal * textSpeedX}px)) translateY(calc(-50% + ${yVal * textSpeedY}px))`;
    }
  };

  return (
    <main
      ref={containerRef}
      className={`tw-relative tw-h-screen tw-w-screen tw-overflow-hidden tw-bg-gradient-to-b tw-from-[#09101c] tw-to-[#040810] ${className}`}
    >
      <div className="tw-absolute tw-inset-0 tw-z-[100] tw-pointer-events-none tw-bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_65%,rgba(0,0,0,0.7))]" />

      {layers.map((layer, index) => (
        <img
          key={index}
          ref={(el) => {
            if (el) layerRefs.current[index] = el;
          }}
          src={layer.src}
          alt={layer.alt}
          className={`tw-absolute tw-pointer-events-none tw-transition-transform tw-duration-[450ms] tw-ease-out ${layer.className || ''}`}
          style={{
            width: layer.width,
            top: layer.initialTop,
            left: layer.initialLeft,
            zIndex: layer.zIndex,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      <div
        ref={textRef}
        className="tw-absolute tw-z-[9] tw-text-white tw-text-center tw-pointer-events-auto tw-transition-transform tw-duration-[450ms] tw-ease-out"
        style={{
          top: 'calc(50% - 160px)',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="tw-flex tw-flex-col tw-items-center">
          <h1 className="tw-font-black tw-text-[18rem] tw-leading-[0.85] max-lg:tw-text-[14rem] max-md:tw-text-[6.5rem] max-sm:tw-text-[4.8rem] tw-m-0">
            {title}
          </h1>
          <h2 className="tw-font-black tw-text-[9rem] tw-leading-[0.85] max-lg:tw-text-[9rem] max-md:tw-text-[4.5rem] max-sm:tw-text-[3rem]  tw-m-2 tw-tracking-wide">
            HOLDING
          </h2>
        </div>
      </div>
    </main>
  );
};

import ScrollChoreography from "../components/ui/ScrollChoreography";
import EquipmentMarquee from "../components/ui/EquipmentMarquee";

const brandsImages = {
  topLeft: "/brands/SANY-Group.webp",
  topRight: "/brands/ddron.webp",
  bottomLeft: "/brands/zsdrone.png",
  bottomRight: "/brands/charlatte.jpg",
};

export default function AboutPage() {
  return (
    <div className="about-page tw-bg-[#f6f8fb] tw-min-h-screen">
      <ParallaxHero />
      <AboutContentAnimation />
      <div className="tw-w-full">
        <ScrollChoreography images={brandsImages} />
      </div>
      <EquipmentMarquee />
    </div>
  );
}

const BALL_SIZE = 380;

function HeroSection() {
  const trackRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [viewH, setViewH] = useState(600);
  const [viewW, setViewW] = useState(800);

  useEffect(() => {
    const measure = () => {
      setViewH(window.innerHeight);
      setViewW(window.innerWidth);
    };
    measure();
    window.addEventListener("resize", measure);

    const onScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const scrolledInTrack = Math.max(0, -rect.top);
      setScrollY(scrolledInTrack);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const clamp = (v) => Math.min(1, Math.max(0, v));
  const p1 = clamp(scrollY / viewH);
  const p2 = clamp((scrollY - viewH) / viewH);

  const p1e = p1 < 0.5 ? 8 * Math.pow(p1, 4) : 1 - Math.pow(-2 * p1 + 2, 4) / 2;
  const p2e = p2 * p2;

  const yOff = (1 - p1e) * (viewH / 2 + BALL_SIZE / 2);
  const coverSize = Math.max(viewW, viewH) * 2.8;
  const ballSize = BALL_SIZE + p2e * (coverSize - BALL_SIZE);
  const clipX = viewW / 2;
  const clipY = viewH / 2 + yOff;
  const clipR = ballSize / 2;

  return (
    <div ref={trackRef} className="icsa-track">
      <section className="icsa-hero">
        <div
          className="icsa-ball"
          style={{
            width: ballSize,
            height: ballSize,
            transform: `translate(-50%, calc(-50% + ${yOff}px))`,
          }}
        />

        <div className="icsa-layer icsa-dark">
          <h1>Building Kurdistan</h1>
          <p>Since 1999</p>
        </div>

        <div
          className="icsa-layer icsa-light"
          style={{ clipPath: `circle(${clipR}px at ${clipX}px ${clipY}px)` }}
        >
          <h1>Building Kurdistan</h1>
          <p>Since 1999</p>
        </div>
      </section>
    </div>
  );
}

function ContentSection() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setOn(true);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={`icsa-cs${on ? " on" : ""}`}>
      <div className="icsa-inner">
        <span className="icsa-label">About Daban Company</span>
        <h2>Building Kurdistan since 1999</h2>
        <div className="icsa-text-content">
          <p>
            Daban Group is a general trading and constructing group of firms founded by Mr. Sarhad J. Arif. Registered under the Kurdistan Region General Trade Directorate (No. 253) with a capital of 150,000,000 IQD.
          </p>
          <p>
            Daban Group has earned its reputation due to precision, accuracy, and commitment to contracts. It has proven seriousness in cooperation and performance in contractual obligations — both inside and outside Kurdistan Iraq.
          </p>
          <p>
            The group has partnered with foreign companies and organisations while working in close cooperation with local firms in supplying building materials.
          </p>
          <p>
            Daban Group has offices in Erbil (HQ) and branches in Sulaimanyah, Duhok and Baghdad — running more than 500 employees and a fleet of modern machinery.
          </p>
        </div>
      </div>
    </section>
  );
}

function Styles() {
  return (
    <style>{`
      .about-content-wrap {
        width: 100%;
        background: #f6f8fb;
        position: relative;
        z-index: 10;
      }
      .icsa-track {
        height: 300vh;
        position: relative;
      }
      .icsa-hero {
        position: sticky;
        top: 0;
        height: 100vh;
        overflow: hidden;
      }
      .icsa-ball {
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        background: #112D6B; /* deep-blue */
        will-change: transform, width, height;
      }
      .icsa-layer {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 2rem;
        pointer-events: none;
      }
      .icsa-dark {
        color: #112D6B;
        z-index: 2;
      }
      .icsa-light {
        color: #fff;
        z-index: 3;
        will-change: clip-path;
      }
      .icsa-layer h1 {
        font-size: clamp(2.5rem, 7vw, 6rem);
        font-weight: 900;
        letter-spacing: -0.03em;
        line-height: 1.05;
      }
      .icsa-layer p {
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        font-weight: 600;
        margin-top: 1.25rem;
        opacity: .8;
      }
      .icsa-cs {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6rem 2rem;
        background: #112D6B;
        color: #fff;
        transition: background 2.4s cubic-bezier(.25,0,.1,1), color 2.4s cubic-bezier(.25,0,.1,1);
      }
      .icsa-cs.on {
        background: #f6f8fb;
        color: #0A142C;
      }
      .icsa-inner {
        max-width: 1100px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.75rem;
      }
      .icsa-inner > * {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity .7s ease, transform .7s ease;
      }
      .icsa-cs.on .icsa-inner > * {
        opacity: 1;
        transform: translateY(0);
      }
      .icsa-cs.on .icsa-label { transition-delay: .10s; }
      .icsa-cs.on h2 { transition-delay: .24s; }
      .icsa-cs.on .icsa-text-content { transition-delay: .38s; }
      
      .icsa-label {
        font-size: .75rem;
        font-weight: 600;
        letter-spacing: .18em;
        text-transform: uppercase;
        opacity: .6;
      }
      .icsa-inner h2 {
        font-size: clamp(3rem, 6.5vw, 5rem);
        font-weight: 900;
        letter-spacing: -.03em;
        line-height: 1.1;
        color: #fff;
        transition: color 2.4s cubic-bezier(.25,0,.1,1);
      }
      .icsa-cs.on .icsa-inner h2 {
        color: #112D6B;
      }
      .icsa-text-content {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .icsa-inner p {
        font-size: clamp(1rem, 2vw, 1.25rem);
        line-height: 1.75;
        opacity: .8;
        max-width: 950px;
        font-weight: 500;
        margin: 0 auto;
      }
    `}</style>
  );
}

export function AboutContentAnimation() {
  return (
    <div className="about-content-wrap">
      <Styles />
      <HeroSection />
      <ContentSection />
    </div>
  );
}
