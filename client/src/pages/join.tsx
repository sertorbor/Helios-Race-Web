import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { joinSchema, type InsertJoinRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Join() {
  const { toast } = useToast();
  const form = useForm<InsertJoinRequest>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      experience: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertJoinRequest) => {
      await apiRequest("POST", "/api/join", data);
    },
    onSuccess: () => {
      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <SectionHeader
          title="Join Our Team"
          subtitle="Be part of the future of sustainable racing technology"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Why Join Us?</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>• Hands-on experience with cutting-edge technology</li>
              <li>• Work with a passionate team of engineers</li>
              <li>• Participate in international competitions</li>
              <li>• Develop practical engineering skills</li>
              <li>• Make a real impact on sustainable technology</li>
              <li>• Network with industry professionals</li>
            </ul>

            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e"
                alt="Team collaboration"
                className="rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area of Interest</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What area of the project interests you the most?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Relevant Experience</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your relevant experience and skills..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
