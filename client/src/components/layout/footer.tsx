import { Link } from "wouter";
import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-4">HeliosRace UPV</h3>
            <p className="text-muted-foreground">
              Desde la Universitat Politècnica de Valencia, España, Helios Race se compromete con la sostenibilidad y las energías renovables.
            </p>
          </div>
          
          <div  className="pl-28">
            <h3 className="font-bold text-lg mb-4">Acceso rápido</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary">Acerca</Link>
              <Link href="/team" className="text-muted-foreground hover:text-primary">Equipo</Link>
              <Link href="/partners" className="text-muted-foreground hover:text-primary">Partners</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">Contacto</Link>
              <Link href="/join" className="text-muted-foreground hover:text-primary">Únete</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/heliosraceupv/?hl=es" className="text-muted-foreground hover:text-primary">
                <SiInstagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/heliosraceupv/posts/?feedView=all" className="text-muted-foreground hover:text-primary">
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@HeliosRaceUPV" className="text-muted-foreground hover:text-primary">
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
