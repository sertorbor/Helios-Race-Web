import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";

export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <SectionHeader
          title="About HeliosRace UPV"
          subtitle="Pioneering sustainable mobility through solar-powered racing innovation"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              At HeliosRace UPV, we are dedicated to pushing the boundaries of solar-powered mobility while nurturing the next generation of sustainable technology innovators. Our team combines engineering excellence with environmental consciousness to create cutting-edge solar racing vehicles.
            </p>
            <p className="text-muted-foreground">
              Through participation in international solar racing competitions, we demonstrate the viability of solar power in transportation and inspire others to embrace sustainable technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1536408745983-0f03be6e8a00"
              alt="Solar Racing Car"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              content: "Our team constantly pushes technological boundaries, developing cutting-edge solutions in solar power, aerodynamics, and lightweight materials.",
              image: "https://images.unsplash.com/photo-1524603642524-b02ea114f009"
            },
            {
              title: "Education",
              content: "We provide hands-on experience to students, bridging the gap between academic knowledge and real-world engineering challenges.",
              image: "https://images.unsplash.com/photo-1503945438517-f65904a52ce6"
            },
            {
              title: "Sustainability",
              content: "Every project we undertake is guided by our commitment to environmental sustainability and the advancement of clean energy technologies.",
              image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-muted-foreground">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
