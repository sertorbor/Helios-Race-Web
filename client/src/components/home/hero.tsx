import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559302504-64aae6ca6b6d')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Racing Towards a Sustainable Future
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            HeliosRace UPV is a student-led solar racing team pushing the boundaries of sustainable mobility through innovation and determination.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/join">Join the Team</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
