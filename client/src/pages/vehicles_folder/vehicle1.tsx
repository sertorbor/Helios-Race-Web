import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import Foto1 from "@/assets/foto1.jpg";
import Foto2 from "@/assets/foto1.jpg";
import Foto3 from "@/assets/foto1.jpg";

export default function Vehicle1() {
  return (
    <div className="py-16 bg-gray-200 text-gray-900">
      <div className="container">
        
        {/* Encabezado de la sección */}
        <div className="text-left mb-12">
          <SectionHeader 
            title="Prototipo 1"
            titleClassName="text-4xl font-extrabold text-yellow-500 -mb-8"
            subtitle="Nuestro primer prototipo. El comienzo de un legado."
            subtitleClassName="text-lg text-gray-600 max-w-2xl mx-auto"
          />
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
            <img src={Foto1} alt="Prototipo 1 - Vista lateral" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Diseño y Aerodinámica</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              El Prototipo 1 fue diseñado con un enfoque en la eficiencia aerodinámica, reduciendo la 
              resistencia al viento y maximizando el aprovechamiento de la energía solar.
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
            <img src={Foto2} alt="Prototipo 1 - Interior" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Componentes Innovadores</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Equipado con baterías de última generación y un sistema de monitoreo inteligente, el vehículo 
              optimiza su rendimiento en tiempo real, asegurando una eficiencia superior en cada competencia.
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
            <img src={Foto3} alt="Prototipo 1 - Competencia" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Logros en Competencias</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Gracias a su diseño innovador, el Prototipo 1 participó con éxito en múltiples competiciones, 
              demostrando el potencial de la energía solar en el transporte y alcanzando excelentes resultados.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
