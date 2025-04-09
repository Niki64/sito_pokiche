
import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Location() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Vieni a trovarci</h2>
          <Separator className="w-24 mx-auto mb-16 bg-[#1C2331]" />
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-[#FDF6EC] border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#1C2331] mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Indirizzo</h3>
                      <p className="text-sm font-sans-serif">
                        Via Sigieri, 10<br />
                        20135 Milano
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#1C2331] mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Orari</h3>
                      <p className="text-sm font-sans-serif">
                        Lunedì - Sabato: 11:30-15,00/18,00-22,00<br />
                        Domenica: chiuso
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#1C2331] mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Contatti</h3>
                      <p className="text-sm font-sans-serif">
                        Tel: (+39) 328 7053652<br />
                        email: info@pokiche.it
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="relative h-[400px] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4074.1981739782445!2d9.205289206334566!3d45.45208178792309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c5cdf34bf5c5%3A0xb51813b87220239f!2sPOKICHE!5e0!3m2!1sit!2sit!4v1741278132109!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
