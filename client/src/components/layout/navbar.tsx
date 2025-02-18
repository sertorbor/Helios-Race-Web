import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/lib/use-language";

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

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button
            variant={location === link.href ? "secondary" : "ghost"}
            className="font-medium"
          >
            {t(link.label)}
          </Button>
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-12">
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="/logo.svg" 
            alt="HeliosRace UPV Logo" 
            className="h-8 w-auto"
          />
        </Link>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-2 mt-4">
                <NavLinks />
                <Button variant="ghost" onClick={toggleLanguage} className="gap-2">
                  <Globe className="h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-4">
            <nav className="flex items-center space-x-4 lg:space-x-6">
              <NavLinks />
            </nav>
            <Button variant="ghost" onClick={toggleLanguage} className="gap-2">
              <Globe className="h-4 w-4" />
              {language.toUpperCase()}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}