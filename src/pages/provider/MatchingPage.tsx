import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { mockUsers } from "@/utils/mockUsers";
import { format } from "date-fns";

const MatchingPage = () => {
  const { toast } = useToast();
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);

  const students = mockUsers.filter(user => user.role === 'student');
  const families = mockUsers.filter(user => user.role === 'family');

  const handleMatch = () => {
    if (selectedStudent && selectedFamily) {
      // Here you would typically make an API call to create the match
      toast({
        title: "Match Created",
        description: "Student and family have been successfully matched!",
      });
      setSelectedStudent(null);
      setSelectedFamily(null);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Match Students with Families</h1>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold p-4 border-b">Select Student</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Stay Period</TableHead>
                <TableHead>Select</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow 
                  key={student.id}
                  className={selectedStudent === student.id ? "bg-blue-50" : ""}
                >
                  <TableCell>{student.name}</TableCell>
                  <TableCell>
                    {student.startDate && student.endDate ? (
                      <div className="text-sm">
                        <div>{format(new Date(student.startDate), "PP")}</div>
                        <div>{format(new Date(student.endDate), "PP")}</div>
                      </div>
                    ) : (
                      "No dates specified"
                    )}
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant={selectedStudent === student.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedStudent(student.id)}
                    >
                      {selectedStudent === student.id ? "Selected" : "Select"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold p-4 border-b">Select Family</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Select</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {families.map((family) => (
                <TableRow 
                  key={family.id}
                  className={selectedFamily === family.id ? "bg-blue-50" : ""}
                >
                  <TableCell>{family.name}</TableCell>
                  <TableCell>{family.email}</TableCell>
                  <TableCell>
                    <Button 
                      variant={selectedFamily === family.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFamily(family.id)}
                    >
                      {selectedFamily === family.id ? "Selected" : "Select"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Button 
        className="w-full"
        disabled={!selectedStudent || !selectedFamily}
        onClick={handleMatch}
      >
        Create Match
      </Button>
    </div>
  );
};

export default MatchingPage;