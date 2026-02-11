import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingReserveButton from "@/components/FloatingReserveButton";
import Index from "./pages/Index";
import Experiencia from "./pages/Experiencia";
import Restaurante from "./pages/Restaurante";
import Contacto from "./pages/Contacto";
import Reserva from "./pages/Reserva";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/restaurante" element={<Restaurante />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/reserva" element={<Reserva />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <FloatingReserveButton />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
