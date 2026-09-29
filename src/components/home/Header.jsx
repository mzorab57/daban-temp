import { Link, useLocation } from "react-router-dom";
import CurvedMenu from "../ui/CurvedMenu";
import { productCatalog } from "../../data/products";

export default function Header() {
  const { pathname } = useLocation();
  const sectionLink = (hash) => (pathname === "/" ? hash : `/${hash}`);
  const productNavActive = pathname.startsWith("/products");

  return (
    <div className="theme_on-color">
                <div theme="" data-prevent-flicker="true" className="header">
                    <div className="container">
                        <div className="unit-24"></div>
                        <div className="header_c">
                            <div className="header_local f-mobile">
                                <div className="nav-item-list"></div>
                            </div>
                            <div id="w-node-_08b01562-3862-0954-5251-f0b5079d1bf3-079d1bef" className="header_nav f-desktop">
                                <div className="nav-item-list">
                                    <a onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = "/"; }} hover="nav-item" href="/" className="nav-item w-inline-block">
                                        <div className="nav-item_label">
                                            <div hover="text" className="t7 text-dark">Home</div>
                                            <div hover="text" className="t7 text-dark is-2">Home</div>
                                        </div>
                                        <div className="nav-item_bg">
                                            <div hover="bg" className="nav-item_bg_hover"></div>
                                        </div>
                                    </a>
                                    <Link onClickCapture={() => { window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); }} hover="nav-item" to="/about" className="nav-item w-inline-block">
                                        <div className="nav-item_label">
                                            <div hover="text" className="t7 text-dark">About</div>
                                            <div hover="text" className="t7 text-dark is-2">About</div>
                                        </div>
                                        <div className="nav-item_bg">
                                            <div hover="bg" className="nav-item_bg_hover"></div>
                                        </div>
                                    </Link>
                                    <Link onClickCapture={() => { window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); }} hover="nav-item" to="/services" className="nav-item w-inline-block">
                                        <div className="nav-item_label">
                                            <div hover="text" className="t7 text-dark">Services</div>
                                            <div hover="text" className="t7 text-dark is-2">Services</div>
                                        </div>
                                        <div className="nav-item_bg">
                                            <div hover="bg" className="nav-item_bg_hover"></div>
                                        </div>
                                    </Link>
                                    
                                    <div className={`product-nav-dropdown${productNavActive ? " is-active" : ""}`}>
                                        <Link onClickCapture={() => { window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); }} hover="nav-item" to="/products" className="nav-item w-inline-block">
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
                                                          key={product.id} onClickCapture={() => { window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); }}
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
                                </a>
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
                            <CurvedMenu />
                        </div>
                        <div className="unit-24"></div>
                    </div>
                </div>
                
                <style>{`
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
                    .product-nav-menu {
                      display: none;
                    }
                  }
                `}</style>
            </div>
  );
}
