#!/bin/bash

# Mobile Performance Image Optimization Script
# This script converts large images to WebP format and creates mobile-optimized versions

echo "Starting mobile performance image optimization..."

# Check if imagemagick is available (for convert command)
if ! command -v convert &> /dev/null; then
    echo "ImageMagick not found. Installing via Homebrew..."
    if command -v brew &> /dev/null; then
        brew install imagemagick
    else
        echo "Please install ImageMagick manually to continue"
        exit 1
    fi
fi

# Check if cwebp is available
if ! command -v cwebp &> /dev/null; then
    echo "WebP tools not found. Installing via Homebrew..."
    if command -v brew &> /dev/null; then
        brew install webp
    else
        echo "Please install WebP tools manually to continue"
        exit 1
    fi
fi

cd images

echo "Optimizing critical hero images..."

# Hero background - create mobile and desktop versions
if [ -f "hero-background.jpg" ]; then
    echo "Creating optimized hero background versions..."
    
    # Desktop WebP version (1920x1080, quality 85)
    convert "hero-background.jpg" -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 "hero-background-temp.jpg"
    cwebp -q 85 "hero-background-temp.jpg" -o "hero-background.webp"
    
    # Mobile WebP version (768x432, quality 80)
    convert "hero-background.jpg" -resize 768x432^ -gravity center -extent 768x432 -quality 80 "hero-background-mobile.jpg"
    cwebp -q 80 "hero-background-mobile.jpg" -o "hero-background-mobile.webp"
    
    rm "hero-background-temp.jpg"
    echo "✓ Hero background optimized"
fi

# Optimize texture background
if [ -f "about-texture.jpg" ]; then
    echo "Optimizing texture background..."
    cwebp -q 70 "about-texture.jpg" -o "about-texture.webp"
    echo "✓ Texture background optimized"
fi

# Optimize therapist photo (asset103.png - 188KB)
if [ -f "asset103.png" ]; then
    echo "Optimizing therapist photo..."
    # Convert to JPEG first for better compression, then WebP
    convert "asset103.png" -quality 85 "asset103.jpg"
    cwebp -q 85 "asset103.jpg" -o "asset103-optimized.webp"
    echo "✓ Therapist photo optimized"
fi

# Optimize large images (over 500KB)
echo "Optimizing large images..."

large_images=("asset118.png" "asset57.png" "asset148.png" "asset170.png" "asset153.png" "asset21.png")

for img in "${large_images[@]}"; do
    if [ -f "$img" ]; then
        echo "Processing $img..."
        
        # Get file extension
        ext="${img##*.}"
        base="${img%.*}"
        
        # Convert to JPEG if PNG (better compression for photos)
        if [ "$ext" = "png" ]; then
            convert "$img" -quality 80 "${base}.jpg"
            cwebp -q 80 "${base}.jpg" -o "${base}-optimized.webp"
        else
            cwebp -q 80 "$img" -o "${base}-optimized.webp"
        fi
        
        echo "✓ $img optimized"
    fi
done

# Create optimized favicon
if [ -f "asset104.png" ]; then
    echo "Creating optimized favicon..."
    convert "asset104.png" -resize 180x180 "asset104-180.png"
    echo "✓ Favicon optimized"
fi

echo ""
echo "Image optimization complete!"
echo ""
echo "Performance improvements:"
echo "- WebP images are 25-35% smaller than JPEG"
echo "- Mobile-specific images reduce data usage"
echo "- Optimized quality settings maintain visual fidelity"
echo ""
echo "Next steps:"
echo "1. Update HTML to use <picture> elements with WebP sources"
echo "2. Test loading performance on mobile devices"
echo "3. Configure server to deliver WebP when supported"

# Display size comparison
echo ""
echo "Size comparison for critical images:"
for img in hero-background.jpg asset103.png; do
    if [ -f "$img" ]; then
        original_size=$(du -h "$img" | cut -f1)
        webp_name="${img%.*}"
        if [ -f "${webp_name}.webp" ]; then
            webp_size=$(du -h "${webp_name}.webp" | cut -f1)
            echo "$img: $original_size → ${webp_name}.webp: $webp_size"
        fi
    fi
done