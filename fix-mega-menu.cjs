const fs = require('fs');
const files = ['src/components/home/GlobalHeader.jsx', 'src/components/home/Header.jsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Fix image container size
  content = content.replace(/className="tw-w-full tw-aspect-video tw-flex/g, 'className="tw-w-full tw-h-[220px] tw-flex');
  
  // Also push the text a bit to align perfectly if titles have different line heights
  // Make the Link a flex column with a flex-grow on the text part, or just fixed height container.
  // Actually, fixing the image container height to 220px is enough to make them uniform.
  
  // Fix hover gap by adding a before pseudo-element
  const cssFix = `.product-nav-menu::before {
                    content: '';
                    position: absolute;
                    top: -50px;
                    left: 0;
                    right: 0;
                    height: 50px;
                    background: transparent;
                  }`;
                  
  if (!content.includes('.product-nav-menu::before')) {
    content = content.replace('.product-nav-menu {', cssFix + '\n\n                  .product-nav-menu {');
  }

  // Adjust top slightly just in case it's too far down
  content = content.replace(/top: 110px;/g, 'top: 95px;');

  fs.writeFileSync(file, content);
});
