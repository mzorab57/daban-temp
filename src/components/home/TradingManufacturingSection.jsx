import React, { useState, useCallback } from "react";
import {
  Gallery,
  GalleryMain,
  GalleryItem,
  useGallery,
} from "@wethegit/react-gallery";

const ITEMS = [
   {
    id: 3,
    src: "/product/em15.png",
    alt: "EM15 Quadrotor",
    title: "EM15",
    description: "A compact and mission-ready platform tailored for inspection, city operations and fast field response.",
  },
 
  {
    id: 2,
    src: "/product/EM135.jpg",
    alt: "EM135 Heavy-Payload",
    title: "EM135",
    description: "Purpose-built for heavy-duty transport and large-scale operations in harsh industrial environments.",
  },
   {
    id: 1,
    src: "/product/th600.jpg",
    alt: "TH600 Tandem Helicopter",
    title: "TH600",
    description: "Heavy-Lift Rotorcraft engineered for cargo, operations and demanding industrial missions where endurance and payload matter most.",
  },
 
];

const TOTAL = ITEMS.length;

const indexOfId = (id) => ITEMS.findIndex((item) => item.id === id);

function Slides({ thumbOrder }) {
  const { goToIndex } = useGallery();

  return (
    <GalleryMain
      className="tm-gallery-track"
      renderGalleryItem={({ item, index, active }) => {
        const offset = thumbOrder.indexOf(item.id) - (thumbOrder.length - 1) / 2;

        return (
          <GalleryItem
            key={item.id}
            index={index}
            active={active}
            className="tm-gallery-item"
            data-active={String(active)}
          >
            <div className="tm-gallery-slide" style={{ "--offset": offset }}>
              <img src={item.src} alt={item.alt} className="tm-gallery-image" />
              {!active && (
                <button
                  type="button"
                  className="tm-gallery-thumbButton"
                  tabIndex={-1}
                  onClick={() => goToIndex(index)}
                >
                  <span className="tm-gallery-visuallyHidden">Show {item.title}</span>
                </button>
              )}
            </div>
          </GalleryItem>
        );
      }}
    />
  );
}

