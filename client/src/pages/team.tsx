import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { useLanguage } from "@/lib/use-language";
import Fotoperfil1 from "@/assets/logo.png";
import Fotoperfil2 from "@/assets/logo.png";
import Fotoperfil3 from "@/assets/logo.png";
import Fotoperfil4 from "@/assets/logo.png";
import Fotoperfil5 from "@/assets/logo.png";
import Fotoperfil6 from "@/assets/logo.png";
import Fotoperfil7 from "@/assets/logo.png";
import Fotoperfil8 from "@/assets/logo.png";
import Fotoperfil9 from "@/assets/logo.png";
import Fotoperfil10 from "@/assets/logo.png";
import Fotoperfil11 from "@/assets/logo.png";
import Fotoperfil12 from "@/assets/logo.png";
import Fotoperfil13 from "@/assets/logo.png";
import Fotoperfil14 from "@/assets/logo.png";
import Fotoperfil15 from "@/assets/logo.png";
import Fotoperfil16 from "@/assets/logo.png";
import Fotoperfil17 from "@/assets/logo.png";
import Fotoperfil18 from "@/assets/logo.png";
import Fotoperfil19 from "@/assets/logo.png";
import Fotoperfil20 from "@/assets/logo.png";
import Fotoperfil21 from "@/assets/logo.png";
import Fotoperfil22 from "@/assets/logo.png";
import Fotoperfil23 from "@/assets/logo.png";
import Fotoperfil24 from "@/assets/logo.png";
import Fotoperfil25 from "@/assets/logo.png";
import Fotoperfil26 from "@/assets/logo.png";
import Fotoperfil27 from "@/assets/logo.png";
import Fotoperfil28 from "@/assets/logo.png";
import Fotoperfil29 from "@/assets/logo.png";
import Fotoperfil30 from "@/assets/logo.png";

const teamMembers = [
  {
    name: "Francisco Javier Fernandez Sanmartín",
    role: "Team Leader",
    linkedin: "https://www.linkedin.com/in/francisco-javier-fernandez-sanmart%C3%ADn-273a5724b/",
    image: Fotoperfil1
  },
  {
    name: "David Grueso Conejero",
    role: "Telemetry Engineer",
    linkedin: "https://www.linkedin.com/in/david-grueso-conejero-833755235/",
    image: Fotoperfil2
  },
  {
    name: "Sergio Tortosa Borrell",
    role: "Telemetry Engineer",
    linkedin: "https://www.linkedin.com/in/sergio-tortosa-borrell-8252052a0/",
    image: Fotoperfil3
  },
  {
    name: "Alejandro Espí Cambra",
    role: "Telemetry Engineer",
    linkedin: "https://www.linkedin.com/in/alejandro-espi-cambra/",
    image: Fotoperfil4
  },
  {
    name: "Antonio Melero Calvete",
    role: "Solar Technology Expert",
    linkedin: "https://www.linkedin.com/in/antonio-melero-calvete-b91ab6252/",
    image: Fotoperfil5
  },
  {
    name: "Ruben Verdeguer Asensio",
    role: "Telemetry Engineer",
    linkedin: "https://www.linkedin.com/in/ruben-verdeguer-asensio/",
    image: Fotoperfil6
  },
  {
    name: "Raül Ferrando Navarro",
    role: "Mechanical Engineer",
    linkedin: "https://www.linkedin.com/in/ra%C3%BCl-ferrando-navarro-6ba257332/",
    image: Fotoperfil7
  },
  {
    name: "Jorge Rubio Valdés",
    role: "Steering and Suspension Engineer",
    linkedin: "https://www.linkedin.com/in/jorge-rubio-vald%C3%A9s/",
    image: Fotoperfil8
  },
  {
    name: "Lorena Lacasa López",
    role: "Battery Engineer",
    linkedin: "https://www.linkedin.com/in/lorena-lacasa-l%C3%B3pez-a4879033b/",
    image: Fotoperfil9
  },
  {
    name: "Paloma Arnal Estellés",
    role: "Communications Engineer",
    linkedin: "https://www.linkedin.com/in/paloma-arnal-estell%C3%A9s-332a16263/",
    image: Fotoperfil10
  },
  {
    name: "Saul Ferrer Zaragoza",
    role: "Fotovoltaical Engineer",
    linkedin: "https://www.linkedin.com/in/saul-ferrer-zaragoza-602b96230/",
    image: Fotoperfil11
  },
  {
    name: "Operations Lead",
    role: "Project Manager",
    linkedin: "#",
    image: Fotoperfil12
  },
  {
    name: "Team Lead",
    role: "Project Director",
    image: Fotoperfil13
  },
  {
    name: "David Grueso Conejero",
    role: "Telemetry Engineer",
    linkedin: "#",
    image: Fotoperfil14
  },
  {
    name: "Sergio Tortosa Borrell",
    role: "Telemetry Engineer",
    linkedin: "#",
    image: Fotoperfil15
  },
  {
    name: "Power Systems",
    role: "Solar Technology Expert",
    linkedin: "#",
    image: Fotoperfil16
  },
  {
    name: "Mechanical Lead",
    role: "Structural Engineer",
    linkedin: "#",
    image: Fotoperfil17
  },
  {
    name: "Operations Lead",
    role: "Project Manager",
    linkedin: "#",
    image: Fotoperfil18
  },
  {
    name: "Team Lead",
    role: "Project Director",
    image: Fotoperfil19
  },
  {
    name: "David Grueso Conejero",
    role: "Telemetry Engineer",
    linkedin: "#",
    image: Fotoperfil20
  },
  {
    name: "Sergio Tortosa Borrell",
    role: "Telemetry Engineer",
    linkedin: "#",
    image: Fotoperfil21
  },
  {
    name: "Power Systems",
    role: "Solar Technology Expert",
    linkedin: "#",
    image: Fotoperfil22
  },
  {
    name: "Mechanical Lead",
    role: "Structural Engineer",
    linkedin: "#",
    image: Fotoperfil23
  },
  {
    name: "Operations Lead",
    role: "Project Manager",
    linkedin: "#",
    image: Fotoperfil24
  },
  {
    name: "Team Lead",
    role: "Project Director",
    image: Fotoperfil25
  },
  {
    name: "David Grueso Conejero",
    role: "Telemetry Engineer",
    linkedin: "#",
    image: Fotoperfil26
  },
  {
    name: "Sergio Tortosa Borrell",
    role: "Telemetry Engineer",
    linkedin: "#",
    image: Fotoperfil27
  },
  {
    name: "Power Systems",
    role: "Solar Technology Expert",
    linkedin: "#",
    image: Fotoperfil28
  },
  {
    name: "Mechanical Lead",
    role: "Structural Engineer",
    linkedin: "#",
    image: Fotoperfil29
  },
  {
    name: "Operations Lead",
    role: "Project Manager",
    linkedin: "#",
    image: Fotoperfil30
  }
];

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
            {t('team.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            {t('team.subtitle')}
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
              transition={{ duration: 0.6, delay: index/3 * 0.11 }}
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
                    src={member.image}
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
