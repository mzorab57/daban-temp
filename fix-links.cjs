const fs = require('fs');

['src/components/home/Header.jsx', 'src/components/home/GlobalHeader.jsx'].forEach(file => {
	let content = fs.readFileSync(file, 'utf8');
	
	// Convert all </a> back to </Link> blindly (this will restore all React Router links)
	content = content.replace(/<\/a>/g, '</Link>');
	
	// Convert the logo <a href="/"> back to <Link to="/"> (to undo my sed)
	content = content.replace(/<a menu-close="mobile" data-div-reveal="true" href="\/"/g, '<Link onClick={() => window.scrollTo(0, 0)} menu-close="mobile" data-div-reveal="true" to="/"');
	
    // There was one legitimate <a> tag in GlobalHeader.jsx:
    // <a href="mailto:info@dabangroup.com" ... >
    // Let's fix its closing tag
    content = content.replace(/(<a[^>]*href="mailto:info@dabangroup.com"[^>]*>[\s\S]*?)<\/Link>/g, '$1</a>');

	// Now implement the fix correctly: Make Home and Logo use window.location.href instead of <Link>
	// Find Logo Link and change to native <a>
	content = content.replace(/<Link onClick=\{\(\) => window\.scrollTo\(0, 0\)\} menu-close="mobile" data-div-reveal="true" to="\/"/g, '<a menu-close="mobile" data-div-reveal="true" href="/"');
	// Replace the corresponding closing tag for Logo (since Logo has <img> inside, we can just replace the first </Link> after it)
    content = content.replace(/(<a menu-close="mobile" data-div-reveal="true" href="\/".*?>[\s\S]*?)<\/Link>/g, '$1</a>');

	// Find Home Link and change to native <a>
	content = content.replace(/<Link onClick=\{\(\) => window\.scrollTo\(0, 0\)\} hover="nav-item" to="\/" className="nav-item w-inline-block">/g, '<a onClick={() => window.location.href = "/"} hover="nav-item" href="/" className="nav-item w-inline-block">');
    // Replace the corresponding closing tag for Home
    content = content.replace(/(<a onClick=\{\(\) => window\.location\.href = "\/"\} hover="nav-item" href="\/" className="nav-item w-inline-block">[\s\S]*?)<\/Link>/g, '$1</a>');

	fs.writeFileSync(file, content);
});
