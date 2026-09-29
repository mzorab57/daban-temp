const fs = require('fs');

['src/components/home/Header.jsx', 'src/components/home/GlobalHeader.jsx'].forEach(file => {
	let content = fs.readFileSync(file, 'utf8');
	
    let count = 0;
    while (true) {
        let newContent = content.replace(/(<a[^>]*>(?:(?!<\/a>|<\/Link>)[^])*?)<\/Link>/, '$1</a>');
        if (newContent === content) break;
        content = newContent;
        count++;
        if (count > 100) break; // Infinite loop safeguard
    }

	fs.writeFileSync(file, content);
});
