import { Link } from "wouter";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import CocheUno from "@/assets/foto1.jpg";
import CocheDos from "@/assets/foto1.jpg";
import { Button } from "@/components/ui/button";

export default function Vehicles() {
  return (
    <div className="py-16 bg-white text-gray-900">
      <div className="container">

        {/* Encabezado de la Sección - Más Compacto */}
        <div className="text-center mb-12">
          <SectionHeader 
            title="Nuestros Vehículos" 
            titleClassName="text-4xl font-extrabold text-gray-900 -mb-8"
          />
          <p className="text-lg text-gray-600 max-w-full whitespace-nowrap mx-auto">
            Descubre nuestros prototipos diseñados con tecnología avanzada y un enfoque en la eficiencia energética.
          </p>
        </div>

        {/* Prototipo 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <img src={CocheUno} alt="Prototipo 1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-left"
          >
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 hover:text-yellow-500 transition-all duration-300 ease-in-out">
              Prototipo 1
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed transition-all duration-500 ease-in-out">
              Nuestro primer vehículo solar fue diseñado para maximizar la eficiencia y aerodinámica. 
              Cuenta con un chasis ultraligero y células fotovoltaicas de alto rendimiento, permitiendo 
              una optimización energética sobresaliente.
            </p>
            <p className="mt-4 text-gray-500 transition-all duration-500 ease-in-out">
              Con una autonomía excepcional y materiales innovadores, el Prototipo 1 marcó un hito en 
              nuestra historia al competir en prestigiosos eventos internacionales.
            </p>
            <Link href="/vehicles/vehicle1">
              <Button
                size="lg"
                className="mt-6 bg-white text-black border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400"
              >
                Conocer más →
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Prototipo 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-left order-2 md:order-1"
          >
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 hover:text-yellow-500 transition-all duration-300 ease-in-out">
              Prototipo 2
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed transition-all duration-500 ease-in-out">
              Con un enfoque en innovación y sostenibilidad, el Prototipo 2 incorpora mejoras en la 
              aerodinámica y un sistema de gestión energética más eficiente. Gracias a su diseño 
              optimizado, este modelo supera los estándares de rendimiento en competiciones solares.
            </p>
            <p className="mt-4 text-gray-500 transition-all duration-500 ease-in-out">
              Desde su concepción, este prototipo ha sido diseñado para maximizar la velocidad y 
              autonomía, reduciendo el impacto ambiental y promoviendo una movilidad sostenible.
            </p>
            <Link href="/vehicles/vehicle2">
              <Button
                size="lg"
                className="mt-6 bg-white text-black border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400"
              >
                Conocer más →
              </Button>
            </Link>
          </motion.div>

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
            <img src={CocheDos} alt="Prototipo 2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
}
