const fs = require('fs');
const files = ['src/components/home/GlobalHeader.jsx', 'src/components/home/Header.jsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Add the state hook
  if (!content.includes('const [forceCloseMenu, setForceCloseMenu]')) {
    content = content.replace('const [isAtTop, setIsAtTop] = useState(true);', 'const [isAtTop, setIsAtTop] = useState(true);\n  const [forceCloseMenu, setForceCloseMenu] = useState(false);');
    // If it's Header.jsx which might not have isAtTop
    if (!content.includes('const [forceCloseMenu')) {
        content = content.replace('const [isHidden, setIsHidden] = useState(false);', 'const [isHidden, setIsHidden] = useState(false);\n  const [forceCloseMenu, setForceCloseMenu] = useState(false);');
    }
  }

  // Update the product link onClickCapture
  content = content.replace(
    /onClickCapture=\{\(\) => \{ window\.scrollTo\(0, 0\); setTimeout\(\(\) => window\.scrollTo\(0, 0\), 50\); \}\}/g,
    'onClickCapture={() => { setForceCloseMenu(true); window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); setTimeout(() => setForceCloseMenu(false), 500); }}'
  );
  
  // Note: this replace above will also affect other Links if they match exactly. That's fine, forcing close on any click is good!
  
  // Apply force-close class to the dropdown
  content = content.replace(
    /<div className=\{\`product-nav-dropdown\$\{productNavActive \? " is-active" : ""\}\`\}>/,
    '<div className={`product-nav-dropdown${productNavActive ? " is-active" : ""}${forceCloseMenu ? " force-close-dropdown" : ""}`}>'
  );

  // Add CSS for force closing
  const closingCSS = `
                  .product-nav-dropdown.force-close-dropdown .product-nav-menu {
                    opacity: 0 !important;
                    visibility: hidden !important;
                    pointer-events: none !important;
                    transform: translateX(-50%) translateY(8px) !important;
                  }
  `;
  if (!content.includes('.force-close-dropdown')) {
    content = content.replace('.product-nav-dropdown {', closingCSS + '\n                  .product-nav-dropdown {');
  }

  // Shrink the image cards height
  content = content.replace(/tw-h-\[240px\]/g, 'tw-h-[190px]');

  fs.writeFileSync(file, content);
});
