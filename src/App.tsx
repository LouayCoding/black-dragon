import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { LanguageProvider } from "@/hooks/useLanguage";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import SchedulePage from "./pages/SchedulePage";
import InstructorsPage from "./pages/InstructorsPage";
import GalleryPage from "./pages/GalleryPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import PricingPage from "./pages/PricingPage";
import NewsPage from "./pages/NewsPage";
import NewsArticlePage from "./pages/NewsArticlePage";
import AdminPage from "./pages/AdminPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminStudents from "./pages/AdminStudents";
import AdminStudentDetail from "./pages/AdminStudentDetail";
import AdminSchedule from "./pages/AdminSchedule";
import AdminPricing from "./pages/AdminPricing";
import AdminPrograms from "./pages/AdminPrograms";
import AdminPayments from "./pages/AdminPayments";
import AdminNews from "./pages/AdminNews";
import AdminAttendance from "./pages/AdminAttendance";
import AdminLogin from "./pages/AdminLogin";
import { RegistrationPage } from "./pages/RegistrationPage";
import CodeOfConductPage from "./pages/CodeOfConductPage";
import AntiBullyingProtocolPage from "./pages/AntiBullyingProtocolPage";
import HouseRulesPage from "./pages/HouseRulesPage";
import SexualHarassmentProtocolPage from "./pages/SexualHarassmentProtocolPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/instructors" element={<InstructorsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsArticlePage />} />
              <Route path="/code-of-conduct" element={<CodeOfConductPage />} />
              <Route path="/anti-bullying-protocol" element={<AntiBullyingProtocolPage />} />
              <Route path="/house-rules" element={<HouseRulesPage />} />
              <Route path="/sexual-harassment-protocol" element={<SexualHarassmentProtocolPage />} />
              <Route path="/student/*" element={<AdminPage />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/students" element={<AdminStudents />} />
              <Route path="/admin/students/:id" element={<AdminStudentDetail />} />
              <Route path="/admin/attendance" element={<AdminAttendance />} />
              <Route path="/admin/schedule" element={<AdminSchedule />} />
              <Route path="/admin/payments" element={<AdminPayments />} />
              <Route path="/admin/pricing" element={<AdminPricing />} />
              <Route path="/admin/programs" element={<AdminPrograms />} />
              <Route path="/admin/news" element={<AdminNews />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
