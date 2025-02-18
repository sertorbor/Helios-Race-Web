import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Team Lead",
    role: "Project Director",
    image: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b"
  },
  {
    name: "Engineering Lead",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866"
  },
  {
    name: "Design Lead",
    role: "Aerodynamics Specialist",
    image: "https://images.unsplash.com/photo-1522198648249-0657d7ff242a"
  },
  {
    name: "Power Systems",
    role: "Solar Technology Expert",
    image: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e"
  },
  {
    name: "Mechanical Lead",
    role: "Structural Engineer",
    image: "https://images.unsplash.com/photo-1480099225005-2513c8947aec"
  },
  {
    name: "Operations Lead",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1503945438517-f65904a52ce6"
  }
];

export default function Team() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <SectionHeader
          title="Meet Our Team"
          subtitle="Dedicated students and faculty working together to push the boundaries of solar racing"
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
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
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
            Our team consists of passionate students from various engineering disciplines, working together to create innovative solar-powered racing solutions. Each member brings unique skills and perspectives to the project.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
