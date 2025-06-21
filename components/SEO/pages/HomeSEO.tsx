
import SEOHead from '../SEO/SEOHead';
import JSONLD from '../SEO/JSONLD';

const HomeSEO = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "iShyom | Creative Digital Solutions for Your Business",
    "description": "Transform your business with iShyom's creative services. We deliver innovative digital solutions, from design to cutting-edge technology. Contact us today!",
    "url": window.location.href
  };

  return (
    <>
      <SEOHead
        title="iShyom | Creative Digital Solutions for Your Business"
        description="Transform your business with iShyom's creative services. We deliver innovative digital solutions, from design to cutting-edge technology. Contact us today!"
        keywords={["digital solutions","creative services","web design","branding","digital marketing"]}
      />
      <JSONLD data={pageSchema} />
    </>
  );
};

export default HomeSEO;
