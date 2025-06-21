// Internal Linking Strategy for /
// Based on SEO best practices from AboutSEO.md

export const HomeInternalLinks = {
  // Current page info
  currentPage: {
    path: "/",
    title: "iShyom | Elevate Your Digital Vision",
    type: "homepage"
  },
  
  // Recommended internal links FROM this page
  outboundLinks: [
    {
      url: "/",
      anchorText: "Home",
      context: "Navigate back to our homepage for more information",
      priority: "high"
    },
    {
      url: "/about",
      anchorText: "About Our Services",
      context: "Learn more about our company and expertise",
      priority: "medium"
    },
    {
      url: "/contact",
      anchorText: "Get In Touch",
      context: "Contact us for personalized consultation",
      priority: "high"
    },
    {
      url: "/services",
      anchorText: "Our Professional Services",
      context: "Explore our comprehensive service offerings",
      priority: "high"
    }
  ],
  
  // Recommended internal links TO this page
  inboundLinks: [
    {
      fromPage: "/",
      anchorText: "iShyom | Elevate Your Digital Vision",
      context: "Link from homepage to this important page"
    },
    {
      fromPage: "/services",
      anchorText: "Learn About iShyom | Elevate Your Digital Vision",
      context: "Cross-link from services page"
    }
  ],
  
  // SEO Benefits of Internal Linking
  seoImpact: {
    pageAuthority: "Distributes link equity throughout the site",
    userExperience: "Helps users discover related content",
    crawlability: "Assists search engines in discovering and indexing pages",
    topicalRelevance: "Establishes topical relationships between pages"
  },
  
  // Implementation guidelines
  bestPractices: [
    "Use descriptive anchor text with relevant keywords",
    "Link to related and valuable content",
    "Avoid over-optimization with exact match anchors",
    "Ensure links are contextually relevant",
    "Use a mix of exact, partial, and branded anchor text",
    "Link to both deeper pages and important top-level pages"
  ]
};

// Usage example:
// {HomeInternalLinks.outboundLinks.map(link => (
//   <a key={link.url} href={link.url} title={link.context}>
//     {link.anchorText}
//   </a>
// ))}