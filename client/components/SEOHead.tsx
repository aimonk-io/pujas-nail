import { Helmet } from "react-helmet-async";

const DEFAULT_HOME_URL = "https://www.pujanails.com";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "business.business";
  businessName?: string;
  businessPhone?: string;
  businessAddress?: string;
  businessHours?: string;
  services?: Array<{
    name: string;
    price: string;
    description: string;
  }>;
}

function isHomepage(props: SEOHeadProps): boolean {
  // Homepage is the only page that doesn't pass a custom title
  return props.title == null;
}

export function SEOHead({
  title,
  description,
  keywords = "nail art at home Siliguri, nail extension Siliguri, home nail service Siliguri, acrylic nails Siliguri, gel nails Siliguri, bridal nail art Siliguri, nail artist home service West Bengal",
  image = "https://www.pujanails.com/media/79392099205029536.jpeg",
  url = DEFAULT_HOME_URL,
  type = "website",
  businessName = "Puja's Nail Studio",
  businessPhone = "+918617682768",
  businessAddress = "Dabgram, Siliguri, West Bengal 734006, India",
  businessHours = "Mo-Su 10:00-20:00",
  services = [],
}: SEOHeadProps) {
  const isHome = isHomepage({ title, url });

  // ── Block 1: NailSalon + LocalBusiness (Google Search & Maps rich results) ─────
  const nailSalonSchema = isHome
    ? {
        "@context": "https://schema.org",
        "@type": "NailSalon",
        name: "Puja Nails Studio",
        url: DEFAULT_HOME_URL,
        telephone: "+91-8617682768",
        email: "pujanailstudio@gmail.com",
        image: "https://www.pujanails.com/logo.png",
        description:
          "Professional nail art at home in Siliguri, West Bengal. Mobile nail artists offering acrylic nails, gel extensions, bridal nail art and custom designs.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dabgram",
          addressLocality: "Siliguri",
          addressRegion: "West Bengal",
          postalCode: "734006",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.7031703,
          longitude: 88.4400958,
        },
        openingHours: ["Mo-Su 10:00-20:00"],
        priceRange: "₹₹",
        areaServed: {
          "@type": "City",
          name: "Siliguri",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Nail Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nail Art at Home Siliguri" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Acrylic Nail Extension" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gel Nail Polish" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal Nail Art" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Nail Art at Home" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nail Art Design" } },
          ],
        },
        sameAs: [
          "https://www.google.com/maps/place/Puja+Nails+Studio/@26.7031703,88.4400958",
          "https://www.instagram.com/pujanailstudio",
          "https://www.facebook.com/pujanailstudio",
        ],
      }
    : null;

  // Keep for backwards compatibility (localBusinessSchema name used in script tag)
  const localBusinessSchema = nailSalonSchema;

  // ── Block 2: FAQPage schema (for FAQ rich results) ────────────────────
  const faqSchema = isHome
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you provide nail art at home in Siliguri?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Puja Nails Studio provides professional nail art services at home across Siliguri and nearby areas in West Bengal. Our mobile nail artists come fully equipped to your address.",
            },
          },
          {
            "@type": "Question",
            name: "How do I book a home nail appointment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can book by calling or WhatsApping us at +91-8617682768. We will confirm your appointment and send a certified nail artist to your home in Siliguri.",
            },
          },
          {
            "@type": "Question",
            name: "Do you do bridal nail art at home?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we specialise in bridal and wedding nail art at home in Siliguri. We offer custom bridal nail designs, acrylic extensions, and gel nails for your wedding day.",
            },
          },
          {
            "@type": "Question",
            name: "What nail services do you offer at home?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer acrylic nail extensions, gel nail polish, gel extensions, bridal nail art, custom nail art designs, nail removal, and nail repair — all at your home in Siliguri.",
            },
          },
          {
            "@type": "Question",
            name: "Which areas in Siliguri do you serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We serve all major areas of Siliguri including Pradhanagar, Sevoke Road, Hakimpara, Babupara, Hill Cart Road, Matigara, Bagdogra, and surrounding localities in West Bengal.",
            },
          },
        ],
      }
    : null;

  // ── Block 3: BreadcrumbList schema (helps sub-pages in search) ────────
  const breadcrumbSchema = isHome
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${DEFAULT_HOME_URL}/` },
          { "@type": "ListItem", position: 2, name: "Bridal Nail Art Siliguri", item: `${DEFAULT_HOME_URL}/bridal-nail-art-siliguri` },
          { "@type": "ListItem", position: 3, name: "Acrylic Nail Extension Siliguri", item: `${DEFAULT_HOME_URL}/acrylic-nail-extension-siliguri` },
          { "@type": "ListItem", position: 4, name: "Gel Nails Home Service Siliguri", item: `${DEFAULT_HOME_URL}/gel-nails-home-service-siliguri` },
        ],
      }
    : null;

  // Meta values: use defaults for homepage, else passed props
  const metaTitle =
    title ??
    "Home Nail Art & Extensions in Siliguri | Puja's Nail Studio";
  const metaDescription =
    description ??
    "Professional nail art & extensions at your home in Siliguri, West Bengal. Acrylic nails, gel nails, bridal nail art & custom designs. Book now on WhatsApp: +91 8617682768.";
  const canonicalUrl = url;
  const ogImage =
    isHome ? "https://www.pujanails.com/media/79392099205029536.jpeg" : (image || "https://www.pujanails.com/media/79392099205029536.jpeg");

  return (
    <Helmet>
      <html lang="en" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={businessName} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Nail art done at home in Siliguri by Puja's Nail Studio" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Mobile / PWA / Robots */}
      <meta name="theme-color" content="#CC0022" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Geo / Local */}
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Siliguri, West Bengal" />
      <meta name="geo.position" content="26.7271;88.3953" />
      <meta name="ICBM" content="26.7271, 88.3953" />

      {/* Preload LCP hero image (homepage only) */}
      {isHome && (
        <link rel="preload" as="image" href="https://www.pujanails.com/media/79392099205029536.jpeg" />
      )}

      {/* Schema JSON-LD */}
      {localBusinessSchema && (
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      )}
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
}
