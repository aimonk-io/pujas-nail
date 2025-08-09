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
  title = "At-Home Nail Services in Siliguri | Nail Extensions & Custom Nail Art | We Come To You",
  description = "Mobile nail studio in Siliguri offering at-home nail extensions and custom nail art. Salon-quality results at your place. Open 7 days a week. Book your at-home appointment today!",
  keywords = "home service nails, at-home nail service, mobile nail technician, acrylic extensions at home, gel extensions at home, nail extensions, Siliguri, custom nail art, nail art at home, home salon, beauty at home",
  image = "https://pujasnailstudio.com/logo.png",
  url = "https://pujasnailstudio.com",
  type = "business.business",
  businessName = "Puja's Nail Studio",
  businessPhone = "+91 8101267974",
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
    ]
  };

  if (services.length > 0) {
    structuredData.hasOfferCatalog = {
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
    };
  }

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