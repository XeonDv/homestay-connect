import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">
            Choose how you want to join Homebor
          </p>
        </div>

        <div className="grid gap-4">
          <Link to="/register/student">
            <Card className="p-6 hover:bg-muted cursor-pointer transition-colors">
              <h3 className="font-semibold">Student</h3>
              <p className="text-sm text-muted-foreground">
                Find your perfect homestay family and start your journey
              </p>
            </Card>
          </Link>

          <Link to="/register/family">
            <Card className="p-6 hover:bg-muted cursor-pointer transition-colors">
              <h3 className="font-semibold">Homestay Family</h3>
              <p className="text-sm text-muted-foreground">
                Host international students and share your culture
              </p>
            </Card>
          </Link>

          <Link to="/register/provider">
            <Card className="p-6 hover:bg-muted cursor-pointer transition-colors">
              <h3 className="font-semibold">Provider</h3>
              <p className="text-sm text-muted-foreground">
                Manage homestay programs and connect students with families
              </p>
            </Card>
          </Link>
        </div>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;