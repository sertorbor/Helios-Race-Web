import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { useLanguage } from "@/lib/use-language";

const teamMembers = [
  {
    name: "Francisco Javier Fernandez Sanmartín",
    role: "Team Leader",
    linkedin: "https://www.linkedin.com/in/francisco-javier-fernandez-sanmart%C3%ADn-273a5724b/"
  },
  {
    name: "David Grueso Conejero",
    role: "Telemetry Engineer",
    linkedin: "https://www.linkedin.com/in/david-grueso-conejero-833755235/"
  },
  {
    name: "Sergio Tortosa Borrell",
    role: "Telemetry Engineer",
    linkedin: "https://www.linkedin.com/in/sergio-tortosa-borrell-8252052a0/"
  },
  {
    name: "Alejandro Espí Cambra",
    role: "Telemetry Engineer",
    linkedin: "https://www.linkedin.com/in/alejandro-espi-cambra/"
  },
  {
    name: "Antonio Melero Calvete",
    role: "Solar Technology Expert",
    linkedin: "https://www.linkedin.com/in/antonio-melero-calvete-b91ab6252/"
  },
  {
    name: "Ruben Verdeguer Asensio",
    role: "Telemetry Engineer",
    linkedin: "https://www.linkedin.com/in/ruben-verdeguer-asensio/"
  },
  {
    name: "Raül Ferrando Navarro",
    role: "Mechanical Engineer",
    linkedin: "https://www.linkedin.com/in/ra%C3%BCl-ferrando-navarro-6ba257332/"
  },
  {
    name: "Jorge Rubio Valdés",
    role: "Steering and Suspension Engineer",
    linkedin: "https://www.linkedin.com/in/jorge-rubio-vald%C3%A9s/"
  },
  {
    name: "Lorena Lacasa López",
    role: "Battery Engineer",
    linkedin: "https://www.linkedin.com/in/lorena-lacasa-l%C3%B3pez-a4879033b/"
  },
  {
    name: "Paloma Arnal Estellés",
    role: "Communications Engineer",
    linkedin: "https://www.linkedin.com/in/paloma-arnal-estell%C3%A9s-332a16263/"
  },
  {
    name: "Saul Ferrer Zaragoza",
    role: "Fotovoltaical Engineer",
    linkedin: "https://www.linkedin.com/in/saul-ferrer-zaragoza-602b96230/"
  },
  {
    name: "Operations Lead",
    role: "Project Manager",
    linkedin: "#"
  },
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
  },
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
  },
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
            Estudiantes trabajando juntos para impulsar los límites 
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
                className="block transition-transform hover:scale-105 text-center"
              >
                <div className="relative w-60 h-60 rounded-full shadow-[0_0_10px_4px_rgba(255,190,0,2)] transition-all duration-500 group hover:shadow-[0_0_0_4px_rgba(255,215,0,0.7)]">
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
