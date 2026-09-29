const fs = require('fs');

let content = fs.readFileSync('src/components/ui/CurvedMenu.jsx', 'utf8');
content = content.replace(
	/if \(href === "\/"\) \{[\s\S]*?e\.preventDefault\(\);[\s\S]*?window\.location\.href = "\/";[\s\S]*?return;[\s\S]*?\}/, 
	`if (href === "/") {
			e.preventDefault();
			e.stopPropagation();
			window.location.href = "/";
			return;
		}`
);
fs.writeFileSync('src/components/ui/CurvedMenu.jsx', content);
