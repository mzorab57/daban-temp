const fs = require('fs');

['src/components/home/Header.jsx', 'src/components/home/GlobalHeader.jsx'].forEach(file => {
	let content = fs.readFileSync(file, 'utf8');
	
	// Replace onClick with onClickCapture and add setTimeout for scroll
	content = content.replace(/onClick=\{\(\) => window\.scrollTo\(0, 0\)\}/g, 
        'onClickCapture={() => { window.scrollTo(0, 0); setTimeout(() => window.scrollTo(0, 0), 50); }}');
	
	fs.writeFileSync(file, content);
});
