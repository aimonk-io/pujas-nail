import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import Faq from "./pages/Faq";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BridalNailArtSiliguri from "./pages/BridalNailArtSiliguri";
import AcrylicNailExtension from "./pages/AcrylicNailExtension";
import GelNailsHomeService from "./pages/GelNailsHomeService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/services" element={<Services />} />
              <Route path="/bridal-nail-art-siliguri" element={<BridalNailArtSiliguri />} />
              <Route path="/acrylic-nail-extension-siliguri" element={<AcrylicNailExtension />} />
              <Route path="/gel-nails-home-service-siliguri" element={<GelNailsHomeService />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
    <Analytics />
  </>
);

createRoot(document.getElementById("root")!).render(<App />);
