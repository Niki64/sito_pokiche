import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { IngredientsModal } from "./IngredientsModal";
import { useTranslation } from "react-i18next";

const pokeOptions = ['regular', 'large'];

export function CreateYourPoke() {
    const { t } = useTranslation();

    const getPokeData = (option: string) => ({
        title: t(`createYourPoke.${option}.title`),
        description: t(`createYourPoke.${option}.description`),
        price: t(`createYourPoke.${option}.price`),
        image: `/Componi_la_tua_poke_${option}.webp`
    });

    return (
        <section className="py-24 bg-[#FDF6EC]" id="create">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-3">
                        {t('createYourPoke.title')}
                    </h2>

                    <div className="text-center mb-6">
                        <IngredientsModal />
                    </div>

                    <Separator className="w-24 mx-auto mb-16 bg-[#1C2331]" />

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {pokeOptions.map((option) => {
                            const poke = getPokeData(option);
                            return (
                                <Card key={option} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="relative h-48">
                                        <Image
                                            src={poke.image}
                                            alt={`${poke.title} Poke Bowl`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                            className="object-cover hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <CardContent className="p-6 text-center">
                                        <h3 className="text-2xl font-bold mb-3 text-[#1C2331]">
                                            {poke.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">
                                            {poke.description}
                                        </p>
                                        <p className="text-2xl font-bold mb-3 text-[#FF9F1C] font-sans">
                                            {poke.price}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}