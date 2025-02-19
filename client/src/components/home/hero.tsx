import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Countdown from "./countdown";
import { useLanguage } from "@/lib/use-language";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[90vh] flex flex-col">
      {/* Video de fondo con overlay oscuro */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="YOUR_VIDEO_URL" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Contenedor principal */}
      <div className="container relative z-10 flex-grow flex items-center pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          {/* Título con efecto de aparición */}
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-extrabold text-white drop-shadow-lg tracking-wide mb-6"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtítulo con transición suave */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed"
          >
            Driving the next generation of <span className="text-yellow-300 font-semibold">solar-powered mobility </span>  
            with a commitment to <span className="text-yellow-300 font-semibold">sustainable innovation</span> and cutting-edge technology.
          </motion.p>

          {/* Botones sin sombras en hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
            <Button
              asChild
              size="lg"
              className="font-bold button-primary bg-yellow-500 text-black transition-all duration-300 transform hover:scale-105 hover:shadow-none"
            >
              <Link href="/about">{t('hero.learnMore')}</Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="font-bold bg-transparent border border-white text-white transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-black hover:shadow-none"
            >
              <Link href="/join">{t('hero.joinTeam')}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Contador de tiempo con margen mejorado */}
      <div className="relative z-10 mb-10">
        <Countdown />
      </div>
    </div>
  );
}
