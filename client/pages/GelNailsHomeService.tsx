import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Sparkles, Phone } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PHONE_TEL = "tel:+918617682768";
const WA_LINK = "https://wa.me/918617682768";
const BASE = "https://www.pujanails.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gel Nails Home Service in Siliguri",
  serviceType: "Gel Nail Extension",
  provider: { "@type": "BeautySalon", name: "Puja's Nail Studio", url: BASE },
  areaServed: { "@type": "City", name: "Siliguri" },
  description: "Gel nail extensions and gel polish at your home in Siliguri. Lightweight, natural-looking, chip-resistant. Home service across Siliguri.",
  offers: { "@type": "Offer", priceCurrency: "INR", price: "1000" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
    { "@type": "ListItem", position: 3, name: "Gel Nails Home Service Siliguri", item: `${BASE}/gel-nails-home-service-siliguri` },
  ],
};

export default function GelNailsHomeService() {
  return (
    <>
      <SEOHead
        title="Gel Nails Home Service Siliguri | Gel Extensions at Home | Puja's Nail Studio"
        description="Gel nail extensions and gel polish at your home in Siliguri. Natural look, chip-resistant, lasts 3–4 weeks. Home service. Book now."
        url={`${BASE}/gel-nails-home-service-siliguri`}
        keywords="gel nails home service Siliguri, gel nail extension at home Siliguri, gel polish home service Siliguri, gel nails Siliguri"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <PageHeader />
        <main className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Gel Nails Home Service in Siliguri
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Lightweight, natural-looking gel nail extensions and gel polish — done at your home in Siliguri. Chip-resistant and long-lasting, with no salon visit required.
            </p>

            <Card className="mb-10 border-primary/20 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Why Choose Gel Nails
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Gel nails are lighter than acrylics and give a more natural finish. They're odourless, chip-resistant, and typically last 3–4 weeks. Ideal if you want length and shine without the bulk. We offer gel extensions and gel polish manicures at your doorstep across Siliguri.</p>
                <p>Our gel nails home service covers Siliguri, Dabgram, Matigara, Pradhan Nagar, Sevoke Road, Hakimpara and nearby. We bring all equipment and products — you just relax at home.</p>
              </CardContent>
            </Card>

            <Card className="mb-10 border-primary/20 bg-card">
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
                <CardDescription>Gel nail extensions start from ₹1,000. Gel polish and nail art are priced separately. WhatsApp us for an exact quote.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-center text-xl">Book Gel Nails Home Service in Siliguri</CardTitle>
                <CardDescription className="text-center">
                  WhatsApp or call to book. We come to you anywhere in Siliguri.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap justify-center gap-3">
                <Button size="lg" asChild>
                  <a href={`${WA_LINK}?text=${encodeURIComponent("Hi! I want to book gel nails home service in Siliguri.")}`} target="_blank" rel="noopener noreferrer">
                    Book on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={PHONE_TEL}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call to Book
                  </a>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <Link to="/#booking">Online Booking</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </main>
      </div>
    </>
  );
}
