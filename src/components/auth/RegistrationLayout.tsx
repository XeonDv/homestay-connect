import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface RegistrationLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const RegistrationLayout = ({ children, title, description }: RegistrationLayoutProps) => {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-blue-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img src="/placeholder.svg" alt="Homebor Logo" className="h-8 w-8 mr-2" />
          Homebor
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "Join our community and be part of enriching cultural experiences through homestay connections."
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              {children}
            </CardContent>
          </Card>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationLayout;