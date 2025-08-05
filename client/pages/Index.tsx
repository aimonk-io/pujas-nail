import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
  {
    id: 1,
    src: "/media/PHOTO-2025-07-07-18-03-03 2.jpg",
    alt: "Elegant nail art with intricate design",
    title: "Intricate Nail Art",
  },
  {
    id: 2,
    src: "/media/PHOTO-2025-07-07-18-03-03.jpg",
    alt: "Classic French manicure with perfect finish",
    title: "Perfect French Manicure",
  },
  {
    id: 3,
    src: "/media/PHOTO-2025-07-07-18-03-58.jpg",
    alt: "Beautiful nail art with floral patterns",
    title: "Floral Nail Design",
  },
  {
    id: 4,
    src: "/media/PHOTO-2025-07-07-18-04-22.jpg",
    alt: "Glamorous nail art with sparkles",
    title: "Glamorous Sparkle Nails",
  },
  {
    id: 5,
    src: "/media/PHOTO-2025-07-07-18-02-58 2.jpg",
    alt: "Sophisticated nail design with gold accents",
    title: "Gold Accent Nails",
  },
];

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
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/40 hover:scale-110 transition-all duration-300 group opacity-0 group-hover:opacity-100"
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
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/40 hover:scale-110 transition-all duration-300 group opacity-0 group-hover:opacity-100"
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

