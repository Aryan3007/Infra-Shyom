import React from 'react';
import SEOHead from '../SEO/SEOHead';
import JSONLD from '../SEO/JSONLD';

/**
 * Advanced SEO Component for /
 * 
 * SEO Strategy:
 * - Primary Keyword: digital marketing agency
 * - Search Intent: commercial
 * - Target Word Count: 1500
 * - Featured Snippet Target: What services does a digital marketing agency provide?
 * 
 * Semantic Keywords: web design agency, branding agency, seo services, content marketing, social media marketing, website development, marketing strategy, online advertising, digital solutions, growth marketing, lead generation, ui/ux design, conversion optimization, marketing automation
 * Long-tail Keywords: best digital marketing agency for small business, how to choose a digital marketing agency, digital marketing agency near me [city], affordable digital marketing services, digital marketing agency for ecommerce websites, what does a digital marketing agency do?, top digital marketing agency in [industry], digital marketing agency pricing guide, hire a digital marketing agency, increase website traffic with digital marketing
 */

const HomeSEO = () => {
  // Advanced Schema Markup with multiple types
  const schemas = {
    // Main WebPage Schema
    webpage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Digital Marketing Agency | Grow Your Business Online",
      "description": "iShyom Solutions is a leading digital marketing agency. We help businesses grow online through SEO, social media, web design & more. Get a free consultation today!",
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
        "name": "digital marketing agency",
        "description": "iShyom Solutions is a leading digital marketing agency. We help businesses grow online through SEO, social media, web design & more. Get a free consultation today!"
      }
    },

    // FAQ Schema for Featured Snippets
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does a digital marketing agency provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "iShyom Solutions is a leading digital marketing agency. We help businesses grow online through SEO, social media, web design & more. Get a free consultation today!"
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
    "digital marketing agency",
    ...(["web design agency","branding agency","seo services","content marketing","social media marketing","website development","marketing strategy","online advertising","digital solutions","growth marketing","lead generation","ui/ux design","conversion optimization","marketing automation"]),
    ...(["best digital marketing agency for small business","how to choose a digital marketing agency","digital marketing agency near me [city]","affordable digital marketing services","digital marketing agency for ecommerce websites","what does a digital marketing agency do?","top digital marketing agency in [industry]","digital marketing agency pricing guide","hire a digital marketing agency","increase website traffic with digital marketing"])
  ].filter(Boolean);

  return (
    <>
      <SEOHead
        title="Digital Marketing Agency | Grow Your Business Online"
        description="iShyom Solutions is a leading digital marketing agency. We help businesses grow online through SEO, social media, web design & more. Get a free consultation today!"
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
      <meta name="semantic-keywords" content="web design agency, branding agency, seo services, content marketing, social media marketing, website development, marketing strategy, online advertising, digital solutions, growth marketing, lead generation, ui/ux design, conversion optimization, marketing automation" />
      
      {/* Content Optimization Hints */}
      <meta name="content-optimization" content="word-count:1500" />
      
      {/* Featured Snippet Optimization */}
      <meta name="featured-snippet-target" content="What services does a digital marketing agency provide?" />
    </>
  );
};

export default HomeSEO;

/*
ADVANCED SEO IMPLEMENTATION NOTES:
====================================

1. CONTENT OPTIMIZATION RECOMMENDATIONS:
   1. H1: Digital Marketing Agency | Grow Your Business
   2. H2: Our Digital Marketing Services
   3. H2: Why Choose iShyom as Your Digital Marketing Partner?
   4. H2: Case Studies
   5. H2: Client Testimonials
   6. H2: Frequently Asked Questions (FAQ)

2. TECHNICAL SEO IMPROVEMENTS NEEDED:
   1. optimize images with WebP format and descriptive alt text
   2. implement lazy loading for images and videos
   3. add internal links to related service pages and blog posts
   4. optimize for Core Web Vitals (LCP, FID, CLS)
   5. implement breadcrumb navigation
   6. ensure mobile-first design and responsiveness
   7. minification of CSS and JavaScript files

3. CONTENT GAPS TO FILL:
   1. Add section about: case studies of successful digital marketing campaigns
   2. Add section about: detailed service offerings and pricing
   3. Add section about: team bios and expertise
   4. Add section about: client testimonials and reviews
   5. Add section about: blog posts on latest digital marketing trends

4. COMPETITOR INSIGHTS:
   1. competitor A ranks for 'digital marketing agency pricing' - create a pricing page or blog post comparing packages
   2. top pages average 2000+ words of in-depth content
   3. most competitors lack a dedicated 'Results' or 'Case Studies' section showcasing past successes
   4. competitor B has a high domain authority - build high-quality backlinks to improve authority
   5. competitor C uses video content effectively - create engaging video explainers and testimonials

5. FEATURED SNIPPET STRATEGY:
   - Target Question: What services does a digital marketing agency provide?
   - Content Type: paragraph
   - Structure: Start with a direct answer listing the key services (SEO, social media, web design, etc.), then elaborate on each service briefly.

6. KEYWORD DENSITY TARGETS:
   - Primary Keyword (digital marketing agency): 1-2% for 'digital marketing agency', 0.5-1% for semantic keywords
   - Semantic Keywords: 0.5-1% each
   - Natural integration is key - avoid keyword stuffing

7. RECOMMENDED SCHEMA TYPES:
   1. Organization
   2. LocalBusiness
   3. Service
   4. WebSite
   5. FAQPage
   6. Article
   7. Review

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