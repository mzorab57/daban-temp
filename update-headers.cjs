const fs = require('fs');

const headers = ['src/components/home/Header.jsx', 'src/components/home/GlobalHeader.jsx'];
headers.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /<a hover="nav-item" href=\{sectionLink\("#global"\)\} className="nav-item w-inline-block">/g,
    '<Link onClickCapture={() => { window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); }} hover="nav-item" to="/contact" className="nav-item w-inline-block">'
  );
  content = content.replace(
    /<\/a>\s*<\/div>\s*<div hover="navbar_menu" className="navbar_menu">/g,
    '</Link>\n                                    </div>\n                                    <div hover="navbar_menu" className="navbar_menu">'
  );
  content = content.replace(
    /<div hover="text" className="t7 text-dark">Case<\/div>/g,
    '<div hover="text" className="t7 text-dark">Contact</div>'
  );
  content = content.replace(
    /<div hover="text" className="t7 text-dark is-2">Case<\/div>/g,
    '<div hover="text" className="t7 text-dark is-2">Contact</div>'
  );
  fs.writeFileSync(file, content);
});

let curved = fs.readFileSync('src/components/ui/CurvedMenu.jsx', 'utf8');
curved = curved.replace(
  /<a href="#" className="hover:tw-underline" target="_blank" rel="noopener noreferrer">\s*Contact\s*<\/a>/g,
  '<Link onClick={() => window.scrollTo(0,0)} to="/contact" className="hover:tw-underline">Contact</Link>'
);
fs.writeFileSync('src/components/ui/CurvedMenu.jsx', curved);

