import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const deliveryLinks = {
    deliveroo: "https://deliveroo.it/it/menu/Milano/porta-ticinese-porta-vittoria/pokiche?geohash=u0nd9de1hnh0",
    justEat: "https://www.justeat.it/restaurants-pokiche-milano/menu"
  };

  const handleScrollTo = useCallback((id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  const MobileLink = ({ href, children, target }: { href: string; children: React.ReactNode; target?: string }) => {
    const isHashLink = href.startsWith("#");
    
    const handleClick = (e: React.MouseEvent) => {
      if (isHashLink) {
        e.preventDefault();
        const id = href.substring(1);
        handleScrollTo(id);
      }
      setIsOpen(false);
    };

    return (
      <Link 
        href={href}
        target={target}
        className="text-lg hover:text-[#FF9F1C] transition-colors"
        onClick={handleClick}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-[#01295a] text-white z-50 shadow-lg">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
        {/* Contenitore sinistro - occupa 40% della larghezza - visibile solo su desktop */}
        <div className="hidden md:flex items-center justify-end w-[40%] space-x-6">
          <Link href="/" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
            HOME
          </Link>
          <Link href="#menu" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
            I NOSTRI POKE
          </Link>
          <Link href="#create" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
            CREA IL TUO POKE
          </Link>
        </div>

        {/* Contenitore centrale - occupa 20% della larghezza - versione desktop */}
        <div className="hidden md:flex justify-center items-center w-[20%]">
          <div className="relative w-40 h-16">
            <Link href="/">
              <Image
                src="/Logo Pokiche scontornato.webp"
                alt="Logo Pokiche"
                fill
                sizes="160px"
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>
        
        {/* Contenitore destro - occupa 40% della larghezza - visibile solo su desktop */}
        <div className="hidden md:flex items-center justify-start w-[40%] space-x-6">
          <Link href="#panini" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
            PANINI
          </Link>
          <Link href="#ceviche" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
            CEVICHE
          </Link>
          <Link href="#contact" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
            DOVE SIAMO
          </Link>
          <Link href="#contact" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
            CONTATTI
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#FF9F1C] text-white hover:bg-[#01295a] whitespace-nowrap">
                DELIVERY
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#FF9F1C] text-white border-none">
              <DropdownMenuItem className="cursor-pointer hover:bg-[#FF8C00] focus:bg-[#FF8C00] focus:text-white">
                <Link href={deliveryLinks.deliveroo} target="_blank" className="w-full text-white text-lg uppercase">
                  DELIVEROO
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-[#FF8C00] focus:bg-[#FF8C00] focus:text-white">
                <Link href={deliveryLinks.justEat} target="_blank" className="w-full text-white text-lg uppercase">
                  JUST EAT
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Menu mobile - visibile solo su mobile/tablet */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Logo centrato per mobile */}
          <div className="flex-1"></div> {/* Spacer sinistro per centrare il logo */}
          <div className="flex justify-center items-center flex-1">
            <div className="relative w-40 h-16">
              <Link href="/">
                <Image
                  src="/Logo Pokiche scontornato.webp"
                  alt="Logo Pokiche"
                  fill
                  sizes="160px"
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
          </div>
          {/* Pulsante menu hamburger */}
          <div className="flex justify-end flex-1">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#01295a] text-white w-[300px] p-6">
                <div className="flex flex-col space-y-4 mt-8">
                  <MobileLink href="/">HOME</MobileLink>
                  <MobileLink href="#menu">I NOSTRI POKE</MobileLink>
                  <MobileLink href="#create">CREA IL TUO POKE</MobileLink>
                  <MobileLink href="#panini">PANINI</MobileLink>
                  <MobileLink href="#ceviche">CEVICHE</MobileLink>
                  <MobileLink href="#contact">DOVE SIAMO</MobileLink>
                  <MobileLink href="#contact">CONTATTI</MobileLink>
                  <div className="flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="bg-[#FF9F1C] text-white hover:bg-[#FF8C00] w-full">
                          DELIVERY
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-[#FF9F1C] text-white border-none">
                        <DropdownMenuItem className="cursor-pointer hover:bg-[#FF8C00] focus:bg-[#FF8C00] focus:text-white">
                          <Link href={deliveryLinks.deliveroo} target="_blank" className="w-full text-white text-lg uppercase">
                            DELIVEROO
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer hover:bg-[#FF8C00] focus:bg-[#FF8C00] focus:text-white">
                          <Link href={deliveryLinks.justEat} target="_blank" className="w-full text-white text-lg uppercase">
                            JUST EAT
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}