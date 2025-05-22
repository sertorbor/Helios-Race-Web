import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Countdown from "./countdown";
import { useLanguage } from "@/lib/use-language";
import Foto4 from "@/assets/foto4.png";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center bg-[#101217] overflow-hidden">
      {/* 🎨 Fondo con imagen y degradado, ajustado verticalmente */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, 
            rgba(16, 18, 23, 1) 5%,  
            rgba(16, 18, 23, 0.95) 25%, 
            rgba(16, 18, 23, 0.85) 50%, 
            rgba(16, 18, 23, 0.5) 75%, 
            rgba(0, 0, 0, 0) 90%), 
            url(${Foto4})`,
          backgroundPosition: "calc(100% + 30px) -20px", // ← Imagen desplazada hacia arriba
          backgroundSize: "75%",
        }}
      />

      {/* Contenido principal */}
      <div className="container relative z-10 flex-grow flex items-center pt-16 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-wide mb-6"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: t("hero.subtitle")
                .replace("solar-powered mobility", `<span class='text-yellow-300 font-semibold'>solar-powered mobility</span>`)
                .replace("sustainable innovation", `<span class='text-yellow-300 font-semibold'>sustainable innovation</span>`)
                .replace("movilidad solar", `<span class='text-yellow-300 font-semibold'>movilidad solar</span>`)
                .replace("innovación sostenible", `<span class='text-yellow-300 font-semibold'>innovación sostenible</span>`)
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 mb-8"
          >
            <Button
              asChild
              size="lg"
              className="font-bold bg-yellow-500 text-black hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 rounded-xl"
            >
              <Link href="/about">{t("hero.learnMore")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="font-bold border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 rounded-xl"
            >
              <Link href="/join">{t("hero.joinTeam")}</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 ml-[-100px]"
          >
            <Countdown />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
