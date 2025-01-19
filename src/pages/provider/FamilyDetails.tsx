import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockUsers } from "@/utils/mockUsers";

const FamilyDetails = () => {
  const { id } = useParams();
  const family = mockUsers.find(user => user.id === id && user.role === 'family');

  if (!family) {
    return <div className="container mx-auto p-6">Family not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Family Details</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>{family.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p><strong>Email:</strong> {family.email}</p>
            <p><strong>ID:</strong> {family.id}</p>
            {/* Add more family details as needed */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FamilyDetails;