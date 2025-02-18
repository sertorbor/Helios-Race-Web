import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Countdown from "./countdown";
import { useLanguage } from "@/lib/use-language";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559302504-64aae6ca6b6d')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10">
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
          <Countdown />
        </motion.div>
      </div>
    </div>
  );
}