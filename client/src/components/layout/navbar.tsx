import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/lib/use-language";
import { ES, GB } from 'country-flag-icons/react/3x2';
import logo from "@/assets/logo_blue.png";

const navLinks = [
  { href: "/about", label: "nav.about" },
  { href: "/team", label: "nav.team" },
  { href: "/partners", label: "nav.partners" },
  { href: "/contact", label: "nav.contact" },
  { href: "/join", label: "nav.join" },
];

export default function Navbar() {
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en');
  const FlagIcon = language === 'en' ? GB : ES;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a1f2e] bg-gradient-to-b from-[#1a1f2e] to-[#121620] backdrop-blur-md shadow-md transition-all duration-300">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Logo con tipografía elegante */}
        <Link href="/" className="flex items-center space-x-3">
          <img src={logo} alt="HeliosRace UPV Logo" className="h-10 w-auto" />
          <span className="text-xl font-extrabold tracking-wide text-white uppercase">Helios Race UPV</span>
        </Link>

        {/* Menú de navegación */}
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-6 w-6 text-white transition-transform duration-300 hover:scale-110" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[260px] sm:w-[320px] bg-[#1a1f2e] text-white ">
              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <Button
                      variant={location === link.href ? "secondary" : "ghost"}
                      className="w-full text-lg font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {t(link.label)}
                    </Button>
                  </Link>
                ))}
                {/* Botón de cambio de idioma */}
                <Button variant="ghost" onClick={toggleLanguage} className="flex items-center gap-2 text-lg font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
                  <FlagIcon className="h-5 w-5" />
                  {language.toUpperCase()}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-6 ">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant={location === link.href ? "secondary" : "ghost"}
                    className="text-lg font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    {t(link.label)}
                  </Button>
                </Link>
              ))}
            </nav>
            {/* Botón de cambio de idioma */}
            <Button variant="ghost" onClick={toggleLanguage} className="flex items-center gap-2 text-lg font-semibold text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
              <FlagIcon className="h-5 w-5" />
              {language.toUpperCase()}
            </Button>
          </div>
        )}
      </div>

      {/* Línea amarilla con sombra debajo del navbar */}
      <div className="w-full h-1 bg-yellow-500 shadow-md shadow-yellow-500/50"></div>
    </header>
  );
}
