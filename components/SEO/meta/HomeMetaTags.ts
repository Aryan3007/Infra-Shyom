// Meta Tags Optimization for /
// Based on SEO best practices from AboutSEO.md

export const HomeMetaTags = {
  // Title Tag (50-60 characters) - 43 chars
  title: "iShyom | Elevate Your Digital Vision | Home",
  
  // Meta Description (150-160 characters) - 35 chars
  description: "Creative services for your business",
  
  // Keywords (focus on long-tail keywords)
  keywords: [
    "elevate yourdigital vision",
    "creative solutions for your business",
    "home page",
    "professional services",
    "best solutions"
  ],
  
  // Open Graph Tags
  openGraph: {
    title: "iShyom | Elevate Your Digital Vision | Home",
    description: "Creative services for your business",
    url: "https://www.ishyom.com//",
    image: "https://www.ishyom.com//og-image-home.jpg",
    type: "website",
    siteName: "iShyom"
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "iShyom | Elevate Your Digital Vision | Home",
    description: "Creative services for your business",
    image: "https://www.ishyom.com//twitter-image-home.jpg"
  },
  
  // Additional SEO Meta Tags
  additional: {
    canonical: "https://www.ishyom.com//",
    robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    googlebot: "index,follow",
    viewport: "width=device-width, initial-scale=1",
    charset: "utf-8",
    language: "en",
    revisitAfter: "7 days",
    author: "iShyom",
    
    // Page-specific meta tags
    pageType: "homepage",
    wordCount: 179,
    readingTime: "1 min read"
  }
};

// Usage in React component:
// import { HomeMetaTags } from './HomeMetaTags';
// 
// <Head>
//   <title>{HomeMetaTags.title}</title>
//   <meta name="description" content={HomeMetaTags.description} />
//   <meta name="keywords" content={HomeMetaTags.keywords.join(', ')} />
//   {/* Add other meta tags as needed */}
// </Head>