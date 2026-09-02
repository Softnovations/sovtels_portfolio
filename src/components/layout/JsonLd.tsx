import { siteConfig } from "@/lib/seo";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: siteConfig.productName,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: siteConfig.description,
        slogan: siteConfig.tagline,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Organization",
        name: "Sovtels",
        url: siteConfig.url,
        description: siteConfig.productName,
        logo: `${siteConfig.url}/images/logo.png`,
      },
      {
        "@type": "WebSite",
        name: siteConfig.productName,
        url: siteConfig.url,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
