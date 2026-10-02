const fs = require('fs');

['src/components/home/Header.jsx', 'src/components/home/GlobalHeader.jsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  let i = 0;
  let newContent = '';
  let inLink = false;

  const lines = content.split('\n');
  for (let line of lines) {
    if (line.includes('<Link')) {
      inLink = true;
    }
    if (line.includes('</a>') && inLink) {
      line = line.replace('</a>', '</Link>');
      inLink = false;
    }
    if (line.includes('<a ') && !line.includes('href={sectionLink("#global")}')) {
        // Just in case it's another <a> we don't want to mess up.
        // But the logo is also an <a>, we shouldn't close it as </Link>.
        // Logo has e.preventDefault() so it's in an <a> tag.
        inLink = false;
    }
    newContent += line + '\n';
  }
  
  fs.writeFileSync(file, newContent);
});
