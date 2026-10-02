const fs = require('fs');
const files = ['src/components/home/GlobalHeader.jsx', 'src/components/home/Header.jsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // We need to replace the content inside the Link
  const regex = /<h3 className="tw-text-\[#112D6B\] tw-text-2xl lg:tw-text-3xl tw-font-bold tw-mb-2 group-hover:tw-text-blue-600 tw-transition-colors">\{product\.name\}<\/h3>\s*<p className="tw-text-gray-500 tw-text-sm tw-mb-6 tw-max-w-xs">\{product\.heroEyebrow \|\| product\.specs\}<\/p>\s*<div className="tw-w-full tw-h-\[240px\] tw-flex tw-items-center tw-justify-center tw-bg-gray-50 tw-rounded-2xl group-hover:tw-scale-105 group-hover:tw-shadow-lg tw-transition-all tw-duration-300 tw-p-6">\s*<img src=\{imgSrc\} alt=\{product\.name\} className="tw-max-w-full tw-max-h-full tw-object-contain" \/>\s*<\/div>/;

  const replacement = `<div className="tw-flex tw-flex-col tw-flex-grow">
                                                                    <h3 className="tw-text-[#112D6B] tw-text-2xl lg:tw-text-3xl tw-font-bold tw-mb-2 group-hover:tw-text-blue-600 tw-transition-colors">{product.name}</h3>
                                                                    <p className="tw-text-gray-500 tw-text-sm tw-mb-6 tw-max-w-xs">{product.heroEyebrow || product.specs}</p>
                                                                </div>
                                                                <div className="tw-w-full tw-h-[240px] tw-flex tw-items-center tw-justify-center tw-bg-gray-50 tw-rounded-2xl group-hover:tw-scale-105 group-hover:tw-shadow-lg tw-transition-all tw-duration-300 tw-p-6 tw-mt-auto">
                                                                    <img src={imgSrc} alt={product.name} className={\`tw-max-w-full tw-max-h-full tw-object-contain \${product.id === 'th600' ? 'tw-scale-[1.6]' : ''}\`} />
                                                                </div>`;
                                                                
  content = content.replace(regex, replacement);
  
  // Also make sure the Link itself has tw-h-full
  content = content.replace(/className="tw-flex tw-flex-col tw-items-center tw-text-center tw-group tw-no-underline hover:tw-no-underline"/g, 'className="tw-flex tw-flex-col tw-h-full tw-items-center tw-text-center tw-group tw-no-underline hover:tw-no-underline"');

  fs.writeFileSync(file, content);
});
