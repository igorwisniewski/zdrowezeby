// Plik: /app/polityka-prywatnosci/page.tsx
// Wersja zaktualizowana o dane, poprawki i sekcję Cookies

import { Metadata } from 'next';
import Link from 'next/link';
import { PencilSquareIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import NavDefault from "@/app/comps/nav";

export const metadata: Metadata = {
    title: 'Polityka Prywatności | Magia Zdrowego Uśmiechu',
    description: 'Polityka Prywatności gabinetu Magia Zdrowego Uśmiechu. Poznaj zasady przetwarzania i ochrony Twoich danych osobowych.',
};

const PrivacyPolicyPage = () => {
    // Używamy statycznej daty, aby uniknąć problemów z renderowaniem Server/Client
    const lastUpdateDate = "25 sierpnia 2025";

    return (
        <div>
            <NavDefault/>
            <main className="bg-white py-16 sm:py-24 text-black">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Polityka Prywatności
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        Twoja prywatność jest dla nas priorytetem. Poniżej wyjaśniamy, jakie dane zbieramy i jak je chronimy w serwisie <strong>Magia Zdrowego Uśmiechu</strong>.
                    </p>

                    <div className="prose prose-lg prose-gray mt-14">
                        <h2 id="informacje-ogolne">1. Informacje ogólne</h2>
                        <p>
                            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług serwisu <strong>Magia Zdrowego Uśmiechu</strong> (dalej jako &#34;Serwis&#34;).
                        </p>

                        <h2 id="administrator">2. Administrator danych osobowych</h2>
                        <div className="my-6 rounded-lg border border-amber-300 bg-amber-50 p-6 not-prose">
                            <div className="flex items-center gap-x-3">
                                <PencilSquareIcon className="h-7 w-7 text-amber-500" aria-hidden="true" />
                                <h3 className="text-lg font-semibold text-amber-900">Dane Administratora</h3>
                            </div>
                            <dl className="mt-4 space-y-3 text-base text-amber-800">
                                <div className="grid grid-cols-1 gap-1 sm:grid-cols-4 sm:gap-4">
                                    <dt className="font-medium text-amber-900">Administrator:</dt>
                                    <dd className="sm:col-span-3">MAGIA ZDROWEGO UŚMIECHU GABINET STOMATOLOGICZNY AGNIESZKA MAJK</dd>
                                </div>
                                <div className="grid grid-cols-1 gap-1 sm:grid-cols-4 sm:gap-4">
                                    <dt className="font-medium text-amber-900">Adres:</dt>
                                    <dd className="sm:col-span-3">ul. Goworowska 37B, 07-410 Ostrołęka</dd>
                                </div>
                                <div className="grid grid-cols-1 gap-1 sm:grid-cols-4 sm:gap-4">
                                    <dt className="font-medium text-amber-900">E-mail:</dt>
                                    <dd className="sm:col-span-3">
                                        <a href="mailto:kontakt@zdrowyusmiech.pl" className="font-medium text-amber-900 underline hover:text-amber-700">
                                            kontakt@zdrowyusmiech.pl
                                        </a>
                                    </dd>
                                </div>
                                <div className="grid grid-cols-1 gap-1 sm:grid-cols-4 sm:gap-4">
                                    <dt className="font-medium text-amber-900">NIP:</dt>
                                    <dd className="sm:col-span-3">7582144024</dd>
                                </div>
                                <div className="grid grid-cols-1 gap-1 sm:grid-cols-4 sm:gap-4">
                                    <dt className="font-medium text-amber-900">REGON:</dt>
                                    <dd className="sm:col-span-3">521544478</dd>
                                </div>
                                <div className="grid grid-cols-1 gap-1 sm:grid-cols-4 sm:gap-4">
                                    <dt className="font-medium text-amber-900">Telefon:</dt>
                                    <dd className="sm:col-span-3">792 604 304</dd>
                                </div>
                            </dl>
                        </div>

                        <h2 id="cele">3. Cele i podstawy przetwarzania danych</h2>
                        <p>Administrator przetwarza dane osobowe w następujących celach:</p>
                        <ul>
                            <li>Odpowiedzi na zapytania z formularza kontaktowego (art. 6 ust. 1 lit. a RODO - zgoda).</li>
                            <li>Marketingu własnych produktów lub usług w ramach prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO).</li>
                            <li>Analizy ruchu i statystyk w Serwisie w ramach prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO).</li>
                        </ul>

                        {/* --- NOWA, ROZBUDOWANA SEKCJA O COOKIES --- */}
                        <h2 id="cookies">4. Ciasteczka (Cookies)</h2>
                        <h3>Czym są pliki cookie?</h3>
                        <p>Pliki cookie to małe pliki tekstowe, zapisywane na Twoim urządzeniu (komputerze, tablecie, smartfonie) podczas przeglądania stron internetowych. Pozwalają one Serwisowi rozpoznać Twoje urządzenie i dostosować wyświetlanie strony do Twoich preferencji.</p>
                        <h3>W jakim celu używamy cookies?</h3>
                        <ul>
                            <li><strong>Analitycznym:</strong> Używamy plików cookie od dostawców zewnętrznych, takich jak Google Analytics, aby zbierać zanonimizowane dane statystyczne o tym, jak Użytkownicy korzystają z naszego Serwisu. Pomaga nam to zrozumieć potrzeby Użytkowników i ulepszać naszą stronę.</li>
                            <li><strong>Marketingowym:</strong> Pliki cookie mogą być używane do personalizacji reklam i działań remarketingowych (np. przez Google Ads, Facebook Pixel). Pozwala nam to docierać z naszą ofertą do osób potencjalnie zainteresowanych naszymi usługami.</li>
                        </ul>
                        <h3>Jak zarządzać plikami cookie?</h3>
                        <p>Możesz zarządzać plikami cookie bezpośrednio w ustawieniach swojej przeglądarki internetowej. W każdej chwili możesz je zablokować lub usunąć. Pamiętaj jednak, że wyłączenie plików cookie może wpłynąć na funkcjonalność niektórych części naszego Serwisu.</p>

                        <h2 id="okres-przechowywania">5. Okres przechowywania danych</h2>
                        <ul>
                            <li><strong>Dane z formularza kontaktowego:</strong> do czasu wycofania zgody lub przez okres niezbędny do realizacji celu zapytania.</li>
                            <li><strong>Dane marketingowe i analityczne:</strong> do czasu wniesienia skutecznego sprzeciwu lub do momentu, gdy dane te staną się nieaktualne.</li>
                        </ul>

                        <h2 id="odbiorcy">6. Odbiorcy danych</h2>
                        <p>Odbiorcami Twoich danych mogą być nasi zaufani partnerzy, którzy przetwarzają dane na nasze zlecenie (np. dostawcy usług hostingowych, narzędzi analitycznych jak Google LLC) oraz podmioty uprawnione do tego na podstawie prawa.</p>

                        <h2 id="prawa">7. Prawa Użytkowników</h2>
                        <p>W związku z przetwarzaniem danych, przysługują Ci następujące prawa:</p>
                        <ul>
                            <li>Prawo dostępu do swoich danych oraz otrzymania ich kopii.</li>
                            <li>Prawo do sprostowania (poprawiania) swoich danych.</li>
                            <li>Prawo do usunięcia danych i ograniczenia przetwarzania.</li>
                            <li>Prawo do wniesienia sprzeciwu wobec przetwarzania.</li>
                            <li>Prawo do przenoszenia danych.</li>
                            <li>Prawo do wniesienia skargi do Prezesa UODO.</li>
                        </ul>

                        <h2 id="dobrowolnosc">8. Dobrowolność podania danych</h2>
                        <p>Podanie danych jest dobrowolne, ale niezbędne do wysłania zapytania przez formularz kontaktowy.</p>

                        <h2 id="profilowanie">9. Zautomatyzowane podejmowanie decyzji</h2>
                        <p>Twoje dane osobowe nie podlegają profilowaniu ani zautomatyzowanemu podejmowaniu decyzji.</p>

                        <h2 id="zabezpieczenia">10. Zabezpieczenie danych</h2>
                        <p>Stosujemy środki techniczne i organizacyjne, aby zapewnić bezpieczeństwo Twoich danych.</p>

                        <h2 id="zmiany">11. Zmiany w Polityce Prywatności</h2>
                        <p>Zastrzegamy sobie prawo do zmiany niniejszej Polityki. Aktualna wersja będzie zawsze dostępna na tej stronie.</p>

                        <h2 id="kontakt">12. Kontakt</h2>
                        <p>W sprawach związanych z danymi osobowymi prosimy o kontakt pod adresem e-mail: <a href="mailto:kontakt@zdrowyusmiech.pl" className="font-semibold text-sky-600 hover:text-sky-500">kontakt@zdrowyusmiech.pl</a>.</p>
                    </div>

                    <div className="mt-16 flex items-center justify-end gap-x-2 border-t border-gray-900/10 pt-8 text-sm text-gray-500">
                        <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
                        <span>Data ostatniej aktualizacji: {lastUpdateDate}</span>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/" className="rounded-md bg-gray-800 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800">
                            &larr; Wróć na stronę główną
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicyPage;