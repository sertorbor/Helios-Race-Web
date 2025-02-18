import Hero from "@/components/home/hero";
import SectionHeader from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionHeader
            title="Powering the Future of Racing"
            subtitle="Discover how we're combining solar technology with innovative engineering to create sustainable racing solutions."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing the boundaries of solar technology and aerodynamics.",
                image: "https://images.unsplash.com/photo-1726795867795-32bc9872a44a"
              },
              {
                title: "Sustainability",
                description: "Racing towards a greener future in motorsports.",
                image: "https://images.unsplash.com/photo-1726795867801-63c0a37b80c6"
              },
              {
                title: "Education",
                description: "Training the next generation of sustainable mobility engineers.",
                image: "https://images.unsplash.com/photo-1522198648249-0657d7ff242a"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card>
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
