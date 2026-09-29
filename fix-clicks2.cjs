const fs = require('fs');

['src/components/home/Header.jsx', 'src/components/home/GlobalHeader.jsx'].forEach(file => {
	let content = fs.readFileSync(file, 'utf8');
	
	// Replace previous onClick with onClickCapture
	content = content.replace(/onClick=\{\(e\) => \{ e\.preventDefault\(\); window\.location\.href = "\/"; \}\}/g, 
        'onClickCapture={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = "/"; }}');
	
	fs.writeFileSync(file, content);
});
