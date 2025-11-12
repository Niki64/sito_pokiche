"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

export function IngredientsModal() {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const categories = ['basi', 'proteine', 'vitamine', 'salse', 'toppings', 'semi'];

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="text-[#FF9F1C] hover:text-[#e68a0a] underline font-medium transition-colors">
                    {t('ingredients.title')}
                </button>
            </DialogTrigger>
            <DialogContent className="bg-[#FDF6EC] max-w-3xl max-h-[80vh] overflow-y-auto border-none">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[#1C2331] text-center">
                        {t('ingredients.title')}
                    </DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="basi" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-1 bg-transparent">
                        {categories.map((category) => (
                            <TabsTrigger
                                key={category}
                                value={category}
                                className="text-[#FF9F1C] hover:bg-[#01295a] hover:text-white data-[state=active]:bg-[#FF9F1C] data-[state=active]:text-white transition-colors text-base font-semibold"
                            >
                                {t(`ingredients.categories.${category}`)}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {categories.map((category) => {
                        const items = t(`ingredients.items.${category}`, { returnObjects: true }) as string[];
                        return (
                            <TabsContent key={category} value={category} className="mt-10">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {items.map((item, index) => (
                                        <li key={index} className="text-[#1C2331] py-1 px-2 hover:bg-white/50 rounded transition-colors text-center">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </TabsContent>
                        );
                    })}
                </Tabs>

                <p className="text-sm text-muted-foreground text-center mt-6 italic">
                    {t('ingredients.note')}
                </p>
            </DialogContent>
        </Dialog>
    );
}