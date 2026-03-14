import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PHONE = "+91 8617682768";
const PHONE_TEL = "tel:+918617682768";

const faqItems = [
  {
    section: "General Questions",
    items: [
      {
        q: "Do you provide nail services at home in Siliguri?",
        a: "Yes! We are a home service nail artist based in Siliguri, West Bengal. We come to your home with all tools, products, and equipment — you don't need to travel to a salon. We serve clients across Siliguri and nearby areas.",
      },
      {
        q: "Which areas in Siliguri do you cover?",
        a: "We cover all major areas of Siliguri including Pradhan Nagar, Hakimpara, Sevoke Road, Hill Cart Road, Matigara, Dabgram, and surrounding localities. Not sure if we cover your area? WhatsApp us your location and we'll confirm.",
      },
      {
        q: "How do I book an appointment?",
        a: `The easiest way to book is to call or WhatsApp us at ${PHONE}. Share your name, location, service you want, and preferred date and time. We'll confirm your slot and send you a reminder before your appointment.`,
      },
      {
        q: "How far in advance should I book?",
        a: "For regular nail appointments, booking 2–3 days in advance is usually enough. For bridal nail art or special occasion nails, we recommend booking at least 2–3 weeks ahead. During wedding season (October–December) and festivals like Durga Puja, we get very busy — book early!",
      },
      {
        q: "What are your working hours?",
        a: "We are available 7 days a week from 10 AM to 8 PM. For bridal bookings and special events, we can sometimes accommodate early morning appointments — contact us to discuss.",
      },
    ],
  },
  {
    section: "About Our Services",
    items: [
      {
        q: "What nail services do you offer?",
        a: "We offer a full range of nail services including acrylic nail extensions, gel nail extensions, gel polish manicure, bridal nail art, nail art designs (French, ombré, 3D, floral, glitter, chrome), nail fills/infills, and safe nail removal. All services are available at your home.",
      },
      {
        q: "What is the difference between acrylic and gel nails?",
        a: "Acrylic nails are stronger, more durable, and better for longer lengths. They are made from a powder and liquid mixture and dried in air. Gel nails are lighter, more natural-looking, and odourless — they are cured under a UV or LED lamp. Acrylic nails last 2–3 weeks before needing an infill; gel nails last 3–4 weeks. We can recommend the best option for your lifestyle during your appointment.",
      },
      {
        q: "Do you offer bridal nail packages?",
        a: "Yes! We specialise in bridal nail art for weddings and all occasions. We can create custom designs to match your lehenga, saree, or wedding colour theme. We recommend booking a trial nail session 4–6 weeks before the wedding and the final session 2–3 days before. Ask us about our bridal packages when you book.",
      },
      {
        q: "Can you do nail art for kids?",
        a: "Yes! We offer fun, kid-friendly nail art using nail-safe products. Simple patterns, cartoon designs, and colourful nail art are all available. We recommend gel polish or regular nail polish (not extensions) for children under 16.",
      },
    ],
  },
  {
    section: "Pricing & Payment",
    items: [
      {
        q: "How much does a nail extension cost in Siliguri?",
        a: "Acrylic nail extensions start from ₹800 for a basic full set. Gel nail extensions start from ₹1,000. Prices vary based on length, shape, and nail art design. Simple nail art designs are included in many packages; detailed or 3D art is priced separately. WhatsApp us with your design and we'll give you an exact quote.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, UPI (Google Pay, PhonePe, Paytm), and bank transfer. Payment is due at the end of your appointment. For bridal bookings, a small advance may be required to secure the date.",
      },
      {
        q: "Do you charge extra for travelling to my home?",
        a: "There is no travel surcharge for locations within central Siliguri. For areas further out, a small travel allowance may apply — we'll tell you in advance when you book. There are no hidden charges.",
      },
    ],
  },
  {
    section: "Nail Care & Aftercare",
    items: [
      {
        q: "How long do acrylic nails last?",
        a: "With proper care, acrylic nails last 2–3 weeks before needing an infill. Here are some tips to make them last longer: avoid using nails as tools (opening cans, scraping surfaces), wear gloves when using cleaning chemicals, moisturise your cuticles daily, and avoid soaking nails in water for long periods.",
      },
      {
        q: "How long do gel nails last?",
        a: "Gel nail extensions last 3–4 weeks. Gel polish on natural nails lasts 2–3 weeks. Gel nails are less prone to breaking but will grow out, so regular infill appointments are recommended.",
      },
      {
        q: "Do nail extensions damage natural nails?",
        a: "When applied and removed correctly by a professional, nail extensions cause minimal damage to natural nails. The most common cause of nail damage is improper removal (peeling or forcing off). We always use safe removal techniques. If you want to protect your natural nails between appointments, ask us about our nail strengthening treatments.",
      },
      {
        q: "How should I remove my nail extensions?",
        a: "Please do NOT peel or force off your nail extensions — this damages the natural nail. Contact us to book a removal appointment, or we can advise you on the safe soak-off method. Removal appointments are quick and affordable.",
      },
      {
        q: "How do I maintain my nails between appointments?",
        a: "Apply cuticle oil daily, keep your nails moisturised, avoid using them as tools, and contact us if a nail lifts or breaks rather than trying to fix it yourself. We recommend infill appointments every 2–3 weeks to keep nails looking fresh.",
      },
    ],
  },
];

export default function Faq() {
  return (
    <>
      <SEOHead
        title="Frequently Asked Questions | Puja's Nail Studio Siliguri"
        description="Got questions about nail extensions or home nail service in Siliguri? Find answers about Puja's Nail Studio services, pricing, and booking."
        url="https://pujasnailstudio.com/faq"
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
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Here are answers to the questions we get asked most often. Still
              have a question? Call or WhatsApp us at{" "}
              <a
                href={PHONE_TEL}
                className="font-semibold text-primary hover:text-accent transition-colors"
              >
                {PHONE}
              </a>{" "}
              and we'll reply within a few hours.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((group) => (
                <div key={group.section} className="mb-10">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    {group.section}
                  </h2>
                  {group.items.map((item, i) => (
                    <AccordionItem key={i} value={`${group.section}-${i}`}>
                      <AccordionTrigger className="text-left">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent>{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </div>
              ))}
            </Accordion>

            <Card className="mt-12 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6 md:p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-6">
                  We're happy to help! Call or WhatsApp us or visit our contact
                  section on the home page.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" asChild>
                    <a href={PHONE_TEL} className="gap-2">
                      <Phone className="h-5 w-5" />
                      {PHONE}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/#contact" className="gap-2">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>

        <Separator className="my-8" />
        <footer className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <Link to="/" className="text-primary hover:text-accent transition-colors">
            ← Back to Puja's Nail Studio
          </Link>
        </footer>
      </div>
    </>
  );
}
