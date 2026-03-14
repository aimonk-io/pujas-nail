import { motion } from "framer-motion";
import { Sparkles, Phone } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PHONE_TEL = "tel:+918617682768";

const nailExtensions = [
  { name: "Acrylic Extension", price: "₹1,200", duration: "90 mins", description: "Durable acrylic nail extensions with custom length and shape" },
  { name: "Polly Gel Extension", price: "₹900", duration: "75 mins", description: "Flexible and lightweight gel extensions for natural look" },
  { name: "Gel Extension", price: "₹1,000", duration: "80 mins", description: "Professional gel nail extensions with long-lasting durability" },
  { name: "Foot Nail Extensions", price: "₹1,150", duration: "100 mins", description: "Specialized nail extensions for toes with custom designs" },
];

const nailArtTypes = [
  { name: "Marble Nail Art", price: "₹800", duration: "60 mins", description: "Elegant marble effect with swirling patterns and colors" },
  { name: "Brush Nail Art", price: "₹600", duration: "45 mins", description: "Hand-painted designs using fine brushes for detailed artwork" },
  { name: "French Nail Art", price: "₹700", duration: "50 mins", description: "Classic French nails with artistic variations and designs" },
  { name: "3D Nail Art", price: "₹1,200", duration: "90 mins", description: "Three-dimensional designs with gems, charms, and textures" },
  { name: "Blooming Nail Art", price: "₹1,000", duration: "75 mins", description: "Beautiful blooming gel technique with flower-like patterns" },
  { name: "Cats Eye Nail Art", price: "₹850", duration: "65 mins", description: "Magnetic cat's eye effect with shimmering metallic finish" },
];

function ServiceCard({
  name,
  price,
  duration,
  description,
  delay = 0,
}: {
  name: string;
  price: string;
  duration: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Card className="h-full border-primary/20 bg-card hover:shadow-lg transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg">{name}</CardTitle>
            <Badge variant="secondary" className="shrink-0">
              {duration}
            </Badge>
          </div>
          <p className="text-xl font-semibold text-primary">{price}</p>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Services() {
  return (
    <>
      <SEOHead
        title="Nail Services at Home in Siliguri | Extensions & Nail Art | Puja's Nail Studio"
        description="Professional nail extensions and nail art at your home in Siliguri. Acrylic, gel extensions, bridal nail art, French, 3D & more. Book now."
        url="https://pujasnailstudio.com/services"
      />
      <div className="min-h-screen bg-background">
        <PageHeader />
        <main className="container mx-auto px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-10 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional in-home nail extension and nail art across Siliguri, West Bengal. We bring the salon to you — acrylic & gel extensions, bridal nail art, and custom designs at your doorstep.
            </p>
          </motion.div>

          <Separator className="mb-10" />

          <Tabs defaultValue="extensions" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="extensions">Nail Extensions</TabsTrigger>
              <TabsTrigger value="art">Nail Art</TabsTrigger>
            </TabsList>
            <TabsContent value="extensions" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {nailExtensions.map((service, i) => (
                  <ServiceCard
                    key={service.name}
                    {...service}
                    delay={i * 0.05}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="art" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {nailArtTypes.map((service, i) => (
                  <ServiceCard
                    key={service.name}
                    {...service}
                    delay={i * 0.05}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Separator className="my-12" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Card className="max-w-2xl mx-auto border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <div className="flex justify-center">
                  <Sparkles className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-center text-2xl">Ready to book?</CardTitle>
                <CardDescription className="text-center">
                  All services include home visit in Siliguri & nearby. Same-day appointments may be available.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="/#booking">Book Online</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={PHONE_TEL} className="gap-2">
                    <Phone className="h-5 w-5" />
                    Call / WhatsApp
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </main>
      </div>
    </>
  );
}
