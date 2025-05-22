import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/lib/use-language";
import { ES, GB } from 'country-flag-icons/react/3x2';
import logo from "@/assets/HeliosLogoBlancoSolo.png";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const navLinks = [
  { href: "/about", label: "nav.about" },
  { href: "/team", label: "nav.team" },
  { href: "/vehicles", label: "nav.vehicles" },
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

  const handleNavigation = () => {
    scrollToTop();
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#121620] to-[#2a2f3d]/80 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="container flex h-[74px] items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img src={logo} alt="HeliosRace UPV Logo" className="h-[60px] w-auto" />
        </Link>

        {/* Menú de navegación */}
        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-6 w-6 text-white transition-transform duration-300 hover:scale-110" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[260px] sm:w-[320px] bg-[#1a1f2e] text-white">
              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={handleNavigation}>
                    <span
                      className={`cursor-pointer text-xl font-semibold transition-all duration-300 hover:scale-105 font-inter relative 
                        ${
                          location === link.href
                            ? "text-yellow-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-yellow-400"
                            : "text-gray-300 hover:text-yellow-300"
                        }
                      `}
                    >
                      {t(link.label)}
                    </span>
                  </Link>
                ))}
                {/* Botón de cambio de idioma */}
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-xl font-semibold text-gray-300 hover:text-black hover:bg-yellow-400 transition-all duration-300 rounded-xl px-3 py-2"
                >
                  <FlagIcon className="h-5 w-5" />
                  {language.toUpperCase()}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={scrollToTop}>
                  <span
                    className={`cursor-pointer text-xl font-semibold transition-all duration-300 hover:scale-105 font-inter relative
                      ${
                        location === link.href
                          ? "text-yellow-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-yellow-400"
                          : "text-gray-300 hover:text-yellow-300"
                      }
                    `}
                  >
                    {t(link.label)}
                  </span>
                </Link>
              ))}
            </nav>
            {/* Botón de cambio de idioma */}
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xl font-semibold text-gray-300 hover:text-white hover:bg-yellow-400 transition-all duration-300 rounded-xl px-4 py-2"
            >
              <FlagIcon className="h-6 w-6" />
              {language.toUpperCase()}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
