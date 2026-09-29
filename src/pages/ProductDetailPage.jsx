import { useEffect, useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { getProductById, productCatalog } from "../data/products";
import ProductOverview from "../components/products/ProductOverview";
import RelatedModels from "../components/products/RelatedModels";

gsap.registerPlugin(ScrollTrigger);

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const baseSectionRef = useRef(null);
  const techSectionRef = useRef(null);
  const techImageRef = useRef(null);

  useEffect(() => {
    if (!product) return;
    
    const ctx = gsap.context(() => {
      const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
      if (isAnimationOk) {
        gsap.from(".keyhole", {
          "clip-path": "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
          scrollTrigger: {
            trigger: ".k-primary",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            markers: false
          }
        });
        
        gsap.to(".k-arrow", {
          opacity: 0,
          scrollTrigger: {
            trigger: ".k-primary",
            start: "top top",
            end: "+=200",
            scrub: true
          }
        });

        if (techSectionRef.current && techImageRef.current) {
          const cards = gsap.utils.toArray(".product-tech-card");

          gsap.set(techImageRef.current, {
            opacity: 0,
            y: 30,
            scale: 0.95,
          });

          gsap.set(cards, {
            opacity: 0,
            y: 20,
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: techSectionRef.current,
              start: "top top",
              end: "+=250%",
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.to(techImageRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
          });

          tl.to(cards, {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: "none",
          });
        }
      }
    }, baseSectionRef);

    return () => ctx.revert();
  }, [product]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const specItems = product.specs.split("•").map((item) => item.trim());
  const relatedProducts = productCatalog.filter((item) => item.id !== product.id);
  const technicalSpecs = product.technicalSpecs ?? [];
  const leftTechnicalSpecs = technicalSpecs.slice(0, 3);
  const rightTechnicalSpecs = technicalSpecs.slice(3, 6);

  return (
    <div className="product-detail-page ">

      <main className="product-detail-main ">
        <section className="product-detail-hero ">
          <video
            key={product.video}
            className="product-detail-hero-video"
            src={product.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="product-detail-hero-overlay"></div>

          <div className="product-detail-hero-inner">
            <div className="product-detail-hero-copy">
              {/* <span className="product-detail-eyebrow">{product.heroEyebrow}</span> */}
              <h1 className="product-detail-title">{product.name}</h1>
              {/* <p className="product-detail-lead">{product.heroLead}</p> */}

              {/* <div className="product-detail-actions">
                <a href="#platform-base" className="product-detail-btn is-primary">
                  Explore Platform
                </a>
                <Link to="/products" className="product-detail-btn is-secondary">
                  All Products
                </Link>
              </div> */}
            </div>

            <div className="product-detail-stats">
              <span className="product-detail-stats-label">{product.brand}</span>
              <div className="product-detail-specs">
                {specItems.map((item) => (
                  <span key={item} className="product-detail-spec-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="product-base-section k-main " id="platform-base" ref={baseSectionRef}>
          <div className="keyhole-wrapper">
            <div className="keyhole" aria-hidden="true"></div>
            <span className="k-arrow" aria-hidden="true">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-5 -5 30 30">
                <path d="M 0 10 H 20 L 10 0 M 20 10 L 10 20" strokeWidth="4" strokeLinecap="square" strokeLinejoin="round"></path>
              </svg>
            </span>
          </div>

          <section className="k-section k-primary">
            <figure className="k-figure">
              <img src={product.detailImage} alt={product.name} className="" />
            </figure>
            <div className="k-content">
              <div className="product-base-shell k-card-style">
                <div className="product-base-head" style={{ marginBottom: 0 }}>
                  <div>
                    <span className="product-base-kicker">{product.shortName}</span>
                    <h2 className="product-base-title">{product.baseTitle}</h2>
                  </div>
                  <p className="product-base-copy">{product.baseCopy}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="k-section k-secondary">
            <div className="k-content">
              <div className="product-base-shell k-card-style">
                <div className="product-base-grid">
                  {product.pillars.map((pillar, index) => (
                    <article key={pillar.title} className="product-base-card">
                      <span className="product-base-index">{`0${index + 1}`}</span>
                      <h3 className="product-base-card-title">{pillar.title}</h3>
                      <p className="product-base-card-text">{pillar.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>



          {technicalSpecs.length > 0 && (
            <section ref={techSectionRef} className="k-section  product-tech-section">
              <div className="k-content">
                <div className="product-tech-shell">
                  <div className="product-tech-heading">
                    <h2 className="product-tech-title">Specifications</h2>
                  </div>

                  <div className="product-tech-stage">
                    <div className="product-tech-column is-left">
                      {leftTechnicalSpecs.map((item, index) => (
                        <article key={item.label} className="product-tech-card">
                          <span className="product-tech-index">{(index + 1).toString().padStart(2, '0')}</span>
                          <h3 className="product-tech-label">{item.label}</h3>
                          <p className="product-tech-value">{item.value}</p>
                        </article>
                      ))}
                    </div>

                    <div className="product-tech-center">
                      <div className="product-tech-image-frame">
                        <img
                          ref={techImageRef}
                          src={product.specificationImage || product.detailImage}
                          alt={`${product.name} technical illustration`}
                          className="product-tech-image"
                        />
                      </div>
                    </div>

                    <div className="product-tech-column is-right">
                      {rightTechnicalSpecs.map((item, index) => (
                        <article key={item.label} className="product-tech-card">
                          <span className="product-tech-index">{(index + leftTechnicalSpecs.length + 1).toString().padStart(2, '0')}</span>
                          <h3 className="product-tech-label">{item.label}</h3>
                          <p className="product-tech-value">{item.value}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </section>
        <ProductOverview description={product.description} />
        <RelatedModels relatedProducts={relatedProducts} />
      </main>

      <style>{`
        .product-detail-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #070d18 0%, #0b1221 36%, #ffffff 36%, #ffffff 100%);
        }

        .product-detail-main {
          display: flex;
          flex-direction: column;
        }

        .product-detail-hero {
          position: relative;
      
          overflow: hidden;
          min-height: 100vh;
          overflow: hidden;
          background: #050a12;
        }

        .product-detail-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-detail-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(7, 13, 24, 0.24) 0%, rgba(7, 13, 24, 0.68) 70%, rgba(7, 13, 24, 0.88) 100%),
            radial-gradient(circle at left center, rgba(7, 13, 24, 0.2), transparent 35%);
        }

        .product-detail-hero-inner {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          max-width: 1320px;
          margin: 0 auto;
          padding: 140px 24px 100px;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
          align-items: end;
          gap: 28px;
          color: #ffffff;
        }

        .product-detail-eyebrow {
          display: inline-flex;
          width: fit-content;
          margin-bottom: 16px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #8fc2d7;
        }

        .product-detail-title {
          margin: 0 0 18px;
          max-width: 10ch;
          font-size: clamp(3rem, 7vw, 6.4rem);
          line-height: 0.92;
          letter-spacing: -0.06em;
          font-weight: 800;
        }

        .product-detail-lead {
          margin: 0;
          max-width: 34rem;
          color: rgba(255, 255, 255, 0.76);
          font-size: 1.05rem;
          line-height: 1.85;
        }

        .product-detail-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .product-detail-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 176px;
          padding: 15px 18px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }

        .product-detail-btn:hover {
          transform: translateY(-2px);
        }

        .product-detail-btn.is-primary {
          background: #ffffff;
          color: #07101f;
        }

        .product-detail-btn.is-secondary {
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .product-detail-stats {
          justify-self: end;
          width: min(100%, 420px);
          padding: 24px;
          border-radius: 28px;
          background: rgba(9, 16, 30, 0.64);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
        }

        .product-detail-stats-label {
          display: inline-block;
          margin-bottom: 16px;
          color: #8fc2d7;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .product-detail-specs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .product-detail-spec-chip {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #f4f7fb;
          font-size: 13px;
          line-height: 1.35;
        }

        .product-base-section {
          position: relative;
          z-index: 3;
          background: #ffffff;
        }

        .keyhole-wrapper {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 10;
        }

        .keyhole {
          position: sticky;
        
          top: 0;
          width: 100%;
          height: 100vh;
          background: #214C9A;
          clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%);
        }

        .k-arrow {
          position: sticky;
          top: 72.5vh;
          left: 50%;
          z-index: 11;
          display: block;
          width: 20px;
          animation: float 1s ease-in-out infinite alternate both;
        }

        .k-arrow svg {
          transform: rotate(90deg);
          stroke: #ffffff;
          width: 2rem;
          margin-left: -1rem;
          height: auto;
        }

        @keyframes float {
          from { transform: translateY(-50%); }
          to { transform: translateY(50%); }
        }

        .k-section {
          position: relative;
        }

        .k-primary {
          min-height: 150vh;
        }

        .k-figure {
          position: sticky;
          top: 0;
          width: 100%;
          height: 100vh;
          margin: 0;
          overflow: hidden;
        }

        .k-figure img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 80% center; /* Shifts the focus more to the left where the drone is */
        }

        .k-content {
          position: relative;
          z-index: 5;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }

        .k-primary .k-content {
          margin-top: 15vh;
        }

        .product-base-shell {
          width: 100%;
          padding: 34px;
          border-radius: 36px;
          border: 1px solid rgba(17, 45, 107, 0.08);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.97) 0%, rgba(243, 247, 251, 0.98) 100%);
          box-shadow: 0 30px 90px rgba(10, 20, 44, 0.12);
        }

        .product-base-head {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 24px;
          align-items: end;
          margin-bottom: 28px;
        }

        .product-base-kicker {
          display: inline-flex;
          margin-bottom: 16px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(33, 76, 154, 0.08);
          color: #214c9a;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .product-base-title {
          margin: 0;
          color: #112d6b;
          font-size: clamp(2.2rem, 5vw, 4.2rem);
          line-height: 0.96;
          letter-spacing: -0.05em;
          font-weight: 800;
        }

        .product-base-copy {
          margin: 0;
          color: rgba(17, 45, 107, 0.72);
          font-size: 1rem;
          line-height: 1.9;
        }

        .product-base-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 22px;
        }

        .product-base-card,
        .product-story-card {
          padding: 24px;
          border-radius: 28px;
          border: 1px solid rgba(17, 45, 107, 0.08);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 244, 249, 0.98) 100%);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 22px 50px rgba(10, 20, 44, 0.08);
        }

        .product-base-index {
          display: inline-block;
          margin-bottom: 20px;
          color: #214c9a;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .product-base-card-title {
          margin: 0 0 12px;
          color: #112d6b;
          font-size: 1.4rem;
          font-weight: 800;
          line-height: 1.1;
        }

        .product-base-card-text,
        .product-story-text {
          margin: 0;
          color: rgba(17, 45, 107, 0.72);
          font-size: 0.98rem;
          line-height: 1.85;
        }

        .product-story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .product-tech-section {
          min-height: 100vh;
          padding: 0;
          box-sizing: border-box;
        }

        .product-tech-section .k-content {
          min-height: 100vh;
          max-width: 100%;
          padding: 0;
          display: flex;
          align-items: center;
        }

        .product-tech-shell {
          position: relative;
          width: 100%;
          min-height: 100vh;
          box-sizing: border-box;
          padding: 200px 64px 42px;
          border-radius: 0;
          background: #ffffff;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 35px 90px rgba(3, 10, 24, 0.08);
        }

        .product-tech-heading {
          position: relative;
          z-index: 1;
          margin-bottom: 34px;
          text-align: center;
        }

        .product-tech-title {
          margin: 0;
          color: #112D6B;
          font-size: clamp(2.9rem, 6vw, 5rem);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 800;
        }

        .product-tech-stage {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 600px) minmax(0, 1fr);
          gap: 26px;
          align-items: center;
        }

        .product-tech-column {
          display: grid;
          gap: 16px;
        }

        .product-tech-column.is-left {
          text-align: right;
        }

        .product-tech-card {
          padding: 22px 22px 24px;
          border-radius: 24px;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        @media (min-width: 992px) {
          /* Curve for 3 items (TH600) */
          .product-tech-column.is-left .product-tech-card:nth-child(2):nth-last-child(2) {
            transform: translateX(-3vw);
          }
          .product-tech-column.is-right .product-tech-card:nth-child(2):nth-last-child(2) {
            transform: translateX(3vw);
          }

          /* Curve for 5 items (EM15) */
          .product-tech-column.is-left .product-tech-card:nth-child(2):nth-last-child(4),
          .product-tech-column.is-left .product-tech-card:nth-child(4):nth-last-child(2) {
            transform: translateX(-2vw);
          }
          .product-tech-column.is-right .product-tech-card:nth-child(2):nth-last-child(4),
          .product-tech-column.is-right .product-tech-card:nth-child(4):nth-last-child(2) {
            transform: translateX(2vw);
          }
          
          .product-tech-column.is-left .product-tech-card:nth-child(3):nth-last-child(3) {
            transform: translateX(-4vw);
          }
          .product-tech-column.is-right .product-tech-card:nth-child(3):nth-last-child(3) {
            transform: translateX(4vw);
          }
        }

        .product-tech-index {
          display: inline-block;
          margin-bottom: 14px;
          color: #8fc2d7;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .product-tech-label {
          margin: 0 0 10px;
          color: #112D6B;
          font-size: 1.5rem;
          line-height: 1.1;
          font-weight: 800;
        }

        .product-tech-value {
          margin: 0;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          font-weight: 500;
        }

        .product-tech-center {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .product-tech-image-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-tech-image {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 600px;
          height: auto;
          object-fit: contain;
          will-change: opacity, transform;
          filter: drop-shadow(0 24px 60px rgba(0, 0, 0, 0.45));
        }

        .product-story-label {
          display: inline-block;
          margin-bottom: 14px;
          color: #214c9a;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .product-related-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }

        .product-related-link {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          border-radius: 20px;
          text-decoration: none;
          background: rgba(17, 45, 107, 0.03);
          border: 1px solid rgba(17, 45, 107, 0.06);
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .product-related-img-wrap {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          flex-shrink: 0;
        }

        .product-related-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .product-related-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .product-related-link:hover {
          transform: translateY(-4px);
          background: rgba(17, 45, 107, 0.05);
          border-color: rgba(17, 45, 107, 0.12);
        }

        .product-related-link span {
          color: #112d6b;
          font-size: 1rem;
          font-weight: 800;
        }

        .product-related-link small {
          color: rgba(17, 45, 107, 0.64);
          font-size: 0.84rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        @media (max-width: 991px) {
          .product-detail-hero-inner,
          .product-base-head,
          .product-story-grid {
            grid-template-columns: 1fr;
          }

          .product-detail-stats {
            justify-self: start;
          }

          .product-base-grid {
            grid-template-columns: 1fr;
          }

          .product-tech-stage {
            grid-template-columns: 1fr;
          }

          .product-tech-center {
            order: -1;
          }

          .product-tech-column {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .product-detail-hero-inner {
            padding: 120px 20px 96px;
          }

          .product-detail-title {
            font-size: clamp(2.7rem, 13vw, 4.4rem);
          }

          .product-base-section {
            padding: 0;
            margin-top: 0;
          }

          .product-base-shell {
            padding: 22px;
            border-radius: 28px;
          }

          .product-tech-section {
            min-height: 100vh;
            padding: 0;
          }

          .product-tech-section .k-content {
            min-height: 100vh;
            padding: 0;
          }

          .product-tech-shell {
            min-height: 100vh;
            padding: 100px 24px 32px;
            border-radius: 0;
          }

          .product-tech-kicker {
            font-size: 0.72rem;
            letter-spacing: 0.18em;
          }

          .product-tech-title {
            font-size: clamp(2.5rem, 13vw, 4rem);
          }

          .product-tech-card {
            padding: 18px 16px 20px;
            border-radius: 20px;
          }

          .product-tech-image-frame {
            max-width: 100%;
          }

          .product-tech-column.is-left {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
