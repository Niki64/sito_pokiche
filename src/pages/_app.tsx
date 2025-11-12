import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "@/i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

function AppContent({ Component, pageProps }: AppProps) {
    const { i18n } = useTranslation();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (i18n.isInitialized) {
            setIsReady(true);
        }
    }, [i18n.isInitialized]);

    if (!isReady) {
        return null; // O un loader se vuoi
    }

    return <Component {...pageProps} />;
}

export default function App(props: AppProps) {
    return (
        <main className={inter.className}>
            <AppContent {...props} />
        </main>
    );
}
