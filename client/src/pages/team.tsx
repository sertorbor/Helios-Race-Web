import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
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

// Use a single placeholder image for all team members
const placeholderImage = "https://images.unsplash.com/photo-1522198648249-0657d7ff242a";

export default function Team() {
  const { t } = useLanguage();

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <SectionHeader
          title={t('team.title')}
          subtitle={t('team.subtitle')}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-105"
              >
                <Card className="overflow-hidden text-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl">
                  <div className="pt-6 px-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                      <img
                        src={placeholderImage}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              </a>
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('team.description')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}