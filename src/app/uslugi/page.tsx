// app/uslugi/page.js

// Dane o usługach trzymane w jednym miejscu - łatwe do zarządzania
import NavDefault from "@/app/comps/nav";
 import ServiceHero from "@/app/uslugi/comps/serviceHero";
import Footer from "@/app/comps/footer";
import ServiceCard from "@/app/uslugi/comps/serviceCard";
import ScrollProgressBar from "@/app/comps/ScrollBar";

const servicesData = [
    {
        title: "Wybielanie zębów lampą beyond",
        description: "Marzysz o lśniąco białym uśmiechu, który doda Ci pewności siebie? Nasza odpowiedź to profesjonalne wybielanie zębów przy użyciu zaawansowanej lampy Beyond...",
        features: [
            "Spektakularny efekt już po jednej wizycie.",
            "Bezpieczeństwo i komfort pod okiem specjalisty.",
            "Długotrwałe rezultaty, którymi będziesz cieszyć się przez lata."
        ],
        price: "od 1100zł",
        imageSrc: "/images/wybielanie-min.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
    },
    {
        title: "Higienizacja",
        description: "Marzysz o uczuciu idealnej czystości i zdrowym uśmiechu każdego dnia? Higienizacja to klucz do jego osiągnięcia! Zabieg jest fundamentem zdrowia i piękna Twoich zębów...",
        features: [
            "Natychmiastowy efekt lśniącej gładkości i czystości.",
            "Bezpieczeństwo i komfort pod okiem specjalisty.",
            "Długotrwałą ochrona przed próchnicą i chorobami dziąseł."
        ],
        price: "od 350zł",
        imageSrc: "/images/higienizacja-min.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
    },
    {
        title: "Lakowanie zębów",
        description: "Chcesz maksymalnie zabezpieczyć zęby swoje lub swojego dziecka przed próchnicą? Odkryj moc lakowania, czyli najskuteczniejszej metody ochrony bruzd w zębach bocznych...",
        features: [
            "Skuteczna bariera ochronna dla bakterii i cukrów.",
            "Bezpieczeństwo i komfort pod okiem specjalisty.",
            "Ochrona miejsc, których nie jest w stanie doczyścić szczoteczka."
        ],
        price: "od 100zł",
        imageSrc: "/images/lakowanie-min.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
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
            <Footer />
        </main>
    );
}