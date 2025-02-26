import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactSchema, type InsertContactMessage } from "@shared/schema";
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
import { useLanguage } from "@/lib/use-language";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: t("contact.successTitle"),
        description: t("contact.successDescription"),
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: t("contact.errorTitle"),
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return (
    <div className="py-16 md:py-16 relative overflow-hidden">
      {/* Imagen izquierda */}
      <div className="absolute -left-[550px] -top-[550px] w-[900px] h-[900px] transform -rotate-45 opacity-100">
        <img
          src="https://images.unsplash.com/photo-1536408745983-0f03be6e8a00"
          alt="Decorative left"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Imagen derecha */}
      <div className="absolute -right-[550px] -bottom-[550px] w-[900px] h-[900px] transform rotate-45 opacity-100">
        <img
          src="https://images.unsplash.com/photo-1536408745983-0f03be6e8a00"
          alt="Decorative right"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Contenido central */}
      <div className="container max-w-4xl relative z-10">
        <SectionHeader
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          centered
          titleClassName="text-4xl font-extrabold text-gray-900 mb-4"
          subtitleClassName="text-gray-600 mb-6 max-w-3xl mx-auto whitespace-pre-line"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
                    <FormLabel>{t("contact.nameLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.namePlaceholder")}
                        className="shadow-lg hover:shadow-xl"
                        {...field}
                      />
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
                    <FormLabel>{t("contact.emailLabel")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.emailPlaceholder")}
                        className="shadow-lg hover:shadow-xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.messageLabel")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("contact.messagePlaceholder")}
                        className="min-h-[150px] shadow-lg hover:shadow-xl"
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
                className="w-full bg-white text-black border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? t("contact.sendingButton") : t("contact.submitButton")}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}