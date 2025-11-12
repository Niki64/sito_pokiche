import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            it: {
                translation: {
                    nav: {
                        home: "HOME",
                        ourPoke: "I NOSTRI POKE",
                        createPoke: "CREA IL TUO POKE",
                        panini: "PANINI",
                        ceviche: "CEVICHE",
                        whereWeAre: "DOVE SIAMO",
                        contacts: "CONTATTI",
                        delivery: "DELIVERY"
                    },
                    hero: {
                        title: "The \"Bespoke\" poke",
                        subtitle: "Ingredienti scelti. Composizioni uniche. Il tuo poke, come lo vuoi tu: fresco, artigianale e su misura",
                        menuButton: "Guarda il nostro menù",
                        bitcoinDiscount: "Se mangi da noi, sconto del 20%",
                        bitcoinPayment: "se paghi in Bitcoin"
                    },
                    createYourPoke: {
                        title: "Crea il tuo poke",
                        viewIngredients: "Guarda gli ingredienti",
                        regular: {
                            title: "Regular",
                            description: "Base a scelta, 2 proteine, 4 vitamine, 1 salsa, 1 topping e 1 semi",
                            price: "Da € 11,80"
                        },
                        large: {
                            title: "Large",
                            description: "Base a scelta, 3 proteine, 5 vitamine, 1 salsa, 1 topping e 1 semi",
                            price: "Da € 14,10"
                        }
                    },
                    about: {
                        title: "Non è la solita pokeria",
                        paragraph1: "Dal mare alla tua ciotola, prepariamo ogni poke come se fosse per un amico di famiglia. Immagina il profumo del tonno appena tagliato, la croccantezza dei cetrioli raccolti all'alba, e quel riso perfettamente cotto che fa da base ai nostri capolavori. Non siamo solo un poke bar, siamo quel posto dove ogni ingrediente viene scelto come se dovessimo cucinare per i nostri cari.",
                        paragraph2: "Verdure fresche che scrocchiano sotto i denti, salse fatte in casa che ti faranno leccare il cucchiaio, e quella cura speciale che mettiamo nel comporre ogni ciotola - proprio come quando prepari qualcosa di speciale per chi ami. E sì, se vuoi il doppio avocado o sei fissato con lo zenzero marinato, nessun problema: da noi ogni poke è un abbraccio personalizzato!"
                    },
                    featuredDishes: {
                        title: "I nostri poke",
                        dishes: [
                            {
                                name: "Salmon Poke",
                                description: "Riso sushi, salmone marinato con salsa soia e olio di sesamo, avocado, goma wakame, edamame e semi di sesamo",
                                price: "Reg. € 11,80   Large € 14,30"
                            },
                            {
                                name: "Crispy Chicken Breast",
                                description: "Riso sushi, petto di pollo croccante, cipolla rossa, cavolo rosso, edamame, avocado e salsa Teriyaki",
                                price: "Reg. € 11,50   Large € 14,00"
                            },
                            {
                                name: "Spicy Salmon Poke",
                                description: "Riso sushi, spicy salmon, alga Nori, cetrioli, avocado, tobiko e semi di sesamo",
                                price: "Reg. € 11,80   Large € 14,30"
                            },
                            {
                                name: "Spicy Tuna",
                                description: "Riso bianco, tonno, cipollotto, avocado, edamame, alghe Nori, tobiko, semi di sesamo e creamy togarashi",
                                price: "Reg. € 12,00   Large € 14,50"
                            },
                            {
                                name: "The Vegan",
                                description: "Farro perlato bio, tofu, carote grattugiate, avocado, germogli di soia, goma wakame e pomodorini",
                                price: "Reg. € 9,90   Large € 12,40"
                            },
                            {
                                name: "The Hawaiian",
                                description: "Il poke definitivo: riso basmati, pomodorini, carote grattugiate, broccoli, avocado, salmone marinato, hawaiian tuna, gamberi e semi di sesamo (solo in versione large)",
                                price: "Large € 15,00"
                            }
                        ]
                    },
                    panini: {
                        title: "I nostri panini di mare",
                        sandwiches: [
                            {
                                name: "Carloforte",
                                description: "Tartare di tonno con olio, soia e semi di sesamo, crema di avocado, stracci di burrata, pomodorini semisecchi Campisi Conserve e rucola",
                                price: "€ 10,50"
                            },
                            {
                                name: "Trondheim",
                                description: "Tartare di salmone, mozzarella di bufala, pomodorini semisecchi campisi conserve, foglia di insalata e pesto di zucchine e mandorle",
                                price: "€ 10,00"
                            },
                            {
                                name: "Bergen",
                                description: "Salmone affumicato norvegese, burro, zeste di limone e pepe",
                                price: "€ 10,00"
                            },
                            {
                                name: "Marzamemi",
                                description: "Filetto di tonnetto del Mediterraneo Campisi Conserve, stracci di burrata e pomodorini semisecchi Campisi Conserve",
                                price: "€ 10,00"
                            },
                            {
                                name: "Cetara",
                                description: "Filetti di acciughe extra Campisi Conserve, mozzarella di bufala, colatura di alici di Cetara Campisi, capperi di Pantelleria Campisi Conserve, pomodorini semisecchi Campisi e origano siciliano",
                                price: "€ 9,00"
                            },
                            {
                                name: "Catania",
                                description: "Filetti di sgombro Campisi Conserve, robiola, capperi di Pantelleria Campisi e fettine di limone",
                                price: "€ 9,00"
                            }
                        ]
                    },
                    ceviche: {
                        title: "I nostri ceviche",
                        dishes: [
                            {
                                name: "Ceviche di salmone",
                                description: "Salmone, mango, arancio, menta, peperoncino, pepe nero, purè di mango, succo di lime e ajinomoto (piccante)",
                                price: "€ 10,50"
                            },
                            {
                                name: "Ceviche di tonno",
                                description: "Filetto di tonno marinato con succo di lime, olio, sale, peperoncino e coriandolo. Servito con jalapenos, cipolla rossa, pomodorini e patate dolci (piccante)",
                                price: "€ 12,00"
                            }
                        ]
                    },
                    location: {
                        title: "Vieni a trovarci",
                        address: "Indirizzo",
                        addressText: "Via Sigieri, 10\n20135 Milano",
                        hours: "Orari",
                        hoursText: "Lunedì - Sabato: 11:30-15,00/18,00-22,00\nDomenica: chiuso",
                        contacts: "Contatti",
                        phone: "Tel: (+39) 328 7053652"
                    },
                    privacy: {
                        button: "Privacy",
                        title: "Privacy Policy",
                        description: "Informazioni sulla privacy del nostro sito",
                        intro: "Introduzione: Bento Food srl rispetta la privacy dei propri clienti e si impegna a proteggere i dati personali dei clienti in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) e con le leggi applicabili in materia di protezione dei dati personali.",
                        dataCollected: "Dati personali raccolti: raccogliamo e trattiamo i seguenti dati indiretti: log del server (indirizzi IP, orari di accesso, browser, ecc.) e dati di analisi tramite Google Analytics",
                        dataUsage: "Uso dei dati personali per le seguenti finalità: sicurezza del sito web, analisi statistica anonima del traffico, miglioramento del sito web e rispetto degli obblighi legali, il tutto per legittimo interesse.",
                        dataSharing: "Condivisione dei dati personali: non avendo i dati personali dei clienti, non potrà esserci alcuna condivisione degli stessi",
                        closeButton: "OK"
                    },
                    ingredients: {
                        title: "Ingredienti disponibili",
                        note: "* Potrebbero avere delle maggiorazioni di prezzo",
                        categories: {
                            basi: "Basi",
                            proteine: "Proteine",
                            vitamine: "Vitamine",
                            salse: "Salse",
                            toppings: "Toppings",
                            semi: "Semi"
                        },
                        items: {
                            basi: [
                                "Riso Basmati",
                                "Riso Sushi",
                                "Riso Venere*",
                                "Farro perlato*",
                                "Insalata mista"
                            ],
                            proteine: [
                                "Hawaiian tuna",
                                "Spicy tuna",
                                "Pollo allo zenzero",
                                "Petto di pollo croccante",
                                "Tofu",
                                "Salmone marinato",
                                "Salmone crudo a cubetti",
                                "Spicy salmon",
                                "Gamberi cotti*",
                                "Filetti di sgombro Campisi",
                                "Salmone cotto al forno*",
                                "Tonno Mediterr. Campisi*",
                                "Pollo Teriyaki",
                                "Philadelphia",
                                "Salmone affumicato"
                            ],
                            vitamine: [
                                "Alga Nori",
                                "Ananas*",
                                "Avocado*",
                                "Broccoli saltati",
                                "Carote grattugiate",
                                "Cavolo rosso",
                                "Cavolo cappuccio",
                                "Ceci",
                                "Cetrioli",
                                "Cipolla Rossa",
                                "Cipollotto",
                                "Edamame",
                                "Insalata iceberg",
                                "Insalata soia",
                                "Goma wakame"
                            ],
                            salse: [
                                "Aceto balsamico",
                                "Crema di avocado*",
                                "Maionese",
                                "Maionese Kenko*",
                                "Ponzu*",
                                "Mango Chutney*",
                                "Sale fino",
                                "Salsa soia",
                                "Salsa soia senza glutine",
                                "Salsa soia poco salata",
                                "Spicy mayo*",
                                "Tartufata*",
                                "Teriyaki*",
                                "Veganaise*",
                                "Wasabi Mayo*"
                            ],
                            toppings: [
                                "Cipolla croccante",
                                "Crispy Garlic",
                                "Jalapeno",
                                "Mandorle*",
                                "Tempura Crisps (Panko)",
                                "Wasabi Peas*",
                                "Furikake",
                                "Zenzero fresco"
                            ],
                            semi: [
                                "Sesamo",
                                "Girasole",
                                "Lino",
                                "Papavero"
                            ]
                        }
                    }
                }
            },
            en: {
                translation: {
                    nav: {
                        home: "HOME",
                        ourPoke: "OUR POKE",
                        createPoke: "CREATE YOUR POKE",
                        panini: "SANDWICHES",
                        ceviche: "CEVICHE",
                        whereWeAre: "WHERE WE ARE",
                        contacts: "CONTACTS",
                        delivery: "DELIVERY"
                    },
                    hero: {
                        title: "The \"Bespoke\" poke",
                        subtitle: "Selected ingredients. Unique compositions. Your poke, the way you want it: fresh, artisanal and tailor-made",
                        menuButton: "View our menu",
                        bitcoinDiscount: "Eat with us, 20% discount",
                        bitcoinPayment: "if you pay with Bitcoin"
                    },
                    createYourPoke: {
                        title: "Create your poke",
                        viewIngredients: "View ingredients",
                        regular: {
                            title: "Regular",
                            description: "Choice of base, 2 proteins, 4 vitamins, 1 sauce, 1 topping and 1 seeds",
                            price: "From € 11,80"
                        },
                        large: {
                            title: "Large",
                            description: "Choice of base, 3 proteins, 5 vitamins, 1 sauce, 1 topping and 1 seeds",
                            price: "From € 14,10"
                        }
                    },
                    about: {
                        title: "Not your usual poke place",
                        paragraph1: "From the sea to your bowl, we prepare every poke as if it were for a family friend. Imagine the scent of freshly cut tuna, the crunch of cucumbers picked at dawn, and that perfectly cooked rice that forms the base of our masterpieces. We're not just a poke bar, we're that place where every ingredient is chosen as if we were cooking for our loved ones.",
                        paragraph2: "Fresh vegetables that crunch under your teeth, homemade sauces that will make you lick the spoon, and that special care we put into composing each bowl - just like when you prepare something special for those you love. And yes, if you want double avocado or you're obsessed with marinated ginger, no problem: with us every poke is a personalized hug!"
                    },
                    featuredDishes: {
                        title: "Our poke bowls",
                        dishes: [
                            {
                                name: "Salmon Poke",
                                description: "Sushi rice, marinated salmon with soy sauce and sesame oil, avocado, goma wakame, edamame and sesame seeds",
                                price: "Reg. € 11,80   Large € 14,30"
                            },
                            {
                                name: "Crispy Chicken Breast",
                                description: "Sushi rice, crispy chicken breast, red onion, red cabbage, edamame, avocado and Teriyaki sauce",
                                price: "Reg. € 11,50   Large € 14,00"
                            },
                            {
                                name: "Spicy Salmon Poke",
                                description: "Sushi rice, spicy salmon, Nori seaweed, cucumber, avocado, tobiko and sesame seeds",
                                price: "Reg. € 11,80   Large € 14,30"
                            },
                            {
                                name: "Spicy Tuna",
                                description: "White rice, tuna, scallions, avocado, edamame, Nori seaweed, tobiko, sesame seeds and creamy togarashi",
                                price: "Reg. € 12,00   Large € 14,50"
                            },
                            {
                                name: "The Vegan",
                                description: "Organic pearled farro, tofu, grated carrots, avocado, soybean sprouts, goma wakame and cherry tomatoes",
                                price: "Reg. € 9,90   Large € 12,40"
                            },
                            {
                                name: "The Hawaiian",
                                description: "The ultimate poke: basmati rice, cherry tomatoes, grated carrots, broccoli, avocado, marinated salmon, hawaiian tuna, shrimp and sesame seeds (large size only)",
                                price: "Large € 15,00"
                            }
                        ]
                    },
                    panini: {
                        title: "Our seafood sandwiches",
                        sandwiches: [
                            {
                                name: "Carloforte",
                                description: "Tuna tartare with oil, soy and sesame seeds, avocado cream, burrata shreds, Campisi Conserve semi-dried cherry tomatoes and arugula",
                                price: "€ 10,50"
                            },
                            {
                                name: "Trondheim",
                                description: "Salmon tartare, buffalo mozzarella, Campisi Conserve semi-dried cherry tomatoes, lettuce leaf and zucchini and almond pesto",
                                price: "€ 10,00"
                            },
                            {
                                name: "Bergen",
                                description: "Norwegian smoked salmon, butter, lemon zest and pepper",
                                price: "€ 10,00"
                            },
                            {
                                name: "Marzamemi",
                                description: "Mediterranean tuna fillet Campisi Conserve, burrata shreds and semi-dried cherry tomatoes Campisi Conserve",
                                price: "€ 10,00"
                            },
                            {
                                name: "Cetara",
                                description: "Extra anchovy fillets Campisi Conserve, buffalo mozzarella, Cetara anchovy sauce Campisi, Pantelleria capers Campisi Conserve, Campisi semi-dried cherry tomatoes and Sicilian oregano",
                                price: "€ 9,00"
                            },
                            {
                                name: "Catania",
                                description: "Mackerel fillets Campisi Conserve, robiola cheese, Pantelleria capers Campisi and lemon slices",
                                price: "€ 9,00"
                            }
                        ]
                    },
                    ceviche: {
                        title: "Our ceviche",
                        dishes: [
                            {
                                name: "Salmon Ceviche",
                                description: "Salmon, mango, orange, mint, chili pepper, black pepper, mango purée, lime juice and ajinomoto (spicy)",
                                price: "€ 10,50"
                            },
                            {
                                name: "Tuna Ceviche",
                                description: "Tuna fillet marinated with lime juice, oil, salt, chili pepper and coriander. Served with jalapenos, red onion, cherry tomatoes and sweet potatoes (spicy)",
                                price: "€ 12,00"
                            }
                        ]
                    },
                    location: {
                        title: "Come visit us",
                        address: "Address",
                        addressText: "Via Sigieri, 10\n20135 Milan",
                        hours: "Hours",
                        hoursText: "Monday - Saturday: 11:30-15,00/18,00-22,00\nSunday: closed",
                        contacts: "Contacts",
                        phone: "Tel: (+39) 328 7053652"
                    },
                    privacy: {
                        button: "Privacy",
                        title: "Privacy Policy",
                        description: "Information about our website privacy",
                        intro: "Introduction: Bento Food srl respects the privacy of its customers and is committed to protecting customers' personal data in compliance with the General Data Protection Regulation (GDPR) and applicable data protection laws.",
                        dataCollected: "Personal data collected: we collect and process the following indirect data: server logs (IP addresses, access times, browsers, etc.) and analytics data via Google Analytics",
                        dataUsage: "Use of personal data for the following purposes: website security, anonymous statistical traffic analysis, website improvement and compliance with legal obligations, all for legitimate interest.",
                        dataSharing: "Sharing of personal data: as we do not have customers' personal data, there can be no sharing thereof",
                        closeButton: "OK"
                    },
                    ingredients: {
                        title: "Available ingredients",
                        note: "* May have price supplements",
                        categories: {
                            basi: "Base",
                            proteine: "Protein",
                            vitamine: "Vitamin",
                            salse: "Sauce",
                            toppings: "Toppings",
                            semi: "Seeds"
                        },
                        items: {
                            basi: [
                                "Basmati Rice",
                                "Sushi Rice",
                                "Venere Rice (black)*",
                                "Farro*",
                                "Mixed Salad"
                            ],
                            proteine: [
                                "Hawaiian tuna",
                                "Spicy tuna",
                                "Ginger Chicken",
                                "Crispy Chicken",
                                "Tofu",
                                "Marinated Salmon",
                                "Raw Salmon",
                                "Spicy salmon",
                                "Cooked Shrimp*",
                                "Campisi preserved mackerel fillets",
                                "Baked salmon fillet*",
                                "Campisi Preserved Tuna*",
                                "Teriyaki Chicken",
                                "Philadelphia Cheese",
                                "Smoked Salmon"
                            ],
                            vitamine: [
                                "Nori Seaweed",
                                "Pineapple*",
                                "Avocado*",
                                "Sautéed Broccoli",
                                "Grated Carrots",
                                "Red Cabbage",
                                "Green Cabbage",
                                "Chickpeas",
                                "Cucumber",
                                "Red Onion",
                                "Scallions",
                                "Edamame",
                                "Iceberg Salad",
                                "Soybean Sprouts",
                                "Goma wakame"
                            ],
                            salse: [
                                "Balsamic Vinegar",
                                "Avocado Cream*",
                                "Mayonnaise",
                                "Kenko Mayonnaise*",
                                "Ponzu Sauce*",
                                "Mango Chutney*",
                                "Fine Salt",
                                "Soy Sauce",
                                "Gluten-free Soy Sauce",
                                "Low-Sodium Soy Sauce",
                                "Spicy mayo*",
                                "Truffle Cream*",
                                "Teriyaki Sauce*",
                                "Veganaise*",
                                "Wasabi Mayo*"
                            ],
                            toppings: [
                                "Crispy Onion",
                                "Crispy Garlic",
                                "Jalapeno",
                                "Almonds*",
                                "Tempura Crisps (Panko)",
                                "Wasabi Peas*",
                                "Furikake",
                                "Fresh Ginger"
                            ],
                            semi: [
                                "Sesame",
                                "Sunflower",
                                "Chia",
                                "Poppy"
                            ]
                        }
                    }
                }
            }
        },
        fallbackLng: 'it',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;