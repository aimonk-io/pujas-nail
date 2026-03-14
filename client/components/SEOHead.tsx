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
  businessAddress = "Dabgram, Siliguri, West Bengal 734015, India",
  businessHours = "Mo-Su 10:00-20:00",
  services = [],
}: SEOHeadProps) {
  const isHome = isHomepage({ title, url });

  // ── Homepage: NailSalon JSON-LD (for Google Maps / rich results) ───────
  const nailSalonSchema = isHome
    ? {
        "@context": "https://schema.org",
        "@type": "NailSalon",
        name: "Puja's Nail Studio",
        alternateName: "Puja Nails Siliguri",
        url: DEFAULT_HOME_URL,
        logo: "https://www.pujanails.com/logo.png",
        image: [
          "https://www.pujanails.com/media/79392099205029536.jpeg",
          "https://www.pujanails.com/media/2308513475607877659.jpeg",
          "https://www.pujanails.com/media/5026456562858868939.jpeg",
        ],
        description:
          "Puja's Nail Studio offers professional home service nail art in Siliguri, West Bengal. Acrylic nails, gel extensions, bridal nail art and custom designs delivered at your doorstep.",
        telephone: "+918617682768",
        email: "pujanailstudio@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dabgram",
          addressLocality: "Siliguri",
          addressRegion: "West Bengal",
          postalCode: "734015",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "26.7271",
          longitude: "88.3953",
        },
        areaServed: [
          { "@type": "City", name: "Siliguri" },
          { "@type": "Place", name: "Pradhan Nagar" },
          { "@type": "Place", name: "Pradhanagar" },
          { "@type": "Place", name: "Matigara" },
          { "@type": "Place", name: "Dabgram" },
          { "@type": "Place", name: "Hakimpara" },
          { "@type": "Place", name: "Sevoke Road" },
          { "@type": "Place", name: "Hill Cart Road" },
          { "@type": "Place", name: "Siliguri Bazar" },
          { "@type": "Place", name: "Ashram Para" },
          { "@type": "Place", name: "Punjabi Para" },
          { "@type": "Place", name: "Desh Bandhu Para" },
          { "@type": "Place", name: "Khopalasi" },
        ],
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Google Pay, PhonePe",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "10:00",
            closes: "20:00",
          },
        ],
        ...(services.length > 0 && {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Nail Services",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: s.name,
                description: s.description,
                provider: { "@type": "NailSalon", name: "Puja's Nail Studio" },
                areaServed: { "@type": "City", name: "Siliguri" },
                offers: {
                  "@type": "Offer",
                  priceCurrency: "INR",
                  price: s.price.replace(/[₹,]/g, ""),
                  availability: "https://schema.org/InStock",
                },
              },
            })),
          },
        }),
        sameAs: [
          "https://www.instagram.com/pujanailstudio",
          "https://www.facebook.com/pujanailstudio",
        ],
      }
    : null;

  // Keep for backwards compatibility (localBusinessSchema name used in script tag)
  const localBusinessSchema = nailSalonSchema;

  // ── Homepage: FAQ Schema ────────────────────────────────────────────
  const faqSchema = isHome
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you provide nail services at home in Siliguri?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Puja's Nail Studio provides professional nail art and nail extension services at your home anywhere in Siliguri, West Bengal. We bring all tools, products, and equipment to your doorstep.",
            },
          },
          {
            "@type": "Question",
            name: "How long do acrylic nails last?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Acrylic nails typically last 2–3 weeks before needing an infill. With proper care they can last up to 4 weeks. We recommend infills every 2–3 weeks.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between acrylic and gel nails?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Acrylic nails are stronger and better for longer lengths. Gel nails are lighter, more natural-looking, and odourless. Gel nails last 3–4 weeks. We recommend the best option for your lifestyle during your appointment.",
            },
          },
          {
            "@type": "Question",
            name: "How do I book a nail appointment at home in Siliguri?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can book by calling or WhatsApp messaging us at +91 8617682768. Share your location in Siliguri, the service you want, and your preferred date and time. We confirm within a few hours.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer bridal nail art in Siliguri?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! We specialise in bridal nail art for weddings and special occasions in Siliguri. We recommend booking at least 2–3 weeks before your wedding date.",
            },
          },
          {
            "@type": "Question",
            name: "What areas in Siliguri do you cover for home nail service?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We cover all major areas of Siliguri including Pradhan Nagar, Hakimpara, Sevoke Road, Hill Cart Road, Matigara, Dabgram, and surrounding localities.",
            },
          },
        ],
      }
    : null;

  // ── Homepage: Breadcrumb Schema ─────────────────────────────────────
  const breadcrumbSchema = isHome
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: DEFAULT_HOME_URL }],
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
