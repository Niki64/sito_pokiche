
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero_poke_hawaiian.avif"
          alt="Hawaiian Poke Bowl con tonno, salmone e gamberi"
          fill
          className="object-cover brightness-50"
          quality={80}
          priority
          sizes="100vW"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[#FF9F1C]">The &ldquo;Bespoke&rdquo; poke</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Ingredienti scelti. Composizioni uniche. Il tuo poke, come lo vuoi tu: fresco, artigianale e su misura
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#menu">
              <Button size="lg" className="bg-[#FF9F1C] hover:bg-[#FF8C00] text-lg">
                Guarda il nostro menù
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
