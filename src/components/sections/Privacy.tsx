"use client";

import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function Privacy() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <section id="privacy" className="py-4 text-center w-full bg-[#01295a]">
            <Button
                variant="link"
                onClick={() => setIsOpen(true)}
                className="text-2xl text-orange-400 hover:text-gray-400"
            >
                {t('privacy.button')}
            </Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{t('privacy.title')}</DialogTitle>
                        <DialogDescription>
                            {t('privacy.description')}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="py-4">
                        <p className="mb-2 text-justify">{t('privacy.intro')}</p>
                        <p className="mb-2 text-justify">{t('privacy.dataCollected')}</p>
                        <p className="mb-2 text-justify">{t('privacy.dataUsage')}</p>
                        <p className="mb-2 text-justify">{t('privacy.dataSharing')}</p>
                    </div>

                    <DialogFooter>
                        <Button onClick={handleClose}>{t('privacy.closeButton')}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </section>
    );
}