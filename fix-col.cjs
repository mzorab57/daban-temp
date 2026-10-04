const fs = require('fs');
const file = 'src/components/home/About.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'className="features-cms_list w-dyn-items tw-grid tw-grid-cols-2 lg:tw-block tw-gap-x-4 tw-gap-y-6"',
  'className="features-cms_list w-dyn-items tw-grid tw-grid-cols-2 md:tw-block lg:tw-block tw-gap-x-4 tw-gap-y-6"'
);

fs.writeFileSync(file, content);
