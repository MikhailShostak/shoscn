const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'registry', 'public');
const dest = path.join(__dirname, '..', 'out');

function copyRecursive(source, destination) {
  if (!fs.existsSync(source)) {
    return;
  }

  fs.mkdirSync(destination, { recursive: true });

  fs.readdirSync(source).forEach((file) => {
    const srcPath = path.join(source, file);
    const destPath = path.join(destination, file);

    if (fs.statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

copyRecursive(src, dest);
console.log('Registry files copied to output directory');