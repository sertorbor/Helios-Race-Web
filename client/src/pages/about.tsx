import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { useLanguage } from "@/lib/use-language";
import mision from "@/assets/trespose.jpg";
import CocheUno from "@/assets/Prototipo1.jpeg";

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
            Ser un referente internacional en el desarrollo de vehículos eléctricos solares, liderando la investigación y la aplicación de soluciones innovadoras que contribuyan a la creación de un sistema de transporte sostenible, eficiente y accesible. Aspiramos a inspirar a la sociedad a adoptar un estilo de vida más respetuoso con el medio ambiente, demostrando el potencial de la energía solar como fuente de energía limpia y renovable para la movilidad.
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
            </p>
            Innovación: Fomentamos la creatividad, la experimentación y la búsqueda constante de nuevas soluciones para mejorar el rendimiento, la eficiencia y la sostenibilidad de nuestros vehículos.
            <p className="text-muted-foreground">
            Sostenibilidad: Priorizamos el uso de materiales y tecnologías respetuosas con el medio ambiente, minimizando el impacto ambiental de nuestros procesos y productos.
            </p>
            <p className="text-muted-foreground">
            Excelencia: Nos esforzamos por alcanzar los más altos estándares de calidad en el diseño, la construcción y el rendimiento de nuestros vehículos, buscando la mejora continua en todos los aspectos de nuestro trabajo.
            </p>
            <p className="text-muted-foreground">
            Trabajo en equipo: Creemos en la colaboración, el respeto mutuo y la comunicación abierta como pilares fundamentales para alcanzar nuestros objetivos.
            </p>
            <p className="text-muted-foreground">
            Aprendizaje continuo: Promovemos el desarrollo personal y profesional de nuestros miembros, fomentando la adquisición de conocimientos y habilidades en un entorno de aprendizaje dinámico y colaborativo.
            </p>
            <p className="text-muted-foreground">
            Compromiso: Estamos dedicados a la misión de HeliosRace UPV, asumiendo la responsabilidad de nuestros actos y trabajando con pasión y determinación para lograr nuestros objetivos.
            </p>
            <p className="text-muted-foreground">
            Impacto social: Buscamos generar un impacto positivo en la sociedad, promoviendo la conciencia ambiental y demostrando el potencial de la energía solar para transformar el futuro de la movilidad.
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
                src={CocheUno}
                alt="Imagen 1"
                className="w-2/3 h-auto mx-auto rounded-3xl mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
              />
              <p className="text-muted-foreground">Nuestro primer prototipo. El comienzo de un legado.</p>
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
