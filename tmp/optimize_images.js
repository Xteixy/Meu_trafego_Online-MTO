const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const MAX_SIZE_MB = 1.0;

async function optimizeImages() {
    const files = fs.readdirSync(publicDir);

    for (const file of files) {
        if (!file.endsWith('.png') && !file.endsWith('.jpg')) continue;

        const filePath = path.join(publicDir, file);
        const stats = fs.statSync(filePath);
        const sizeMb = stats.size / (1024 * 1024);

        if (sizeMb > MAX_SIZE_MB) {
            const ext = path.extname(file);
            const webpName = file.replace(ext, '.webp');
            const webpPath = path.join(publicDir, webpName);

            console.log(`Optimizing: ${file} (${sizeMb.toFixed(2)} MB) -> ${webpName}`);

            try {
                await sharp(filePath)
                    .webp({ quality: 80, effort: 6 })
                    .toFile(webpPath);

                const newStats = fs.statSync(webpPath);
                const newSizeMb = newStats.size / (1024 * 1024);
                console.log(`✅ Success: ${webpName} (${newSizeMb.toFixed(2)} MB)`);
                console.log(`📉 Reduced by ${((1 - newSizeMb / sizeMb) * 100).toFixed(1)}%`);

            } catch (err) {
                console.error(`❌ Failed to convert ${file}:`, err);
            }
        }
    }
}

optimizeImages();