const services = [
  {
    name: "Classic Manicure",
    price: "₹800",
    duration: "45 mins",
    description:
      "Traditional nail care with cuticle trimming, shaping, and polish application",
  },
  {
    name: "Gel Manicure",
    price: "₹1,200",
    duration: "60 mins",
    description:
      "Long-lasting gel polish that stays chip-free for up to 3 weeks",
  },
  {
    name: "French Manicure",
    price: "₹1,000",
    duration: "50 mins",
    description: "Elegant white tips with nude or pink base for a classic look",
  },
  {
    name: "Nail Art Design",
    price: "₹1,500",
    duration: "75 mins",
    description: "Custom nail art with intricate designs and embellishments",
  },
  {
    name: "Russian Manicure",
    price: "₹1,800",
    duration: "90 mins",
    description:
      "Dry manicure technique for perfect cuticle work and long-lasting results",
  },
  {
    name: "Luxury Spa Manicure",
    price: "₹2,200",
    duration: "120 mins",
    description:
      "Premium treatment with hand massage, mask, and luxury products",
  },
];

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
    description: "Classic French manicure with artistic variations and designs",
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
  const [navExpanded, setNavExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showDiscountDialog, setShowDiscountDialog] = useState(false);
  const [showPricingDialog, setShowPricingDialog] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavExpanded(true);
        setHasScrolled(true);
      } else {
        setNavExpanded(false);
        setHasScrolled(false);
      }

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



  const isMobile = useIsMobile();

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
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo with Circle Background */}
            <div className="flex-1 flex justify-start">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <img src="/logo.png" alt="Puja's Nail Studio Logo" className="h-10 w-10 object-contain" />
              </div>
            </div>
            {/* Navigation Links - Desktop */}
            <div className="flex-1 flex justify-end">
              {!isMobile ? (
                <>
                  {/* Hamburger Menu - Show when scrolled */}
                  {hasScrolled && (
                    <motion.div
                      className="relative"
                      onMouseEnter={() => setIsNavHovered(true)}
                      onMouseLeave={() => setIsNavHovered(false)}
                    >
                      <motion.div 
                        className="flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-xl overflow-hidden"
                        animate={{
                          width: isNavHovered ? "auto" : "48px",
                          paddingLeft: isNavHovered ? "2rem" : "0px",
                          paddingRight: isNavHovered ? "2rem" : "0px",
                          paddingTop: isNavHovered ? "0.5rem" : "0px",
                          paddingBottom: isNavHovered ? "0.5rem" : "0px",
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        {/* Hamburger - Hidden on hover */}
                        <motion.button
                          className="w-12 h-12 rounded-full bg-white hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            opacity: isNavHovered ? 0 : 1,
                            width: isNavHovered ? "0px" : "48px",
                            height: isNavHovered ? "0px" : "48px",
                          }}
                          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
                        >
                          <Menu className="h-5 w-5 text-foreground" />
                        </motion.button>

                        {/* Navigation Items - Show on hover */}
                        <motion.div
                          className="flex items-center gap-8"
                          animate={{
                            opacity: isNavHovered ? 1 : 0,
                            width: isNavHovered ? "auto" : "0px",
                          }}
                          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.05 }}
                        >
                          <a href="#home" className="text-foreground font-medium hover:text-primary transition-colors px-5 py-3 rounded-full hover:bg-primary/10 whitespace-nowrap">Home</a>
                          <a href="#work" className="text-foreground font-medium hover:text-primary transition-colors px-5 py-3 rounded-full hover:bg-primary/10 whitespace-nowrap">Work</a>
                          <a href="#services" className="text-foreground font-medium hover:text-primary transition-colors px-5 py-3 rounded-full hover:bg-primary/10 whitespace-nowrap">Services</a>
                          <a href="#pricing" className="text-foreground font-medium hover:text-primary transition-colors px-5 py-3 rounded-full hover:bg-primary/10 whitespace-nowrap">Pricing</a>
                          <a 
                          href="#booking"
                          className="text-white font-medium bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 whitespace-nowrap border-0 cursor-pointer"
                        >
                          Book Now
                        </a>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                  
                                    {/* Full Navigation - Show on initial load (not scrolled) */}
                  {!hasScrolled && (
                    <nav 
                      className="transition-all duration-500"
                      onMouseEnter={() => setIsNavHovered(true)}
                      onMouseLeave={() => setIsNavHovered(false)}
                    >
                      <motion.div 
                        className="flex items-center gap-8 rounded-full bg-white shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-xl px-8 py-2"
                      >
                        <a href="#home" className="text-foreground font-medium hover:text-primary transition-colors px-5 py-3 rounded-full hover:bg-primary/10">Home</a>
                        <a href="#work" className="text-foreground font-medium hover:text-primary transition-colors px-5 py-3 rounded-full hover:bg-primary/10">Work</a>
                        <a href="#services" className="text-foreground font-medium hover:text-primary transition-colors px-5 py-3 rounded-full hover:bg-primary/10">Services</a>
                        <a href="#pricing" className="text-foreground font-medium hover:text-primary transition-colors px-5 py-3 rounded-full hover:bg-primary/10">Pricing</a>
                        <a 
                          href="#booking"
                          className="text-white font-medium bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 border-0 cursor-pointer"
                        >
                          Book Now
                        </a>
                      </motion.div>
                    </nav>
                  )}
                </>
              ) : (
                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <button aria-label="Open navigation menu" className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300">
                      <Menu className="h-6 w-6 text-white" />
                    </button>
                  </DrawerTrigger>
                  <DrawerContent className="pb-8 w-full h-full fixed right-0 top-0 bottom-0 bg-background shadow-lg border-l border-gray-200 flex flex-col">
                    <button aria-label="Close navigation menu" className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary">
                      <DrawerClose asChild>
                        <X className="h-6 w-6 text-primary" />
                      </DrawerClose>
                    </button>
                    <DrawerHeader>
                      <div className="bg-white rounded-full p-4 mx-auto mb-4 shadow-lg">
                        <img src="/logo.png" alt="Puja's Nail Studio Logo" className="h-16 w-16 object-contain" />
                      </div>
                    </DrawerHeader>
                    <nav className="flex flex-col gap-6 items-center mt-4">
                      <DrawerClose asChild>
                        <a href="#about" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors">About</a>
                      </DrawerClose>
                      <DrawerClose asChild>
                        <a href="#services" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors">Services</a>
                      </DrawerClose>
                      <DrawerClose asChild>
                        <a href="#pricing" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors">Pricing</a>
                      </DrawerClose>
                      <DrawerClose asChild>
                        <a 
                          href="#booking"
                          className="text-lg font-medium text-gray-700 hover:text-primary transition-colors border-0 bg-transparent cursor-pointer"
                        >
                          Book Appointment
                        </a>
                      </DrawerClose>
                    </nav>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#F2F2F2] via-white to-[#8C1F28]/5" role="banner" aria-label="Welcome to Puja's Nail Studio">
        {/* Background Images */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-foreground/5 z-10" />
          <div className="absolute top-0 left-0 w-1/3 h-full opacity-20">
            <img
              src="/media/PHOTO-2025-07-07-18-03-03.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
            <img
              src="/media/PHOTO-2025-07-07-18-03-03 2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              className="text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerSlow}
            >
              <motion.div variants={bounceIn} className="flex justify-center lg:justify-start mb-6">
                <Badge
                  variant="secondary"
                  className="px-6 py-2 text-sm bg-primary/10 text-primary border-primary/20"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Premium Nail Artistry
                </Badge>
              </motion.div>
                          <motion.h1
              variants={slideInFromTop}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight drop-shadow-sm"
              itemProp="name"
            >
                Beautiful Nails,
                <br />
                Beautiful You
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                itemProp="description"
              >
                Experience the artistry of professional nail care with Puja. From
                classic manicures to intricate nail art, we bring your vision to
                life with precision and passion.
              </motion.p>
              <motion.div
                variants={slideInFromBottom}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                              <Button
                size="lg"
                className="px-8 py-3 text-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Book Appointment
                </Button>
              </motion.div>
            </motion.div>

                         {/* Hero Image Grid */}
             <motion.div
               className="relative"
               initial="hidden"
               animate="visible"
               variants={staggerFast}
             >
               <div className="grid grid-cols-2 gap-4">
                 <motion.div
                   variants={scaleIn}
                   className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                   whileHover={{ 
                     scale: 1.05,
                     transition: { duration: 0.3 }
                   }}
                 >
                   <img
                     src="/media/PHOTO-2025-07-07-18-03-58.jpg"
                     alt="Floral nail art"
                     className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   {/* Multiple Overlay Layers */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                   <div className="absolute inset-0 bg-gradient-to-r from-[#8C1F28]/20 to-[#D92525]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-br from-[#8C1F28]/10 to-[#044040]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                   
                   {/* Content Overlay */}
                   <div className="absolute inset-0 flex flex-col justify-end p-4">
                     <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                       <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Floral Elegance</h3>
                       <p className="text-white/90 text-sm drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">Delicate floral motifs</p>
                     </div>
                   </div>
                   
                   {/* Decorative Elements */}
                   <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                       <Sparkles className="h-4 w-4 text-white" />
                     </div>
                   </div>
                 </motion.div>
                 
                 <motion.div
                   variants={scaleIn}
                   className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                   whileHover={{ 
                     scale: 1.05,
                     transition: { duration: 0.3 }
                   }}
                 >
                   <img
                     src="/media/PHOTO-2025-07-07-18-04-22.jpg"
                     alt="Glamorous nail art"
                     className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   {/* Multiple Overlay Layers */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                   <div className="absolute inset-0 bg-gradient-to-r from-[#8C1F28]/20 to-[#D92525]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-br from-[#8C1F28]/10 to-[#044040]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                   
                   {/* Content Overlay */}
                   <div className="absolute inset-0 flex flex-col justify-end p-4">
                     <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                       <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Glamorous Sparkle</h3>
                       <p className="text-white/90 text-sm drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">Dazzling sparkle effects</p>
                     </div>
                   </div>
                   
                   {/* Decorative Elements */}
                   <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                       <Sparkles className="h-4 w-4 text-white" />
                     </div>
                   </div>
                 </motion.div>
                 
                 <motion.div
                   variants={scaleIn}
                   className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                   whileHover={{ 
                     scale: 1.05,
                     transition: { duration: 0.3 }
                   }}
                 >
                   <img
                     src="/media/PHOTO-2025-07-07-18-02-58 2.jpg"
                     alt="Gold accent nails"
                     className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   {/* Multiple Overlay Layers */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                   <div className="absolute inset-0 bg-gradient-to-r from-[#8C1F28]/20 to-[#D92525]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-br from-[#8C1F28]/10 to-[#044040]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                   
                   {/* Content Overlay */}
                   <div className="absolute inset-0 flex flex-col justify-end p-4">
                     <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                       <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Gold Accents</h3>
                       <p className="text-white/90 text-sm drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">Luxurious gold detailing</p>
                     </div>
                   </div>
                   
                   {/* Decorative Elements */}
                   <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                       <Sparkles className="h-4 w-4 text-white" />
                     </div>
                   </div>
                 </motion.div>
                 
                 <motion.div
                   variants={scaleIn}
                   className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                   whileHover={{ 
                     scale: 1.05,
                     transition: { duration: 0.3 }
                   }}
                 >
                   <img
                     src="/media/PHOTO-2025-07-07-18-03-03 2.jpg"
                     alt="Intricate nail design"
                     className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   {/* Multiple Overlay Layers */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                   <div className="absolute inset-0 bg-gradient-to-r from-[#8C1F28]/20 to-[#D92525]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-br from-[#8C1F28]/10 to-[#044040]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                   
                   {/* Content Overlay */}
                   <div className="absolute inset-0 flex flex-col justify-end p-4">
                     <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                       <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Intricate Design</h3>
                       <p className="text-white/90 text-sm drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">Sophisticated patterns</p>
                     </div>
                   </div>
                   
                   {/* Decorative Elements */}
                   <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                       <Sparkles className="h-4 w-4 text-white" />
                     </div>
                   </div>
                 </motion.div>
               </div>
              
              {/* Floating Sparkle */}
                             <motion.div
                 className="absolute -top-4 -right-4"
                 animate={{ 
                   rotate: [0, 360],
                   scale: [1, 1.1, 1]
                 }}
                 transition={{ 
                   duration: 3,
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
               >
                 <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg">
                   <Sparkles className="h-8 w-8 text-[#8C1F28]" />
                 </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>





      {/* Services Section */}
      <section id="services" className="py-20 bg-[#044040]/8" role="region" aria-label="Our Nail Services">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerSlow}
          >

            <motion.h2
              variants={slideInFromTop}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-[#8C1F28] via-[#D92525] to-[#044040] bg-clip-text text-transparent leading-tight drop-shadow-lg"
            >
              Professional Nail Services
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Transform your nails with our comprehensive range of professional services designed to enhance your natural beauty
            </motion.p>
          </motion.div>



          {/* Services Grid - Side by Side */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerSlow}
          >
            {/* Nail Extensions */}
            <motion.div variants={fadeInLeft}>
              <div className="text-center mb-8">
                <motion.h3
                  variants={slideInFromTop}
                  className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[#044040] via-[#8C1F28] to-[#D92525] bg-clip-text text-transparent drop-shadow-lg"
                >
                  Nail Extensions
                </motion.h3>
                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                  Professional nail extensions for length, strength, and stunning designs
                </motion.p>
              </div>
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={staggerFast}
              >
                {nailExtensions.map((service, index) => (
                  <motion.div 
                    key={index} 
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#044040]/5 to-[#8C1F28]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <CardHeader className="relative pb-6">
                        <div className="flex justify-between items-start mb-4">
                          <CardTitle className="text-xl font-bold text-foreground group-hover:text-[#044040] transition-colors">
                            {service.name}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className="text-[#044040] border-[#044040]/30 bg-[#044040]/10 font-semibold"
                          >
                            {service.duration}
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#D92525] to-[#8C1F28] bg-clip-text text-transparent">
                          {service.price}
                        </div>
                      </CardHeader>
                      <CardContent className="relative">
                        <CardDescription className="text-muted-foreground leading-relaxed text-base">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Nail Art Types */}
            <motion.div variants={fadeInRight}>
              <div className="text-center mb-8">
                <motion.h3
                  variants={slideInFromTop}
                  className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[#D92525] via-[#8C1F28] to-[#044040] bg-clip-text text-transparent drop-shadow-lg"
                >
                  Nail Art Types
                </motion.h3>
                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                  Creative nail art designs that express your unique style and personality
                </motion.p>
              </div>
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={staggerFast}
              >
                {nailArtTypes.map((service, index) => (
                  <motion.div 
                    key={index} 
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D92525]/5 to-[#8C1F28]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <CardHeader className="relative pb-6">
                        <div className="flex justify-between items-start mb-4">
                          <CardTitle className="text-xl font-bold text-foreground group-hover:text-[#D92525] transition-colors">
                            {service.name}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className="text-[#D92525] border-[#D92525]/30 bg-[#D92525]/10 font-semibold"
                          >
                            {service.duration}
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#8C1F28] to-[#D92525] bg-clip-text text-transparent">
                          {service.price}
                        </div>
                      </CardHeader>
                      <CardContent className="relative">
                        <CardDescription className="text-muted-foreground leading-relaxed text-base">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Highlight */}
              <section
          id="pricing"
          className="py-20 bg-[#D92525]/8"
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
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-[#D92525] via-[#8C1F28] to-[#044040] bg-clip-text text-transparent leading-tight drop-shadow-lg"
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
                    className="px-8 py-3 text-lg bg-gradient-to-r from-[#D92525] to-[#8C1F28] hover:shadow-lg transition-all duration-300 text-white font-medium rounded-lg border-0"
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
                    className="px-8 py-3 text-lg border-[#8C1F28] text-[#8C1F28] hover:bg-[#8C1F28]/5"
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
      <section id="work" className="py-20 bg-[#591C21]/10" role="region" aria-label="Our Nail Art Gallery">
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
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-[#8C1F28] via-[#D92525] to-[#044040] bg-clip-text text-transparent leading-tight drop-shadow-lg"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerFast}
          >
            {[
              {
                src: "/media/PHOTO-2025-07-07-18-03-03 2.jpg",
                alt: "Elegant nail art with intricate design",
                title: "Intricate Design",
                description: "Sophisticated patterns with precision"
              },
              {
                src: "/media/PHOTO-2025-07-07-18-03-58.jpg",
                alt: "Beautiful nail art with floral patterns",
                title: "Floral Elegance",
                description: "Delicate floral motifs"
              },
              {
                src: "/media/PHOTO-2025-07-07-18-04-22.jpg",
                alt: "Glamorous nail art with sparkles",
                title: "Glamorous Sparkle",
                description: "Dazzling sparkle effects"
              },
              {
                src: "/media/PHOTO-2025-07-07-18-02-58 2.jpg",
                alt: "Sophisticated nail design with gold accents",
                title: "Gold Accents",
                description: "Luxurious gold detailing"
              },
              {
                src: "/media/PHOTO-2025-07-07-18-03-03.jpg",
                alt: "Classic French manicure with perfect finish",
                title: "Perfect French",
                description: "Timeless French manicure"
              },
              {
                src: "/media/PHOTO-2025-07-07-18-03-03 2.jpg",
                alt: "Elegant nail art showcase",
                title: "Artistic Masterpiece",
                description: "Creative nail artistry"
              }
            ].map((image, index) => (
              <motion.div
                key={index}
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
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-xs">Hover for details</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Booking Form */}
      <section id="booking" className="py-16 bg-[#8C1F28]/8" role="region" aria-label="Book Your Nail Appointment">
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
                className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[#8C1F28] via-[#D92525] to-[#044040] bg-clip-text text-transparent leading-tight drop-shadow-lg"
              >
                Book Your Appointment
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                Choose your preferred date and time to book your nail appointment. Instant confirmation and easy scheduling.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8C1F28]/5 to-[#D92525]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-6">
                  {/* Calendly inline widget */}
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/pujabarmanb9/puja-nail-services?background_color=ffffff&text_color=8c1f28" 
                    style={{ minWidth: '320px', height: '700px' }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Contact & Footer */}
      <footer
        id="contact"
        className="bg-[#044040]/15 py-16"
        role="contentinfo"
        aria-label="Contact Information and Footer"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerSlow}
          >
            <motion.div variants={fadeIn} className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="Puja's Nail Studio Logo" className="h-10 w-10 object-contain" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#8C1F28] to-[#D92525] bg-clip-text text-transparent">
                  Puja's Nail Studio
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Where artistry meets precision. Creating beautiful nails and
                confident smiles since 2020. Book your appointment today and
                experience the difference.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/pujanailstudio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </a>
                <a 
                  href="https://www.facebook.com/people/puja-Nails-Studio/61578745337761/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+91 8101267974</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    pujanailstudio@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    Dabgram, Siliguri
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Studio Hours
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-muted-foreground">Mon - Sun</div>
                    <div className="text-sm text-muted-foreground">
                      10:00 AM - 8:00 PM
                    </div>
                  </div>
                </div>
                <div className="text-muted-foreground">
                  <div>7 Days a Week</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <Separator className="my-8" />

          <motion.div
            className="text-center text-muted-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p>
              &copy; 2024 Puja's Nail Studio. All rights reserved. Made with ❤️
              for beautiful nails.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Discount Dialog */}
      <Dialog open={showDiscountDialog} onOpenChange={setShowDiscountDialog}>
        <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-sm border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-[#D92525] to-[#8C1F28] bg-clip-text text-transparent">
              🎉 First-Time Client Special!
            </DialogTitle>
            <DialogDescription className="text-center text-lg mt-4">
              Welcome to Puja's Nail Studio! We're excited to have you.
            </DialogDescription>
          </DialogHeader>
          <div className="text-center space-y-4">
            <div className="bg-gradient-to-r from-[#D92525]/10 to-[#8C1F28]/10 p-6 rounded-lg border border-[#D92525]/20">
              <div className="text-4xl font-bold text-[#D92525] mb-2">10% OFF</div>
              <div className="text-lg text-muted-foreground">
                Your first appointment with us
              </div>
            </div>
            
            {/* Discount Code Section */}
            <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-[#D92525]/30">
              <div className="text-sm font-medium text-gray-600 mb-2">Use Discount Code:</div>
              <div className="bg-white px-4 py-2 rounded border border-gray-200">
                <span className="text-xl font-bold text-[#D92525] tracking-wider">FIRST10C</span>
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
              className="w-full bg-gradient-to-r from-[#D92525] to-[#8C1F28] hover:shadow-lg"
            >
              Got it! Thanks for the offer
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Pricing List Dialog */}
      <Dialog open={showPricingDialog} onOpenChange={setShowPricingDialog}>
        <DialogContent className="sm:max-w-lg bg-white/95 backdrop-blur-sm border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-[#8C1F28] to-[#D92525] bg-clip-text text-transparent">
              📋 Complete Price List
            </DialogTitle>
            <DialogDescription className="text-center text-lg mt-4">
              Download our comprehensive pricing guide for all services
            </DialogDescription>
          </DialogHeader>
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-[#8C1F28]/10 to-[#D92525]/10 p-6 rounded-lg border border-[#8C1F28]/20">
              <Download className="h-12 w-12 mx-auto text-[#8C1F28] mb-4" />
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
                className="flex-1 bg-gradient-to-r from-[#8C1F28] to-[#D92525] hover:shadow-lg"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button 
                variant="outline"
                onClick={() => setShowPricingDialog(false)}
                className="flex-1 border-[#8C1F28] text-[#8C1F28] hover:bg-[#8C1F28]/5"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      </motion.div>
    </>
  );
}
