import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoUPV from "@/assets/LOGOUPV.png";
import logoGE from "@/assets/LOGOGE.png";
import logo from "@/assets/logo_blue.png";
import logoFord from "@/assets/LOGOFORD.png";
import logoWurth from "@/assets/LOGOWURTH.png";

export default function Partners() {
  const partners = [
    {
      category: "Academic Partners",
      items: [
        { name: "Universitat Politècnica de València", image: logoUPV },
        { name: "Generación Espontánea", image: logoGE },
      ]
    },
    {
      category: "Industry Partners",
      items: [
        { name: "Autoprieto", image: logo },
        { name: "Ford", image: logoFord },
        { name: "Würth Elektronik", image: logoWurth }
      ]
    }
  ];

  return (
    <div className="flex justify-center py-16 md:py-16 bg-white">
      <div className="container">

        {/* Sección de Encabezado */}
        <SectionHeader
          title="Nuestros Partners"
          subtitle="La colaboración es la clave del éxito. Conoce a nuestros partners, quienes hacen realidad este proyecto."
          centered
        />

        {/* Grid de Partners */}
        <div className="grid gap-16">
          {partners.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              className="bg-[#222532] p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-extrabold text-yellow-400 mb-8 text-center uppercase">
                {section.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.items.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    {/* Se aplica la interactividad en el cuadro blanco */}
                    <Card className="border border-gray-300 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105">
                      <CardContent className="pt-6 flex flex-col items-center">
                        <div className="mb-4 flex justify-center my-4 p-4">
                          <img 
                            src={partner.image} 
                            alt={partner.name} 
                            className="h-20 w-auto object-contain"
                          />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800">{partner.name}</h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de Call to Action (Únete a nuestros Partners) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Únete a nuestros Partners</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            ¿Quieres colaborar con <span className="text-yellow-400 font-semibold">HeliosRaceUPV</span>? Sé nuestro partner y forma parte del futuro de las competiciones solares.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Link href="/contact">Contáctanos</Link>
          </Button>
        </motion.div>

      </div>
    </div>
  );
}
