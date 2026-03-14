# Puja's Nail Studio — Schema Markup Reference

**Last updated: March 2026**

Use this as a reference. The live site already injects Local Business, Organization, WebSite, FAQ, and Breadcrumb schema via `index.html` and `client/components/SEOHead.tsx`.

---

## 1. Local Business (BeautySalon) — Homepage

Already in `index.html` `<head>`. Includes:

- **Name:** Puja's Nail Studio  
- **alternateName:** Puja Nails Home Service  
- **url:** https://pujasnailstudio.com  
- **logo:** https://pujasnailstudio.com/logo.png  
- **telephone:** +91-8617682768  
- **email:** pujanailstudio@gmail.com  
- **address:** Dabgram, Siliguri, West Bengal 734015, IN  
- **geo:** 26.7271, 88.3953  
- **areaServed:** Siliguri, West Bengal  
- **paymentAccepted:** Cash, UPI, Google Pay, PhonePe  
- **openingHoursSpecification:** Mon–Sun 10:00–20:00  
- **hasOfferCatalog:** Acrylic extensions, Gel extensions, Bridal nail art, Nail art designs  
- **sameAs:** Instagram, Facebook  

---

## 2. Service schema (for future service pages)

When you add pages like `/services/acrylic-nails`, add this (customise per service):

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Acrylic Nail Extensions at Home – Siliguri",
  "serviceType": "Acrylic Nail Extension",
  "provider": {
    "@type": "BeautySalon",
    "name": "Puja's Nail Studio",
    "url": "https://pujasnailstudio.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Siliguri"
  },
  "description": "Get professional acrylic nail extensions done at home in Siliguri. No salon visit needed. Full set, infills, and nail art all included.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "1200",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "800",
      "maxPrice": "2500",
      "priceCurrency": "INR"
    }
  }
}
```

---

## 3. Breadcrumb schema (for inner pages)

Homepage breadcrumb is in `index.html`. For a service page, use:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pujasnailstudio.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://pujasnailstudio.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Acrylic Nail Extensions", "item": "https://pujasnailstudio.com/services/acrylic-nails" }
  ]
}
```

---

## 4. FAQ schema

Already in `index.html` with:

- Do you provide nail services at home in Siliguri?  
- How long do acrylic nails last?  
- What nail services do you offer?  
- How do I book a nail appointment in Siliguri?  
- Do you offer bridal nail art for weddings?  

---

## Testing

- Rich results: https://search.google.com/test/rich-results  
- Validator: https://validator.schema.org/
