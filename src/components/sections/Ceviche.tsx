
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const cevicheDishes = [
  {
    name: "Ceviche di salmone",
    description: "Salmone, mango, arancio, menta, peperoncino, pepe nero, purè di mango, succo di lime e ajinomoto (piccante)",
    price: "€ 10,50",
    image: "/Ceviche_salmone.webp"
  },
  {
    name: "Ceviche di tonno",
    description: "Filetto di tonno marinato con succo di lime, olio, sale, peperoncino e coriandolo. Servito con jalapenos, cipolla rossa, pomodorini e patate dolci (piccante)",
    price: "€ 12,00",
    image: "/Ceviche_tonno.webp"
  }
];

export function Ceviche() {
  return (
    <section className="py-24 bg-[#FDF6EC]" id="ceviche">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">I nostri ceviche</h2>
          <Separator className="w-24 mx-auto mb-16 bg-[#1C2331]" />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cevicheDishes.map((dish) => (
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
