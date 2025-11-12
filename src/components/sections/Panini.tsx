"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const paniniImages = [
    "/carloforte.webp",
    "/trondheim.webp",
    "/bergen.webp",
    "/marzamemi.webp",
    "/cetara.webp",
    "/catania.webp"
];

export function Panini() {
    const { t } = useTranslation();
    const sandwiches = t('panini.sandwiches', { returnObjects: true }) as Array<{
        name: string;
        description: string;
        price: string;
    }>;

    return (
        <section className="py-24 bg-white" id="panini">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-6">
                        {t('panini.title')}
                    </h2>
                    <Separator className="w-24 mx-auto mb-16 bg-[#1C2331]" />

                    <div className="grid md:grid-cols-3 gap-8">
                        {sandwiches.map((sandwich, index) => (
                            <Card key={sandwich.name} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                                <div className="relative h-48">
                                    <Image
                                        src={paniniImages[index]}
                                        alt={sandwich.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                        className="object-cover hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <CardContent className="p-6 text-center">
                                    <h3 className="text-2xl font-bold mb-3 text-[#1C2331]">
                                        {sandwich.name}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {sandwich.description}
                                    </p>
                                    <p className="text-2xl font-bold mb-3 text-[#FF9F1C] font-sans">
                                        {sandwich.price}
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
