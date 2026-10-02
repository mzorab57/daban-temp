const fs = require('fs');

['src/components/home/Header.jsx', 'src/components/home/GlobalHeader.jsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Revert all </Link> to </a>
  content = content.replace(/<\/Link>/g, '</a>');
  
  // Specifically fix React Router Links
  const links = ['/about', '/services', '/products', '/contact'];
  
  links.forEach(link => {
    // Find the block starting with <Link ... to="link" and ending with </a>
    const regex = new RegExp(`(<Link[^>]*to="${link}"[^>]*>[\\s\\S]*?<\\/div>\\s*<div hover="bg"[^>]*><\\/div>\\s*<\\/div>\\s*)<\\/a>`, 'g');
    content = content.replace(regex, '$1</Link>');
  });

  // Also fix the dropdown links for TH600 etc
  const dropdownLinks = ['/products/th600', '/products/em15', '/products/em135', '/products'];
  dropdownLinks.forEach(link => {
      const regex = new RegExp(`(<Link[^>]*to="${link}"[^>]*>[\\s\\S]*?)<\\/a>`, 'g');
      content = content.replace(regex, '$1</Link>');
  });
  
  fs.writeFileSync(file, content);
});
