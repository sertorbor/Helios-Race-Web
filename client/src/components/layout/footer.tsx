import { Link } from "wouter";
import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">HeliosRace UPV</h3>
            <p className="text-muted-foreground">
              Solar racing team from Universitat Politècnica de València, pushing the boundaries of sustainable mobility.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary">About</Link>
              <Link href="/team" className="text-muted-foreground hover:text-primary">Team</Link>
              <Link href="/partners" className="text-muted-foreground hover:text-primary">Partners</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
              <Link href="/join" className="text-muted-foreground hover:text-primary">Join Us</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <SiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <SiYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HeliosRace UPV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
