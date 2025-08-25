// components/Hero.js
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from "next/link";

const Hero = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from(".main-heading", { y: 50, opacity: 0, duration: 1 });
        tl.from('.sub-heading', { y: 20, opacity: 0, duration: 0.8 }, "-=0.6");
        tl.from('.hero-buttons button', {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            duration: 0.5
        }, "-=0.5");

        // Animacja dla kontenera obrazka
        gsap.from('.hero-image-container', {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.5 // lekkie opóźnienie dla lepszego efektu
        });

    }, { scope: container });

    return (
        <section ref={container} className=" min-h-screen grid items-center py-0 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="main-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Specjaliści od utrzymania zdrowego uśmiechu w Ostrołęce
                        </h1>
                        <p className="sub-heading text-gray-600 mb-8">
                            Zadbaj o swój uśmiech bez barier. Sprawdź naszą ofertę.
                        </p>
                        <div className="hero-buttons flex justify-center md:justify-start space-x-4">
                            <Link href="/kontakt#telefon" className="bg-purple-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-800 hover:border-purple-800 hover:border-2 transition-colors">
                                Zadzwoń
                            </Link>
                            <Link href="/onas" className="bg-transparent border-2 border-purple-800 text-purple-800 px-6 py-3 rounded-full font-semibold hover:bg-purple-800 hover:text-white transition-colors">
                                O nas
                            </Link>
                        </div>
                    </div>

                    {/* POPRAWIONA SEKCJA Z OBRAZKIEM */}
                    <div className="flex items-center justify-center hidden md:block">
                        {/* 1. Dodajemy 'relative' - to jest teraz kontener pozycjonujący.
                          2. Dajemy mu konkretne wymiary (np. wysokość i szerokość).
                          3. Animujemy ten kontener, a nie sam obrazek.
                        */}
                        <div className="hero-image-container relative w-full h-[80vh] m-0 md:m-auto rounded-lg overflow-hidden ">
                            <Image
                                src="/images/landingHeader-min.jpg" // Poprawiona ścieżka bez spacji
                                alt="Uśmiechnięta kobieta"
                                fill
                                className="object-cover" // object-cover wystarczy, w-full h-full jest zbędne z 'fill'
                                priority // Dodaj 'priority' dla obrazków w części "above the fold" dla lepszego SEO i szybkości
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;