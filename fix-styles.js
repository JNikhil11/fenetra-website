const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('.js') || file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('d:/Projects - antigravity/FENETRA/fenetra-website/src/app');
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let newContent = content.replace(/<style jsx>\{`/g, '<style>{`');
  
  // Specific fix for blog page backticks
  if (f.includes('blog') && f.includes('page.js')) {
    newContent = newContent.replace(/\\`<td>\\\$\{c\}<\/td>\\`/g, "'<td>' + c + '</td>'");
    newContent = newContent.replace(/`<td>\$\{c\}<\/td>`/g, "'<td>' + c + '</td>'");
  }
  
  if (content !== newContent) {
    fs.writeFileSync(f, newContent, 'utf8');
    console.log('Fixed', f);
  }
});
