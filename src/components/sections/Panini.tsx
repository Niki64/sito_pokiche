
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const paniniDishes = [
  {
    name: "Carloforte",
    description: "Tartare di tonno con olio, soia e semi di sesamo, crema di avocado, stracci di burrata, pomodorini semisecchi Campisi Conserve e rucola",
    price: "€ 10,50",
    image: "/carloforte.webp"
  },
  {
    name: "Trondheim",
    description: "Tartare di salmone, mozzarella di bufala, pomodorini semisecchi campisi conserve, foglia di insalata e pesto di zucchine e mandorle",
    price: "€ 10,00",
    image: "/trondheim.webp"
  },
  {
    name: "Bergen",
    description: "Salmone affumicato norvegese, burro, zeste di limone e pepe",
    price: "€ 10,00",
    image: "/bergen.webp"
  },
  {
    name: "Marzamemi",
    description: "Filetto di tonnetto del Mediterraneo Campisi Conserve, stracci di burrata e pomodorini semisecchi Campisi Conserve",
    price: "€ 10,00",
    image: "/marzamemi.webp"
  },
  {
    name: "Cetara",
    description: "Filetti di acciughe extra Campisi Conserve, mozzarella di bufala, colatura di alici di Cetara Campisi, capperi di Pantelleria Campisi Conserve, pomodorini semisecchi Campisi e origano siciliano",
    price: "€ 9,00",
    image: "/cetara.webp"
  },
  {
    name: "Catania",
    description: "Filetti di sgombro Campisi Conserve, robiola, capperi di Pantelleria Campisi e fettine di limone",
    price: "€ 9,00",
    image: "/catania.webp"
  }
];

export function Panini() {
  return (
    <section className="py-24 bg-white" id="panini">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">I nostri panini di mare</h2>
          <Separator className="w-24 mx-auto mb-16 bg-[#1C2331]" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {paniniDishes.map((dish) => (
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
