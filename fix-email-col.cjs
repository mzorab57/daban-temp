const fs = require('fs');
let content = fs.readFileSync('src/pages/ContactPage.jsx', 'utf8');

// The emails section starts right after {/* Emails Section */}
// Let's replace md:tw-col-span-2 tw-bg-white back to tw-bg-white just for Emails
const emailsMarker = '{/* Emails Section */}';
const parts = content.split(emailsMarker);
parts[1] = parts[1].replace('className="md:tw-col-span-2 tw-bg-white', 'className="tw-bg-white');
content = parts.join(emailsMarker);

fs.writeFileSync('src/pages/ContactPage.jsx', content);
