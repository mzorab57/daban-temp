const fs = require('fs');

let content = fs.readFileSync('src/components/home/GlobalHeader.jsx', 'utf8');

// Replace standard class strings containing text-dark
content = content.replace(/className="t7 text-dark"/g, 'className={`t7 text-dark ${isAtTop ? "!tw-text-dark-navy" : ""}`}');
content = content.replace(/className="t7 text-dark is-2"/g, 'className={`t7 text-dark is-2 ${isAtTop ? "!tw-text-dark-navy" : ""}`}');

fs.writeFileSync('src/components/home/GlobalHeader.jsx', content);
