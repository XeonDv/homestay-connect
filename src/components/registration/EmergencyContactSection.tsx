import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const EmergencyContactSection = ({ form }: { form: any }) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="emergencyContact.name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Emergency Contact Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter emergency contact name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="emergencyContact.phoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Emergency Contact Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="Enter emergency contact phone number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default EmergencyContactSection;