import { Metadata } from 'next';
import Link from 'next/link';
import { BuildingOfficeIcon, CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline';
import NavDefault from "@/app/comps/nav";

export const metadata: Metadata = {
    title: 'Regulamin Organizacyjny | Magia Zdrowego Uśmiechu',
    description: 'Regulamin organizacyjny gabinetu Magia Zdrowego Uśmiechu. Zasady funkcjonowania, prawa pacjenta i cennik dokumentacji.',
};

const RegulationsPage = () => {
    // Data wejścia w życie lub ostatniej aktualizacji
    const effectiveDate = "10 lutego 2026";

    return (
        <div>
            <NavDefault/>
            <main className="bg-white py-16 sm:py-24 text-black">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Regulamin Organizacyjny
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        Poniższy dokument określa zasady funkcjonowania podmiotu leczniczego <strong>Magia Zdrowego Uśmiechu</strong>, w tym prawa i obowiązki pacjentów oraz organizację procesu udzielania świadczeń.
                    </p>

                    <div className="prose prose-lg prose-gray mt-14">

                        {/* SEKCJA 1 */}
                        <h2 id="podstawy-prawne">§ 1. Podstawy prawne funkcjonowania</h2>
                        <p>
                            Magia Zdrowego Uśmiechu Gabinet Stomatologiczny Agnieszka Gąska działa na podstawie obowiązujących aktów prawnych, w tym w szczególności:
                        </p>
                        <ul>
                            <li>Ustawy z dnia 15.04.2011 r. o działalności leczniczej (Dz.U. z 2021 r. poz. 711 ze zm.) i aktów wykonawczych do tej ustawy,</li>
                            <li>Ustawy z dnia 6.11.2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta (Dz.U. z 2020 r. poz. 849 ze zm.).</li>
                        </ul>

                        {/* SEKCJA 2 */}
                        <h2 id="postanowienia-ogolne">§ 2. Postanowienia ogólne</h2>
                        <p>Niniejszy regulamin określa:</p>
                        <ul>
                            <li>Cele i zadania Magia Zdrowego Uśmiechu Gabinet Stomatologiczny Agnieszka Gąska,</li>
                            <li>Przebieg procesu udzielania świadczeń zdrowotnych,</li>
                            <li>Warunki współdziałania z innymi zakładami opieki zdrowotnej w zakresie zapewnienia prawidłowości diagnostyki, leczenia pacjentów i ciągłości postępowania,</li>
                            <li>Prawa i obowiązki pacjenta,</li>
                            <li>Wysokość opłaty za udostępnianie dokumentacji medycznej.</li>
                        </ul>

                        {/* SEKCJA 3 */}
                        <h2 id="cele-i-zadania">§ 3. Cele i zadania</h2>
                        <p>
                            1. Podstawowym celem Magia Zdrowego Uśmiechu Gabinet Stomatologiczny Agnieszka Gąska jest udzielanie świadczeń zdrowotnych przez osoby do tego uprawnione na podstawie przepisów prawa.
                        </p>
                        <p>2. Do podstawowych zadań należy:</p>
                        <ul>
                            <li>Prognozowanie i organizowanie działalności profilaktyczno-leczniczej w zakresie stomatologii,</li>
                            <li>Udzielanie odpłatnych świadczeń medycznych z zakresu stomatologii dla pacjentów,</li>
                            <li>Udzielanie indywidualnych porad i konsultacji,</li>
                            <li>Organizowanie i prowadzenie oświaty zdrowotnej w reprezentowanej specjalności,</li>
                            <li>Współdziałanie z innymi jednostkami organizacyjnymi służby zdrowia, szkołami, zakładami pracy, organizacjami i stowarzyszeniami.</li>
                        </ul>

                        {/* SEKCJA 4 i 5 */}
                        <h2 id="przebieg-swiadczen">§ 4 - § 5. Przebieg procesu udzielania świadczeń</h2>
                        <p>
                            Magia Zdrowego Uśmiechu organizuje świadczenia z zakresu leczenia stomatologicznego w sposób zapewniający pacjentom najdogodniejszą formę korzystania z usług.
                        </p>
                        <ul>
                            <li><strong>Rejestracja:</strong> Odbywa się osobiście (bądź przez osoby trzecie) oraz telefonicznie, z wyznaczeniem dnia i godziny wizyty.</li>
                            <li><strong>Terminy:</strong> Świadczenia udzielane są w dniu zgłoszenia lub w terminie uzgodnionym z pacjentem.</li>
                            <li><strong>NFZ:</strong> Gabinet nie udziela bezpłatnych świadczeń w ramach kontraktu z NFZ (w sytuacji braku kontraktu).</li>
                            <li><strong>Skierowania:</strong> Pacjenci nie muszą posiadać skierowań, mogą jednak okazać skierowanie od innego lekarza.</li>
                            <li><strong>Badania dodatkowe:</strong> W razie potrzeby lekarze kierują pacjentów na wymagane badania radiologiczne, laboratoryjne oraz konsultacje specjalistyczne.</li>
                        </ul>

                        {/* SEKCJA 6 */}
                        <h2 id="dokumentacja">§ 6. Dokumentacja medyczna i współdziałanie</h2>
                        <p>
                            Gabinet prowadzi, przechowuje i udostępnia dokumentację medyczną zgodnie z przepisami prawa. Udostępnianie dokumentacji podmiotom uprawnionym następuje w trybie zapewniającym zachowanie poufności i ochrony danych osobowych (RODO).
                        </p>

                        {/* SEKCJA 7 i 8 - Wyróżniona sekcja Kierownika (w stylu Administratora z Polityki) */}
                        <h2 id="organizacja">§ 7 - § 8. Organizacja i Kierownictwo</h2>
                        <p>Do podstawowych zadań należy udzielanie odpłatnych świadczeń stomatologicznych.</p>

                        <div className="my-6 rounded-lg border border-amber-300 bg-amber-50 p-6 not-prose">
                            <div className="flex items-center gap-x-3">
                                <UserIcon className="h-7 w-7 text-amber-500" aria-hidden="true" />
                                <h3 className="text-lg font-semibold text-amber-900">Kierownik Podmiotu</h3>
                            </div>
                            <p className="mt-2 text-amber-800">
                                Podmiotem kieruje i reprezentuje go na zewnątrz Kierownik. Podejmuje on samodzielne decyzje dotyczące organizacji pracy i ponosi za nie odpowiedzialność.
                            </p>
                            <dl className="mt-4 space-y-3 text-base text-amber-800">
                                <div className="grid grid-cols-1 gap-1 sm:grid-cols-4 sm:gap-4">
                                    <dt className="font-medium text-amber-900">Obowiązki:</dt>
                                    <dd className="sm:col-span-3">Organizowanie pracy personelu, nadzór nad dyscypliną, decyzje kadrowe oraz zaopatrzenie w sprzęt i materiały.</dd>
                                </div>
                                <div className="grid grid-cols-1 gap-1 sm:grid-cols-4 sm:gap-4">
                                    <dt className="font-medium text-amber-900">Zastępstwo:</dt>
                                    <dd className="sm:col-span-3">Podczas nieobecności Kierownika zastępuje go upoważniony pracownik.</dd>
                                </div>
                            </dl>
                        </div>

                        {/* SEKCJA 9 */}
                        <h2 id="prawa-pacjenta">§ 9. Prawa i obowiązki pacjenta</h2>
                        <h3>Pacjent ma prawo do:</h3>
                        <ul>
                            <li>Poszanowania godności oraz uprzejmego traktowania przez personel,</li>
                            <li>Świadczeń wykonywanych przez wykwalifikowany personel zgodnie z wiedzą medyczną,</li>
                            <li>Rzetelnej informacji o stanie zdrowia,</li>
                            <li>Wyrażenia zgody lub odmowy leczenia po uzyskaniu informacji o metodach.</li>
                        </ul>
                        <h3>Do obowiązków pacjenta należy przestrzeganie:</h3>
                        <ul>
                            <li>Regulaminu organizacyjnego,</li>
                            <li>Zakazu palenia tytoniu i spożywania alkoholu na terenie jednostki,</li>
                            <li>Zasad higieny osobistej i bezpieczeństwa (w tym ppoż),</li>
                            <li>Zaleceń lekarza.</li>
                        </ul>
                        <p className="text-sm italic">
                            * W przypadku naruszenia praw, pacjent może złożyć skargę (ustną lub pisemną) do Kierownika.
                        </p>

                        {/* SEKCJA 10 - Cennik */}
                        <h2 id="oplaty">§ 10. Opłata za udostępnienie dokumentacji medycznej</h2>
                        <p>
                            Dokumentację udostępnia się na wniosek pacjenta lub osoby upoważnionej (do wglądu, jako kopia, odpis, na nośniku lub e-mailem).
                        </p>
                        <p><strong>Obowiązujące stawki opłat:</strong></p>
                        <ul className="list-none pl-0 space-y-2">
                            <li className="flex justify-between border-b border-gray-200 pb-2">
                                <span>Jedna strona wyciągu lub odpisu:</span>
                                <span className="font-bold">20,00 zł</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-200 pb-2">
                                <span>Jedna strona kopii (ksero):</span>
                                <span className="font-bold">1,00 zł</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-200 pb-2">
                                <span>Dokumentacja na nośniku elektronicznym:</span>
                                <span className="font-bold">5,00 zł</span>
                            </li>
                        </ul>
                        <p className="text-sm text-gray-500">
                            * Odbiór kopii następuje osobiście przez pacjenta lub osobę upoważnioną. Udostępnienie następuje niezwłocznie.
                        </p>

                        {/* SEKCJA 11 */}
                        <h2 id="koncowe">§ 11. Przepisy końcowe</h2>
                        <p>
                            Regulamin organizacyjny wchodzi w życie z dniem nadania. Zatwierdzono przez Kierownika podmiotu w Ostrołęce.
                        </p>

                        <div className="mt-8 flex items-center gap-2 text-gray-500">
                            <BuildingOfficeIcon className="h-5 w-5"/>
                            <span>Magia Zdrowego Uśmiechu, Ostrołęka</span>
                        </div>
                    </div>

                    <div className="mt-16 flex items-center justify-end gap-x-2 border-t border-gray-900/10 pt-8 text-sm text-gray-500">
                        <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
                        <span>Data wejścia w życie: {effectiveDate}</span>
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

export default RegulationsPage;