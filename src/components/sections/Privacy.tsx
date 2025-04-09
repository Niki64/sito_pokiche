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

export function Privacy() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClose = () => {
    setIsOpen(false);
  };
  
  return (
    <section id="privacy" className="py-4 text-center w-full bg-[#01295a]">
      <Button 
        variant="link" 
        onClick={() => setIsOpen(true)}
        className="text-lg text-white hover:text-gray-400"
      >
        Privacy
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogDescription>
              Informazioni sulla privacy del nostro sito
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <p className="mb-2 text-justify">Introduzione: Bento Food srl rispetta la privacy dei propri clienti e si impegna a proteggere i dati personali dei clienti in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) e con le leggi applicabili in materia di protezione dei dati personali.</p>
            <p className="mb-2 text-justify">Dati personali raccolti: raccogliamo e trattiamo i seguenti dati indiretti: log del server (indirizzi IP, orari di accesso, browser, ecc.) e dati di analisi tramite Google Analytics</p>
            <p className="mb-2 text-justify">Uso dei dati personali per le seguenti finalità: sicurezza del sito web, analisi statistica anonima del traffico, miglioramento del sito web e rispetto degli obblighi legali, il tutto per legittimo interesse.</p>
            <p className="mb-2 text-justify">Condivisione dei dati personali: non avendo i dati personali dei clienti, non potrà esserci alcuna condivisione degli stessi</p>
          </div>
          
          <DialogFooter>
            <Button onClick={handleClose}>OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}