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
            className="font-medium"
          >
            {link.label}
          </Button>
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">HeliosRace UPV</span>
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
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="mx-6 flex items-center space-x-2 lg:space-x-4">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
}