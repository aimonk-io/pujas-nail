import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Clock,
  Sparkles,
  Heart,
  Gift,
  Menu,
  X,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
} from "@/components/ui/drawer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
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

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavExpanded(true);
      } else {
        setNavExpanded(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // Here you would typically send the data to your server
    alert(
      "Booking request submitted! We'll contact you to confirm your appointment.",
    );
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F2F2] via-white to-[#8C1F28]/10">
      {/* Header */}
      <motion.header
        className={`sticky top-0 z-50 border-b border-pink-100 transition-all duration-500 ${navExpanded ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Logo Centered */}
            <div className="flex-1 flex justify-start">
              <img src="/logo.png" alt="Puja's Nail Studio Logo" className="h-12 w-auto object-contain" />
            </div>
            {/* Navigation Links - Desktop */}
            <div className="flex-1 flex justify-end">
              {!isMobile ? (
                <nav className="transition-all duration-500">
                  <div className={`flex items-center gap-6 rounded-full px-8 py-2 shadow border border-gray-200 transition-all duration-500 ${navExpanded ? 'bg-white/90 scale-110' : 'bg-white/0 scale-100'}`}>
                    <a href="#about" className="text-gray-700 font-medium hover:text-primary transition-colors">About</a>
                    <a href="#services" className="text-gray-700 font-medium hover:text-primary transition-colors">Services</a>
                    <a href="#pricing" className="text-gray-700 font-medium hover:text-primary transition-colors">Pricing</a>
                    <a href="#contact" className="text-gray-700 font-medium hover:text-primary transition-colors">Contact</a>
                  </div>
                </nav>
              ) : (
                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <button aria-label="Open navigation menu" className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary">
                      <Menu className="h-7 w-7 text-primary" />
                    </button>
                  </DrawerTrigger>
                  <DrawerContent className="pb-8 w-full h-full fixed right-0 top-0 bottom-0 bg-background shadow-lg border-l border-gray-200 flex flex-col">
                    <button aria-label="Close navigation menu" className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary">
                      <DrawerClose asChild>
                        <X className="h-6 w-6 text-primary" />
                      </DrawerClose>
                    </button>
                    <DrawerHeader>
                      <img src="/logo.png" alt="Puja's Nail Studio Logo" className="h-16 w-auto mx-auto mb-4" />
                    </DrawerHeader>
                    <nav className="flex flex-col gap-6 items-center mt-4">
                      <a href="#about" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}><DrawerClose asChild><span>About</span></DrawerClose></a>
                      <a href="#services" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}><DrawerClose asChild><span>Services</span></DrawerClose></a>
                      <a href="#pricing" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}><DrawerClose asChild><span>Pricing</span></DrawerClose></a>
                      <a href="#contact" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}><DrawerClose asChild><span>Contact</span></DrawerClose></a>
                    </nav>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8C1F28]/20 to-[#D92525]/20 z-10" />
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
              variants={stagger}
            >
              <motion.div variants={fadeIn} className="flex justify-center lg:justify-start mb-6">
                <Badge
                  variant="secondary"
                  className="px-6 py-2 text-sm bg-primary/10 text-primary border-primary/20"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Premium Nail Artistry
                </Badge>
              </motion.div>
                          <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#8C1F28] via-[#D92525] to-[#044040] bg-clip-text text-transparent leading-tight"
            >
                Beautiful Nails,
                <br />
                Beautiful You
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Experience the artistry of professional nail care with Puja. From
                classic manicures to intricate nail art, we bring your vision to
                life with precision and passion.
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                              <Button
                size="lg"
                className="px-8 py-3 text-lg bg-gradient-to-r from-[#8C1F28] to-[#D92525] hover:shadow-lg transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Book Appointment
                </Button>
                              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-[#8C1F28] text-[#8C1F28] hover:bg-[#8C1F28]/5"
                onClick={() =>
                  document
                    .getElementById("gallery")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                  View Gallery
                </Button>
              </motion.div>
            </motion.div>

                         {/* Hero Image Grid */}
             <motion.div
               className="relative"
               initial="hidden"
               animate="visible"
               variants={stagger}
             >
               <div className="grid grid-cols-2 gap-4">
                 <motion.div
                   variants={fadeIn}
                   className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
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
                   variants={fadeIn}
                   className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
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
                   variants={fadeIn}
                   className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
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
                   variants={fadeIn}
                   className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                 >
                   <img
                     src="/media/PHOTO-2025-07-07-18-03-03 2.jpg"
                     alt="Intricate nail design"
                     className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
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

      {/* Hero Image Showcase */}
      <section className="relative py-16 bg-gradient-to-br from-[#F2F2F2] to-[#8C1F28]/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeIn}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <img
                src="/media/PHOTO-2025-07-07-18-03-03.jpg"
                alt="Featured nail art showcase"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">
                  Featured Artistry
                </h2>
                <p className="text-xl text-white/90 drop-shadow-md max-w-md">
                  Discover our signature nail designs that combine elegance with creativity
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white/80 text-sm">Hover to explore</span>
                </div>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sample Services Section for Nail Artist */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Nail Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our range of professional nail artistry and care services, designed to pamper and beautify your hands and feet.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F2F2F2] rounded-xl shadow p-8 flex flex-col items-center">
              <img src="/logo.png" alt="Classic Manicure" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#8C1F28]">Classic Manicure</h3>
              <p className="text-muted-foreground mb-2">Nail shaping, cuticle care, and polish for a timeless look.</p>
              <span className="text-[#D92525] font-bold">₹800</span>
            </div>
            <div className="bg-[#F2F2F2] rounded-xl shadow p-8 flex flex-col items-center">
              <img src="/logo.png" alt="Gel Nail Art" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#8C1F28]">Gel Nail Art</h3>
              <p className="text-muted-foreground mb-2">Long-lasting gel polish with custom designs and embellishments.</p>
              <span className="text-[#D92525] font-bold">₹1,200</span>
            </div>
            <div className="bg-[#F2F2F2] rounded-xl shadow p-8 flex flex-col items-center">
              <img src="/logo.png" alt="Spa Pedicure" className="h-16 w-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#8C1F28]">Spa Pedicure</h3>
              <p className="text-muted-foreground mb-2">Relaxing foot soak, exfoliation, massage, and polish.</p>
              <span className="text-[#D92525] font-bold">₹1,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="flex justify-center mb-4">
              <Badge
                variant="secondary"
                className="px-4 py-2 bg-accent/10 text-accent border-accent/20"
              >
                Our Specialties
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            >
              Nail Services & Artistry
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Transform your nails with our comprehensive range of professional
              services
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full border-pink-100 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {service.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="text-primary border-primary/30 bg-primary/5"
                      >
                        {service.duration}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-accent">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-r from-[#8C1F28]/5 to-[#D92525]/5"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="max-w-3xl mx-auto">
              <Badge
                variant="secondary"
                className="mb-6 px-6 py-2 text-lg bg-white/50 border-primary/20 text-primary"
              >
                <Gift className="h-5 w-5 mr-2" />
                Special Offer
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                First-Time Client Special
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get 20% off your first appointment with us. Experience the
                difference of professional nail artistry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Button
                size="lg"
                className="px-8 py-3 text-lg bg-gradient-to-r from-[#D92525] to-[#8C1F28] hover:shadow-lg transition-all duration-300"
              >
                  Claim Your Discount
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg border-[#8C1F28] text-[#8C1F28] hover:bg-[#8C1F28]/5"
                >
                  View Full Price List
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Grid Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="flex justify-center mb-4">
              <Badge
                variant="secondary"
                className="px-4 py-2 bg-primary/10 text-primary border-primary/20"
              >
                Featured Collection
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            >
              Nail Art Gallery
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our stunning nail art designs and find inspiration for your next appointment
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
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
                variants={fadeIn}
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

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-20 bg-gradient-to-br from-[#F2F2F2] to-[#8C1F28]/10"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="flex justify-center mb-4">
              <Badge
                variant="secondary"
                className="px-4 py-2 bg-primary/10 text-primary border-primary/20"
              >
                Our Work
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            >
              Gallery Showcase
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Discover our beautiful nail artistry and see why clients love our
              work
            </motion.p>
          </motion.div>

          <GallerySlider />
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <Badge
                variant="secondary"
                className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
              >
                Easy Booking
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Book Your Appointment
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Schedule your perfect nail treatment with just a few clicks
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-pink-100 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-foreground font-medium"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="Enter your full name"
                          required
                          className="border-pink-200 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-foreground font-medium"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="+91 98765 43210"
                          required
                          className="border-pink-200 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-foreground font-medium"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                        required
                        className="border-pink-200 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="service"
                        className="text-foreground font-medium"
                      >
                        Select Service
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger className="border-pink-200 focus:border-primary">
                          <SelectValue placeholder="Choose your service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service.name}>
                              {service.name} - {service.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="date"
                          className="text-foreground font-medium"
                        >
                          Preferred Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) =>
                            handleInputChange("date", e.target.value)
                          }
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="border-pink-200 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="time"
                          className="text-foreground font-medium"
                        >
                          Preferred Time
                        </Label>
                        <Select
                          value={formData.time}
                          onValueChange={(value) =>
                            handleInputChange("time", value)
                          }
                        >
                          <SelectTrigger className="border-pink-200 focus:border-primary">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="15:00">3:00 PM</SelectItem>
                            <SelectItem value="16:00">4:00 PM</SelectItem>
                            <SelectItem value="17:00">5:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-foreground font-medium"
                      >
                        Special Requests (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Any special requests or nail design ideas?"
                        className="border-pink-200 focus:border-primary min-h-[100px]"
                      />
                    </div>

                    <Separator className="my-6" />

                    <div className="text-center">
                      <Button
                        type="submit"
                        size="lg"
                        className="px-12 py-3 text-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
                      >
                        <Sparkles className="h-5 w-5 mr-2" />
                        Book Appointment
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4">
                        We'll contact you within 24 hours to confirm your
                        appointment
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer
        id="contact"
        className="bg-gradient-to-r from-[#8C1F28]/10 to-[#D92525]/10 py-16"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
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
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    hello@pujanails.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    123 Beauty Street, Mumbai
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
                    <div className="text-muted-foreground">Mon - Sat</div>
                    <div className="text-sm text-muted-foreground">
                      10:00 AM - 8:00 PM
                    </div>
                  </div>
                </div>
                <div className="text-muted-foreground">
                  <div>Sunday: Closed</div>
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
    </div>
  );
}
