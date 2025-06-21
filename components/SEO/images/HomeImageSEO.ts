// Image SEO Optimization for /
// Based on AboutSEO.md guidelines

export const HomeImageOptimization = {
  // Images found on this page: 5
  images: [
    {
      src: "/_next/image?url=%2Flogo.png&w=64&q=75",
      alt: "Logo",
      hasAlt: true,
      optimized: {
        webp: "/_next/image?url=%2Flogo.png&w=64&q=75",
        sizes: "100vw",
        loading: "lazy",
        width: 800,
        height: 600
      }
    },
    {
      src: "/_next/image?url=%2Flogo.png&w=48&q=75",
      alt: "Kokonut UI",
      hasAlt: true,
      optimized: {
        webp: "/_next/image?url=%2Flogo.png&w=48&q=75",
        sizes: "100vw",
        loading: "lazy",
        width: 800,
        height: 600
      }
    },
    {
      src: "/placeholder.svg?height=40&width=40",
      alt: "User",
      hasAlt: true,
      optimized: {
        webp: "/placeholder.svg?height=40&width=40",
        sizes: "100vw",
        loading: "lazy",
        width: 800,
        height: 600
      }
    },
    {
      src: "/placeholder.svg?height=40&width=40",
      alt: "User",
      hasAlt: true,
      optimized: {
        webp: "/placeholder.svg?height=40&width=40",
        sizes: "100vw",
        loading: "lazy",
        width: 800,
        height: 600
      }
    },
    {
      src: "/placeholder.svg?height=40&width=40",
      alt: "User",
      hasAlt: true,
      optimized: {
        webp: "/placeholder.svg?height=40&width=40",
        sizes: "100vw",
        loading: "lazy",
        width: 800,
        height: 600
      }
    }
  ],
  
  // Missing ALT text count: 0
  missingAltImages: [

  ],
  
  // SEO Recommendations:
  recommendations: [
    "Convert images to WebP format for better compression",
    "Add descriptive ALT text to all images",
    "Use lazy loading for images below the fold",
    "Compress images without quality loss",
    "Use descriptive file names with keywords",
    "Add structured data for images when appropriate"
  ],
  
  // Optimized ALT text suggestions
  suggestedAltText: [
    "Logo",
    "Kokonut UI",
    "User",
    "User",
    "User"
  ]
};

// Implementation example:
// <img 
//   src={HomeImageOptimization.images[0].optimized.webp} 
//   alt={HomeImageOptimization.images[0].alt}
//   loading="lazy"
//   sizes="100vw"
// />