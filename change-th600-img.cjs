const fs = require('fs');
const files = ['src/components/home/GlobalHeader.jsx', 'src/components/home/Header.jsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace /product/th600.png with /product/th600.webp
  content = content.replace(/\/product\/th600\.png/g, '/product/th600.webp');

  fs.writeFileSync(file, content);
});
