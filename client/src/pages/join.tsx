import { motion } from "framer-motion";
import Slider from "react-slick";
import { useLanguage } from "@/lib/use-language";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import foto1 from "@/assets/trespose.jpg";
import foto2 from "@/assets/trespose.jpg";
import foto3 from "@/assets/trespose.jpg";
import foto4 from "@/assets/trespose.jpg";
import foto5 from "@/assets/trespose.jpg";
import foto6 from "@/assets/trespose.jpg";
import foto7 from "@/assets/trespose.jpg";
import foto8 from "@/assets/trespose.jpg";
import foto9 from "@/assets/trespose.jpg";
import foto10 from "@/assets/trespose.jpg";
import backgroundImage from "@/assets/FlechasJOIN.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Join() {
  const { t } = useLanguage();

  const settings = {
    dots: true,
    infinite: true, // El carrusel es infinito
    speed: 1000, // Velocidad de transición
    slidesToShow: 3, // Muestra 3 imágenes al mismo tiempo
    slidesToScroll: 1, // Se desplaza UNA imagen a la vez
    autoplay: true, // Se mueve automáticamente
    autoplaySpeed: 1800, // Avanza cada 3 segundos
    pauseOnHover: false, // No se detiene al pasar el mouse
    responsive: [
      {
        breakpoint: 1024, // Para pantallas medianas
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Para móviles y tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 md:py-15 mx-auto">
      <div className="container">
        <SectionHeader
          title={t("join.title")}
          subtitle={t("join.subtitle")}
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
                {[foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10].map((foto, index) => (
                  <div key={index} className="px-6">
                    <img
                      src={foto}
                      alt={`Team collaboration ${index + 1}`}
                      className="mx-auto rounded-lg w-[400px] h-[300px] object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                ))}
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
                className="absolute inset-0 object-cover rounded-lg my-[-230px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg p-6 md:p-12 gap-6 mt-[-180px]">
                <h3 className="text-2xl font-bold -mb-3 text-black my-16">
                  {t("join.titlend")}
                </h3>
                <p className="text-gray mb-8 text-center max-w-md">
                  {t("join.description")}
                </p>
                <Button
                  size="lg"
                  className="button-primary w-[350px] bg-white text-black border border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400 mt-[-30px] rounded-xl"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSedJuHKW4hCQqV1TB4QSJQvr5TFFCX7OlC7L_D-3MxDpIyKuw/alreadyresponded",
                      "_blank"
                    )
                  }
                >
                  {t("join.button")}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}