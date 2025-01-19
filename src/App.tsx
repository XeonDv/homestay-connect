import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudentRegistration from "./pages/registration/StudentRegistration";
import FamilyRegistration from "./pages/registration/FamilyRegistration";
import ProviderRegistration from "./pages/registration/ProviderRegistration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/student" element={<StudentRegistration />} />
          <Route path="/register/family" element={<FamilyRegistration />} />
          <Route path="/register/provider" element={<ProviderRegistration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<div>Forgot password page coming soon</div>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;