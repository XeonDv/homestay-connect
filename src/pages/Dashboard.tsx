import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/utils/mockUsers";
import { format } from "date-fns";

const Dashboard = () => {
  const navigate = useNavigate();
  const userDataString = localStorage.getItem('user');
  const user: User | null = userDataString ? JSON.parse(userDataString) : null;

  if (!user) {
    navigate('/login');
    return null;
  }

  // Redirect to appropriate dashboard based on role
  if (user.role === 'admin') {
    navigate('/admin');
    return null;
  } else if (user.role === 'provider') {
    navigate('/provider');
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Mock pairing data - replace with actual API data
  const mockPairing = {
    student: {
      name: "John Doe",
      startDate: new Date("2024-09-01"),
      endDate: new Date("2025-06-30"),
    },
    family: {
      name: "Smith Family",
      address: "123 Main St, City",
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Your account details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
              {user.startDate && user.endDate && (
                <>
                  <p><strong>Stay Period:</strong></p>
                  <p>From: {format(new Date(user.startDate), "PPP")}</p>
                  <p>To: {format(new Date(user.endDate), "PPP")}</p>
                </>
              )}
              {user.role === 'student' && (
                <>
                  <p><strong>Destination City:</strong> {user.destinationCity}</p>
                  <p><strong>Date of Birth:</strong> {user.dateOfBirth}</p>
                  <p><strong>Gender:</strong> {user.gender}</p>
                  <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                  <p><strong>Origin Language:</strong> {user.originLanguage}</p>
                  <p><strong>Country of Residence:</strong> {user.countryOfResidence}</p>
                  <p><strong>Accommodation Type:</strong> {user.accommodationType}</p>
                  <p><strong>Meal Plan:</strong> {user.mealPlan}</p>
                  
                  <div className="mt-4">
                    <p className="font-semibold">House Preferences:</p>
                    <p>Accepts Smokers: {user.preferences?.acceptsSmokers ? 'Yes' : 'No'}</p>
                    <p>Accepts Children: {user.preferences?.acceptsChildren ? 'Yes' : 'No'}</p>
                    <p>Accepts Teenagers: {user.preferences?.acceptsTeenagers ? 'Yes' : 'No'}</p>
                    <p>Accepts Pets: {user.preferences?.acceptsPets ? 'Yes' : 'No'}</p>
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Health Information:</p>
                    <p>Requires Medication: {user.health?.requiresMedication ? 'Yes' : 'No'}</p>
                    <p>Has Medical Condition: {user.health?.hasMentalOrPhysicalCondition ? 'Yes' : 'No'}</p>
                    {user.health?.details && <p>Details: {user.health.details}</p>}
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold">Emergency Contact:</p>
                    <p>Name: {user.emergencyContact?.name || 'Not provided'}</p>
                    <p>Phone: {user.emergencyContact?.phoneNumber || 'Not provided'}</p>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pairing Information</CardTitle>
            <CardDescription>
              {user.role === 'student' ? 'Your host family details' : 'Your student details'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {user.role === 'student' ? (
              <div className="space-y-2">
                <p><strong>Host Family:</strong> {mockPairing.family.name}</p>
                <p><strong>Address:</strong> {mockPairing.family.address}</p>
              </div>
            ) : (
              <div className="space-y-2">
                <p><strong>Student:</strong> {mockPairing.student.name}</p>
                <p><strong>Stay Period:</strong></p>
                <p>From: {format(mockPairing.student.startDate, "PPP")}</p>
                <p>To: {format(mockPairing.student.endDate, "PPP")}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full" variant="outline">View Messages</Button>
            <Button className="w-full" variant="outline">Update Profile</Button>
            <Button className="w-full" variant="outline">View Calendar</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;