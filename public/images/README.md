# Media Files

This directory is for storing local media assets for the beauty parlour website.

## Structure:

```
images/
├── gallery/        # Gallery images
├── services/       # Service images
├── hero/           # Hero banner images
├── logos/          # Logo variations
└── testimonials/   # Testimonial photos
```

## Usage:

- Place image files here and reference them using `/images/...` paths.
- Use WebP or AVIF formats for better compression.
- Optimize images to 1200px max width for web use.
- For development, you may use external URLs like Unsplash, but replace with local images for production.

## Current Media Links:

All images are currently using optimized Unsplash URLs. For production, download and place local copies here, then update the data files in `lib/data/` to use local paths like `/images/gallery/bridal-1.jpg`.

## Generating Local Images:

If you need placeholder images, you can use services like:
- Unsplash.com (free)
- Pexels.com (free)
- Shutterstock.com (paid)

Download and rename images descriptively before placing here.
