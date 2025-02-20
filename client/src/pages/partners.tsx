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
        { name: "Autoprieto", image: logo },
        { name: "Ford", image: logoFord },
        { name: "Würth EleKtronik", image: logoWurth }
      ]
    }
  ];

  return (
    <div className="flex justify-center py-16 md:py-24 ">
      <div className="container">
        <SectionHeader
          title="Nuestros Partners"
          subtitle="La colaboración es la clave del éxito. Conoce a nuestros partners, quienes hacen realidad este proyecto."
          centered
        />

        <div className="grid gap-12">
          {partners.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">{section.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((partner, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">{partner.name}</h4>
                    {partner.image && (
                        <div className="mb-4 flex justify-center my-6">
                          <img 
                            src={partner.image} 
                            alt={partner.name} 
                            className="h-24 w-auto object-contain"
                          />
                        </div>
                      )}                      
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Únete a nuestros Partners</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            ¿Quieres colaborar con HeliosRaceUPV? Sé nuestro partner y forma parte del futuro de las competiciones solares.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contáctanos</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
