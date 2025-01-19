import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-primary">Homebor</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button onClick={() => navigate("/register")} className="bg-primary hover:bg-primary-600">
                Register
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Homebor
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect international students with caring homestay families for an enriching cultural experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">For Students</h3>
            <p className="text-gray-600 mb-4">
              Find your perfect homestay family and make the most of your study abroad experience.
            </p>
            <Button onClick={() => navigate("/register/student")} className="w-full bg-primary hover:bg-primary-600">
              Register as Student
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">For Families</h3>
            <p className="text-gray-600 mb-4">
              Open your home to international students and create lasting connections.
            </p>
            <Button onClick={() => navigate("/register/family")} className="w-full bg-primary hover:bg-primary-600">
              Register as Family
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">For Providers</h3>
            <p className="text-gray-600 mb-4">
              Efficiently manage your homestay program with our comprehensive tools.
            </p>
            <Button onClick={() => navigate("/register/provider")} className="w-full bg-primary hover:bg-primary-600">
              Register as Provider
            </Button>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Easy Matching</h3>
            <p className="text-gray-600">Smart matching system for perfect student-family pairs</p>
          </div>

          <div className="text-center">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Safe & Secure</h3>
            <p className="text-gray-600">Verified profiles and secure communication</p>
          </div>

          <div className="text-center">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Easy Communication</h3>
            <p className="text-gray-600">Streamlined messaging and document sharing</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Homebor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;