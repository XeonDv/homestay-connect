import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AccommodationSection = ({ form }: { form: any }) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="accommodationType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type of Accommodation</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select accommodation type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="share">Share</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="mealPlan"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Meal Plan</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select meal plan" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="3meals">3 Meals</SelectItem>
                <SelectItem value="2meals">2 Meals</SelectItem>
                <SelectItem value="nomeals">No Meals</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default AccommodationSection;