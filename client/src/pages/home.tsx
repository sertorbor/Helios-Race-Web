import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/home/hero";
import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpg";
import foto4 from "@/assets/foto4.png";

export default function Home() {
  return (
    <div className="bg-[#474958] text-white">
      {/* Sección HERO con animación fluida */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      {/* Sección Principal con diseño premium */}
      <section className="py-28 bg-gray-800 relative">
        <div className="container mx-auto text-center max-w-5xl px-6">
          
          {/* Título destacado con efecto 3D */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide"
          >
            The Future of Solar Racing
          </motion.h2>

          {/* Subtítulo refinado y alineado */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-5 text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-snug"
          >
            Driving the next generation of <span className="text-yellow-300 font-semibold">solar-powered mobility </span>  
            with a commitment to <span className="text-yellow-300 font-semibold">sustainable innovation</span> and cutting-edge technology.
          </motion.p>

          {/* Separador decorativo mejorado */}
        </div>

        {/* Sección de Tarjetas con diseño más profesional */}
        <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {[
            {
              title: "Innovation",
              description: "We continuously explore new frontiers in aerodynamics, energy efficiency, and solar mobility. By integrating state-of-the-art technologies, we optimize performance and push the limits of sustainable engineering.",
              image: foto2
            },
            { 
              title: "Sustainability",
              description: "Sustainability is at the heart of our mission. Through cutting-edge research in renewable energy, we aim to create eco-friendly transport solutions that contribute to a cleaner, more efficient future.",
              image: foto4
            },
            {
              title: "Education",
              description: "Our team fosters knowledge-sharing and hands-on experience, empowering the next generation of engineers. We provide real-world challenges that enhance technical skills and drive future innovation.",
              image: foto3
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <Card className="bg-gray-700 border border-gray-600 shadow-lg hover:shadow-xl transition-shadow duration-500 rounded-xl overflow-hidden transform group-hover:scale-105">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-60 object-cover brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
                <CardContent className="p-6 text-center group-hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-yellow-300 group-hover:text-yellow-400 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300 mt-3 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
