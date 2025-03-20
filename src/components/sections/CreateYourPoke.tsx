
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const pokeOptions = [
  {
    title: "Small",
    description: "Base a scelta, 1 proteina, 3 vitamine, 1 salsa,  1 topping e 1 semi",
    price: " Da € 8,90",
    image: "/Componi_la_tua_poke_small.webp"
  },
  {
    title: "Regular",
    description: "Base a scelta, 2 proteine, 4 vitamine, 1 salsa,  1 topping e 1 semi",
    price: "Da € 11,80",
    image: "/Componi_la_tua_poke_regular.webp"
  },
  {
    title: "Large",
    description: "Base a scelta, 3 proteine, 5 vitamine, 1 salsa,  1 topping e 1 semi",
    price: "Da € 14,10",
    image: "/Componi_la_tua_poke_large.webp"
  }
];

export function CreateYourPoke() {
  return (
    <section className="py-24 bg-[#FDF6EC]" id="create">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Crea il tuo poke</h2>
          <Separator className="w-24 mx-auto mb-16 bg-[#1C2331]" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {pokeOptions.map((option) => (
              <Card key={option.title} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={option.image}
                    alt={`${option.title} Poke Bowl`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-3 text-[#1C2331]">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <p className="text-2xl font-bold mb-3 text-[#FF9F1C] font-sans">
                    {option.price}
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
