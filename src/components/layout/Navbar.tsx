import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const deliveryLinks = {
        deliveroo: "https://deliveroo.it/it/menu/Milano/porta-ticinese-porta-vittoria/pokiche?geohash=u0nd9de1hnh0",
        justEat: "https://www.justeat.it/restaurants-pokiche-milano/menu"
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
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
                    {/* Bandierine per cambio lingua - Desktop */}
                    <div className="flex items-center space-x-2 mr-4">
                        <button
                            onClick={() => changeLanguage('it')}
                            className={`text-2xl hover:scale-110 transition-transform ${i18n.language === 'it' ? 'opacity-100' : 'opacity-50'}`}
                            aria-label="Italiano"
                        >
                            🇮🇹
                        </button>
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`text-2xl hover:scale-110 transition-transform ${i18n.language === 'en' ? 'opacity-100' : 'opacity-50'}`}
                            aria-label="English"
                        >
                            🇬🇧
                        </button>
                    </div>

                    <Link href="/" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
                        {t('nav.home')}
                    </Link>
                    <Link href="#menu" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
                        {t('nav.ourPoke')}
                    </Link>
                    <Link href="#create" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
                        {t('nav.createPoke')}
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
                        {t('nav.panini')}
                    </Link>
                    <Link href="#ceviche" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
                        {t('nav.ceviche')}
                    </Link>
                    <Link href="#contact" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
                        {t('nav.whereWeAre')}
                    </Link>
                    <Link href="#contact" className="hover:text-[#FF9F1C] transition-colors whitespace-nowrap">
                        {t('nav.contacts')}
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="bg-[#FF9F1C] text-white hover:bg-[#01295a] whitespace-nowrap text-base" size="default">
                                {t('nav.delivery')}
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
                    {/* Bandierina italiana a sinistra */}
                    <div className="flex-1 flex justify-end pr-3">
                        <button
                            onClick={() => changeLanguage('it')}
                            className={`text-2xl hover:scale-110 transition-transform ${i18n.language === 'it' ? 'opacity-100' : 'opacity-50'}`}
                            aria-label="Italiano"
                        >
                            🇮🇹
                        </button>
                    </div>

                    {/* Logo centrato */}
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

                    {/* Bandierina inglese e menu hamburger a destra */}
                    <div className="flex-1 flex justify-end items-center gap-8">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`text-2xl hover:scale-110 transition-transform ${i18n.language === 'en' ? 'opacity-100' : 'opacity-50'}`}
                            aria-label="English"
                        >
                            🇬🇧
                        </button>
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-white">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-[#01295a] text-white w-[300px] p-6">
                                <div className="flex flex-col space-y-4 mt-8">
                                    <MobileLink href="/">{t('nav.home')}</MobileLink>
                                    <MobileLink href="#menu">{t('nav.ourPoke')}</MobileLink>
                                    <MobileLink href="#create">{t('nav.createPoke')}</MobileLink>
                                    <MobileLink href="#panini">{t('nav.panini')}</MobileLink>
                                    <MobileLink href="#ceviche">{t('nav.ceviche')}</MobileLink>
                                    <MobileLink href="#contact">{t('nav.whereWeAre')}</MobileLink>
                                    <MobileLink href="#contact">{t('nav.contacts')}</MobileLink>

                                    <div className="flex justify-center">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button className="bg-[#FF9F1C] text-white hover:bg-[#FF8C00] w-full text-lg">
                                                    {t('nav.delivery')}
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