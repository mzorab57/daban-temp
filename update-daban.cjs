const fs = require('fs');
const glob = require('glob');

// 1. Replace 1997 with 1999 everywhere
const files = glob.sync('src/**/*.{js,jsx,css,html}');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/1997/g, '1999');
  
  // 2. Remove "Logistics" (case insensitive)
  // But wait, they said "Remove Logistics everywhere." 
  // Let's replace "and logistics", ", logistics", "logistics" carefully to avoid double commas.
  // Actually replacing "logistics" with "" might leave commas like "construction, trading, and ."
  // We can write a specific replace for the meta description and intro texts.
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
  }
});
