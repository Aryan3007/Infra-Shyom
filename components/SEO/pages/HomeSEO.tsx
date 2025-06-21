import React from 'react';
import SEOHead from '../SEO/SEOHead';
import JSONLD from '../SEO/JSONLD';

/**
 * Advanced SEO Component for /
 * 
 * SEO Strategy:
 * - Primary Keyword: digital transformation services
 * - Search Intent: commercial
 * - Target Word Count: 1500
 * - Featured Snippet Target: What is digital transformation?
 * 
 * Semantic Keywords: digital strategy, business innovation, technology consulting, software development, ux design, web design, mobile app development, cloud solutions, data analytics, artificial intelligence, digital marketing, automation, e-commerce solutions, enterprise solutions, it consulting
 * Long-tail Keywords: how to implement a digital transformation strategy, best digital transformation services for small businesses, digital transformation consultant near me, affordable digital transformation solutions, what are the benefits of digital transformation?, digital transformation examples for the retail industry, enterprise digital transformation roadmap, digital transformation services pricing, digital transformation for increased efficiency, digital transformation strategy for manufacturing
 */

const HomeSEO = () => {
  // Advanced Schema Markup with multiple types
  const schemas = {
    // Main WebPage Schema
    webpage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Transform Your Business | Digital Solutions by iShyom",
      "description": "Unlock your business's potential with iShyom's digital transformation services. Drive innovation and growth with our expert solutions. Contact us today!",
      "url": typeof window !== 'undefined' ? window.location.href : '',
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": typeof window !== 'undefined' ? window.location.origin + '/og-image.jpg' : ''
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Your Company Name"
      },
      "publisher": {
        "@type": "Organization", 
        "name": "Your Company Name",
        "logo": {
          "@type": "ImageObject",
          "url": typeof window !== 'undefined' ? window.location.origin + '/logo.png' : ''
        }
      },
      "mainEntity": {
        "@type": "Thing",
        "name": "digital transformation services",
        "description": "Unlock your business's potential with iShyom's digital transformation services. Drive innovation and growth with our expert solutions. Contact us today!"
      }
    },

    // FAQ Schema for Featured Snippets
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is digital transformation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlock your business's potential with iShyom's digital transformation services. Drive innovation and growth with our expert solutions. Contact us today!"
          }
        }
      ]
    },

    // BreadcrumbList Schema
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": typeof window !== 'undefined' ? window.location.origin : ''
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Home",
          "item": typeof window !== 'undefined' ? window.location.href : ''
        }
      ]
    }
  };

  // All semantic and long-tail keywords combined
  const allKeywords = [
    "digital transformation services",
    ...(["digital strategy","business innovation","technology consulting","software development","ux design","web design","mobile app development","cloud solutions","data analytics","artificial intelligence","digital marketing","automation","e-commerce solutions","enterprise solutions","it consulting"]),
    ...(["how to implement a digital transformation strategy","best digital transformation services for small businesses","digital transformation consultant near me","affordable digital transformation solutions","what are the benefits of digital transformation?","digital transformation examples for the retail industry","enterprise digital transformation roadmap","digital transformation services pricing","digital transformation for increased efficiency","digital transformation strategy for manufacturing"])
  ].filter(Boolean);

  return (
    <>
      <SEOHead
        title="Transform Your Business | Digital Solutions by iShyom"
        description="Unlock your business's potential with iShyom's digital transformation services. Drive innovation and growth with our expert solutions. Contact us today!"
        keywords={allKeywords}
        canonicalUrl={typeof window !== 'undefined' ? window.location.href : ''}
        ogImage={typeof window !== 'undefined' ? window.location.origin + '/og-image.jpg' : ''}
      />
      
      {/* Multiple Schema Types for Better SEO */}
      <JSONLD data={schemas.webpage} />
      <JSONLD data={schemas.faq} />
      <JSONLD data={schemas.breadcrumb} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="googlebot" content="index,follow" />
      
      {/* Semantic Keywords for Better Understanding */}
      <meta name="semantic-keywords" content="digital strategy, business innovation, technology consulting, software development, ux design, web design, mobile app development, cloud solutions, data analytics, artificial intelligence, digital marketing, automation, e-commerce solutions, enterprise solutions, it consulting" />
      
      {/* Content Optimization Hints */}
      <meta name="content-optimization" content="word-count:1500" />
      
      {/* Featured Snippet Optimization */}
      <meta name="featured-snippet-target" content="What is digital transformation?" />
    </>
  );
};

export default HomeSEO;

/*
ADVANCED SEO IMPLEMENTATION NOTES:
====================================

1. CONTENT OPTIMIZATION RECOMMENDATIONS:
   1. H1: Digital Transformation Services for Business Growth
   2. H2: What is Digital Transformation?
   3. H2: Our Digital Transformation Process
   4. H2: Key Benefits of Digital Transformation
   5. H2: Digital Transformation Solutions We Offer
   6. H2: Case Studies: Successful Digital Transformations
   7. H2: Why Choose iShyom for Your Digital Transformation?
   8. H2: Frequently Asked Questions

2. TECHNICAL SEO IMPROVEMENTS NEEDED:
   1. optimize images with WebP format and descriptive alt text
   2. implement lazy loading for images and videos
   3. add relevant internal links to service pages, case studies, and blog posts
   4. optimize for Core Web Vitals (LCP, FID, CLS) using performance monitoring tools
   5. ensure mobile-first design and responsiveness across all devices
   6. minify CSS and JavaScript files
   7. leverage browser caching

3. CONTENT GAPS TO FILL:
   1. Add section about: case studies showcasing successful digital transformations
   2. Add section about: detailed explanation of the digital transformation process
   3. Add section about: specific industry solutions offered (e.g., healthcare, finance)
   4. Add section about: pricing information or package options
   5. Add section about: team member profiles highlighting expertise

4. COMPETITOR INSIGHTS:
   1. competitor X ranks for 'digital transformation consulting' - opportunity to create content around consulting services
   2. top pages average 2000+ words with in-depth explanations and examples
   3. most competitors highlight case studies and testimonials prominently
   4. many competitors offer a free consultation or assessment
   5. competitors frequently use visual aids (infographics, videos) to explain complex concepts

5. FEATURED SNIPPET STRATEGY:
   - Target Question: What is digital transformation?
   - Content Type: paragraph
   - Structure: Define digital transformation in a concise paragraph (40-50 words) highlighting its benefits and key components. Use clear and simple language.

6. KEYWORD DENSITY TARGETS:
   - Primary Keyword (digital transformation services): 1-2% for primary keyword, 0.5-1% for semantic keywords, ensure natural language usage
   - Semantic Keywords: 0.5-1% each
   - Natural integration is key - avoid keyword stuffing

7. RECOMMENDED SCHEMA TYPES:
   1. Article
   2. FAQ
   3. BreadcrumbList
   4. Organization
   5. Service

IMPLEMENTATION CHECKLIST:
□ Add 1500+ words of high-quality content
□ Implement semantic heading structure (H1, H2, H3)
□ Add FAQ section targeting featured snippets
□ Optimize images with alt text and WebP format
□ Add internal links to related pages
□ Implement lazy loading for performance
□ Test Core Web Vitals scores
□ Monitor keyword rankings and adjust strategy
*/