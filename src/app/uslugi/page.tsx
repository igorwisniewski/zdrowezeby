// app/uslugi/page.js

// Dane o usługach trzymane w jednym miejscu - łatwe do zarządzania
import NavDefault from "@/app/comps/nav";
 import ServiceHero from "@/app/uslugi/comps/serviceHero";
import Footer from "@/app/comps/footer";
import ServiceCard from "@/app/uslugi/comps/serviceCard";
import ScrollProgressBar from "@/app/comps/ScrollBar";

const servicesData = [
    {
        title: "Higienizacja kompleksowa",
        description: "Zabieg profilaktyczny (scaling + piaskowanie + polerowanie + fluoryzacja), który usuwa kamień, osady i przebarwienia, wygładza powierzchnie zębów i zabezpiecza szkliwo fluoryzacją.",
        features: [
            "Usunięcie kamienia, osadów i przebarwień.",
            "Zabezpieczenie szkliwa fluoryzacją.",
            "Instruktaż prawidłowej higieny jamy ustnej."
        ],
        price: "od 350 zł",
        imageSrc: "/images/higienizacja-min.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
    },
    {
        title: "Wybielanie regeneracyjne PrevDent",
        description: "Nowoczesny system wybielania, który jednocześnie rozjaśnia zęby i regeneruje szkliwo dzięki nanohydroksyapatytowi. Idealny także dla osób z nadwrażliwością.",
        features: [
            "Jednoczesne rozjaśnianie i regeneracja szkliwa.",
            "Zawiera nanohydroksyapatyt.",
            "Bezpieczne dla osób z nadwrażliwością."
        ],
        price: "1 400 zł",
        imageSrc: "/images/wybielanie-min.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
    },
    {
        title: "Wybielanie BEYOND",
        description: "Profesjonalne wybielanie lampą BEYOND – szybki i trwały efekt rozjaśnienia nawet o kilka odcieni.",
        features: [
            "Profesjonalne wybielanie z użyciem lampy.",
            "Szybki i trwały efekt.",
            "Rozjaśnienie uśmiechu o kilka odcieni."
        ],
        price: "od 900 zł",
        imageSrc: "/images/prevdent-min.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
    },
    {
        title: "Wybielanie BLANK ONE (bankietowe)",
        description: "Ekspresowe wybielanie wykonywane często zaraz po higienizacji – dla natychmiastowego efektu bieli i blasku.",
        features: [
            "CLICK – szybkie wybielanie w kilkanaście minut.",
            "TOUCH – delikatne odświeżenie koloru.",
            "Idealne przed ważnym wydarzeniem."
        ],
        price: "od 350 zł",
        imageSrc: "/images/blancone.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
    },
    {
        title: "ICON – leczenie białych plam",
        description: "Innowacyjna metoda usuwania białych przebarwień bez borowania. ICON wzmacnia szkliwo i redukuje nadwrażliwość.",
        features: [
            "Usuwanie białych przebarwień bez borowania.",
            "Wzmocnienie struktury szkliwa.",
            "Redukcja nadwrażliwości."
        ],
        price: "od 350 zł",
        imageSrc: "/images/icon.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
    },
    {
        title: "Lakowanie zębów",
        description: "Profilaktyka próchnicy u dzieci. Lak szczelinowy zabezpiecza powierzchnię zęba przed bakteriami i osadem.",
        features: [
            "Skuteczna profilaktyka próchnicy u dzieci.",
            "Ochrona powierzchni zęba przed bakteriami.",
            "Bezbolesny i szybki zabieg."
        ],
        price: "od 150 zł",
        imageSrc: "/images/kids.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
    },
    {
        title: "Przegląd profilaktyczny",
        description: "Ocena stanu jamy ustnej – wczesne wykrycie zmian próchnicowych i chorób dziąseł.",
        features: [
            "Dokładna ocena stanu uzębienia i dziąseł.",
            "Wczesne wykrywanie próchnicy.",
            "Plan dalszego postępowania."
        ],
        price: "100 zł",
        imageSrc: "/images/obokkrzesla-min.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
    },
    {
        title: "Zniesienie nadwrażliwości",
        description: "Zabieg wzmacniający szkliwo i eliminujący ból przy zimnych, gorących i słodkich bodźcach.",
        features: [
            "Wzmocnienie i remineralizacja szkliwa.",
            "Eliminacja bólu i dyskomfortu.",
            "Szybka ulga i długotrwała ochrona."
        ],
        price: "200 zł",
        imageSrc: "/images/hyper.webp" // <<< ZMIEŃ ŚCIEŻKĘ
    },
    {
        title: "Wizyta adaptacyjna dla dzieci",
        description: "Pierwsza, przyjazna wizyta w formie zabawy – dziecko poznaje gabinet i sprzęt bez stresu.",
        features: [
            "Wizyta w formie przyjaznej zabawy.",
            "Zapoznanie dziecka z gabinetem i personelem.",
            "Budowanie pozytywnych skojarzeń ze stomatologią."
        ],
        price: "100 zł",
        imageSrc: "/images/kids-min.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
    }
];
export default function ServicesPage() {
    return (
        <main className="bg-white">
            <NavDefault />
            <ScrollProgressBar/>
            <ServiceHero />

            {servicesData.map((service, index) => (
                <ServiceCard
                    key={index}
                    service={service}
                />
            ))}
            <div className="mb-10">

            </div>
             <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm mb-12">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-lg font-medium text-purple-800">Wydawanie dokumentacji medycznej</h3>
                            <div className="mt-2 text-md text-gray-700">
                                <p>Informujemy, że w naszej klinice <strong>nieodpłatnie wydajemy pełną dokumentację medyczną</strong> naszym pacjentom (zgodnie z obowiązującymi przepisami oraz ustawą o prawach pacjenta).</p>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </main>
    );
}
