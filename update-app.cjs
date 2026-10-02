const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

if (!content.includes('ContactPage')) {
  content = content.replace(
    /import AboutPage from "\.\/pages\/AboutPage";/g, 
    'import AboutPage from "./pages/AboutPage";\nimport ContactPage from "./pages/ContactPage";'
  );
  
  content = content.replace(
    /<Route path="\/about" element=\{<AboutPage \/>\} \/>/g, 
    '<Route path="/about" element={<AboutPage />} />\n          <Route path="/contact" element={<ContactPage />} />'
  );
  
  fs.writeFileSync('src/App.jsx', content);
}
