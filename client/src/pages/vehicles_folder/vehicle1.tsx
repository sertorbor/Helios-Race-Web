import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import Foto1 from "@/assets/foto1.jpg";
import Foto2 from "@/assets/foto1.jpg";
import Foto3 from "@/assets/foto1.jpg";
import { useLanguage } from "@/lib/use-language";

export default function Vehicle1() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  return (
    <div className="py-16 bg-gray-200 text-gray-900">
      <div className="container relative">

        {/* Botón de volver a la página anterior */}
        <Button
          onClick={() => setLocation('/vehicles')}
          className="absolute top-0 right-8 mt-4 mr-4 bg-white text-black border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400"
        >
          {t('vehicles.back')}
        </Button>
        
        {/* Encabezado de la sección */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-extrabold text-yellow-500">{t('vehicles1.prototype1.title')}</h2>
          <p className="text-lg text-gray-600 mt-2">{t('vehicles1.prototype1.subtitle')}</p>
        </div>

        {/* Sección 1: Diseño y Aerodinámica */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <img src={Foto1} alt={t('vehicles1.prototype1.design.alt')} className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">{t('vehicles1.prototype1.design.title')}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('vehicles1.prototype1.design.description')}
            </p>
          </motion.div>
        </div>

        {/* Sección 2: Componentes Innovadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <img src={Foto2} alt={t('vehicles1.prototype1.components.alt')} className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">{t('vehicles1.prototype1.components.title')}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('vehicles1.prototype1.components.description')}
            </p>
          </motion.div>
        </div>

        {/* Sección 3: Logros en Competencias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <img src={Foto3} alt={t('vehicles1.prototype1.achievements.alt')} className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">{t('vehicles1.prototype1.achievements.title')}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('vehicles1.prototype1.achievements.description')}
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
