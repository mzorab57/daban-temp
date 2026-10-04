import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CurvedMenu from "../ui/CurvedMenu";
import { productCatalog } from "../../data/products";

export default function GlobalHeader() {
  const { pathname } = useLocation();
  const isHomeRoute = pathname === "/";
  const [isHidden, setIsHidden] = useState(false);
  const [isHomeReady, setIsHomeReady] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [forceCloseMenu, setForceCloseMenu] = useState(false);
  const lastScrollY = useRef(0);
  const sectionLink = (hash) => (pathname === "/" ? hash : `/${hash}`);
  const productNavActive = pathname.startsWith("/products");
  useEffect(() => {
    setIsHidden(false);
    lastScrollY.current = window.scrollY || 0;
    setIsAtTop((window.scrollY || 0) <= 20);

    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      const delta = currentScrollY - lastScrollY.current;
      
      setIsAtTop(currentScrollY <= 20);

      if (currentScrollY <= 20) {
        setIsHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (Math.abs(delta) < 6) {
        return;
      }

      if (delta > 0 && currentScrollY > 110) {
        setIsHidden(true);
      } else if (delta < 0) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, isHomeRoute]);

  if (isHomeRoute) return null;

  return (
    <div
      className={`header-global-shell is-inner-route theme_on-color${
        isHidden ? " is-hidden" : ""
      }${!isAtTop ? " is-scrolled" : ""}`}
    >
                <div theme="" className="header" style={{ opacity: 1, visibility: 'visible', transform: 'none' }}>
                    <div className="container">
                       
                        <div className="header_c">
                            <div className="header_local f-mobile">
                                <div className="nav-item-list"></div>
                            </div>
                            <div id="w-node-_08b01562-3862-0954-5251-f0b5079d1bf3-079d1bef" className="header_nav f-desktop">
                                <div className="nav-item-list">
                                    <a onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = "/"; }} hover="nav-item" href="/" className="nav-item w-inline-block">
                                        <div className="nav-item_label">
                                            <div hover="text" className={`t7 text-dark ${isAtTop ? "!tw-text-dark-navy" : ""}`}>Home</div>
                                            <div hover="text" className={`t7 text-dark is-2 ${isAtTop ? "!tw-text-dark-navy" : ""}`}>Home</div>
                                        </div>
                                        <div className="nav-item_bg">
                                            <div hover="bg" className="nav-item_bg_hover"></div>
                                        </div>
                                    </a>
                                    <Link onClickCapture={() => { setForceCloseMenu(true); window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); setTimeout(() => setForceCloseMenu(false), 500); }} hover="nav-item" to="/about" className="nav-item w-inline-block">
                                        <div className="nav-item_label">
                                            <div hover="text" className={`t7 text-dark ${isAtTop ? "!tw-text-dark-navy" : ""}`}>About</div>
                                            <div hover="text" className={`t7 text-dark is-2 ${isAtTop ? "!tw-text-dark-navy" : ""}`}>About</div>
                                        </div>
                                        <div className="nav-item_bg">
                                            <div hover="bg" className="nav-item_bg_hover"></div>
                                        </div>
                                    </Link>
                                    <Link onClickCapture={() => { setForceCloseMenu(true); window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); setTimeout(() => setForceCloseMenu(false), 500); }} hover="nav-item" to="/services" className="nav-item w-inline-block">
                                        <div className="nav-item_label">
                                            <div hover="text" className={`t7 text-dark ${isAtTop ? "!tw-text-dark-navy" : ""}`}>Services</div>
                                            <div hover="text" className={`t7 text-dark is-2 ${isAtTop ? "!tw-text-dark-navy" : ""}`}>Services</div>
                                        </div>
                                        <div className="nav-item_bg">
                                            <div hover="bg" className="nav-item_bg_hover"></div>
                                        </div>
                                    </Link>
                                    <div className={`product-nav-dropdown${productNavActive ? " is-active" : ""}${forceCloseMenu ? " force-close-dropdown" : ""}`}>
                                        <Link onClickCapture={() => { setForceCloseMenu(true); window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); setTimeout(() => setForceCloseMenu(false), 500); }} hover="nav-item" to="/products" className="nav-item w-inline-block">
                                            <div className="nav-item_label">
                                                <div hover="text" className={`t7 text-dark ${isAtTop ? "!tw-text-dark-navy" : ""}`}>Product</div>
                                                <div hover="text" className={`t7 text-dark is-2 ${isAtTop ? "!tw-text-dark-navy" : ""}`}>Product</div>
                                            </div>
                                            <div className="nav-item_bg">
                                                <div hover="bg" className="nav-item_bg_hover"></div>
                                            </div>
                                        </Link>

                                        <div className="product-nav-menu">
                                            <div className="product-nav-menu_inner tw-bg-white tw-border tw-border-gray-100 tw-shadow-2xl tw-w-full tw-rounded-[24px] tw-overflow-hidden">
                                                <div className="tw-max-w-7xl tw-mx-auto tw-w-full tw-py-10 lg:tw-py-12 tw-px-6">
                                                    <div className="tw-grid tw-grid-cols-3 tw-gap-8">
                                                        {productCatalog.map((product) => {
                                                            let imgSrc = product.id === 'em15' ? '/product/em15-new.png' :
                                                                         product.id === 'em135' ? '/product/em135-png.webp' :
                                                                         '/product/th600-png.webp';
                                                            return (
                                                            <Link
                                                              key={product.id} onClickCapture={() => { setForceCloseMenu(true); window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); setTimeout(() => setForceCloseMenu(false), 500); }}
                                                              to={`/products/${product.id}`}
                                                              className="tw-flex tw-flex-col tw-h-full tw-items-center tw-text-center tw-group tw-no-underline hover:tw-no-underline"
                                                            >
                                                                <div className="tw-flex tw-flex-col tw-flex-grow">
                                                                    <h3 className="tw-text-[#112D6B] tw-text-2xl lg:tw-text-3xl tw-font-bold tw-mb-2 group-hover:tw-text-blue-600 tw-transition-colors">{product.name}</h3>
                                                                    <p className="tw-text-gray-500 tw-text-sm tw-mb-6 tw-max-w-xs">{product.heroEyebrow || product.specs}</p>
                                                                </div>
                                                                <div className="tw-w-full tw-h-[190px] tw-flex tw-items-center tw-justify-center tw-bg-gray-50 tw-rounded-2xl group-hover:tw-scale-105 group-hover:tw-shadow-lg tw-transition-all tw-duration-300 tw-p-6 tw-mt-auto">
                                                                    <img 
                                                                        src={imgSrc} 
                                                                        alt={product.name} 
                                                                        className="tw-max-w-full tw-max-h-full tw-object-contain"
                                                                        style={{
                                                                            transform: product.id === 'th600' 
                                                                                ? 'scale(1.15)' 
                                                                                : product.id === 'em135' 
                                                                                ? 'scale(1.45)' 
                                                                                : product.id === 'em15' 
                                                                                ? 'scale(0.80)' 
                                                                                : 'none',
                                                                            transformOrigin: 'center center'
                                                                        }}
                                                                    />
                                                                </div>
                                                            </Link>
                                                        )})}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link onClickCapture={() => { setForceCloseMenu(true); window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); setTimeout(() => setForceCloseMenu(false), 500); }} hover="nav-item" to="/contact" className="nav-item w-inline-block">
                                        <div className="nav-item_label">
                                            <div hover="text" className={`t7 text-dark ${isAtTop ? "!tw-text-dark-navy" : ""}`}>Contact</div>
                                            <div hover="text" className={`t7 text-dark is-2 ${isAtTop ? "!tw-text-dark-navy" : ""}`}>Contact</div>
                                        </div>
                                        <div className="nav-item_bg">
                                            <div hover="bg" className="nav-item_bg_hover"></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="header_logo">
                               
                               
                                <a onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = "/"; }} menu-close="mobile" data-div-reveal="true" href="/" className="link-logo w-inline-block">
                                  <img
                                    src="/daban-header-logo.svg"
                                    alt="Daban Holding"
                                    width="265"
                                    height="134"
                                    loading="eager"
                                    decoding="async"
                                    style={{ width: '265px', height: 'auto', display: 'block' }}
                                  />
                                    
                                {/*  <img src="/logo.png" loading="eager" alt=""  style={{ width: '50px' }} />  */}
                         {/*  <span>Daban Holding</span>  */}
                         
                         
                                </a>
                            </div>
                            <div id="w-node-_08b01562-3862-0954-5251-f0b5079d1c00-079d1bef" className="header_cta f-desktop">
                                <div className="nav-item-list">
                                    <div className="header_contact-cms w-dyn-list">
                                        <div role="list" className="header_contact-cms_list nav-item-list w-dyn-items">
                                            <div role="listitem" className="header_contact-cms_list_item w-dyn-item">
                                                <a hover="nav-item" href="tel:+971544325050" className="nav-item w-inline-block">
                                                    <div className="nav-item_label">
                                                        <div hover="text" className={`t7 text-dark ${isAtTop ? "!tw-text-dark-navy" : ""}`}>+964 750 405 5084</div>
                                                        <div hover="text" className={`t7 text-dark is-2 ${isAtTop ? "!tw-text-dark-navy" : ""}`}>+964 750 405 5084</div>
                                                    </div>
                                                    <div className="nav-item_bg">
                                                        <div hover="bg" className="nav-item_bg_hover"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div role="listitem" className="header_contact-cms_list_item w-dyn-item">
                                                <a hover="nav-item" href="mailto:info@dabanholding.com" className="nav-item w-inline-block">
                                                    <div className="nav-item_label">
                                                        <div hover="text" className={`t7 text-dark ${isAtTop ? "!tw-text-dark-navy" : ""}`}>info@dabanholding.com</div>
                                                        <div hover="text" className={`t7 text-dark is-2 ${isAtTop ? "!tw-text-dark-navy" : ""}`}>info@dabanholding.com</div>
                                                    </div>
                                                    <div className="nav-item_bg">
                                                        <div hover="bg" className="nav-item_bg_hover"></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CurvedMenu />
                        </div>
                        
                    </div>
                </div>
                <style>{`
                  .header-global-shell {
                    left: 0;
                    right: 0;
                    z-index: 120;
                    transition:
                      transform 0.32s ease,
                      opacity 0.32s ease,
                      background 0.3s ease,
                      backdrop-filter 0.3s ease,
                      border-color 0.3s ease;
                  }

                  .header-global-shell.is-hidden {
                    transform: translate3d(0, -110%, 0);
                    opacity: 0;
                  }

                  .header-global-shell.is-home-waiting {
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                  }

                  .header-global-shell.is-home-route {
                    position: absolute;
                    top: 0;
                    background: transparent;
                    backdrop-filter: none;
                    -webkit-backdrop-filter: none;
                    border-bottom: none;
                    transition: opacity 0.4s ease;
                  }

                  .header-global-shell.is-inner-route {
                    position: fixed;
                    top: 0;
                    background: transparent;
                    backdrop-filter: none;
                    -webkit-backdrop-filter: none;
                    border-bottom: none;
                  }

                  .header-global-shell.is-inner-route.is-scrolled {
                    background: rgba(10, 20, 44, 0.4);
                    backdrop-filter: blur(18px);
                    -webkit-backdrop-filter: blur(18px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                  }

                  .header-global-shell .header {
                    position: relative;
                  }

                  
                  .product-nav-dropdown.force-close-dropdown .product-nav-menu {
                    opacity: 0 !important;
                    visibility: hidden !important;
                    pointer-events: none !important;
                    transform: translateX(-50%) translateY(8px) !important;
                  }
  
                  .product-nav-dropdown {
                    position: relative;
                  }

                  .product-nav-menu::before {
                    content: '';
                    position: absolute;
                    top: -25px;
                    left: 0;
                    right: 0;
                    height: 25px;
                    background: transparent;
                  }

                  .product-nav-menu {
                    position: fixed;
                    top: 65px;
                    left: 50%;
                    width: 92vw;
                    max-width: 1200px;
                    transform: translateX(-50%) translateY(8px);
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                    transition: opacity 0.24s ease, transform 0.24s ease, visibility 0.24s ease;
                    z-index: 40;
                  }

                  .product-nav-dropdown:hover .product-nav-menu,
                  .product-nav-dropdown:focus-within .product-nav-menu {
                    opacity: 1;
                    visibility: visible;
                    pointer-events: auto;
                    transform: translateX(-50%) translateY(0);
                  }

                  .product-nav-menu_inner {
                    
                  }

                  .product-nav-menu_head {
                    display: grid;
                    gap: 6px;
                    padding: 12px 12px 14px;
                  }

                  .product-nav-menu_kicker {
                    color: #214c9a;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                  }

                  .product-nav-menu_copy {
                    color: rgba(17, 45, 107, 0.62);
                    font-size: 13px;
                    line-height: 1.5;
                  }

                  .product-nav-menu_list {
                    display: grid;
                    gap: 8px;
                  }

                  .product-nav-menu_item {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    gap: 4px 12px;
                    align-items: center;
                    padding: 14px 14px;
                    border-radius: 18px;
                    text-decoration: none;
                    background: rgba(17, 45, 107, 0.035);
                    border: 1px solid rgba(17, 45, 107, 0.06);
                    transition: transform 0.24s ease, background 0.24s ease, border-color 0.24s ease;
                  }

                  .product-nav-menu_item:hover {
                    transform: translateY(-1px);
                    background: rgba(33, 76, 154, 0.06);
                    border-color: rgba(33, 76, 154, 0.12);
                  }

                  .product-nav-menu_index {
                    grid-row: span 2;
                    color: #214c9a;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.14em;
                  }

                  .product-nav-menu_name {
                    color: #112d6b;
                    font-size: 16px;
                    font-weight: 800;
                    line-height: 1.15;
                  }

                  .product-nav-menu_meta {
                    color: rgba(17, 45, 107, 0.64);
                    font-size: 11px;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                  }

                  @media (max-width: 991px) {
                    .header-global-shell.is-inner-route.is-scrolled {
                      background: rgba(10, 20, 44, 0.35);
                      backdrop-filter: blur(14px);
                      -webkit-backdrop-filter: blur(14px);
                    }

                    .product-nav-menu {
                      display: none;
                    }
                  }
                `}</style>
            </div>
  );
}

