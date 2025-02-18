import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { useLanguage } from "@/lib/use-language";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <SectionHeader
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('about.mission.text1')}
            </p>
            <p className="text-muted-foreground">
              {t('about.mission.text2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1536408745983-0f03be6e8a00"
              alt="Solar Racing Car"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden md:order-1 order-2"
          >
            <img
              src="https://images.unsplash.com/photo-1522198648249-0657d7ff242a"
              alt="Team Working"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:order-2 order-1"
          >
            <h3 className="text-2xl font-bold mb-4">Innovation & Sustainability</h3>
            <p className="text-muted-foreground mb-6">
              Our team constantly pushes technological boundaries, developing cutting-edge solutions in solar power, aerodynamics, and lightweight materials.
            </p>
            <p className="text-muted-foreground">
              Every project we undertake is guided by our commitment to environmental sustainability and the advancement of clean energy technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}