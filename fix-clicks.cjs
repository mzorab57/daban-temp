const fs = require('fs');

['src/components/home/Header.jsx', 'src/components/home/GlobalHeader.jsx'].forEach(file => {
	let content = fs.readFileSync(file, 'utf8');
	
	content = content.replace(/<a onClick=\{\(\) => window\.location\.href = "\/"\}/g, '<a onClick={(e) => { e.preventDefault(); window.location.href = "/"; }}');
	
	// Also for the logo: 
	// Currently Logo is: <a menu-close="mobile" data-div-reveal="true" href="/"
	// Let's add onClick with preventDefault to Logo as well
	content = content.replace(/<a menu-close="mobile" data-div-reveal="true" href="\/"/g, '<a onClick={(e) => { e.preventDefault(); window.location.href = "/"; }} menu-close="mobile" data-div-reveal="true" href="/"');
	
	fs.writeFileSync(file, content);
});
