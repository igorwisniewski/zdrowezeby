// components/HowToHelp.js
'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BanknotesIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const helpOptions = [
    { icon: <BanknotesIcon className="h-8 w-8 text-purple-600" />, title: "Przekaż darowiznę", description: "Każda złotówka to realna pomoc." },
    { icon: <UserGroupIcon className="h-8 w-8 text-purple-600" />, title: "Zostań partnerem", description: "Razem możemy stworzyć systemową zmianę." },
    { icon: <HeartIcon className="h-8 w-8 text-purple-600" />, title: "Zostań wolontariuszem", description: "Podziel się swoim czasem i pasją." },
];

const HowToHelp = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
        // Osobna animacja dla zdjęcia i tekstu pod nim
        tl.from(['.portrait-image', '.portrait-text'], { opacity: 0, x: -50, duration: 1, ease: 'power3.out', stagger: 0.2 })
            .from('.help-content > *', { opacity: 0, x: 50, stagger: 0.15, duration: 0.8 }, "-=0.8");
    }, { scope: container });

    return (
        <section ref={container} className="bg-purple-50 py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* --- POPRAWIONA KOLUMNA ZE ZDJĘCIEM --- */}
                    <div className="text-center">
                        <Image
                            src="/images/howcanuhelp-min.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
                            alt="Agnieszka Maj - Fundacja"
                            width={800} // Używamy naturalnych proporcji
                            height={1000}
                            // Usuwamy białe tło, dodajemy border i cień bezpośrednio do zdjęcia
                            className="portrait-image w-full h-auto rounded-2xl border-2 border-purple-200 shadow-xl"
                        />
                        <div className="portrait-text mt-6">
                            <h3 className="text-2xl font-bold text-gray-900">Agnieszka Maj</h3>
                            <p className="text-purple-600 font-semibold">Nie tylko higienistka. Kobieta z misją.</p>
                        </div>
                    </div>

                    {/* Kolumna z treścią (bez zmian, już była poprawna) */}
                    <div className="help-content">
                        <h2 className="text-4xl font-bold text-gray-900">Jak możesz pomóc?</h2>
                        <ul className="mt-8 space-y-8">
                            {helpOptions.map(option => (
                                <li key={option.title} className="flex items-start gap-x-6">
                                    <div className="flex-none flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                                        {option.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">{option.title}</h4>
                                        <p className="mt-1 text-gray-600">{option.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10">
                            <button className="bg-purple-800 text-gray border-2 border-purple-800 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-50 hover:text-purple-800 transition-colors">
                                Skontaktuj się z nami
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToHelp;