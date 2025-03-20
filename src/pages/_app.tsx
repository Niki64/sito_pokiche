import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

// ✅ Importa il font con Next.js
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
