import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudentRegistration from "./pages/registration/StudentRegistration";
import FamilyRegistration from "./pages/registration/FamilyRegistration";
import ProviderRegistration from "./pages/registration/ProviderRegistration";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProviderDashboard from "./pages/provider/ProviderDashboard";
import StudentDetails from "./pages/provider/StudentDetails";
import FamilyDetails from "./pages/provider/FamilyDetails";
import MatchingPage from "./pages/provider/MatchingPage";

const queryClient = new QueryClient();

const App = () => {
  const userDataString = localStorage.getItem('user');
  const user = userDataString ? JSON.parse(userDataString) : null;

  const isAdmin = user?.role === 'admin';
  const isProvider = user?.role === 'provider';

  return (
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
            <Route 
              path="/register/provider" 
              element={isAdmin ? <ProviderRegistration /> : <Navigate to="/login" />} 
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route 
              path="/admin/*" 
              element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/provider" 
              element={isProvider ? <ProviderDashboard /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/provider/student/:id" 
              element={isProvider ? <StudentDetails /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/provider/family/:id" 
              element={isProvider ? <FamilyDetails /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/provider/matching" 
              element={isProvider ? <MatchingPage /> : <Navigate to="/login" />} 
            />
            <Route path="/forgot-password" element={<div>Forgot password page coming soon</div>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;