import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
  { href: "/join", label: "Join Us" },
];

export default function Navbar() {
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button
            variant={location === link.href ? "secondary" : "ghost"}
            className="font-medium text-white hover:text-primary"
          >
            {link.label}
          </Button>
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#393938] bg-[#292928]/95 backdrop-blur supports-[backdrop-filter]:bg-[#292928]/60">
      <div className="container flex h-16 items-center justify-between px-8">
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
              <Button variant="ghost" size="icon" className="ml-auto text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[240px] sm:w-[300px] bg-[#292928]">
              <nav className="flex flex-col gap-2 mt-4">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
}