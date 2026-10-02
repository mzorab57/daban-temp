const fs = require('fs');
const files = ['src/components/home/GlobalHeader.jsx', 'src/components/home/Header.jsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Change top: 95px; to top: 65px;
  content = content.replace(/top: 95px;/g, 'top: 65px;');

  // The pseudo element before has top: -30px and height: 30px
  content = content.replace(/top: -30px;/g, 'top: -25px;');
  content = content.replace(/height: 30px;/g, 'height: 25px;');

  fs.writeFileSync(file, content);
});
