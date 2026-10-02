const fs = require('fs');
const files = ['src/components/home/GlobalHeader.jsx', 'src/components/home/Header.jsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Change width to 1200px
  content = content.replace(/width: 900px;/g, 'width: 92vw;\n                    max-width: 1200px;');

  // Increase the font size for the title slightly
  content = content.replace(/tw-text-2xl/g, 'tw-text-2xl lg:tw-text-3xl');

  // Increase the height of the image container to match the mockup's aspect ratio
  content = content.replace(/tw-h-\[160px\]/g, 'tw-h-[240px]');
  
  // Make the gap a bit bigger for a wider menu
  content = content.replace(/tw-gap-6/g, 'tw-gap-8');
  
  // Also, update the inner padding to be more spacious like the mockup
  content = content.replace(/tw-py-8/g, 'tw-py-10 lg:tw-py-12');
  
  // Keep the container max-w-7xl
  content = content.replace(/tw-max-w-5xl/g, 'tw-max-w-7xl');

  fs.writeFileSync(file, content);
});
