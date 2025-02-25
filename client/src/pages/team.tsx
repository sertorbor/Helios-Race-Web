import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { useLanguage } from "@/lib/use-language";

const teamMembers = [
  {
    name: "Team Lead",
    role: "Project Director",
  },
  {
    name: "David Grueso Conejero",
    role: "Telemetry Engineer",
    linkedin: "#"
  },
  {
    name: "Sergio Tortosa Borrell",
    role: "Telemetry Engineer",
    linkedin: "#"
  },
  {
    name: "Power Systems",
    role: "Solar Technology Expert",
    linkedin: "#"
  },
  {
    name: "Mechanical Lead",
    role: "Structural Engineer",
    linkedin: "#"
  },
  {
    name: "Operations Lead",
    role: "Project Manager",
    linkedin: "#"
  }
];

// Placeholder para las imágenes de los miembros del equipo
const placeholderImage = "https://images.unsplash.com/photo-1522198648249-0657d7ff242a";

export default function Team() {
  const { t } = useLanguage();

  return (
    <div className="py-20 md:py-15 bg-white text-black">
      <div className="container">
        
        {/* 🏁 Texto de presentación del equipo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Estudiantes y profesores dedicados trabajando juntos para impulsar los límites 
            de las <span className="font-semibold text-yellow-500">carreras solares </span> 
            y desarrollar la movilidad sostenible del futuro.
          </p>
        </motion.div>

        {/* 📸 Miembros del equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center mt-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <div className="relative w-60 h-60 rounded-full border-4 border-yellow-400 transition-all duration-500 group hover:border-yellow-500 hover:shadow-none">
                  <img
                    src={placeholderImage}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
              <h3 className="text-xl font-bold mt-5">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* 📢 Mensaje final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('team.description')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
