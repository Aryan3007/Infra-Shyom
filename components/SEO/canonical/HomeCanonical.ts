// Canonical URL Configuration for /
// Prevents duplicate content issues as per AboutSEO.md

export const HomeCanonical = {
  // Primary canonical URL
  canonical: "https://www.ishyom.com//",
  
  // Alternative URLs that should redirect to canonical
  alternativeUrls: [
    "https://www.ishyom.com///",
    "https://www.ishyom.com//?utm_source=google",
    "https://www.ishyom.com//#section",
    "https://www.ishyom.com//"
  ].filter(url => url !== "https://www.ishyom.com//"),
  
  // Hreflang for international SEO (if applicable)
  hreflang: [
    {
      lang: "en",
      url: "https://www.ishyom.com//"
    },
    {
      lang: "x-default",
      url: "https://www.ishyom.com//"
    }
  ],
  
  // Page variations and their canonical relationships
  pageVariations: {
    mobile: "https://www.ishyom.com//",
    desktop: "https://www.ishyom.com//",
    amp: "https://www.ishyom.com//?amp=1"
  },
  
  // SEO benefits of canonical URLs
  benefits: [
    "Prevents duplicate content penalties",
    "Consolidates link equity to preferred URL",
    "Helps search engines understand preferred version",
    "Improves crawl efficiency",
    "Reduces confusion in search results"
  ],
  
  // Implementation notes
  implementation: {
    htmlTag: '<link rel="canonical" href="https://www.ishyom.com//" />',
    httpHeader: 'Link: <https://www.ishyom.com//>; rel="canonical"',
    xmlSitemap: "Include only canonical URLs in sitemap"
  }
};

// React implementation:
// <link rel="canonical" href={HomeCanonical.canonical} />
// 
// Next.js Head component:
// <Head>
//   <link rel="canonical" href={HomeCanonical.canonical} />
//   {HomeCanonical.hreflang.map(lang => (
//     <link key={lang.lang} rel="alternate" hrefLang={lang.lang} href={lang.url} />
//   ))}
// </Head>