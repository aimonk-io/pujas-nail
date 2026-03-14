import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PHONE = "+91 8617682768";
const PHONE_TEL = "tel:+918617682768";
const EMAIL = "pujanailstudio@gmail.com";
const AREAS = "Dabgram, Matigara, Pradhan Nagar, Sevoke Road, Hakimpara & nearby";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.2901832790126!2d88.43752087535059!3d26.703175069064145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2710d18370bbb72b%3A0xd12b9f713cf3b1d1!2sPuja%20Nails%20Studio!5e0!3m2!1sen!2sin!4v1773475043638!5m2!1sen!2sin";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "Puja's Nail Studio",
  url: "https://www.pujanails.com/contact",
  telephone: "+918617682768",
  email: "pujanailstudio@gmail.com",
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
    latitude: 26.703175069064145,
    longitude: 88.43752087535059,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "20:00",
  },
};

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us | Puja's Nail Studio Siliguri"
        description="Book nail artist at home in Siliguri. Call, WhatsApp or email Puja's Nail Studio. Serving Dabgram, Matigara, Pradhan Nagar, Sevoke Road, Hakimpara & nearby."
        url="https://pujasnailstudio.com/contact"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <PageHeader />
        <main className="container mx-auto px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Book your at-home nail appointment in Siliguri. Call, WhatsApp, or book online — we're here to help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            <Card className="border-primary/20 bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Call / WhatsApp</CardTitle>
                <CardDescription className="mt-2">
                  <a
                    href={PHONE_TEL}
                    className="text-xl font-bold text-primary hover:text-accent transition-colors"
                    aria-label="Call Puja's Nail Studio"
                  >
                    {PHONE}
                  </a>
                  <br />
                  Available 7 days a week
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription className="mt-2">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-lg font-medium text-primary hover:text-accent transition-colors break-all"
                    aria-label="Email Puja's Nail Studio"
                  >
                    {EMAIL}
                  </a>
                  <br />
                  Quick response
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-2">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>Hours</CardTitle>
                <CardDescription>
                  10:00 AM – 8:00 PM
                  <br />
                  7 days a week
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <Separator className="mb-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="max-w-2xl mx-auto border-primary/20 bg-card">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <CardTitle>Areas We Serve</CardTitle>
                    <CardDescription>
                      Siliguri, West Bengal — {AREAS}. Home nail service at your doorstep.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Find us on Google Maps</h2>
            <p className="text-muted-foreground text-center mb-6 max-w-xl mx-auto">
              Puja Nails Studio — Siliguri. Visit our location or book a home service.
            </p>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="600"
                height="450"
                style={{ border: 0, width: "100%", minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Puja Nails Studio location on Google Maps"
                className="block w-full min-h-[350px] md:min-h-[450px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4 mt-8"
          >
            <a
              href="https://www.instagram.com/pujanailstudio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/people/puja-Nails-Studio/61578745337761/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button size="lg" asChild>
              <a href="/#booking">Book Appointment Online</a>
            </Button>
          </motion.div>
        </main>
      </div>
    </>
  );
}
