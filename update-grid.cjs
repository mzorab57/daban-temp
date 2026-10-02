const fs = require('fs');

let content = fs.readFileSync('src/pages/ContactPage.jsx', 'utf8');

// Change grid from 3 cols to 2 cols
content = content.replace(
  /tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3/g, 
  'tw-grid tw-grid-cols-1 md:tw-grid-cols-2'
);

// Add md:col-span-2 to the Location card to make it take full width below
content = content.replace(
  /{[\s\S]*?\/\* Location Section \*\/[\s\S]*?className="tw-bg-white/g,
  (match) => {
    return match.replace('className="tw-bg-white', 'className="md:tw-col-span-2 tw-bg-white');
  }
);

// Maybe also change the aspect ratio of the map to make it wide and nice instead of 4/3
content = content.replace(/tw-aspect-\[4\/3\]/g, 'tw-aspect-video md:tw-aspect-[21/9]');

fs.writeFileSync('src/pages/ContactPage.jsx', content);
