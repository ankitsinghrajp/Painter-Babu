import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import PaintVariety from "./pages/PaintVariety";
import DecorIdeas from "./pages/DecorIdeas";
import LatestTrends from "./pages/LatestTrends";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/TermsConditions";
import PuneWeather from "./pages/PuneWeather";
import MumbaiWeather from "./pages/MumbaiWeather";
import KolkataWeather from "./pages/KolkataWeather";
import HyderabadWeather from "./pages/HyderabadWeather";
import VizagWeather from "./pages/VizagWeather";
import BangaloreWeather from "./pages/BangaloreWeather";
import NotFound from "./pages/NotFound";
import IndoreWeather from "./pages/IndoreWeather";
import RaipurWeather from "./pages/RaipurWeather";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/paint-variety" element={<PaintVariety />} />
          <Route path="/decor-ideas" element={<DecorIdeas />} />
          <Route path="/latest-trends" element={<LatestTrends />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/pune" element={<PuneWeather />} />
          <Route path="/mumbai" element={<MumbaiWeather />} />
          <Route path="/kolkata" element={<KolkataWeather />} />
          <Route path="/hyderabad" element={<HyderabadWeather />} />
          <Route path="/vizag" element={<VizagWeather />} />
          <Route path="/bangalore" element={<BangaloreWeather />} />
          <Route path="/indore" element={<IndoreWeather/> }/>
          <Route path="/raipur" element={<RaipurWeather/> }/>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
