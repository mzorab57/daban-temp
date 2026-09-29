const fs = require('fs');
let code = fs.readFileSync('src/components/home/GlobalHeader.jsx', 'utf8');

// The sed command changed </Link> to </a> everywhere. 
// We know that <Link ... to="/about">, to="/services", to="/products", to="/products/brand" are still <Link>
// Let's replace the corresponding </a> with </Link>
code = code.replace(/<Link([^>]*to="\/about"[^>]*)>([\s\S]*?)<\/a>/g, '<Link$1>$2</Link>');
code = code.replace(/<Link([^>]*to="\/services"[^>]*)>([\s\S]*?)<\/a>/g, '<Link$1>$2</Link>');
code = code.replace(/<Link([^>]*to="\/products"[^>]*)>([\s\S]*?)<\/a>/g, '<Link$1>$2</Link>');
code = code.replace(/<Link([^>]*to="\/products\/brand"[^>]*)>([\s\S]*?)<\/a>/g, '<Link$1>$2</Link>');

fs.writeFileSync('src/components/home/GlobalHeader.jsx', code);
code = code.replace(/<Link([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1>$2</Link>');
fs.writeFileSync('src/components/home/GlobalHeader.jsx', code);
