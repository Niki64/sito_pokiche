
import Head from "next/head";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedDishes } from "@/components/sections/FeaturedDishes";
import { CreateYourPoke } from "@/components/sections/CreateYourPoke";
import { Panini } from "@/components/sections/Panini";
import { Ceviche } from "@/components/sections/Ceviche";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokiche | Poke & ceviche</title>
        <meta 
          name="description" 
          content="Ingredienti premium. Abbinamenti unici. Poke a modo tuo: fresco, realizzato a mano e con infinite possibilità di personalizzazione." 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <CreateYourPoke />
        <Panini />
        <Ceviche />
        <Location />
      </main>
    </>
  );
}
