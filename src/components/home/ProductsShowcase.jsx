import { Link } from "react-router-dom";
import { productCatalog as products } from "../../data/products";

export default function ProductsShowcase() {
  return (
    <section className="uav-showcase" id="products">
      <div className="grid-overlay"></div>

      <div className="container">
        <header className="showcase-header">
         

          <h2 className="main-title">
           What we manufacture and trade
            {/* <br /> */}
            {/* <span className="text-gold">AERIAL PLATFORMS</span> */}
          </h2>

          <p className="header-desc">
     From advanced industrial drone platforms to raw building materials and fully fabricated telecom towers — every product is delivered with the precision Daban Holding has been known for since 1997.
          </p>
        </header>

        <div className="product-list ">
          {products.map((product, index) => {
            const specItems = product.specs.split('•').map((item) => item.trim());
            const num = String(index + 1).padStart(2, '0');

            return (
              <article key={product.id} className="uav-card">
                <div className="image-column">
                  <div className="image-box">
                    {product.showcaseVideo ? (
                      <video
                        src={product.showcaseVideo}
                        className="uav-image"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : product.video ? (
                      <video
                        src={product.video}
                        className="uav-image"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img src={product.image} alt={product.name} loading="lazy" className="uav-image" />
                    )}
                    <div className="image-overlay"></div>
                  </div>
                </div>

                <div className="content-column lg:tw-bg-light-blue">
                  <div className="content-box">
                    <div className="bg-number">{num}</div>

                    <div className="content-inner">
                      <div className="model-id">
                        MODEL: <span>{product.id}</span>
                      </div>

                      <h3 className="uav-name">{product.name}</h3>

                      <div className="specs-grid">
                        {specItems.map((item, i) => (
                          <div key={item} className="spec-item">
                            <span className="spec-index">0{i + 1}</span>
                            <span className="spec-text">{item}</span>
                          </div>
                        ))}
                      </div>

                      <p className="uav-desc">{product.description}</p>
                      <Link to={`/products/${product.id}`} className="uav-link">
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .uav-showcase {
          position: relative;
          background-color: #030304;
          color: #e5e5e5;
          padding: 120px 0 160px;
          font-family: 'Inter', system-ui, sans-serif;
          overflow: clip;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 1;
          -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .text-gold {
          color: #214C9A;
        }

        .showcase-header {
          margin-bottom: 120px;
          border-left: 0px solid #d4be93;
          padding-left: 32px;
          max-width: 1060px;
        }

        .header-top {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          font-family: 'Courier New', Courier, monospace;
          font-size: 13px;
          letter-spacing: 0.1em;
          color: #a3a3a3;
          flex-wrap: wrap;
        }

        .sys-status {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #d4be93;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background-color: #d4be93;
          border-radius: 50%;
        }

        .line-divider {
          width: 40px;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.2);
        }

        .main-title {
          font-size: clamp(40px, 6vw, 56px);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
          margin: 0 0 24px 0;
          text-transform: uppercase;
        }

        .header-desc {
          max-width: 620px;
          font-size: 18px;
          line-height: 1.6;
          color: #888;
          margin: 0;
        }

        .product-list {
          display: flex;
          flex-direction: column;
        }

        .uav-card {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 430px);
          align-items: start;
          min-height: 170vh;
          position: relative;
        }

        .image-column {
          position: relative;
          padding-right: min(9vw, 120px);
        }

        .image-box {
          position: relative;
          margin-top: 18vh;
          height: min(76vh, 720px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .uav-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          scale: 1.1;
          transform-origin: center center;
          object-position: center;
          filter: drop-shadow(0 30px 80px rgba(0, 0, 0, 0.35));
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(3, 3, 4, 0.16) 100%);
          pointer-events: none;
        }

        .content-column {
          position: relative;
          height: 100%;
        }

        .content-box {
          width: 100%;
          position: sticky;
          top: 110px;
          background: rgba(5, 8, 15, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-top: 2px solid #d4be93;
          padding: 56px 40px;
          margin-left: -14%;
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 26px), calc(100% - 26px) 100%, 0 100%);
          z-index: 10;
        }

        .bg-number {
          position: absolute;
          top: -8px;
          right: 18px;
          font-size: clamp(120px, 12vw, 180px);
          font-weight: 900;
          line-height: 1;
          color: rgba(255, 255, 255, 0.03);
          pointer-events: none;
          z-index: 0;
        }

        .content-inner {
          position: relative;
          z-index: 1;
        }

        .model-id {
          font-family: 'Courier New', Courier, monospace;
          color: #666;
          font-size: 14px;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .model-id span {
          color: #d4be93;
          font-weight: 700;
          text-transform: uppercase;
        }

        .uav-name {
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 700;
          margin: 0 0 32px 0;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          line-height: 0.98;
        }

        .specs-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }

        .spec-item {
          display: flex;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .spec-index {
          color: #d4be93;
          font-family: 'Courier New', Courier, monospace;
          font-size: 12px;
          width: 40px;
          flex: 0 0 40px;
        }

        .spec-text {
          font-size: 14px;
          color: #ccc;
        }

        .uav-desc {
          color: #888;
          font-size: 15px;
          line-height: 1.85;
          margin: 0 0 28px;
        }

        .uav-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 172px;
          padding: 14px 18px;
          border-radius: 999px;
          border: 1px solid rgba(143, 194, 215, 0.24);
          background: linear-gradient(180deg, rgba(33, 76, 154, 0.22) 0%, rgba(33, 76, 154, 0.12) 100%);
          color: #f4f7fb;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .uav-link:hover {
          transform: translateY(-2px);
          border-color: rgba(143, 194, 215, 0.5);
          background: linear-gradient(180deg, rgba(33, 76, 154, 0.34) 0%, rgba(33, 76, 154, 0.2) 100%);
        }

        @media (max-width: 1100px) {
          .uav-card {
            grid-template-columns: minmax(0, 1fr) minmax(320px, 390px);
          }

          .content-box {
            padding: 46px 30px;
          }
        }

        @media (max-width: 991px) {
          .product-list {
            gap: 0;
          }

          .uav-card {
            grid-template-columns: 1fr;
            min-height: 100vh;
            position: relative;
          }

          .image-column {
            padding-right: 0;
            position: sticky;
            top: 0;
            height: 100vh;
            z-index: 1;
          }

          .image-box {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            margin-top: 0;
            height: 60vh;
            max-height: 500px;
          }

          .content-column {
            position: relative;
            z-index: 2;
            margin-top: calc(100vh - 120px);
          }

          .content-box {
            position: relative;
            top: auto;
            margin-left: 0;
            margin-top: 0;
            width: 100%;
            max-width: 100%;
            margin-bottom: 60vh;
          }

          .uav-card:last-child .content-box {
            margin-bottom: 0;
          }
        }

        @media (max-width: 600px) {
          .uav-showcase {
            padding: 80px 0 100px;
          }

          .showcase-header {
            margin-bottom: 60px;
            padding-left: 20px;
          }

          .main-title {
            font-size: 36px;
          }

          .header-desc {
            font-size: 15px;
          }

          .uav-card {
            min-height: 100vh;
          }

          .image-box {
            height: 50vh;
            max-height: 400px;
          }

          .content-column {
            margin-top: calc(100vh - 100px);
          }

          .content-box {
            width: 100%;
            padding: 32px 24px;
            clip-path: none;
            margin-bottom: 50vh;
          }

          .bg-number {
            font-size: 100px;
          }
        }
      `}</style>
    </section>
  );
}
