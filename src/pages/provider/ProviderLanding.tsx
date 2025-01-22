import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate, useParams } from "react-router-dom";
import { Building2, GraduationCap, Home, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { findUser } from "@/utils/mockUsers";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const ProviderLanding = () => {
  const navigate = useNavigate();
  const { providerId } = useParams();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // This would normally come from an API call using the providerId
  const providerInfo = {
    name: "Global Education Services",
    description: "We are dedicated to connecting international students with welcoming homestay families in the heart of California. With over 10 years of experience, we ensure safe, comfortable, and enriching homestay experiences.",
    logo: "/placeholder.svg",
    primaryColor: "blue",
  };

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    try {
      const user = findUser(values.email, values.password);
      
      if (user) {
        // Store the providerId along with the user data
        localStorage.setItem('user', JSON.stringify({ ...user, providerId }));
        toast({
          title: "Success",
          description: "Logged in successfully",
        });

        switch (user.role) {
          case 'provider':
            navigate("/provider");
            break;
          default:
            navigate("/dashboard");
        }
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Invalid credentials",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred while logging in",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header/Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center space-x-2">
                <img src={providerInfo.logo} alt="Provider Logo" className="h-8 w-8" />
                <h1 className="text-xl font-bold text-primary">{providerInfo.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Enter your credentials to access your account</h2>
          </div>
          <Card className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </section>

      {/* Registration Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Students</h3>
              <p className="text-gray-600 mb-4">Find your perfect homestay family and start your journey</p>
              <Button 
                onClick={() => navigate(`/register/student?provider=${providerId}`)}
                variant="outline"
                className="w-full"
              >
                Register as Student
              </Button>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Home className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Host Families</h3>
              <p className="text-gray-600 mb-4">Share your home and culture with international students</p>
              <Button 
                onClick={() => navigate(`/register/family?provider=${providerId}`)}
                variant="outline"
                className="w-full"
              >
                Register as Host Family
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Email: contact@example.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Education St, CA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">
                {providerInfo.description}
              </p>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 {providerInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProviderLanding;