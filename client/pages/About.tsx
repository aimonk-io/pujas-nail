import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Sparkles, Shield, Clock } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Puja's Nail Studio | Home Nail Service Siliguri"
        description="Meet Puja's Nail Studio — professional at-home nail art and extensions in Siliguri since 2020. Quality, hygiene, and creativity at your doorstep."
        url="https://pujasnailstudio.com/about"
      />
      <div className="min-h-screen bg-background">
        <PageHeader />
        <main className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Where artistry meets precision. We bring beautiful nails and confident smiles to your home in Siliguri.
            </p>

            <Card className="mb-12 border-primary/20 bg-card">
              <CardHeader>
                <CardTitle className="sr-only">Our story</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Puja's Nail Studio</strong> started in 2020 with a simple idea: you shouldn't have to travel to a salon for professional nail care. We're a home-service nail studio based in Siliguri, West Bengal, bringing acrylic and gel extensions, bridal nail art, and custom nail designs right to your doorstep.
                  </p>
                  <p>
                    Whether it's a wedding, a festival, or just a treat for yourself, we work with you to create the look you want in the comfort of your own home. We serve Siliguri and nearby areas including Dabgram, Matigara, Pradhan Nagar, Sevoke Road, and Hakimpara — with fully sanitised tools, professional products, and flexible timings.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Separator className="mb-10" />

            <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Us</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Heart, title: "Quality & Care", text: "We use professional-grade products and take time to get the shape and design right." },
                { icon: Shield, title: "Hygiene First", text: "Sterilised tools, single-use where needed, and clean practices for every client." },
                { icon: Sparkles, title: "Creative Nail Art", text: "From classic French to 3D bridal designs — we love bringing your ideas to life." },
                { icon: Clock, title: "At Your Convenience", text: "We come to you, 7 days a week. Book a slot that fits your schedule." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Card className="h-full border-primary/20 bg-card">
                    <CardHeader>
                      <item.icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.text}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Separator className="mb-10" />

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-center text-xl">Ready to book?</CardTitle>
                <CardDescription className="text-center">
                  Book your at-home nail appointment in Siliguri.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Button size="lg" asChild>
                  <Link to="/#booking">Book Appointment</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </main>
      </div>
    </>
  );
}
