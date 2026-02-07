import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'business.business';
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

export function SEOHead({
  title = "Home Service Nails Siliguri | Wedding & Occasion Nail Art at Home | West Bengal",
  description = "Professional in-home nail extension and nail art in Siliguri, West Bengal. Mobile nail artists: acrylic nails, gel extensions, bridal nail art, custom designs at home. Book now.",
  keywords = "in home nail extension service, home nail extension service, nail extension at home, nail extension Siliguri, nail art at home, home nail art service, nail art service Siliguri, professional nail artist Siliguri, nail technician at home, doorstep nail service, home salon nail service, mobile nail salon, acrylic nail extension Siliguri, gel nail extension Siliguri, bridal nail art Siliguri, wedding nail art at home, nail extension service in Siliguri, best nail artist in Siliguri, affordable nail art Siliguri, book nail artist at home, home nail service booking, Matigara, Pradhan Nagar, Sevoke Road, Dabgram, West Bengal",
  image = "https://pujasnailstudio.com/logo.png",
  url = "https://pujasnailstudio.com",
  type = "business.business",
  businessName = "Puja's Nail Studio",
  businessPhone = "+91 8617682768",
  businessAddress = "Dabgram, Siliguri, West Bengal 734015, India",
  businessHours = "Mo-Su 10:00-20:00",
  services = []
}: SEOHeadProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": businessName,
    "description": description,
    "url": url,
    "telephone": businessPhone,
    "email": "pujabarmanb9@gmail.com",
    "areaServed": "Siliguri and nearby areas",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dabgram",
      "addressLocality": "Siliguri",
      "addressRegion": "West Bengal",
      "postalCode": "734015",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.7271,
      "longitude": 88.3953
    },
    "openingHours": [businessHours],
    "priceRange": "₹₹",
    "paymentAccepted": "Cash, UPI, Card",
    "currenciesAccepted": "INR",
    "image": [
      image,
      "https://pujasnailstudio.com/media/PHOTO-2025-07-07-18-03-03.jpg",
      "https://pujasnailstudio.com/media/PHOTO-2025-07-07-18-04-22.jpg"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Priya Sharma"
        },
        "reviewBody": "Amazing nail art work! Puja is very professional and creative. Highly recommended!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Anjali Das"
        },
        "reviewBody": "Best nail studio in Siliguri! My gel extensions lasted perfectly for 3 weeks."
      }
    ],
    "sameAs": [
      "https://www.instagram.com/pujanailstudio/",
      "https://www.facebook.com/people/puja-Nails-Studio/61578745337761/"
    ],
    ...(services.length > 0 && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "name": "Nail Services",
        "itemListElement": services.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.name,
            "description": service.description
          },
          "price": service.price,
          "priceCurrency": "INR"
        }))
      }
    })
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={businessName} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={businessName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@pujasnailstudio" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Dabgram, Siliguri" />
      <meta name="business:contact_data:locality" content="Siliguri" />
      <meta name="business:contact_data:region" content="West Bengal" />
      <meta name="business:contact_data:postal_code" content="734015" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta name="business:contact_data:phone_number" content={businessPhone} />
      <meta name="business:contact_data:email" content="pujabarmanb9@gmail.com" />
      <meta name="business:contact_data:website" content={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Dabgram, Siliguri" />
      <meta name="geo.position" content="26.7271;88.3953" />
      <meta name="ICBM" content="26.7271, 88.3953" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="Puja's Nail Studio Website" />
    </Helmet>
  );
} 