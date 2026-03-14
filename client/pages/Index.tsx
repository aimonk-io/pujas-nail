import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Clock,
  Sparkles,
  Heart,
  Menu,
  X,
  Download,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
} from "@/components/ui/drawer";
import { CalendlyPopupButton } from "@/components/CalendlyWidget";
import { SEOHead } from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const PHONE = "+91 8617682768";
const PHONE_TEL = "tel:+918617682768";
const WA_LINK = "https://wa.me/918617682768";
const WA_BOOK_MSG = "Hi! I want to book a nail appointment in Siliguri";

// Google Analytics / Google Ads conversion type declaration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

// Enhanced Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const slideInFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const staggerFast = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const staggerSlow = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0.3, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 0.8
    }
  },
};

const slideInFromBottom = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

const galleryImages = [
  { id: 1, src: "/media/79392099205029536.jpeg", alt: "Pink gel nail extensions with floral design — home service Siliguri", title: "Floral Gel Nails", description: "Home service in Siliguri" },
  { id: 2, src: "/media/2308513475607877659.jpeg", alt: "Acrylic nail extensions with ombre effect done at home in Siliguri", title: "Ombré Acrylic Nails", description: "Home service in Siliguri" },
  { id: 3, src: "/media/2422623673493669297.jpeg", alt: "Bridal nail art with gold and white design for wedding in Siliguri", title: "Bridal Nail Art", description: "Wedding nail art Siliguri" },
  { id: 4, src: "/media/4386419946783222734.jpeg", alt: "3D nail art with rhinestone gems and chrome effect — Puja's Nail Studio", title: "3D Chrome Nails", description: "Home service in Siliguri" },
  { id: 5, src: "/media/5026456562858868939.jpeg", alt: "French nail extensions with modern twist done at home in Siliguri", title: "Modern French Nails", description: "Home service in Siliguri" },
  { id: 6, src: "/media/6380504046646179848.jpeg", alt: "Gel nail art with marble effect in nude tones — home nail service Siliguri", title: "Marble Gel Nails", description: "At your doorstep in Siliguri" },
  { id: 7, src: "/media/8096948635405192285.jpeg", alt: "Glitter and holographic nail art done at home in Siliguri West Bengal", title: "Glitter Holo Nails", description: "Home service in Siliguri" },
  { id: 8, src: "/media/12136980375840660014.jpeg", alt: "Cat eye gel nail art with deep red shade — Puja's home nail service Siliguri", title: "Cat Eye Gel Nails", description: "Home service in Siliguri" },
  { id: 9, src: "/media/16072181640080114237.jpeg", alt: "Custom nail art design with blooming flower effect at home Siliguri", title: "Blooming Nail Art", description: "Home service in Siliguri" },
];

const heroCarouselImages = galleryImages.map(({ src, alt }) => ({ src, alt }));

function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.div
      className="relative max-w-4xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                {galleryImages[currentIndex].title}
              </h3>
              <p className="text-white/90 drop-shadow-md">{galleryImages[currentIndex].alt}</p>
            </div>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-primary/20 backdrop-blur-sm rounded-full p-2">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-primary/40 hover:scale-110 transition-all duration-300 group opacity-0 group-hover:opacity-100"
        >
          <svg
            className="w-6 h-6 group-hover:rotate-12 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-primary/40 hover:scale-110 transition-all duration-300 group opacity-0 group-hover:opacity-100"
        >
          <svg
            className="w-6 h-6 group-hover:-rotate-12 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-3">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex
                ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Auto-play functionality */}
      <div className="mt-8 text-center">
        <motion.div
          className="inline-flex items-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="outline"
            onClick={prevSlide}
            className="border-primary text-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300"
          >
            Previous
          </Button>
          <span className="text-muted-foreground font-medium">
            {currentIndex + 1} of {galleryImages.length}
          </span>
          <Button
            variant="outline"
            onClick={nextSlide}
            className="border-primary text-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300"
          >
            Next
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

const nailExtensions = [
  {
    name: "Acrylic Extension",
    price: "₹1,200",
    duration: "90 mins",
    description: "Durable acrylic nail extensions with custom length and shape",
  },
  {
    name: "Polly Gel Extension",
    price: "₹900",
    duration: "75 mins",
    description: "Flexible and lightweight gel extensions for natural look",
  },
  {
    name: "Gel Extension",
    price: "₹1,000",
    duration: "80 mins",
    description: "Professional gel nail extensions with long-lasting durability",
  },
  {
    name: "Foot Nail Extensions",
    price: "₹1,150",
    duration: "100 mins",
    description: "Specialized nail extensions for toes with custom designs",
  },
];

