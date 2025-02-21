import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { useLanguage } from "@/lib/use-language";
import mision from "@/assets/trespose.jpg";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container">
        <SectionHeader title={t('about.title')} />
        <p className="text-muted-foreground">
          Pioneros en movilidad sostenible a través de la innovación en carreras solares
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6">{t("about.mission.title")}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{t("about.mission.text1")}</p>
            <p className="text-gray-700 leading-relaxed">{t("about.mission.text2")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={mision}
              alt="Solar Racing Car"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
            />
          </motion.div>
        </div>

        {/* Segunda Sección: Innovación & Sostenibilidad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl md:order-1 order-2 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522198648249-0657d7ff242a"
              alt="Team Working"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="md:order-2 order-1"
          >
            <h3 className="text-2xl font-bold mb-4">Visión</h3>
            <p className="text-muted-foreground mb-6">
              Diseñar, fabricar y mejorar tecnología eficiente y escalable para contribuir al desarrollo del transporte sostenible, con el uso de energías verdes como la energía solar.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="md:order-1 order-2"
          >
            <h3 className="text-2xl font-bold mb-4">Valores</h3>
            <p className="text-muted-foreground mb-6">
              Our team constantly pushes technological boundaries, developing cutting-edge solutions in solar power, aerodynamics, and lightweight materials.
            </p>
            <p className="text-muted-foreground">
              Every project we undertake is guided by our commitment to environmental sustainability and the advancement of clean energy technologies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative h-[400px] rounded-3xl overflow-hidden md:order-2 order-1 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522198648249-0657d7ff242a"
              alt="Team Working"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
            />
          </motion.div>
        </div>
        
        {/* Nuevo Subapartado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-12">Competición</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1522198648249-0657d7ff242a"
                alt="Imagen Competicion"
                className="w-4/5 h-auto rounded-3xl mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
              />
            </div>
            <div>
              <p className="text-muted-foreground mb-6 my-2 text-left">
                La (nombre de la competición) competition busca el desarrollo de la tecnología de propulsión de vehículos por medio de energía de procedencia solar, mediante la competitividad amistosa entre los equipos participantes. Durante los días 22 y 23 de agosto de 2024, el equipo de HeliosRaceUPV tuvo el placer y oportunidad de participar junto a su prototipo en el circuito (insertar nombre de circuito) en (nom.ciudad), Bélgica.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Nuevo Subapartado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center my-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conoce nuestros vehículos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center my-10">
              <img
                src="https://images.unsplash.com/photo-1522198648249-0657d7ff242a"
                alt="Imagen 1"
                className="w-2/3 h-auto mx-auto rounded-3xl mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
              />
              <p className="text-muted-foreground">Descripción de la imagen 1.</p>
            </div>
            <div className="text-center my-10">
              <img
                src="https://images.unsplash.com/photo-1522198648249-0657d7ff242a"
                alt="Imagen 2"
                className="w-2/3 h-auto mx-auto rounded-3xl mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
              />
              <p className="text-muted-foreground">Descripción de la imagen 2.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Encuéntranos aquí</h3>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.8761401873059!2d-0.3423264303337206!3d39.48051999822536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6049006994a535%3A0xc6ff399231179898!2sHelios%20Race%20UPV!5e0!3m2!1ses!2ses!4v1739906135629!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
