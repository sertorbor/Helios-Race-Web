import { motion } from "framer-motion";
import { useLanguage } from "@/lib/use-language";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import logo from "@/assets/enseñarniño.jpg";
import logo2 from "@/assets/trespose.jpg";

export default function Join() {
  const { t } = useLanguage();

  return (
    <div className="py-16 md:py-24 bg-white text-gray-900">
      <div className="container">
        {/* 🏁 Sección de Encabezado */}
        <SectionHeader title={t("join.title")} subtitle={t("join.subtitle")} centered />

        {/* 🔹 Destacado "¿Quieres unirte?" al inicio */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-yellow-400 text-black text-center p-8 rounded-lg shadow-lg max-w-3xl mx-auto mb-12"
        >
          <h3 className="text-3xl font-extrabold mb-4">¿Quieres unirte?</h3>
          <p className="text-lg font-medium">
            Si te apasiona la tecnología, la innovación y el automovilismo, ¡únete! Trabaja con nosotros en el desarrollo de un sistema de propulsión sostenible y eficiente.
          </p>
          <Button
            size="lg"
            className="mt-6 bg-black text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSedJuHKW4hCQqV1TB4QSJQvr5TFFCX7OlC7L_D-3MxDpIyKuw/alreadyresponded', '_blank')}
          >
            Apúntate Ahora 🚀
          </Button>
        </motion.div>

        {/* 🏎️ Sección de imágenes y colaboración */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 🔹 Imágenes con animación */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <img
              src={logo}
              alt="Colaboración en equipo"
              className="rounded-lg shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <img
              src={logo2}
              alt="Trabajo en equipo"
              className="rounded-lg shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* 🎯 Última sección con CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-yellow-500">Forma parte del equipo</h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
            Únete a <span className="text-yellow-500 font-semibold">Helios Race UPV</span> y trabaja en una de las competiciones más innovadoras del mundo.
          </p>
          <Button
            size="lg"
            className="bg-black text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSedJuHKW4hCQqV1TB4QSJQvr5TFFCX7OlC7L_D-3MxDpIyKuw/alreadyresponded', '_blank')}
          >
            ¡Únete Ahora! 🔥
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
