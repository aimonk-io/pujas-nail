import { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50">
      {/* Header */}
      <motion.header
        className="bg-white/90 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Puja's Nail Studio
              </h1>
            </motion.div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#pricing"
                className="text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </a>
              <a
                href="#booking"
                className="text-foreground hover:text-primary transition-colors"
              >
                Book Now
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-red-100/50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="flex justify-center mb-6">
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight"
            >
              Beautiful Nails,
              <br />
              Beautiful You
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Experience the artistry of professional nail care with Puja. From
              classic manicures to intricate nail art, we bring your vision to
              life with precision and passion.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="px-8 py-3 text-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary/5"
              >
                View Gallery
              </Button>
            </motion.div>
          </motion.div>
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
        className="py-20 bg-gradient-to-r from-primary/5 to-accent/5"
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
                  className="px-8 py-3 text-lg bg-gradient-to-r from-accent to-primary hover:shadow-lg transition-all duration-300"
                >
                  Claim Your Discount
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary/5"
                >
                  View Full Price List
                </Button>
              </div>
            </motion.div>
          </motion.div>
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
        className="bg-gradient-to-r from-primary/10 to-accent/10 py-16"
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
                <Sparkles className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