const nailArtTypes = [
  {
    name: "Marble Nail Art",
    price: "₹800",
    duration: "60 mins",
    description: "Elegant marble effect with swirling patterns and colors",
  },
  {
    name: "Brush Nail Art",
    price: "₹600",
    duration: "45 mins",
    description: "Hand-painted designs using fine brushes for detailed artwork",
  },
  {
    name: "French Nail Art",
    price: "₹700",
    duration: "50 mins",
    description: "Classic French nails with artistic variations and designs",
  },
  {
    name: "Sticker Nail Art",
    price: "₹500",
    duration: "30 mins",
    description: "Decorative stickers and transfers for quick nail decoration",
  },
  {
    name: "Spider Gel Nail Art",
    price: "₹900",
    duration: "70 mins",
    description: "Unique spider gel technique creating web-like patterns",
  },
  {
    name: "3D Nail Art",
    price: "₹1,200",
    duration: "90 mins",
    description: "Three-dimensional designs with gems, charms, and textures",
  },
  {
    name: "Blooming Nail Art",
    price: "₹1,000",
    duration: "75 mins",
    description: "Beautiful blooming gel technique with flower-like patterns",
  },
  {
    name: "Cats Eye Nail Art",
    price: "₹850",
    duration: "65 mins",
    description: "Magnetic cat's eye effect with shimmering metallic finish",
  },
  {
    name: "Animal Print Pigment Nail Art",
    price: "₹750",
    duration: "55 mins",
    description: "Wild animal print designs using special pigments and techniques",
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [showDiscountDialog, setShowDiscountDialog] = useState(false);
  const [showPricingDialog, setShowPricingDialog] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect active section
      const sections = ["home", "work", "services", "pricing", "booking"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // Track booking section interactions
  useEffect(() => {
    const trackBookingInteraction = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'begin_checkout', {
          event_category: 'booking',
          event_label: 'booking_section_view',
          value: 1
        });
      }
    };

    // Track when booking section comes into view
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackBookingInteraction();
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(bookingSection);
      
      return () => observer.disconnect();
    }
  }, []);



  const isMobile = useIsMobile();
  const scrollToBooking = () => {
    if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion();
    }
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "booking",
        event_label: "pricing_card_book_now",
        value: 1,
      });
    }
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const reportConversionThen = (fn: () => void) => {
    if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion();
    }
    fn();
  };

  return (
    <>
      <SEOHead 
        services={[
          ...nailExtensions.map(service => ({
            name: service.name,
            price: service.price,
            description: service.description
          })),
          ...nailArtTypes.map(service => ({
            name: service.name,
            price: service.price,
            description: service.description
          }))
        ]}
      />
      <motion.div 
        className="min-h-screen w-full overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-nav-bg)] backdrop-blur-md border-b border-[var(--color-nav-border)]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="Puja's Nail Studio Logo" className="h-10 w-10 object-contain" />
              <span className="text-lg font-display font-semibold text-secondary hidden sm:block">
                Puja's Nail Studio
              </span>
            </a>
            
            {/* Navigation Links - Desktop */}
            {!isMobile ? (
              <nav className="flex items-center gap-5 lg:gap-6">
                <a href="#home" className="text-foreground font-medium hover:text-primary transition-colors text-sm">Home</a>
                <a href="/services" className="text-foreground font-medium hover:text-primary transition-colors text-sm">Acrylic Nails</a>
                <a href="/services" className="text-foreground font-medium hover:text-primary transition-colors text-sm">Gel Nails</a>
                <a href="/services" className="text-foreground font-medium hover:text-primary transition-colors text-sm">Bridal Nails</a>
                <a href="#gallery" className="text-foreground font-medium hover:text-primary transition-colors text-sm">Gallery</a>
                <a href="/faq" className="text-foreground font-medium hover:text-primary transition-colors text-sm">FAQ</a>
                <a
                  href={`${WA_LINK}?text=${encodeURIComponent(WA_BOOK_MSG)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-medium hover:bg-primary/90 transition-all text-sm"
                >
                  Book Now
                </a>
              </nav>
            ) : (
              <Drawer direction="right">
                <DrawerTrigger asChild>
                  <button 
                    aria-label="Open navigation menu" 
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </DrawerTrigger>
                <DrawerContent className="pb-8 w-full max-h-screen h-full fixed right-0 top-0 bottom-0 bg-background shadow-lg border-l border-border flex flex-col overflow-y-auto">
                  <button aria-label="Close navigation menu" className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary">
                    <DrawerClose asChild>
                      <X className="h-6 w-6 text-foreground" />
                    </DrawerClose>
                  </button>
                  <DrawerHeader className="text-center pt-4">
                    <img src="/logo.png" alt="Puja's Nail Studio Logo" className="h-14 w-14 object-contain mx-auto mb-2" />
                    <span className="font-display font-semibold text-lg text-foreground">Puja's Nail Studio</span>
                  </DrawerHeader>
                  <nav className="flex flex-col gap-1 px-4 mt-6">
                    <DrawerClose asChild>
                      <a href="#home" className="text-base font-medium text-foreground hover:text-primary py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors">Home</a>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <a href="/services" className="text-base font-medium text-foreground hover:text-primary py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors">Acrylic Nails</a>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <a href="/services" className="text-base font-medium text-foreground hover:text-primary py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors">Gel Nails</a>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <a href="/services" className="text-base font-medium text-foreground hover:text-primary py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors">Bridal Nails</a>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <a href="#gallery" className="text-base font-medium text-foreground hover:text-primary py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors">Gallery</a>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <a href="/faq" className="text-base font-medium text-foreground hover:text-primary py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors">FAQ</a>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <a href="/about" className="text-base font-medium text-foreground hover:text-primary py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors">About</a>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <a href="/contact" className="text-base font-medium text-foreground hover:text-primary py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors">Contact</a>
                    </DrawerClose>
                    <div className="border-t border-border my-3 pt-3">
                      <DrawerClose asChild>
                        <a href={`${WA_LINK}?text=${encodeURIComponent(WA_BOOK_MSG)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full text-base font-medium text-primary-foreground bg-primary py-3.5 px-6 rounded-full hover:bg-primary/90 transition-colors">
                          Book on WhatsApp
                        </a>
                      </DrawerClose>
                      <DrawerClose asChild>
                        <a href={PHONE_TEL} className="flex items-center justify-center gap-2 mt-2 text-base font-medium text-primary py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors" aria-label="Call">
                          <Phone className="h-5 w-5" />
                          <span>{PHONE}</span>
                        </a>
                      </DrawerClose>
                    </div>
                  </nav>
                </DrawerContent>
              </Drawer>
            )}
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16 md:pb-20 overflow-hidden bg-[var(--gradient-hero)] min-h-[88vh] flex flex-col justify-center" role="banner" aria-label="Welcome to Puja's Nail Studio" itemScope itemType="https://schema.org/BeautySalon">
        <div className="container mx-auto px-4 md:px-5">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div className="text-center lg:text-left" initial="hidden" animate="visible" variants={staggerSlow}>
              <motion.div variants={bounceIn} className="flex justify-center lg:justify-start mb-5">
                <Badge className="bg-primary/15 text-secondary border-primary/20 text-xs font-medium tracking-wide uppercase px-4 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse mr-1.5 inline-block" />
                  Available in Siliguri, West Bengal
                </Badge>
              </motion.div>
              <motion.h1 variants={slideInFromTop} className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-tight text-foreground mb-5" itemProp="name">
                Professional{" "}
                <em className="text-primary not-italic">Nail Art at Your Home</em>
                {" "}in Siliguri
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-base md:text-lg font-light max-w-[480px] mx-auto lg:mx-0 mb-8" itemProp="description">
                Acrylic extensions, gel nails, bridal nail art & creative designs — all done at your doorstep. No salon travel. Just beautiful nails.
              </motion.p>
              <motion.div variants={slideInFromBottom} className="flex flex-wrap gap-3 justify-center lg:justify-start items-center">
                <a href={`${WA_LINK}?text=${encodeURIComponent(WA_BOOK_MSG)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all" onClick={() => window.gtag?.("event", "click", { event_category: "booking", event_label: "hero_whatsapp", value: 1 })}>
                  📱 Book on WhatsApp
                </a>
                <a href={PHONE_TEL} className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-medium text-base hover:bg-primary hover:text-primary-foreground transition-all" aria-label="Call" itemProp="telephone">
                  📞 Call Now
                </a>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start text-sm text-muted-foreground">
                <span className="flex items-center gap-2">⭐ 4.9-star rated</span>
                <span className="flex items-center gap-2">🏠 100% home service</span>
                <span className="flex items-center gap-2">🧴 Hygienic & safe products</span>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative flex justify-center items-center order-first lg:order-none">
              <div className="w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%] overflow-hidden bg-primary/10 border border-primary/20">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  loop
                  className="!h-full !w-full [&_.swiper-wrapper]:!h-full [&_.swiper-slide]:!h-full"
                >
                  {heroCarouselImages.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="absolute bottom-6 left-2 md:left-0 z-[1] bg-card rounded-2xl px-5 py-3 shadow-lg border border-border text-sm">
                <strong className="block text-primary text-lg">₹800 onwards</strong>
                Starting price for nail extensions
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services at Home - 4 cards */}
      <section id="services" className="py-16 md:py-20 px-4 md:px-5" role="region" aria-label="Nail Services">
        <div className="container mx-auto max-w-6xl">
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-2">What We Offer</p>
          <h2 className="font-display font-semibold text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">Nail Services at Home in Siliguri</h2>
          <p className="text-muted-foreground max-w-[540px] mb-12 text-base md:text-lg">
            From acrylic extensions to bridal nail art — we bring professional nail care to your home, anywhere in Siliguri. All services use salon-grade products.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💎", title: "Acrylic Nail Extensions", desc: "Strong, durable extensions in any shape — square, almond, coffin, stiletto. Full sets and infills.", price: "From ₹800", href: "/services" },
              { icon: "✨", title: "Gel Nail Extensions", desc: "Lightweight, natural-looking gel extensions and gel polish. Odourless, chip-resistant, lasts 3–4 weeks.", price: "From ₹1,000", href: "/services" },
              { icon: "👰", title: "Bridal Nail Art", desc: "Custom bridal nail designs for weddings & special occasions. Coordinated with your outfit and jewellery.", price: "From ₹1,500", href: "/services" },
              { icon: "🎨", title: "Nail Art Designs", desc: "French, ombré, 3D nail art, glitter, chrome, florals & more. Custom designs for any occasion.", price: "From ₹300", href: "/services" },
            ].map((card, i) => (
              <motion.a key={card.title} href={card.href} className="block bg-card rounded-2xl p-6 md:p-7 border border-border hover:border-[var(--color-border-glow)] hover:shadow-lg hover:-translate-y-1 transition-all text-foreground no-underline" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <span className="text-3xl block mb-4">{card.icon}</span>
                <h3 className="font-display font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{card.desc}</p>
                <p className="font-medium text-primary text-sm">{card.price}</p>
                <span className="text-primary text-sm font-medium mt-2 inline-block">Learn more →</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-section)] px-4 md:px-5" role="region" aria-label="Why choose us">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-primary text-xs font-medium tracking-widest uppercase mb-2">Why Puja's Nail Studio</p>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-foreground mb-4">The Salon Experience,<br />At Your Home</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-[480px] mb-8">
                Puja's Nail Studio brings professional nail care to your home anywhere in Siliguri,
                West Bengal — so you get salon-quality results without leaving your house.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: "🏠", title: "We Come to You", text: "No traffic, no waiting rooms. We bring all tools, products, and equipment to your home anywhere in Siliguri." },
                  { icon: "🧴", title: "Hygienic & Safe", text: "We use fully sanitised tools and high-quality nail products. Your safety is our top priority." },
                  { icon: "💅", title: "Professional Results", text: "Trained nail technician with experience in acrylic, gel, and nail art techniques for all occasions." },
                  { icon: "⏰", title: "Flexible Timings", text: "Available 7 days a week, 10 AM–8 PM. Evening and weekend appointments available." },
                ].map((item, i) => (
                  <motion.li key={item.title} className="flex gap-4 items-start" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <span className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-lg shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="w-full max-w-[400px] aspect-square rounded-3xl bg-primary/10 flex items-center justify-center text-7xl">💅</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 bg-foreground text-primary-foreground px-4 md:px-5" role="region" aria-label="How to book">
        <div className="container mx-auto max-w-6xl">
          <p className="text-primary-foreground/70 text-xs font-medium tracking-widest uppercase mb-2">Simple Process</p>
          <h2 className="font-display font-semibold text-2xl md:text-3xl mb-12">How to Book Your Home Nail Appointment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "WhatsApp or Call", text: "Message us your name, location in Siliguri, service you want, and preferred date & time." },
              { num: "02", title: "Confirm Your Slot", text: "We confirm your appointment and send a reminder the day before." },
              { num: "03", title: "We Come to You", text: "Our nail artist arrives at your home with all equipment, products, and nail art supplies." },
              { num: "04", title: "Relax & Enjoy", text: "Sit back and enjoy your nail session in the comfort of your own home. Pay after the service." },
            ].map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="font-display text-4xl text-primary opacity-70 mb-2">{step.num}</div>
                <h4 className="font-medium mb-2">{step.title}</h4>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-16 md:py-20 px-4 md:px-5" role="region" aria-label="Client reviews">
        <div className="container mx-auto max-w-6xl">
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-2">Client Reviews</p>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-foreground mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stars: 5, quote: "Got bridal nail art done before my wedding — absolutely loved it! She matched the design perfectly with my lehenga. Highly recommend Puja's Nail Studio to every bride in Siliguri.", name: "Priya S.", detail: "Bridal nail art — Siliguri" },
              { stars: 5, quote: "Amazing acrylic nail extensions done at home! Super convenient — no need to go to a salon. The nails lasted over 3 weeks and looked gorgeous. Will book again for sure.", name: "Riya D.", detail: "Acrylic extensions — Pradhan Nagar" },
              { stars: 5, quote: "Very professional and hygienic. She came on time with all her tools. The gel nail extensions look so natural. Best nail artist in Siliguri for home service!", name: "Ankita M.", detail: "Gel nail extensions — Matigara" },
            ].map((r, i) => (
              <motion.div key={i} className="bg-card border border-border rounded-2xl p-6" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <div className="text-amber-500 text-sm mb-3">{"★".repeat(r.stars)}</div>
                <blockquote className="text-muted-foreground text-sm md:text-base italic leading-relaxed mb-4">&ldquo;{r.quote}&rdquo;</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-semibold text-sm">{r.name[0]}</div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{r.name}</div>
                    <div className="text-muted-foreground text-xs">{r.detail}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - inline */}
      <section id="faq" className="py-16 md:py-20 px-4 md:px-5 bg-background" role="region" aria-label="FAQ">
        <div className="container mx-auto max-w-3xl">
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-2">FAQ</p>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-foreground mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Do you provide nail services at home in Siliguri?", a: "Yes! Puja's Nail Studio is a home service nail artist in Siliguri, West Bengal. We come to your home with all tools, products, and equipment — you don't need to visit any salon." },
              { q: "How long do acrylic nails last?", a: "Acrylic nails typically last 2–3 weeks before needing an infill. With good care — avoiding harsh chemicals and moisturising cuticles — they can last up to 4 weeks. We recommend infills every 2–3 weeks." },
              { q: "What is the difference between acrylic and gel nails?", a: "Acrylic nails are stronger and better for longer lengths. Gel nails are lighter, more natural-looking, and odourless. Gel nails last slightly longer (3–4 weeks). We can recommend the best option based on your lifestyle during your appointment." },
              { q: "How do I book a nail appointment in Siliguri?", a: `The easiest way is to WhatsApp or call us at ${PHONE}. Share your location in Siliguri, the service you want, and your preferred date and time. We'll confirm your booking within a few hours.` },
              { q: "Do you do bridal nail art in Siliguri?", a: "Yes! We specialise in bridal nail art for weddings and special occasions. We recommend booking at least 2–3 weeks before your wedding date. We can create custom designs to match your wedding outfit and jewellery." },
              { q: "What areas in Siliguri do you cover?", a: "We cover all areas in Siliguri including Pradhan Nagar, Hakimpara, Sevoke Road, Hill Cart Road, Matigara, Dabgram, and surrounding localities. WhatsApp us your location to confirm coverage." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-7 text-muted-foreground text-sm">
            Have more questions? <a href={`${WA_LINK}`} className="text-primary font-medium">WhatsApp us</a> or see our <a href="/faq" className="text-primary font-medium">full FAQ page</a>.
          </p>
        </div>
      </section>

      {/* Areas served */}
      <section className="py-16 md:py-20 px-4 md:px-5 bg-card" role="region" aria-label="Areas served">
        <div className="container mx-auto max-w-6xl">
          <p className="text-primary text-xs font-medium tracking-widest uppercase mb-2">Service Coverage</p>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-foreground mb-2">Home Nail Service Areas in Siliguri</h2>
          <p className="text-muted-foreground mb-6">
            We provide home nail service — acrylic nails, gel nails, and bridal nail art — across all major areas of Siliguri, West Bengal including Pradhan Nagar, Matigara, Dabgram, Hakimpara, and Sevoke Road.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Pradhan Nagar", "Hakimpara", "Sevoke Road", "Hill Cart Road", "Matigara", "Dabgram", "Siliguri Bazar", "Ashram Para", "Punjabi Para", "Desh Bandhu Para", "Khopalasi", "& Nearby Areas"].map((area) => (
              <span key={area} className="bg-card border border-primary/20 rounded-full px-4 py-2 text-sm text-foreground">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 md:py-20 px-4 md:px-5 bg-gradient-to-br from-secondary to-primary text-primary-foreground text-center" role="region" aria-label="Book now">
        <h2 className="font-display font-semibold text-2xl md:text-3xl mb-4">Ready for Beautiful Nails?</h2>
        <p className="max-w-[500px] mx-auto mb-9 text-primary-foreground/85 text-base md:text-lg">
          Book your home nail appointment in Siliguri today. WhatsApp us your preferred service and time — we'll confirm within a few hours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={`${WA_LINK}?text=${encodeURIComponent(WA_BOOK_MSG)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3.5 rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all">
            📱 Book on WhatsApp
          </a>
          <a href={PHONE_TEL} className="inline-flex items-center gap-2 border-2 border-primary-foreground/60 text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-all">
            📞 {PHONE}
          </a>
        </div>
      </section>

      {/* Pricing Highlight */}
              <section
          id="pricing"
          className="py-20 bg-accent/10"
        >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={bounceIn} className="max-w-3xl mx-auto">

              <motion.h2 
                variants={slideInFromTop}
                className="font-display font-bold text-2xl md:text-3xl mb-4 text-foreground"
              >
                First-Time Client Special
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Get 20% off your first appointment with us. Experience the
                difference of professional nail artistry and discover why clients love our work.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center space-x-4 mb-8"
              >
                <a 
                  href="tel:+918617682768"
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                  aria-label="Call Puja's Nail Studio"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 8617682768</span>
                </a>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground text-sm">Call for special pricing</span>
              </motion.div>
              <motion.div 
                variants={slideInFromBottom}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDiscountDialog(true)}
                >
                  <Button
                    size="lg"
                    className="px-8 py-3 text-lg bg-gradient-to-r from-accent to-primary hover:shadow-lg transition-all duration-300 text-white font-medium rounded-lg border-0"
                  >
                    🎉 Claim Your Discount
                  </Button>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPricingDialog(true)}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary/5"
                  >
                    View Full Price List
                  </Button>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Grid Showcase */}
      <section id="gallery" className="py-20 bg-[var(--color-bg-glow)]" role="region" aria-label="Our Nail Art Gallery">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >

            <motion.h2
              variants={slideInFromTop}
              className="font-display font-bold text-2xl md:text-3xl mb-4 text-foreground"
            >
              Nail Art Gallery
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Explore our stunning nail art designs and find inspiration for your next appointment. Each piece showcases our commitment to creativity and precision.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerFast}
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-sm drop-shadow-md mb-3">
                    {image.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-xs">Hover for details</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-full p-2">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Booking Form */}
      <section id="booking" className="py-16 bg-primary/10" role="region" aria-label="Book Your Nail Appointment">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerSlow}
          >
            <motion.div variants={bounceIn} className="text-center mb-8">
              <motion.h2 
                variants={slideInFromTop}
                className="font-display font-bold text-2xl md:text-3xl mb-4 text-foreground"
              >
                Book Your Appointment
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6"
              >
                Choose your preferred date and time to book your at-home nail appointment. Instant confirmation and easy scheduling.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center space-x-4 mb-6"
              >
                <a 
                  href="tel:+918617682768"
                  className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
                  aria-label="Call Puja's Nail Studio"
                  onClick={() => typeof window !== "undefined" && window.gtag_report_conversion?.()}
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">Call: +91 8617682768</span>
                </a>
                <span className="text-muted-foreground">or</span>
                <span className="text-muted-foreground font-medium">Book Online Below</span>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-card backdrop-blur-sm border border-border shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-4 md:p-6 overflow-hidden">
                  {/* SEO: visible content around the iframe that Google CAN index */}
                  <div className="mb-6 grid sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-muted/40 rounded-xl p-4">
                      <div className="text-2xl mb-1">🏠</div>
                      <div className="font-medium text-sm">Home Service</div>
                      <div className="text-muted-foreground text-xs">We come to you in Siliguri</div>
                    </div>
                    <div className="bg-muted/40 rounded-xl p-4">
                      <div className="text-2xl mb-1">💅</div>
                      <div className="font-medium text-sm">Acrylic · Gel · Bridal</div>
                      <div className="text-muted-foreground text-xs">All nail services available</div>
                    </div>
                    <div className="bg-muted/40 rounded-xl p-4">
                      <div className="text-2xl mb-1">✅</div>
                      <div className="font-medium text-sm">Instant Confirmation</div>
                      <div className="text-muted-foreground text-xs">Book online or WhatsApp</div>
                    </div>
                  </div>

                  {/* Calendly widget — not indexed by Google */}
                  <div
                    className="calendly-inline-widget h-[500px] md:h-[600px] w-full"
                    data-url="https://calendly.com/pujabarmanb9/puja-nail-services?background_color=ffffff&text_color=8c1f28"
                    style={{ minWidth: "320px", maxWidth: "100%" }}
                  />

                  {/* SEO: below-iframe fallback content */}
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Prefer WhatsApp?{" "}
                    <a
                      href="https://wa.me/918617682768?text=Hi!%20I%20want%20to%20book%20a%20nail%20appointment%20in%20Siliguri"
                      className="text-primary font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Message us directly
                    </a>{" "}
                    and we'll confirm your home nail appointment in Siliguri within hours.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/10" role="region" aria-label="Contact Information">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={slideInFromTop}
              className="font-display font-bold text-2xl md:text-3xl mb-4 text-foreground"
            >
              Contact Us
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Book nail artist at home—home nail service booking in Siliguri, Dabgram, Matigara, Pradhan Nagar, Sevoke Road, Hakimpara & nearby. Same day appointment available.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerFast}
          >
            {/* Phone Contact */}
            <motion.div variants={scaleIn} className="text-center">
              <Card className="bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 p-6">
                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Call Us</h3>
                <a 
                  href="tel:+918617682768"
                  className="text-2xl font-bold text-foreground hover:scale-105 transition-transform duration-300 block"
                  aria-label="Call Puja's Nail Studio"
                >
                  +91 8617682768
                </a>
                <p className="text-muted-foreground mt-2">Available 7 days a week</p>
              </Card>
            </motion.div>

            {/* Email Contact */}
            <motion.div variants={scaleIn} className="text-center">
              <Card className="bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 p-6">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Email Us</h3>
                <a 
                  href="mailto:pujanailstudio@gmail.com"
                  className="text-lg font-medium text-primary hover:text-accent transition-colors"
                  aria-label="Email Puja's Nail Studio"
                >
                  pujanailstudio@gmail.com
                </a>
                <p className="text-muted-foreground mt-2">Quick response guaranteed</p>
              </Card>
            </motion.div>

            {/* Location */}
            <motion.div variants={scaleIn} className="text-center">
              <Card className="bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 p-6">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Areas We Serve</h3>
                <p className="text-lg font-medium text-foreground mb-2">Siliguri, West Bengal</p>
                <p className="text-muted-foreground text-sm">Dabgram, Matigara, Pradhan Nagar, Sevoke Road, Hakimpara & nearby. Home nail service at your doorstep.</p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer - NAP & links */}
      <footer className="bg-[var(--color-footer)] text-[var(--color-text-on-dark)] py-14 md:py-16" role="contentinfo" aria-label="Footer">
        <div className="container mx-auto px-4 md:px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="font-display font-semibold text-xl text-white mb-3">Puja's Nail Studio</div>
              <p className="text-sm leading-relaxed max-w-[280px] mb-4 text-white/80">
                Professional home service nail art in Siliguri, West Bengal. Acrylic nails, gel extensions, bridal nail art and custom designs at your doorstep.
              </p>
              <address className="text-sm not-italic leading-loose text-white/80" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                📍 <span itemProp="addressLocality">Siliguri</span>, <span itemProp="addressRegion">West Bengal</span> 734015<br />
                📞 <a href={PHONE_TEL} className="text-white/80 hover:text-white" itemProp="telephone">{PHONE}</a><br />
                📱 <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">WhatsApp Us</a><br />
                ✉️ <a href="mailto:pujanailstudio@gmail.com" className="text-white/80 hover:text-white">pujanailstudio@gmail.com</a>
              </address>
            </div>
            <div>
              <h4 className="text-white text-xs font-medium tracking-wider uppercase mb-4">Services</h4>
              <ul className="space-y-2.5">
                <li><a href="/services" className="text-white/70 hover:text-white text-sm">Acrylic Nail Extensions</a></li>
                <li><a href="/services" className="text-white/70 hover:text-white text-sm">Gel Nail Extensions</a></li>
                <li><a href="/services" className="text-white/70 hover:text-white text-sm">Bridal Nail Art</a></li>
                <li><a href="/services" className="text-white/70 hover:text-white text-sm">Nail Art Designs</a></li>
                <li><a href="/services" className="text-white/70 hover:text-white text-sm">All Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-medium tracking-wider uppercase mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                <li><a href="#gallery" className="text-white/70 hover:text-white text-sm">Gallery</a></li>
                <li><a href="/faq" className="text-white/70 hover:text-white text-sm">FAQ</a></li>
                <li><a href="/about" className="text-white/70 hover:text-white text-sm">About</a></li>
                <li><a href="/contact" className="text-white/70 hover:text-white text-sm">Contact & Booking</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/60">
            <span>© {new Date().getFullYear()} Puja's Nail Studio. Home service nail art in Siliguri, West Bengal.</span>
            <span>7 days a week · 10 AM–8 PM</span>
          </div>
        </div>
      </footer>

      {/* Discount Dialog */}
      <Dialog open={showDiscountDialog} onOpenChange={setShowDiscountDialog}>
        <DialogContent className="sm:max-w-md bg-card backdrop-blur-sm border border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              🎉 First-Time Client Special!
            </DialogTitle>
            <DialogDescription className="text-center text-lg mt-4">
              Welcome to Puja's Nail Studio! We're excited to have you.
            </DialogDescription>
          </DialogHeader>
          <div className="text-center space-y-4">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg border border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">10% OFF</div>
              <div className="text-lg text-muted-foreground">
                Your first appointment with us
              </div>
            </div>
            
            {/* Discount Code Section */}
            <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-accent/30">
              <div className="text-sm font-medium text-gray-600 mb-2">Use Discount Code:</div>
              <div className="bg-background px-4 py-2 rounded border border-border">
                <span className="text-xl font-bold text-accent tracking-wider">FIRST10C</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Enter this code when booking your appointment
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>✨ Valid for first-time clients only</p>
              <p>✨ Cannot be combined with other offers</p>
              <p>✨ Mention code "FIRST10C" when booking</p>
            </div>
            <Button 
              onClick={() => setShowDiscountDialog(false)}
              className="w-full bg-gradient-to-r from-accent to-primary hover:shadow-lg"
            >
              Got it! Thanks for the offer
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Pricing List Dialog */}
      <Dialog open={showPricingDialog} onOpenChange={setShowPricingDialog}>
        <DialogContent className="sm:max-w-lg bg-card backdrop-blur-sm border border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              📋 Complete Price List
            </DialogTitle>
            <DialogDescription className="text-center text-lg mt-4">
              Download our comprehensive pricing guide for all services
            </DialogDescription>
          </DialogHeader>
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
              <Download className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Puja Nail Art - Price List</h3>
              <p className="text-muted-foreground">
                Complete pricing for all our nail services and art designs
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => {
                  window.open('/media/Puja Nail Art.pdf', '_blank');
                  setShowPricingDialog(false);
                }}
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-lg"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button 
                variant="outline"
                onClick={() => setShowPricingDialog(false)}
                className="flex-1 border-primary text-primary hover:bg-primary/5"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`${WA_LINK}?text=${encodeURIComponent(WA_BOOK_MSG)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-7 right-7 z-[999] flex items-center gap-2.5 bg-[var(--color-whatsapp)] text-white px-5 py-3.5 rounded-full font-medium text-base shadow-lg shadow-[var(--color-whatsapp)]/40 hover:shadow-xl hover:-translate-y-0.5 transition-all"
        aria-label="Book on WhatsApp"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        onClick={() => window.gtag?.("event", "click", { event_category: "booking", event_label: "float_whatsapp", value: 1 })}
      >
        <span className="text-xl" aria-hidden>💬</span>
        <span className="hidden sm:inline">Book on WhatsApp</span>
      </motion.a>
      </motion.div>
    </>
  );
}
