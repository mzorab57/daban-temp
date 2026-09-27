import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  {
    name: 'SANY',
    index: '01',
    mark: 'SY',
    logo: '/brands/SANY-Group.webp',
  },
  {
    name: 'ZSDRONE',
    index: '02',
    mark: 'ZD',
    logo: '/brands/zsdrone.png',
  },
  {
    name: 'CHARLATTE',
    index: '03',
    mark: 'CH',
    logo: '/brands/charlatte.jpg',
  },
];

export default function BrandsShowcaseSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".brand-card");
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="brands-showcase-section">
      <div className="brands-showcase-shell">
        <div className="brands-showcase-content-wrapper">
          <div className="brands-showcase-head">
            <div className="brands-showcase-copy">
              <span className="brands-showcase-kicker">Brand portfolio</span>
              <h2 className="brands-showcase-title">Brands We Represent</h2>
              <p className="brands-showcase-text">
                A refined presentation of the core brands across our commercial and industrial
                portfolio, designed to feel premium and easy to scan.
              </p>
            </div>

            <div className="brands-showcase-badge">
              <span className="brands-badge-label">Selected partners</span>
              <strong>Trusted names across operations, supply and technology.</strong>
            </div>
          </div>

          <div className="brands-showcase-grid">
            {brands.map((brand) => (
              <article key={brand.name} className="brand-card">
                <div className="brand-card-inner" style={{ "--clr": "#0a1223" }}>
                  <div className="brand-box">
                    <div className="brand-content">
                      <h3>{brand.name}</h3>
                      <p>Featured Brand</p>
                    </div>
                    <div className="brand-imgBox">
                      <div className="brand-card-mark">{brand.mark}</div>
                    </div>
                    <div className="brand-icon">
                      <div className="brand-iconBox">
                        <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .brands-showcase-section {
          position: relative;
          z-index: 8;
        
        }

        .brands-showcase-shell {
          width: 100%; /* Full width */
          margin: 0;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(circle at top right, rgba(33, 76, 154, 0.16), transparent 24%),
            linear-gradient(180deg, #030304 0%, #10192e 25%, #0a1223 60%, #070d18 100%);
          box-shadow: 0 28px 90px rgba(10, 20, 44, 0.24);
          color: #f6f8fb;
          padding: 60px 0;
        }

        .brands-showcase-content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .brands-showcase-head {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
          gap: 24px;
          align-items: end;
          margin-bottom: 48px;
        }

        .brands-showcase-kicker {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: #8fc2d7;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .brands-showcase-title {
          margin: 0 0 14px;
          font-size: clamp(2.2rem, 5vw, 4.5rem);
          line-height: 0.96;
          letter-spacing: -0.05em;
          font-weight: 800;
          color: #ffffff;
        }

        .brands-showcase-text {
          margin: 0;
          max-width: 36rem;
          color: rgba(246, 248, 251, 0.72);
          font-size: 1rem;
          line-height: 1.8;
        }

        .brands-showcase-badge {
          padding: 24px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
          display: grid;
          gap: 10px;
        }

        .brands-badge-label {
          color: #8fc2d7;
          font-size: 11px;
          letter-spacing: 0.16em;
          font-weight: 700;
          text-transform: uppercase;
        }

        .brands-showcase-badge strong {
          font-size: 1.15rem;
          line-height: 1.6;
          font-weight: 700;
        }

        .brands-showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .brand-card {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: 28px;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .brand-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .brand-card-inner {
          position: relative;
          width: 100%;
          height: 20rem;
          background: var(--clr);
          border-radius: 1.25rem;
          border-bottom-right-radius: 0;
          overflow: hidden;
        }

        .brand-box {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
          border-radius: 1.25rem;
          overflow: hidden;
          position: relative;
          border: none;
        }

        .brand-imgBox {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-card-mark {
          font-size: clamp(4.8rem, 8vw, 7rem);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.06em;
          color: rgba(255, 255, 255, 0.04);
          pointer-events: none;
          user-select: none;
          transition: transform 0.4s ease, color 0.4s ease;
        }

        .brand-card:hover .brand-card-mark {
          transform: scale(1.1);
          color: rgba(255, 255, 255, 0.08);
        }

        .brand-icon {
          position: absolute;
          bottom: -0.375rem;
          right: -0.375rem;
          width: 6rem;
          height: 6rem;
          background: var(--clr);
          border-top-left-radius: 50%;
        }

        .brand-icon::before {
          position: absolute;
          content: "";
          bottom: 0.375rem;
          left: -1.25rem;
          background: transparent;
          width: 1.25rem;
          height: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          box-shadow: 0.313rem 0.313rem 0 0.313rem rgba(255,255,255,0.02);
        }

        .brand-icon::after {
          position: absolute;
          content: "";
          top: -1.25rem;
          right: 0.375rem;
          background: transparent;
          width: 1.25rem;
          height: 1.25rem;
          border-bottom-right-radius: 1.25rem;
          box-shadow: 0.313rem 0.313rem 0 0.313rem var(--clr);
        }

        .brand-iconBox {
          position: absolute;
          inset: 0.625rem;
          background: #ffffff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s;
          padding: 14px;
        }

        .brand-icon:hover .brand-iconBox {
          transform: scale(1.1);
        }

        .brand-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .brand-content {
          position: relative;
          z-index: 2;
          padding: 2rem 1.5rem;
          pointer-events: none;
        }

        .brand-content h3 {
          text-transform: capitalize;
          font-size: clamp(1.8rem, 1.3909rem + 0.4364vw, 2.2rem);
          margin: 0 0 0.5rem;
          color: #ffffff;
          font-weight: 800;
        }

        .brand-content p {
          margin: 0;
          color: rgba(246, 248, 251, 0.6);
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        @media (max-width: 991px) {
          .brands-showcase-section {
            padding: 0 0 92px 0;
          }

          .brands-showcase-head {
            grid-template-columns: 1fr;
          }

          .brands-showcase-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .brands-showcase-shell {
            padding: 40px 0;
          }
          
          .brands-showcase-content-wrapper {
            padding: 0 20px;
          }

          .brand-card {
            min-height: 240px;
          }

          .brand-card-mark {
            font-size: 4.6rem;
            bottom: 52px;
          }

          .brand-card-body {
            margin-top: 60px;
          }
        }
      `}</style>
    </section>
  );
}
