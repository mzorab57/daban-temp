import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { productCatalog } from "../../data/products";

export default function GlobalHeader() {
  const { pathname } = useLocation();
  const isHomeRoute = pathname === "/";
  const [isHidden, setIsHidden] = useState(false);
  const [isHomeReady, setIsHomeReady] = useState(false);
  const lastScrollY = useRef(0);
  const sectionLink = (hash) => (pathname === "/" ? hash : `/${hash}`);
  const productNavActive = pathname.startsWith("/products");
  useEffect(() => {
    setIsHidden(false);
    lastScrollY.current = window.scrollY || 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      const delta = currentScrollY - lastScrollY.current;

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
      }`}
    >
                <div theme="" className="header" style={{ opacity: 1, visibility: 'visible', transform: 'none' }}>
                    <div className="container">
                       
                        <div className="header_c">
                            <div className="header_local f-mobile">
                                <div className="nav-item-list"></div>
                            </div>
                            <div id="w-node-_08b01562-3862-0954-5251-f0b5079d1bf3-079d1bef" className="header_nav f-desktop">
                                <div className="nav-item-list">
                                    <Link hover="nav-item" to="/about" className="nav-item w-inline-block">
                                        <div className="nav-item_label">
                                            <div hover="text" className="t7 text-dark">About</div>
                                            <div hover="text" className="t7 text-dark is-2">About</div>
                                        </div>
                                        <div className="nav-item_bg">
                                            <div hover="bg" className="nav-item_bg_hover"></div>
                                        </div>
                                    </Link>
                                    <a hover="nav-item" href={sectionLink("#flight")} className="nav-item w-inline-block">
                                        <div className="nav-item_label">
                                            <div hover="text" className="t7 text-dark">Servic</div>
                                            <div hover="text" className="t7 text-dark is-2">Servic</div>
                                        </div>
                                        <div className="nav-item_bg">
                                            <div hover="bg" className="nav-item_bg_hover"></div>
                                        </div>
                                    </a>
                                    <div className={`product-nav-dropdown${productNavActive ? " is-active" : ""}`}>
                                        <Link hover="nav-item" to="/products" className="nav-item w-inline-block">
                                            <div className="nav-item_label">
                                                <div hover="text" className="t7 text-dark">Product</div>
                                                <div hover="text" className="t7 text-dark is-2">Product</div>
                                            </div>
                                            <div className="nav-item_bg">
                                                <div hover="bg" className="nav-item_bg_hover"></div>
                                            </div>
                                        </Link>

                                        <div className="product-nav-menu">
                                            <div className="product-nav-menu_inner">
                                                <div className="product-nav-menu_head">
                                                    <span className="product-nav-menu_kicker">Drone lineup</span>
                                                    <span className="product-nav-menu_copy">Choose a dedicated product page</span>
                                                </div>

                                                <div className="product-nav-menu_list">
                                                    {productCatalog.map((product, index) => (
                                                        <Link
                                                          key={product.id}
                                                          to={`/products/${product.id}`}
                                                          className="product-nav-menu_item"
                                                        >
                                                            <span className="product-nav-menu_index">{`0${index + 1}`}</span>
                                                            <span className="product-nav-menu_name">{product.shortName}</span>
                                                            <span className="product-nav-menu_meta">{product.navLabel}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a hover="nav-item" href={sectionLink("#global")} className="nav-item w-inline-block">
                                        <div className="nav-item_label">
                                            <div hover="text" className="t7 text-dark">Case</div>
                                            <div hover="text" className="t7 text-dark is-2">Case</div>
                                        </div>
                                        <div className="nav-item_bg">
                                            <div hover="bg" className="nav-item_bg_hover"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="header_logo">
                               
                               
                                <Link menu-close="mobile" data-div-reveal="true" to="/" className="link-logo w-inline-block">
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
                         
                         
                                </Link>
                            </div>
                            <div id="w-node-_08b01562-3862-0954-5251-f0b5079d1c00-079d1bef" className="header_cta f-desktop">
                                <div className="nav-item-list">
                                    <div className="header_contact-cms w-dyn-list">
                                        <div role="list" className="header_contact-cms_list nav-item-list w-dyn-items">
                                            <div role="listitem" className="header_contact-cms_list_item w-dyn-item">
                                                <a hover="nav-item" href="tel:+971544325050" className="nav-item w-inline-block">
                                                    <div className="nav-item_label">
                                                        <div hover="text" className="t7 text-dark">+964 750 405 5084</div>
                                                        <div hover="text" className="t7 text-dark is-2">+964 750 405 5084</div>
                                                    </div>
                                                    <div className="nav-item_bg">
                                                        <div hover="bg" className="nav-item_bg_hover"></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div role="listitem" className="header_contact-cms_list_item w-dyn-item">
                                                <a hover="nav-item" href="mailto:info@dabanholding.com" className="nav-item w-inline-block">
                                                    <div className="nav-item_label">
                                                        <div hover="text" className="t7 text-dark">info@dabanholding.com</div>
                                                        <div hover="text" className="t7 text-dark is-2">info@dabanholding.com</div>
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
                            <div className="header_menu f-mobile">
                                <div className="nav-item-list">
                                    <a menu-btn="mobile" href="#" className="btn-menu w-inline-block">
                                        <div className="btn-menu_icon">
                                            <div menu-ico-1="mobile" className="ico-20 w-embed"><svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2.66797H14V4.0013H2V2.66797Z" fill="currentColor"/>
</svg></div>
                                            <div menu-ico-2="mobile" className="ico-20 is-2 w-embed"><svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 7.33496H14V8.66829H2V7.33496Z" fill="currentColor"/>
</svg></div>
                                            <div menu-ico-3="mobile" className="ico-20 is-2 w-embed"><svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12.001H14V13.3343H2V12.001Z" fill="currentColor"/>
</svg></div>
                                        </div>
                                        <div className="btn-menu_bg"></div>
                                    </a>
                                </div>
                            </div>
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
                    background: rgba(10, 20, 44, 0.2);
                    backdrop-filter: blur(18px);
                    -webkit-backdrop-filter: blur(18px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                  }

                  .header-global-shell .header {
                    position: relative;
                  }

                  .product-nav-dropdown {
                    position: relative;
                  }

                  .product-nav-menu {
                    position: absolute;
                    top: calc(100% + 14px);
                    left: 50%;
                    transform: translateX(-50%) translateY(8px);
                    width: 320px;
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
                    border-radius: 24px;
                    overflow: hidden;
                    border: 1px solid rgba(17, 45, 107, 0.08);
                    background:
                      radial-gradient(circle at top right, rgba(143, 194, 215, 0.24), transparent 28%),
                      linear-gradient(180deg, rgba(255, 255, 255, 0.97) 0%, rgba(244, 247, 251, 0.98) 100%);
                    box-shadow: 0 24px 70px rgba(10, 20, 44, 0.16);
                    padding: 12px;
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
                    .header-global-shell.is-inner-route {
                      background: rgba(10, 20, 44, 0.28);
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
