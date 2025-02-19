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
import logo from "@/assets/enseñarniño.jpg";
import logo2 from "@/assets/trespose.jpg";
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
    <div className="py-16 md:py-24 mx-auto">
      <div className="container">
        <SectionHeader
          title={t('join.title')}
          subtitle={t('join.subtitle')}
          centered
        />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >


          <div className="mt-8 py-16 md:py-24 flex items-center justify-center">
            <img
              src={logo}
              alt="Team collaboration 1"
              className="rounded-lg max-w-xl mr-4"
            />
            <img
              src={logo2}
              alt="Team collaboration 2"
              className="rounded-lg max-w-xl"
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
              <h3 className="text-2xl font-bold mb-4">¿Quieres unirte?</h3>
                <p className="text-muted-foreground mb-8">
                Si te apasiona la tecnología, la innovación y el automovilismo, ¡únete! Trabaja con nosotros de cerca para desarrollar un sistema de propulsión sostenible y eficiente. ¡Te esperamos!
                </p>
              <Button 
                size="lg"
                className="button-primary w-full"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSedJuHKW4hCQqV1TB4QSJQvr5TFFCX7OlC7L_D-3MxDpIyKuw/alreadyresponded', '_blank')}
              >
                Apúntate
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}