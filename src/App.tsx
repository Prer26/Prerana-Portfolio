import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";
import WalkingRobot from "@/components/WalkingRobot"; // 🤖 NEW

import Entry from "./pages/Entry";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/* ================= QUERY CLIENT ================= */
const queryClient = new QueryClient();

/* ================= APP ================= */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={100}>
      {/* Toasts */}
      <Toaster />
      <Sonner />

      {/* Router */}
      <BrowserRouter>
        {/* Fix scroll on route change */}
        <ScrollToTop />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* 🤖 GLOBAL WALKING ROBOT */}
        <WalkingRobot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
