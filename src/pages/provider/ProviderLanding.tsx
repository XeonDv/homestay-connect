import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { Building2, GraduationCap, Home, Users } from "lucide-react";

const ProviderLanding = () => {
  const navigate = useNavigate();
  const { providerId } = useParams();
  
  // This would normally come from an API call using the providerId
  const providerInfo = {
    name: "Global Education Services",
    description: "We are dedicated to connecting international students with welcoming homestay families in the heart of California. With over 10 years of experience, we ensure safe, comfortable, and enriching homestay experiences.",
    logo: "/placeholder.svg", // Would be replaced with actual provider logo
    primaryColor: "blue", // Would be customizable per provider
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
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to {providerInfo.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {providerInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => navigate(`/register/student?provider=${providerId}`)} 
              size="lg" 
              className="bg-primary hover:bg-primary-600"
            >
              <GraduationCap className="mr-2" />
              Register as Student
            </Button>
            <Button 
              onClick={() => navigate(`/register/family?provider=${providerId}`)} 
              variant="outline" 
              size="lg"
            >
              <Home className="mr-2" />
              Register as Host Family
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Personalized Matching</h3>
              <p className="text-gray-600">We carefully match students with compatible host families</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Quality Homes</h3>
              <p className="text-gray-600">All our host families are thoroughly vetted for your safety</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Student Support</h3>
              <p className="text-gray-600">24/7 support throughout your homestay experience</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Email: contact@example.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Education St, CA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <button onClick={() => navigate("/login")} className="hover:text-primary">
                    Login
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate(`/register/student?provider=${providerId}`)} className="hover:text-primary">
                    Student Registration
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate(`/register/family?provider=${providerId}`)} className="hover:text-primary">
                    Family Registration
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">
                {providerInfo.name} is committed to creating meaningful cultural exchange experiences through quality homestay programs.
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