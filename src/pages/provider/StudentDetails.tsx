import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockUsers } from "@/utils/mockUsers";

const StudentDetails = () => {
  const { id } = useParams();
  const student = mockUsers.find(user => user.id === id && user.role === 'student');

  if (!student) {
    return <div className="container mx-auto p-6">Student not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Student Details</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>{student.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>ID:</strong> {student.id}</p>
            {/* Add more student details as needed */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDetails;