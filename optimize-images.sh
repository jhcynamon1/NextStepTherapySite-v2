#!/bin/bash

echo "🖼️  Starting image optimization..."
echo ""

# Install sips (built into macOS) and use it for optimization
# This is safer and doesn't require npm packages

# Function to optimize a single image
optimize_image() {
    local file=$1
    local filename=$(basename "$file")
    local size_before=$(stat -f%z "$file")
    
    # Skip if already optimized (less than 150KB)
    if [ $size_before -lt 153600 ]; then
        echo "✓ $filename already optimized ($(($size_before/1024))KB)"
        return
    fi
    
    # For JPEGs
    if [[ $file == *.jpg ]] || [[ $file == *.jpeg ]]; then
        # Resize if larger than 1920px wide
        sips -Z 1920 "$file" --out "$file" 2>/dev/null
        # Compress to 85% quality
        sips -s format jpeg -s formatOptions 85 "$file" --out "$file" 2>/dev/null
    fi
    
    # For PNGs
    if [[ $file == *.png ]]; then
        # Resize if larger than 1920px
        sips -Z 1920 "$file" --out "$file" 2>/dev/null
        # Convert large PNGs to JPEG if not transparent
        if [ $size_before -gt 512000 ]; then
            echo "  Converting large PNG to JPEG: $filename"
            sips -s format jpeg -s formatOptions 85 "$file" --out "${file%.png}.jpg" 2>/dev/null
            rm "$file"
            file="${file%.png}.jpg"
        fi
    fi
    
    local size_after=$(stat -f%z "$file" 2>/dev/null || echo $size_before)
    local saved=$((($size_before - $size_after) / 1024))
    
    if [ $saved -gt 0 ]; then
        echo "✅ $filename: $(($size_before/1024))KB → $(($size_after/1024))KB (saved ${saved}KB)"
    fi
}

# Process all images
total_before=0
total_after=0

for file in public/images/*.{jpg,jpeg,png}; do
    if [ -f "$file" ]; then
        size_before=$(stat -f%z "$file")
        total_before=$((total_before + size_before))
        
        optimize_image "$file"
        
        size_after=$(stat -f%z "$file" 2>/dev/null || echo $size_before)
        total_after=$((total_after + size_after))
    fi
done

echo ""
echo "🎉 Optimization complete!"
echo "   Total before: $(($total_before/1024/1024))MB"
echo "   Total after: $(($total_after/1024/1024))MB"
echo "   Saved: $((($total_before - $total_after)/1024/1024))MB"