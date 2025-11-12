"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const dishImages = [
    "/Salmon_poke.webp",
    "/Crispy_chicken_breast.webp",
    "/Salmon_ponzu_rice_poke.webp",
    "/Spicy_tuna.webp",
    "/the_vegan.webp",
    "/hawaiian_poke.webp"
];

export function FeaturedDishes() {
    const { t } = useTranslation();
    const dishes = t('featuredDishes.dishes', { returnObjects: true }) as Array<{
        name: string;
        description: string;
        price: string;
    }>;

    return (
        <section className="py-24 bg-[#FDF6EC]" id="menu">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-6">
                        {t('featuredDishes.title')}
                    </h2>
                    <Separator className="w-24 mx-auto mb-16 bg-[#1C2331]" />

                    <div className="grid md:grid-cols-3 gap-8">
                        {dishes.map((dish, index) => (
                            <Card key={dish.name} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                                <div className="relative h-48">
                                    <Image
                                        src={dishImages[index]}
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