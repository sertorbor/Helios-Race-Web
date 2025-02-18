import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Countdown from "./countdown";
import { useLanguage } from "@/lib/use-language";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex flex-col">
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
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 flex-grow flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            {t('hero.subtitle')}
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="button-primary">
              <Link href="/about">{t('hero.learnMore')}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/join">{t('hero.joinTeam')}</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mb-24">
        <Countdown />
      </div>

      <div className="relative z-10 container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="group"
          >
            <Link href="/team">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522198648249-0657d7ff242a"
                  alt="Our Team"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Our Team</h3>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <Link href="/about">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1536408745983-0f03be6e8a00"
                  alt="About Us"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">About Us</h3>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group"
          >
            <Link href="/partners">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e"
                  alt="Our Partners"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Our Partners</h3>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}