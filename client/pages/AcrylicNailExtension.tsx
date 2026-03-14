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
  name: "Acrylic Nail Extension at Home in Siliguri",
  serviceType: "Acrylic Nail Extension",
  provider: { "@type": "BeautySalon", name: "Puja's Nail Studio", url: BASE },
  areaServed: { "@type": "City", name: "Siliguri" },
  description: "Professional acrylic nail extensions at your home in Siliguri. Full set, infills, and nail art. Durable and long-lasting.",
  offers: { "@type": "Offer", priceCurrency: "INR", price: "1200" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
    { "@type": "ListItem", position: 3, name: "Acrylic Nail Extension Siliguri", item: `${BASE}/acrylic-nail-extension-siliguri` },
  ],
};

export default function AcrylicNailExtension() {
  return (
    <>
      <SEOHead
        title="Acrylic Nail Extension at Home Siliguri | Puja's Nail Studio"
        description="Get professional acrylic nail extensions at your home in Siliguri. Full sets, infills & nail art from ₹1,200. Home service across Siliguri."
        url={`${BASE}/acrylic-nail-extension-siliguri`}
        keywords="acrylic nail extension Siliguri, acrylic nails at home Siliguri, nail extension home service Siliguri, acrylic full set Siliguri"
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
              Acrylic Nail Extension at Home in Siliguri
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Strong, durable acrylic nail extensions done at your doorstep in Siliguri. We bring everything to you — full sets, infills, and custom nail art in any shape you want.
            </p>

            <Card className="mb-10 border-primary/20 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Why Choose Acrylic Extensions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Acrylic nails are ideal if you want length and strength that lasts. They're perfect for square, almond, coffin, or stiletto shapes and hold up well to daily use. We do full sets and regular infills so your nails stay looking great for weeks.</p>
                <p>Our home service means you get salon-quality acrylic extensions without leaving your house. We serve Siliguri, Dabgram, Matigara, Pradhan Nagar, Sevoke Road, Hakimpara and nearby areas. All tools and products are brought to you.</p>
              </CardContent>
            </Card>

            <Card className="mb-10 border-primary/20 bg-card">
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
                <CardDescription>Acrylic nail extensions start from ₹1,200 for a full set. Infills and nail art are priced separately. Message us for an exact quote.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-center text-xl">Book Acrylic Nail Extension in Siliguri</CardTitle>
                <CardDescription className="text-center">
                  WhatsApp or call to book. We come to your home anywhere in Siliguri.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap justify-center gap-3">
                <Button size="lg" asChild>
                  <a href={`${WA_LINK}?text=${encodeURIComponent("Hi! I want to book acrylic nail extension at home in Siliguri.")}`} target="_blank" rel="noopener noreferrer">
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
