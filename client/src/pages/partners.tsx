import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoUPV from "@/assets/LOGOUPV.png";
import logoGE from "@/assets/LOGOGE.png";
import logo from "@/assets/LOGOAUTOPRIETO.jpeg";
import logoFord from "@/assets/LOGOFORD.png";
import logoWurth from "@/assets/LOGOWURTH.png";
import { useLanguage } from "@/lib/use-language";

export default function Partners() {
  const { t } = useLanguage();
  const partners = [
    { image: logoUPV, url: "https://www.upv.es" },
    { image: logoGE, url: "https://generacionespontanea.upv.es" },
    { image: logo, url: "https://www.autoprieto.com" },
    { image: logoFord, url: "https://www.ford.com" },
    { image: logoWurth, url: "https://www.we-online.com" },
  ];

  return (
    <div className="flex justify-center py-20 md:py-15 bg-white text-gray-900">
      <div className="container">
        
        {/* 🎯 Sección de Call to Action (Únete a nuestros Partners) - Movida arriba */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
            {t('partners.becomePartner.title')}
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            {t('partners.becomePartner.text')}
          </p>
          <Button asChild size="lg" className="bg-white text-black border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400 rounded-xl">
            <Link href="/contact">{t('partners.becomePartner.title')}</Link>
          </Button>
        </motion.div>

        {/* 🔹 Grid de Partners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Link envuelve el Card completo */}
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="border border-gray-300 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-600 hover:scale-105">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="mb-4 flex justify-center p-4 bg-transparent rounded-lg w-full">
                      <img 
                        src={partner.image} 
                        className="h-24 w-auto object-contain"
                      />
                    </div>
                    <p className="text-gray-900 font-semibold text-center">
                    </p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}