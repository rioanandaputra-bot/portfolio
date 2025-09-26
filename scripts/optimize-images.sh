#!/bin/bash

# Install sharp-cli if not available
if ! command -v sharp &> /dev/null; then
    echo "Installing sharp-cli for image optimization..."
    npm install -g sharp-cli
fi

# Create optimized directory
mkdir -p public/optimized

# Convert large PNG files to WebP with compression
echo "Converting large PNG files to WebP..."

# Function to convert and compress images
convert_image() {
    local input="$1"
    local output="$2"
    local quality="$3"

    if [ -f "$input" ]; then
        echo "Converting $input to $output..."
        npx sharp -i "$input" -o "$output" --webp --quality "$quality"
    fi
}

# Convert the largest images with different quality settings
convert_image "public/Frame 1 (1).png" "public/optimized/frame-1-1.webp" 80
convert_image "public/Frame 1 (2).png" "public/optimized/frame-1-2.webp" 80
convert_image "public/Frame 1.png" "public/optimized/frame-1.webp" 80
convert_image "public/NextWebsite.png" "public/optimized/next-website.webp" 85
convert_image "public/edit2.png" "public/optimized/edit2.webp" 85
convert_image "public/CardImage.png" "public/optimized/card-image.webp" 85
convert_image "public/SpaceWebsite.png" "public/optimized/space-website.webp" 85
convert_image "public/foodorder.png" "public/optimized/food-order.webp" 85
convert_image "public/reactsocialmedia1.png" "public/optimized/react-social-media.webp" 85
convert_image "public/project2.png" "public/optimized/project2.webp" 85
convert_image "public/shoemap.png" "public/optimized/shoemap.webp" 85

echo "Image optimization complete!"