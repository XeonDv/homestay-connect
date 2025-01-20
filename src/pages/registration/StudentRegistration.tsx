import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import RegistrationLayout from "@/components/auth/RegistrationLayout";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import PersonalInfoSection from "@/components/registration/PersonalInfoSection";
import AccommodationSection from "@/components/registration/AccommodationSection";
import PreferencesSection from "@/components/registration/PreferencesSection";
import HealthSection from "@/components/registration/HealthSection";
import EmergencyContactSection from "@/components/registration/EmergencyContactSection";

const studentSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  destinationCity: z.string().min(2, "Destination city is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female", "other"]),
  phoneNumber: z.string().min(1, "Phone number is required"),
  originLanguage: z.string().min(1, "Origin language is required"),
  countryOfResidence: z.string().min(1, "Country of residence is required"),
  accommodationType: z.enum(["single", "share"]),
  mealPlan: z.enum(["3meals", "2meals", "nomeals"]),
  preferences: z.object({
    acceptsSmokers: z.boolean(),
    acceptsChildren: z.boolean(),
    acceptsTeenagers: z.boolean(),
    acceptsPets: z.boolean(),
  }),
  health: z.object({
    requiresMedication: z.boolean(),
    hasMentalOrPhysicalCondition: z.boolean(),
    details: z.string().optional(),
  }),
  emergencyContact: z.object({
    name: z.string().min(1, "Emergency contact name is required"),
    phoneNumber: z.string().min(1, "Emergency contact phone number is required"),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
}).refine((data) => data.startDate < data.endDate, {
  message: "End date must be after start date",
  path: ["endDate"],
});

const StudentRegistration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof studentSchema>>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      startDate: new Date(),
      endDate: new Date(),
      destinationCity: "",
      dateOfBirth: "",
      gender: "male",
      phoneNumber: "",
      originLanguage: "",
      countryOfResidence: "",
      accommodationType: "single",
      mealPlan: "3meals",
      preferences: {
        acceptsSmokers: false,
        acceptsChildren: false,
        acceptsTeenagers: false,
        acceptsPets: false,
      },
      health: {
        requiresMedication: false,
        hasMentalOrPhysicalCondition: false,
        details: "",
      },
      emergencyContact: {
        name: "",
        phoneNumber: "",
      },
    },
  });

  const onSubmit = async (values: z.infer<typeof studentSchema>) => {
    try {
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        name: `${values.firstName} ${values.lastName}`,
        email: values.email,
        role: 'student',
        ...values,
      };
      localStorage.setItem('user', JSON.stringify(user));
      
      toast({
        title: "Success",
        description: "Registration successful! Please check your email to verify your account.",
      });
      navigate("/login");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Registration failed. Please try again.",
      });
    }
  };

  return (
    <RegistrationLayout
      title="Student Registration"
      description="Create your account to find your perfect homestay"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" type="email" {...field} />
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
                    <Input placeholder="Enter your password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Confirm your password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Personal Information</h3>
            <PersonalInfoSection form={form} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Accommodation Preferences</h3>
            <AccommodationSection form={form} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">House Preferences</h3>
            <PreferencesSection form={form} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Health Information</h3>
            <HealthSection form={form} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Emergency Contact</h3>
            <EmergencyContactSection form={form} />
          </div>

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </Form>
    </RegistrationLayout>
  );
};

export default StudentRegistration;