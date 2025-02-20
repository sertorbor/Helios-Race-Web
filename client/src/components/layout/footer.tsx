import { Link } from "wouter";
import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div>
            <h3 className="font-bold text-lg mb-4">📍 Camí de Vera, s/n, Edificio 4H UPV</h3>
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
              <p className="text-muted-foreground my-4">
                @heliosraceupv</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Preguntas y contacto ⬇️ </h3>
            <div>
            <h3 className="text-muted-foreground my-4"> heliosraceupv@gmail.com </h3>
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
