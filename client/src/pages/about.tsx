import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { useLanguage } from "@/lib/use-language";
import mision from "@/assets/trespose.jpg";
import CompetiPeq1 from "@/assets/trespose.jpg";
import CompetiPeq2 from "@/assets/trespose.jpg";
import Innovacion from "@/assets/engranaje.png";
import Teamwork from "@/assets/Teamwork.png";
import Sostenibilidad from "@/assets/leave.png";
import Compromiso from "@/assets/engranaje.png";
import BackgroundImage from "@/assets/circuito.jpg";


export default function About() {
  const { t } = useLanguage();

  return (
    <div className="py-16 md:py-15 bg-white">
      <div className="container">
        <SectionHeader 
          title={t('about.title')} 
          subtitle={t("about.subtitle")}
          subtitleClassName="text-lg text-muted-foreground max-w-2xl text-left"
        />


        {/* 🔹 Línea Divisoria */}
        <div className="w-full my-[110px]">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{t("about.mission.title")}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{t("about.mission.text1")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
          >
            <img
              src={mision}
              alt="Solar Racing Car"
              className="absolute inset-0 w-full h-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
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
              className="absolute inset-0 w-full h-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="md:order-2 order-1"
          >
            <h3 className="text-2xl font-bold mb-4">{t("about.vision.title")}</h3>
            <p className="text-muted-foreground mb-6">
              {t("about.vision.text")}
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
            <h3 className="text-2xl font-bold mb-4 my-[30px]">{t("about.values.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-6 my-[60px]">
              <p className="text-muted-foreground mb-6 text-center max-w-xs flex items-center justify-center self-start">
                <img src={Innovacion} alt="Icono Innovación" className="w-8 h-8 mr-2 self-start rounded-full shadow-[0_0_0_0_rgba(255,255,190,5)] transition-all duration-500 group hover:shadow-[0_0_15px_5px_rgba(25,120,190,5)]" />
                <span><strong style={{color : 'black'}}>{t("about.values.innovation")}:</strong> {t("about.values.innovation.text")}</span>
              </p>
              <p className="text-muted-foreground mb-6 text-center max-w-xs flex items-center justify-center self-start">
                <img src={Sostenibilidad} alt="Icono Sostenibilidad" className="w-8 h-8 mr-2 self-start rounded-full shadow-[0_0_0_0_rgba(255,255,190,5)] transition-all duration-500 group hover:shadow-[0_0_15px_5px_rgba(25,120,190,5)]" />
                <span><strong style={{color : 'black'}}>{t("about.values.sustainability")}:</strong> {t("about.values.sustainability.text")}</span>
              </p>
              <p className="text-muted-foreground mb-6 text-center max-w-xs flex items-center justify-center self-start">
                <img src={Teamwork} alt="Icono Trabajo en Equipo" className="w-8 h-8 mr-2 self-start rounded-full shadow-[0_0_0_0_rgba(255,255,190,5)] transition-all duration-500 group hover:shadow-[0_0_15px_5px_rgba(25,120,190,5)]" />
                <span><strong style={{color : 'black'}}>{t("about.values.teamwork")}:</strong> {t("about.values.teamwork.text")}</span>
              </p>
              <p className="text-muted-foreground mb-6 text-center max-w-xs flex items-center justify-center self-start">
                <img src={Compromiso} alt="Icono Compromiso" className="w-8 h-8 mr-2 self-start rounded-full shadow-[0_0_0_0_rgba(255,255,190,5)] transition-all duration-500 group hover:shadow-[0_0_15px_5px_rgba(25,120,190,5)]" />
                <span><strong style={{color : 'black'}}>{t("about.values.commitment")}:</strong> {t("about.values.commitment.text")}</span>
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative h-[400px] w-[600px] rounded-3xl overflow-hidden md:order-2 order-1 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl md:ml-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1522198648249-0657d7ff242a"
              alt="Team Working"
              className="absolute inset-0 w-full h-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
            />
          </motion.div>
        </div>

        {/* 🔹 Línea Divisoria */}
        <div className="w-full my-[110px]">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>
      </div>

      {/* Subapartado COMPETICIÓN */}
      <div className="relative w-full">
        <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 background-fade" style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
        <div className="relative z-10 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center h-[600px] w-full"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 my-[100px] font-permanent-marker-regular">{t("about.competition.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 my-[100px]">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1522198648249-0657d7ff242a"
                  alt="Imagen Competicion"
                  className="w-4/5 h-auto rounded-3xl mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl"
                />
              </div>
              <div>
                <p className="mb-6 my-2 text-left">
                  {t("about.competition.text")}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <img
                    src={CompetiPeq1}
                    alt="Imagen 3"
                    className="w-full h-auto rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                  <img
                    src={CompetiPeq2}
                    alt="Imagen 4"
                    className="w-full h-auto rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container">
        
        {/* 🔹 Línea Divisoria */}
        <div className="w-full my-[110px]">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            {t("about.findUs.title")} <span style={{ color: '#f5b914' }}>aquí</span>
          </h3>
          <div className="my-[70px] w-full h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl">
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
