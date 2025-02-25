import { motion } from "framer-motion";
import Slider from "react-slick";
import { useLanguage } from "@/lib/use-language";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import logo from "@/assets/enseñarniño.jpg";
import logo2 from "@/assets/trespose.jpg";
import logo3 from "@/assets/logo_blue.png"; // Añade más imágenes según sea necesario
import backgroundImage from "@/assets/FlechasJOIN.png"; // Añade la imagen de fondo
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Join() {
  const { t } = useLanguage();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Cambiado a 5000 milisegundos (5 segundos)
  };

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
            <div className="mt-4 md:mt-8 my-[200px] my-12 flex items-center justify-center">
              <Slider {...settings} className="w-full">
                <div>
                  <img
                    src={logo}
                    alt="Team collaboration 1"
                    className="mx-auto rounded-lg w-[800px] h-[500px] object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div>
                  <img
                    src={logo2}
                    alt="Team collaboration 2"
                    className="mx-auto rounded-lg w-[800px] h-[500px] object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div>
                  <img
                    src={logo3}
                    alt="Team collaboration 3"
                    className="mx-auto rounded-lg w-[800px] h-[500px] object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                {/* Añade más imágenes aquí según sea necesario */}
              </Slider>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center justify-center"
          >
            <div className="relative w-[1000px] h-[500px]">
              <img
                src={backgroundImage}
                alt="Background"
                className="absolute inset-0 object-cover rounded-lg my-[-150px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black my-16">{t('join.titlend')}</h3>
                <p className="text-gray mb-8 text-center max-w-md">
                  {t('join.description')}
                </p>
                <Button 
                  size="lg"
                  className="button-primary w-[450px] bg-white text-black border border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSedJuHKW4hCQqV1TB4QSJQvr5TFFCX7OlC7L_D-3MxDpIyKuw/alreadyresponded', '_blank')}
                >
                  {t('join.button')}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}