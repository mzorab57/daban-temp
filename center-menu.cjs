const fs = require('fs');
const files = ['src/components/home/GlobalHeader.jsx', 'src/components/home/Header.jsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // We want to replace position: absolute; with position: fixed;
  // and set top: 95px;
  content = content.replace(/position: absolute;\s*top: calc\(100% \+ 24px\);/g, 'position: fixed;\n                    top: 95px;');

  // Adjust hover transform to keep the horizontal translation
  const oldHoverRegex = /transform: translateX\(-50%\) translateY\(0\);/g;
  // This is already correct in the CSS.

  fs.writeFileSync(file, content);
});