function ActiveContent({ thumbOrder }) {
  const { activeIndex, goToIndex } = useGallery();
  const item = ITEMS[activeIndex];

  return (
    <div className="tm-gallery-rail">
      <div className="tm-gallery-content" key={item.id}>
        <p className="tm-gallery-kicker">
          {String(activeIndex + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </p>
        <h2 className="tm-gallery-title">{item.title}</h2>
        <p className="tm-gallery-description">{item.description}</p>
      </div>

      <div className="tm-gallery-controls">
        <button
          type="button"
          className="tm-gallery-navBtn"
          onClick={() => goToIndex(indexOfId(thumbOrder[thumbOrder.length - 1]))}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="tm-gallery-visuallyHidden">Previous</span>
        </button>
        <button
          type="button"
          className="tm-gallery-navBtn"
          onClick={() => goToIndex(indexOfId(thumbOrder[0]))}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className="tm-gallery-visuallyHidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default function TradingManufacturingSection() {
  const [thumbOrder, setThumbOrder] = useState(() =>
    ITEMS.slice(1).map((item) => item.id)
  );

  const handleChange = useCallback(({ oldIndex, newIndex }) => {
    setThumbOrder((order) => [
      ...order.filter((id) => id !== ITEMS[newIndex].id),
      ITEMS[oldIndex].id,
    ]);
  }, []);

  return (
    <section className="tm-section">
      <div className="tm-gallery-root">
        <Gallery
          items={ITEMS}
          draggable={false}
          className="tm-gallery-gallery"
          onChange={handleChange}
        >
          <Slides thumbOrder={thumbOrder} />
          <ActiveContent thumbOrder={thumbOrder} />
        </Gallery>
      </div>

      <style>{`
        .tm-section {
          position: relative;
          z-index: 8;
          width: 100%;
        
        }

        .tm-gallery-root {
          --thumb-scale: 0.11;
          --thumb-gap: 14px;
          --thumb-bottom: 28px;
          --zoom-duration: 0.8s;
          --zoom-ease: cubic-bezier(0.22, 1, 0.36, 1);

          background: #0b0b0f;
          color: #fff;
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
          position: relative;
        }

        @media (max-width: 640px) {
          .tm-gallery-root {
            --thumb-scale: 0.16;
            --thumb-gap: 10px;
            --thumb-bottom: 20px;
          }
        }

        .tm-gallery-gallery {
          height: 100%;
        }

        .tm-gallery-track {
          height: 100%;
          overflow: visible !important;
        }

        .tm-gallery-item {
          inset: 0 !important;
          margin: 0 !important;
          pointer-events: none !important;
          position: absolute !important;
          transform: none !important;
          width: auto !important;
        }

        .tm-gallery-item[data-active="true"] {
          z-index: 1 !important;
        }

        .tm-gallery-item[data-active="false"] {
          z-index: 10 !important;
        }

        .tm-gallery-slide {
          border-radius: 0;
          inset: 0;
          overflow: hidden;
          pointer-events: auto;
          position: absolute;
          transform: translate(0, 0) scale(1);
          transition:
            transform var(--zoom-duration) var(--zoom-ease),
            border-radius var(--zoom-duration) var(--zoom-ease),
            filter 0.25s ease;
          will-change: transform;
        }

        .tm-gallery-item[data-active="false"] .tm-gallery-slide {
          border-radius: 20px;
          filter: brightness(0.7);
          transform: translate(
              calc(var(--offset) * (var(--thumb-scale) * 100vw + var(--thumb-gap))),
              calc((50vh - var(--thumb-scale) * 50vh) - var(--thumb-bottom))
            )
            scale(var(--thumb-scale));
        }

        .tm-gallery-item[data-active="false"] .tm-gallery-slide:hover {
          filter: brightness(1);
        }

        .tm-gallery-image {
          display: block;
          height: 100%;
          object-fit: cover;
          width: 100%;
        }

        .tm-gallery-thumbButton {
          appearance: none;
          background: none;
          border: 0;
          cursor: pointer;
          inset: 0;
          padding: 0;
          position: absolute;
        }

        .tm-gallery-rail {
          align-items: flex-start;
          background: linear-gradient(90deg, rgba(0,0,0,0.6), transparent);
          display: flex;
          flex-direction: column;
          gap: 2rem;
          inset: 0 auto 0 0;
          justify-content: center;
          max-width: min(520px, 70%);
          padding: 0 3.5rem 0 3rem;
          pointer-events: none;
          position: absolute;
          z-index: 5;
        }

        @media (max-width: 640px) {
          .tm-gallery-rail {
            max-width: 90%;
            padding: 0 1.5rem;
          }
        }

        .tm-gallery-content {
          animation: content-in 0.6s var(--zoom-ease) calc(var(--zoom-duration) * 0.4) backwards;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @keyframes content-in {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
        }

        .tm-gallery-kicker {
          font-size: 0.8rem;
          margin: 0;
          opacity: 0.7;
        }

        .tm-gallery-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.05;
          margin: 0;
          color: #fff;
        }

        .tm-gallery-description {
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          line-height: 1.6;
          margin: 0;
        }

        .tm-gallery-controls {
          display: flex;
          gap: 0.75rem;
          pointer-events: auto;
        }

        .tm-gallery-navBtn {
          align-items: center;
          appearance: none;
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          display: flex;
          height: 3rem;
          justify-content: center;
          transition:
            background 0.2s,
            border-color 0.2s,
            opacity 0.2s;
          width: 3rem;
        }

        .tm-gallery-navBtn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .tm-gallery-navBtn:disabled {
          cursor: default;
          opacity: 0.35;
        }

        .tm-gallery-visuallyHidden {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }

        @media (prefers-reduced-motion: reduce) {
          .tm-gallery-slide {
            transition: none;
          }
          .tm-gallery-content {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}