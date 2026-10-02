const fs = require('fs');

const files = ['src/components/home/GlobalHeader.jsx', 'src/components/home/Header.jsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Replace the JSX for the menu
  const menuJsxRegex = /<div className="product-nav-menu_inner">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  const newMenuJsx = `<div className="product-nav-menu_inner tw-bg-white tw-border-t tw-border-gray-100 tw-shadow-2xl tw-w-full">
                                                <div className="tw-max-w-7xl tw-mx-auto tw-w-full tw-py-12 tw-px-6">
                                                    <div className="tw-grid tw-grid-cols-3 tw-gap-12">
                                                        {productCatalog.map((product) => {
                                                            let imgSrc = product.id === 'em15' ? '/product/em15-new.png' :
                                                                         product.id === 'em135' ? '/product/em135.png' :
                                                                         '/product/th600.png';
                                                            return (
                                                            <Link
                                                              key={product.id} onClickCapture={() => { window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); }}
                                                              to={\`/products/\${product.id}\`}
                                                              className="tw-flex tw-flex-col tw-items-center tw-text-center tw-group tw-no-underline hover:tw-no-underline"
                                                            >
                                                                <h3 className="tw-text-[#112D6B] tw-text-2xl tw-font-bold tw-mb-2 group-hover:tw-text-blue-600 tw-transition-colors">{product.name}</h3>
                                                                <p className="tw-text-gray-500 tw-text-sm tw-mb-6 tw-max-w-xs">{product.heroEyebrow || product.specs}</p>
                                                                <div className="tw-w-full tw-aspect-video tw-flex tw-items-center tw-justify-center tw-bg-gray-50 tw-rounded-2xl group-hover:tw-scale-105 group-hover:tw-shadow-lg tw-transition-all tw-duration-300 tw-p-6">
                                                                    <img src={imgSrc} alt={product.name} className="tw-max-w-full tw-max-h-full tw-object-contain" />
                                                                </div>
                                                            </Link>
                                                        )})}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`;
  content = content.replace(menuJsxRegex, newMenuJsx);

  // 2. Update CSS
  content = content.replace(/\.product-nav-dropdown \{\s*position: relative;\s*\}/, '.product-nav-dropdown {\n                    position: static;\n                  }');
  
  content = content.replace(/width: 320px;/g, 'width: 100vw;\n                    left: 0;\n                    right: 0;\n                    transform: translateY(8px);');
  content = content.replace(/transform: translateX\(-50%\) translateY\(8px\);/g, '');
  content = content.replace(/transform: translateX\(-50%\) translateY\(0\);/g, 'transform: translateY(0);');
  content = content.replace(/left: 50%;/g, 'left: 0;');
  content = content.replace(/top: calc\(100% \+ 14px\);/g, 'top: 100px; /* fallback */');
  
  // Make sure it's fixed position
  content = content.replace(/position: absolute;\s*top: 100px; \/\* fallback \*\//, 'position: fixed;\n                    top: 110px;');

  // Remove the old radial-gradient background stuff from menu_inner
  content = content.replace(/border-radius: 24px;\s*overflow: hidden;\s*border: 1px solid rgba\(17, 45, 107, 0\.08\);\s*background:[\s\S]*?padding: 12px;/g, '');

  fs.writeFileSync(file, content);
});

