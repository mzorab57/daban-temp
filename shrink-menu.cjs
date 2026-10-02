const fs = require('fs');
const files = ['src/components/home/GlobalHeader.jsx', 'src/components/home/Header.jsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Restore border radius and max-width in JSX
  content = content.replace(/className="product-nav-menu_inner tw-bg-white tw-border-t tw-border-gray-100 tw-shadow-2xl tw-w-full"/, 'className="product-nav-menu_inner tw-bg-white tw-border tw-border-gray-100 tw-shadow-2xl tw-w-full tw-rounded-[24px] tw-overflow-hidden"');
  
  // Also reduce padding in JSX
  content = content.replace(/className="tw-max-w-7xl tw-mx-auto tw-w-full tw-py-12 tw-px-6"/, 'className="tw-max-w-5xl tw-mx-auto tw-w-full tw-py-8 tw-px-6"');
  content = content.replace(/className="tw-grid tw-grid-cols-3 tw-gap-12"/, 'className="tw-grid tw-grid-cols-3 tw-gap-6"');
  content = content.replace(/tw-h-\[220px\]/g, 'tw-h-[160px]');
  
  // Revert CSS product-nav-dropdown back to relative
  content = content.replace(/\.product-nav-dropdown \{\s*position: static;\s*\}/, '.product-nav-dropdown {\n                    position: relative;\n                  }');

  // Update product-nav-menu CSS
  // We need to replace the block:
  /*
                  .product-nav-menu {
                    position: fixed;
                    top: 95px;
                    left: 0;
                    
                    width: 100vw;
                    left: 0;
                    right: 0;
                    transform: translateY(8px);
                    ...
                  }
  */
  const oldMenuCssRegex = /\.product-nav-menu \{[\s\S]*?z-index: 40;\s*\}/;
  const newMenuCss = `.product-nav-menu {
                    position: absolute;
                    top: calc(100% + 24px);
                    left: 50%;
                    width: 900px;
                    transform: translateX(-50%) translateY(8px);
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                    transition: opacity 0.24s ease, transform 0.24s ease, visibility 0.24s ease;
                    z-index: 40;
                  }`;
                  
  content = content.replace(oldMenuCssRegex, newMenuCss);

  // Update hover transform
  const oldHoverRegex = /\.product-nav-dropdown:hover \.product-nav-menu,\s*\.product-nav-dropdown:focus-within \.product-nav-menu \{[\s\S]*?transform: translateY\(0\);/;
  const newHover = `.product-nav-dropdown:hover .product-nav-menu,
                  .product-nav-dropdown:focus-within .product-nav-menu {
                    opacity: 1;
                    visibility: visible;
                    pointer-events: auto;
                    transform: translateX(-50%) translateY(0);`;
  content = content.replace(oldHoverRegex, newHover);
  
  // Update the hover bridge pseudo-element top and height
  content = content.replace(/top: -50px;/g, 'top: -30px;');
  content = content.replace(/height: 50px;/g, 'height: 30px;');

  fs.writeFileSync(file, content);
});
