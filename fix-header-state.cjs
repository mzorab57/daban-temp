const fs = require('fs');
const file = 'src/components/home/Header.jsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import { useState } from "react";')) {
  // Try to find if react is imported
  if (content.includes('import React')) {
    content = content.replace(/import React.*?from ['"]react['"];?/, '$&\nimport { useState } from "react";');
  } else {
    content = 'import { useState } from "react";\n' + content;
  }
}

if (!content.includes('const [forceCloseMenu, setForceCloseMenu]')) {
  content = content.replace(
    'const productNavActive = pathname.startsWith("/products");',
    'const productNavActive = pathname.startsWith("/products");\n  const [forceCloseMenu, setForceCloseMenu] = useState(false);'
  );
}

fs.writeFileSync(file, content);
