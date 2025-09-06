const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg').default;
const imageminPngquant = require('imagemin-pngquant').default;
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
    console.log('🖼️  Starting image optimization...\n');
    
    const startTime = Date.now();
    
    try {
        // Optimize JPEGs and PNGs
        const files = await imagemin(['public/images/*.{jpg,jpeg,png}'], {
            destination: 'public/images',
            plugins: [
                imageminMozjpeg({
                    quality: 85, // Balanced quality/size
                    progressive: true
                }),
                imageminPngquant({
                    quality: [0.6, 0.8], // Min and max quality
                    speed: 1,
                    strip: true // Remove metadata
                })
            ]
        });
        
        console.log('✅ Optimized images:');
        
        let totalSaved = 0;
        
        for (const file of files) {
            const originalPath = file.sourcePath;
            const optimizedPath = file.destinationPath;
            
            try {
                const originalStats = await fs.stat(originalPath.replace('public/images', 'public/images_backup_20250106'));
                const optimizedStats = await fs.stat(optimizedPath);
                
                const saved = originalStats.size - optimizedStats.size;
                const percent = ((saved / originalStats.size) * 100).toFixed(1);
                
                if (saved > 0) {
                    totalSaved += saved;
                    console.log(`   ${path.basename(file.sourcePath)}: ${(originalStats.size/1024).toFixed(0)}KB → ${(optimizedStats.size/1024).toFixed(0)}KB (saved ${percent}%)`);
                }
            } catch (err) {
                // Skip if can't compare
            }
        }
        
        const timeTaken = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`\n🎉 Total saved: ${(totalSaved/1024/1024).toFixed(1)}MB`);
        console.log(`⏱️  Completed in ${timeTaken} seconds`);
        
    } catch (error) {
        console.error('❌ Error optimizing images:', error);
    }
}

optimizeImages();
