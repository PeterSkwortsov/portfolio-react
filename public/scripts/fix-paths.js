// scripts/fix-paths.js
const fs = require('fs');
const path = require('path');

const buildPath = path.join(__dirname, '../build');

// Фиксим index.html
const indexPath = path.join(buildPath, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(/src="\//g, 'src="./');
html = html.replace(/href="\//g, 'href="./');
fs.writeFileSync(indexPath, html, 'utf8');

// Фиксим asset-manifest.json
const manifestPath = path.join(buildPath, 'asset-manifest.json');
if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    Object.keys(manifest.files).forEach(key => {
        if (manifest.files[key].startsWith('/')) {
            manifest.files[key] = '.' + manifest.files[key];
        }
    });
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
}

console.log('✅ Пути исправлены!');