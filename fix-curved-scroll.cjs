const fs = require('fs');

let content = fs.readFileSync('src/components/ui/CurvedMenu.jsx', 'utf8');
content = content.replace(/window\.scrollTo\(0, 0\);/g, 'window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50);');
fs.writeFileSync('src/components/ui/CurvedMenu.jsx', content);
