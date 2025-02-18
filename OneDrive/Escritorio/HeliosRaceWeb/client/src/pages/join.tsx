import { motion } from "framer-motion";
import { useLanguage } from "@/lib/use-language";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { joinSchema, type InsertJoinRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
//import {
//  Form,
//  FormControl,
//  FormField,
//  FormItem,
//  FormLabel,
//  FormMessage,
//} from "@/components/ui/form";
//import { Input } from "@/components/ui/input";
//import { Textarea } from "@/components/ui/textarea";

export default function Join() {
  const { t } = useLanguage();
  //const { toast } = useToast();
  //const form = useForm<InsertJoinRequest>({
  //  resolver: zodResolver(joinSchema),
  //  defaultValues: {
  //    name: "",
  //    email: "",
  //    interest: "",
  //    experience: "",
  //  },
  //});
  //
  //const mutation = useMutation({
  //  mutationFn: async (data: InsertJoinRequest) => {
  //    await apiRequest("POST", "/api/join", data);
  //  },
  //  onSuccess: () => {
  //    toast({
  //      title: "Application submitted!",
  //      description: "We'll review your application and get back to you soon.",
  //    });
  //    form.reset();
  //  },
  //  onError: (error) => {
  //    toast({
  //      title: "Error",
  //      description: error.message,
  //      variant: "destructive",
  //    });
  //  },
  //});

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <SectionHeader
          title={t('join.title')}
          subtitle={t('join.subtitle')}
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
            className="flex flex-col items-center justify-center"
          >
            <div className="text-center max-w-md">
              <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
              <p className="text-muted-foreground mb-8">
                Apply now through our application form. We're looking forward to meeting you!
              </p>
              <Button 
                size="lg"
                className="button-primary w-full"
                onClick={() => window.open('YOUR_GOOGLE_FORMS_URL', '_blank')}
              >
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}