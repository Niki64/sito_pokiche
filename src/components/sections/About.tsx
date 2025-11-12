"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function About() {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-[#FDF6EC]" id="about">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
                    <Separator className="w-24 mx-auto mb-8 bg-[#1C2331]" />
                    <p className="text-xl leading-relaxed mb-8 font-serif text-[#1C2331]">
                        {t('about.paragraph1')}
                    </p>
                    <p className="text-xl leading-relaxed mb-12 font-serif text-[#1C2331]">
                        {t('about.paragraph2')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <Image
                                src="/Hero_left.webp"
                                alt="Panoramica nostri piatti"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <Image
                                src="/VERONICA CON MENU.webp"
                                alt="Personale del locale"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <Image
                                src="/Hero_right.webp"
                                alt="Piatti in primo piano"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}