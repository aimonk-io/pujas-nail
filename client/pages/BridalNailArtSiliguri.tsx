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
  name: "Bridal Nail Art at Home in Siliguri",
  serviceType: "Bridal Nail Art",
  provider: { "@type": "BeautySalon", name: "Puja's Nail Studio", url: BASE },
  areaServed: { "@type": "City", name: "Siliguri" },
  description: "Custom bridal nail art for weddings in Siliguri. Home service — designs to match your lehenga and jewellery. Book 2–3 weeks before your wedding.",
  offers: { "@type": "Offer", priceCurrency: "INR", price: "1500" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
    { "@type": "ListItem", position: 3, name: "Bridal Nail Art Siliguri", item: `${BASE}/bridal-nail-art-siliguri` },
  ],
};

export default function BridalNailArtSiliguri() {
  return (
    <>
      <SEOHead
        title="Bridal Nail Art Siliguri | Wedding Nails at Home | Puja's Nail Studio"
        description="Custom bridal nail art at your home in Siliguri. Wedding nails to match your lehenga and jewellery. Home service. Book 2–3 weeks in advance."
        url={`${BASE}/bridal-nail-art-siliguri`}
        keywords="bridal nail art Siliguri, wedding nails at home Siliguri, bridal nail design Siliguri, wedding nail art West Bengal"
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
              Bridal Nail Art Siliguri
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Stunning wedding nails done at your home in Siliguri. We create custom bridal nail art to match your lehenga, saree, and jewellery — so you look perfect on your big day.
            </p>

            <Card className="mb-10 border-primary/20 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Why Book Bridal Nail Art With Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We specialise in bridal nail art for weddings and special occasions across Siliguri, West Bengal. Our home service means no salon runs — we come to you with all tools and products. Designs can be coordinated with your outfit, jewellery, and mehndi for a complete bridal look.</p>
                <p>We recommend booking a trial session 4–6 weeks before the wedding and your final appointment 2–3 days before. From classic French to 3D gems and custom art, we work with you to create the perfect bridal nails.</p>
              </CardContent>
            </Card>

            <Card className="mb-10 border-primary/20 bg-card">
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
                <CardDescription>Bridal nail art starts from ₹1,500. Final price depends on design complexity and length. We'll give you an exact quote when you book.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-center text-xl">Book Bridal Nail Art in Siliguri</CardTitle>
                <CardDescription className="text-center">
                  WhatsApp or call to book your bridal nail appointment. We serve Siliguri, Dabgram, Matigara, Pradhan Nagar, Sevoke Road & nearby.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap justify-center gap-3">
                <Button size="lg" asChild>
                  <a href={`${WA_LINK}?text=${encodeURIComponent("Hi! I want to book bridal nail art in Siliguri.")}`} target="_blank" rel="noopener noreferrer">
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
