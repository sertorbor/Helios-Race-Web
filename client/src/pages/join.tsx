import { motion } from "framer-motion";
import Slider from "react-slick";
import { useLanguage } from "@/lib/use-language";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import logo from "@/assets/enseñarniño.jpg";
import logo2 from "@/assets/trespose.jpg";
import logo3 from "@/assets/logo_blue.png"; // Añade más imágenes según sea necesario
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
    autoplaySpeed: 5000, // Cambiado a 5000 milisegundos (5 segundos)
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
            <div className="mt-4 md:mt-8 py-10 flex items-center justify-center">
              <Slider {...settings} className="w-full">
                <div>
                  <img
                    src={logo}
                    alt="Team collaboration 1"
                    className="mx-auto rounded-lg w-[1000px] h-80 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div>
                  <img
                    src={logo2}
                    alt="Team collaboration 2"
                    className="mx-auto rounded-lg w-[1000px] h-80 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div>
                  <img
                    src={logo3}
                    alt="Team collaboration 3"
                    className="mx-auto rounded-lg w-[1000px] h-80 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
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
            className="flex flex-col items-center justify-center"
          >
            <div className="text-center max-w-md">
              <h3 className="text-2xl font-bold mb-4">¿Quieres unirte?</h3>
              <p className="text-muted-foreground mb-8">
                Si te apasiona la tecnología, la innovación y el automovilismo, ¡únete! Trabaja con nosotros de cerca para desarrollar un sistema de propulsión sostenible y eficiente. ¡Te esperamos!
              </p>
              <Button 
                size="lg"
                className="button-primary w-full"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSedJuHKW4hCQqV1TB4QSJQvr5TFFCX7OlC7L_D-3MxDpIyKuw/alreadyresponded', '_blank')}
              >
                Apúntate
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}