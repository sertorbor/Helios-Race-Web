import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Partners() {
  const partners = [
    {
      category: "Academic Partners",
      items: [
        { name: "Universitat Politècnica de València", role: "Main Academic Institution" },
        { name: "Engineering Department", role: "Technical Support" },
        { name: "Research Labs", role: "Testing Facilities" }
      ]
    },
    {
      category: "Industry Partners",
      items: [
        { name: "Solar Tech Industries", role: "Solar Panel Technology" },
        { name: "Advanced Materials Corp", role: "Composite Materials" },
        { name: "Power Systems Ltd", role: "Battery Technology" }
      ]
    },
    {
      category: "Support Partners",
      items: [
        { name: "Local Government", role: "Infrastructure Support" },
        { name: "Sustainability Foundation", role: "Environmental Guidance" },
        { name: "Innovation Hub", role: "Technical Resources" }
      ]
    }
  ];

  return (
    <div className="flex justify-center py-16 md:py-24">
      <div className="container">
        <SectionHeader
          title="Our Partners"
          subtitle="Collaboration is key to our success. Meet the organizations that support our mission."
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map((partner, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-bold mb-2">{partner.name}</h4>
                      <p className="text-muted-foreground mb-4">{partner.role}</p>
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
          <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us in our mission to advance sustainable transportation technology. Partner with HeliosRace UPV and be part of the future of solar racing.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
