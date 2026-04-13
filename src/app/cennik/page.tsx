import NavDefault from "@/app/comps/nav";
import Footer from "@/app/comps/footer";
import ScrollProgressBar from "@/app/comps/ScrollBar";
import CennikHero from "@/app/cennik/comps/CennikHero";

export const metadata = {
    title: "Cennik - Magia Zdrowego Uśmiechu",
    description: "Cennik usług stomatologicznych - Magia Zdrowego Uśmiechu w Ostrołęce. Sprawdź koszty chirurgii, implantologii oraz protetyki.",
};

const cennikData = [
    {
        category: "Chirurgia Stomatologiczna",
        items: [
            { name: "Usunięcie zęba (siekacze lub kły)", price: "300 zł" },
            { name: "Usunięcie zęba (przedtrzonowce)", price: "400 zł" },
            { name: "Usunięcie zęba (trzonowce)", price: "500 zł" },
            { name: "Chirurgiczna ekstrakcja zęba zatrzymanego", price: "1000 - 2000 zł*" },
            { name: "Ekstrakcja zęba mądrości (tzw. ósemki)", price: "500 - 1500 zł*" },
        ],
        footnote: "* Cena uzależniona od stopnia skomplikowania i trudności zabiegu."
    },
    {
        category: "Implantologia",
        items: [
            { name: "Wszczepienie implantu (system standardowy ICX)", price: "3000 zł" },
            { name: "Wszczepienie implantu (system premium Astra)", price: "3500 zł" },
            { name: "Kompleksowa implantacja natychmiastowa (implant + ekstrakcja + augmentacja)", price: "4000 zł" },
            { name: "Chirurgiczne odsłonięcie implantu", price: "250 zł" },
            { name: "Implant stabilizujący typu kulkowego", price: "1500 zł" },
            { name: "Przygotowanie szablonu implantologicznego", price: "700 - 1300 zł" },
            { name: "Zindywidualizowany łącznik protetyczny", price: "1000 zł" },
            { name: "Standardowy łącznik protetyczny", price: "w cenie korony" },
        ]
    },
    {
        category: "Implantoprotetyka",
        items: [
            { name: "Rozwiązanie czasowe: korona tymczasowa na implancie", price: "1500 zł" },
            { name: "Odbudowa docelowa: korona na implancie (łącznik standardowy w cenie)", price: "3200 zł" },
            { name: "Odbudowa docelowa: korona premium na implancie (łącznik standardowy w cenie)", price: "3500 zł" },
        ]
    },
    {
        category: "Protetyka Stomatologiczna",
        items: [
            { name: "Korona tymczasowa (wykonanie bezpośrednie w gabinecie)", price: "250 zł" },
            { name: "Korona tymczasowa (wykonanie laboratoryjne)", price: "600 zł" },
            { name: "Tymczasowa odbudowa protetyczna (przyklejany most AET)", price: "1600 zł" },
            { name: "Wzmocnienie zęba wkładem standardowym (włókno szklane)", price: "600 zł" },
            { name: "Wzmocnienie zęba wkładem lanym (metal)", price: "700 zł" },
            { name: "Wzmocnienie zęba wkładem estetycznym (cyrkon)", price: "800 zł" },
            { name: "Akrylowa proteza ruchoma (częściowa)", price: "2500 zł" },
            { name: "Akrylowa proteza ruchoma (całkowita)", price: "3000 zł" },
            { name: "Wysokiej klasy proteza ruchoma akrylowa premium", price: "4000 zł" },
            { name: "Wytrzymała proteza szkieletowa", price: "4000 zł" },
            { name: "Lecznicza proteza tymczasowa", price: "1000 zł" },
            { name: "Dopasowanie i podścielenie protezy (metoda bezpośrednia w ustach)", price: "200 zł" },
            { name: "Dopasowanie i podścielenie protezy (laboratoryjne)", price: "400 zł" },
            { name: "Naprawa uszkodzonej protezy (za jeden punkt, np. rysa, pęknięcie)", price: "300 zł" },
            { name: "Wzmocnienie struktury protezy siatką metalową", price: "400 zł" },
            { name: "Dostawienie dodatkowego zęba do noszonej protezy", price: "200 zł" },
            { name: "Specjalistyczna szyna relaksacyjna (twarda lub miękka)", price: "700 zł" },
            { name: "Rozluźniający deprogramator mięśniowy", price: "800 zł" },
            { name: "Estetyczna licówka z materiału kompozytowego", price: "2000 zł" },
            { name: "Wysokoestetyczna licówka pełnoceramiczna E-MAX", price: "2500 zł" },
            { name: "Endokorona na własnym zębie", price: "1000 - 1500 zł" },
            { name: "Odbudowa: korona kompozytowa na zębie własnym", price: "1500 zł" },
            { name: "Korona porcelanowa o strukturze metalowej (na zębie własnym)", price: "1800 zł" },
            { name: "Trwała korona na podbudowie z cyrkonu (na zębie własnym)", price: "2000 zł" },
            { name: "Korona estetyczna pełnoceramiczna premium E-MAX (na zębie własnym)", price: "2200 zł" },
            { name: "Cyfrowe lub woskowe projektowanie uśmiechu (wax-up za 1 punkt)", price: "100 zł" },
            { name: "Wizualizacja mock-up (przymiarka nowego uśmiechu w ustach)", price: "350 zł" },
            { name: "Bezpieczne zdejmowanie starego uzupełnienia/korony", price: "150 zł" },
            { name: "Powtórne zacementowanie elementu protetycznego (most, wkład, korona)", price: "200 zł" },
            { name: "Modyfikacja kolorystyki pracy (po zgłoszeniu do laboratorium)", price: "300 zł" },
        ]
    }
];

export default function CennikPage() {
    return (
        <main className="bg-white min-h-screen">
            <NavDefault />
            <ScrollProgressBar />
            <CennikHero />

            <div className="container mx-auto px-4 py-8 max-w-5xl">
                {/* Information about free medical records */}
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
                                <p>Informujemy, że w naszej klinice po raz pierwszy <strong>nieodpłatnie wydajemy pełną dokumentację medyczną</strong> naszym pacjentom (zgodnie z obowiązującymi przepisami oraz ustawą o prawach pacjenta).</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-12 mb-16">
                    {cennikData.map((section, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="bg-purple-900 px-6 py-4">
                                <h2 className="text-2xl font-bold text-white tracking-wide">{section.category}</h2>
                            </div>
                            <div className="p-0">
                                <table className="w-full text-left border-collapse">
                                    <tbody>
                                        {section.items.map((item, itemIdx) => (
                                            <tr 
                                                key={itemIdx} 
                                                className={`border-b border-gray-100 transition duration-150 hover:bg-purple-50 ${itemIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                                            >
                                                <td className="px-6 py-4 text-gray-800 font-medium">
                                                    {item.name}
                                                </td>
                                                <td className="px-6 py-4 text-right text-purple-700 font-bold whitespace-nowrap">
                                                    {item.price}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {section.footnote && (
                                <div className="bg-gray-50 px-6 py-3 text-sm text-gray-500 italic border-t border-gray-100">
                                    {section.footnote}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center text-sm text-gray-500 max-w-2xl mx-auto mb-16">
                    <p>
                        Powyższy cennik ma charakter informacyjny i nie stanowi oferty handlowej w rozumieniu Art. 66 par. 1 Kodeksu Cywilnego. Ostateczny koszt leczenia ustalany jest podczas konsultacji w gabinecie po zbadaniu pacjenta.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
