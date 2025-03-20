
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const featuredDishes = [
  {
    name: "Salmon Poke",
    description: "Riso sushi, salmone marinato con salsa soia e olio di sesamo, avocado, goma wakame, edamame e semi di sesamo",
    price: "Reg. € 11,80   Large € 14,30",
    image: "/Salmon_poke.webp"
  },
  {
    name: "Crispy Chicken Breast",
    description: "Riso sushi, petto di pollo croccante, cipolla rossa, cavolo rosso, edamame, avocado e salsa Teriyaki",
    price: "Reg. € 11,50   Large € 14,00",
    image: "/Crispy_chicken_breast.webp"
  },
  {
    name: "Spicy Salmon Poke",
    description: "Riso sushi, spicy salmon, alga Nori, cetrioli, avocado, tobiko e semi di sesamo",
    price: "Reg. € 11,80   Large € 14,30",
    image: "/Salmon_ponzu_rice_poke.webp"
  },
  {
    name: "Spicy Tuna",
    description: "Riso bianco, tonno, cipollotto, avocado, edamame, alghe Nori, tobiko, semi di sesamo e creamy togarashi",
    price: "Reg. € 12,00   Large € 14,50",
    image: "/Spicy_tuna.webp"
  },
  {
    name: "The Vegan",
    description: "Farro perlato bio, tofu, carote grattugiate, avocado, germogli di soia, goma wakame e pomodorini",
    price: "Reg. € 9,90   Large € 12,40",
    image: "/the_vegan.webp"
  },
  {
    name: "The Hawaiian",
    description: "Il poke definitivo: riso basmati, pomodorini, carote grattugiate, broccoli, avocado, salmone marinato, hawaiian tuna, gamberi e semi di sesamo (solo in versione large)",
    price: "Large € 15,00",
    image: "/hawaiian_poke.webp"
  }
];

export function FeaturedDishes() {
  return (
    <section className="py-24 bg-[#FDF6EC]" id="menu">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">I nostri poke</h2>
          <Separator className="w-24 mx-auto mb-16 bg-[#1C2331]" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <Card key={dish.name} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-3 text-[#1C2331]">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {dish.description}
                  </p>
                  <p className="text-2xl font-bold mb-3 text-[#FF9F1C] font-sans">
                    {dish.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
