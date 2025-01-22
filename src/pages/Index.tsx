import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Building2, Users, GraduationCap, Heart } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header/Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-primary">Homebor</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button onClick={() => window.open("#book-demo", "_self")} className="bg-primary hover:bg-primary-600">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Connect Students with Perfect Homestay Families
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Homebor makes it easy to match international students with welcoming homestay families for enriching cultural experiences.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => navigate("/register")} size="lg" className="bg-primary hover:bg-primary-600">
              Get Started
            </Button>
            <Button onClick={() => window.open("#contact", "_self")} variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Homebor?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Multiple Providers</h3>
              <p className="text-gray-600">Support for multiple homestay providers managing their students and families</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Easy Matching</h3>
              <p className="text-gray-600">Smart matching system for perfect student-family pairs</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Student Support</h3>
              <p className="text-gray-600">Comprehensive support for international students</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Family Network</h3>
              <p className="text-gray-600">Growing network of welcoming homestay families</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <Card className="p-6">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" required placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" required placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" required placeholder="How can we help you?" className="min-h-[100px]" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-600">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Book Demo Section */}
      <section id="book-demo" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a demo to see how Homebor can help you manage your homestay program.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-600">
            Schedule Demo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-600">
                Connecting international students with welcoming homestay families since 2024.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary">Home</a></li>
                <li><a href="#contact" className="hover:text-primary">Contact</a></li>
                <li><a href="#book-demo" className="hover:text-primary">Book Demo</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary">For Students</a></li>
                <li><a href="#" className="hover:text-primary">For Families</a></li>
                <li><a href="#" className="hover:text-primary">For Providers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Email: contact@homebor.com</li>
                <li>Phone: (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Homebor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;