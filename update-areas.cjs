const fs = require('fs');

// Update SiteHead.jsx
let siteHead = fs.readFileSync('src/components/SiteHead.jsx', 'utf8');
siteHead = siteHead.replace(/construction, trading, and logistics/gi, 'Construction, Robot Trading, Robotics, Drone Equipment, Small Aircraft, Firefighting Equipment, Security Solutions, General Trading, Dealerships, and Government Partnerships');
siteHead = siteHead.replace(/construction, commercial activities, and logistics services/gi, 'construction, commercial activities, robotics, drone equipment, and security solutions');
fs.writeFileSync('src/components/SiteHead.jsx', siteHead);

// Update About.jsx summary text
let about = fs.readFileSync('src/components/home/About.jsx', 'utf8');
about = about.replace(/construction, trading, and logistics/gi, 'Construction, Robot Trading, Robotics, Drone Equipment, Small Aircraft, Firefighting Equipment, Security Solutions, General Trading, Dealerships, and Government Partnerships');
about = about.replace(/construction, commercial activities, and logistics services/gi, 'construction, commercial activities, robotics, drone equipment, and security solutions');

// Update the features array in About.jsx
const newFeatures = `const features = [
    {
        title: "Construction",
        titleClass: "p5 tw-text-primary-blue lg:tw-text-white",
        desc: "Delivering high-quality construction projects and trusted trading solutions across diverse industries.",
        descClass: "p7 tw-text-white",
    },
    {
        title: "Robot Trading & Robotics",
        titleClass: "p5 tw-text-primary-blue lg:tw-text-white",
        desc: "Supplying innovative robotic technologies that enhance automation and industrial performance.",
        descClass: "p7 tw-text-white",
    },
    {
        title: "Drone Equipment & Small Aircraft",
        titleClass: "p5 tw-text-primary-blue lg:tw-text-white",
        desc: "Advanced aerial platforms for inspection, monitoring, and diverse industrial applications.",
        descClass: "p7 tw-text-white",
    },
    {
        title: "Firefighting Equipment",
        titleClass: "p5 tw-text-primary-blue lg:tw-text-white",
        desc: "Providing advanced fire protection systems and safety solutions that meet international standards.",
        descClass: "p7 tw-text-white",
    },
    {
        title: "Security Solutions",
        titleClass: "p5 tw-text-primary-blue lg:tw-text-white",
        desc: "State-of-the-art security systems and barriers for public and private infrastructure.",
        descClass: "p7 tw-text-white",
    },
    {
        title: "General Trading & Dealerships",
        titleClass: "p5 tw-text-primary-blue lg:tw-text-white",
        desc: "Comprehensive trading services and official dealerships for major global brands.",
        descClass: "p7 tw-text-white",
    },
    {
        title: "Government Partnerships",
        titleClass: "p5 tw-text-primary-blue lg:tw-text-white",
        desc: "Creating strategic partnerships with local and international organizations to drive sustainable growth.",
        descClass: "p7 tw-text-white",
    }
];`;
about = about.replace(/const features = \[\s*\{[\s\S]*?\}\s*\];/m, newFeatures);
fs.writeFileSync('src/components/home/About.jsx', about);

// Remove logistics from products.js
let products = fs.readFileSync('src/data/products.js', 'utf8');
products = products.replace(/, logistics/gi, '');
products = products.replace(/and logistics/gi, '');
products = products.replace(/logistics, /gi, '');
products = products.replace(/logistics/gi, 'operations');
fs.writeFileSync('src/data/products.js', products);

