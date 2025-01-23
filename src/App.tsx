import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import KVKK from "./pages/KVKK";
import FoundingLawyer from "./pages/FoundingLawyer";
import Team from "./pages/Team";
import PracticeAreas from "./pages/PracticeAreas";
import Specialties from "./pages/Specialties";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/kvkk" element={<KVKK />} />
          <Route path="/founding-lawyer" element={<FoundingLawyer />} />
          <Route path="/team" element={<Team />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;