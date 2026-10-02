const fs = require('fs');
let content = fs.readFileSync('src/pages/ContactPage.jsx', 'utf8');

// Replace the specific class string for the Location section
const locationMarker = '{/* Location Section */}';
const targetClass = 'className="tw-bg-white tw-p-10 tw-rounded-[32px] tw-shadow-2xl tw-shadow-[#112D6B]/5 tw-border tw-border-gray-100 tw-transition-transform hover:-tw-translate-y-2 tw-duration-300"';

if (content.includes(locationMarker)) {
  const parts = content.split(locationMarker);
  parts[1] = parts[1].replace(targetClass, 'className="md:tw-col-span-2 tw-bg-white tw-p-10 tw-rounded-[32px] tw-shadow-2xl tw-shadow-[#112D6B]/5 tw-border tw-border-gray-100 tw-transition-transform hover:-tw-translate-y-2 tw-duration-300"');
  content = parts.join(locationMarker);
}

fs.writeFileSync('src/pages/ContactPage.jsx', content);
