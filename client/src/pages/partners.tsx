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

export default function Partners() {
  const partners = [
    { name: "Universitat Politècnica de València", image: logoUPV, url: "https://www.upv.es" },
    { name: "Generación Espontánea", image: logoGE, url: "https://generacionespontanea.upv.es" },
    { name: "Autoprieto", image: logo, url: "https://www.autoprieto.com" },
    { name: "Ford", image: logoFord, url: "https://www.ford.com" },
    { name: "Würth Elektronik", image: logoWurth, url: "https://www.we-online.com" },
  ];

  return (
    <div className="flex justify-center py-20 md:py-24 bg-white text-gray-900">
      <div className="container">
        
        {/* 🏁 Sección de Encabezado */}
        <SectionHeader 
          title="Nuestros Partners" 
          subtitle="Colaboramos con instituciones y empresas que impulsan la innovación en movilidad sostenible y competición solar." 
          centered 
        />

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
                <Card className="border border-gray-300 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-yellow-400 hover:scale-105">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="mb-4 flex justify-center p-4 bg-transparent rounded-lg w-full">
                      <img 
                        src={partner.image} 
                        alt={partner.name} 
                        className="h-24 w-auto object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* 🎯 Sección de Call to Action (Únete a nuestros Partners) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
            Sé parte de nuestra red de innovación
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Únete a <span className="font-semibold text-yellow-500">Helios Race UPV</span> y forma parte del cambio hacia un futuro de movilidad sostenible. 
            Colabora con nosotros y ayúdanos a desarrollar las tecnologías del mañana.
          </p>
          <Button asChild size="lg" className="bg-white text-black border border-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400">
            <Link href="/contact">Conviértete en Partner</Link>
          </Button>
        </motion.div>

      </div>
    </div>
  );
}
