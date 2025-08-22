// components/Benefits.js
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
    const container = useRef(null);

    useGSAP(() => {
        // Używamy matchMedia, aby mieć inne animacje na desktopie i mobile
        ScrollTrigger.matchMedia({
            // === ANIMACJE DLA DESKTOPU ===
            "(min-width: 768px)": function() {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                });
                tl.from('.benefits-image', { xPercent: -100, opacity: 0, duration: 1, ease: 'power3.out' })
                    .from('.benefits-content > *', { x: 50, opacity: 0, stagger: 0.2, duration: 0.8 }, "-=0.7");
            },

            // === BEZPIECZNE ANIMACJE DLA MOBILE ===
            "(max-width: 767px)": function() {
                gsap.from(['.benefits-image', '.benefits-content'], {
                    scrollTrigger: {
                        trigger: container.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.3,
                    ease: 'power3.out'
                });
            },
        });

    }, { scope: container });

    return (
        // Zastosowanie spójnych stylów z resztą strony
        <section ref={container} className="bg-white py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                {/* ZAMIANA GRID NA FLEXBOX */}
                {/* Używamy flex-col-reverse, aby na mobile tekst był nad obrazkiem, co poprawia czytelność */}
                <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-16 items-center">

                    {/* --- Kolumna z tekstem (50% szerokości na desktopie) --- */}
                    <div className="benefits-content md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Zdrowe zęby to nie tylko wygląd
                        </h2>
                        <h3 className="text-xl font-semibold text-purple-800 mb-6">
                            To fundament zdrowia, komfortu i pewności siebie
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            W naszym salonie profilaktyki w Ostrołęce stawiamy na kompleksowe podejście. Mocne i zdrowe zęby to podstawa zdrowia całego organizmu. Specjalistyczne zabiegi, takie jak skaling, piaskowanie zębów oraz fluoryzacja, skutecznie usunąją kamień nazębny i osady, chroniąc przed próchnicą. Regularna profilaktyka stomatologiczna zapewnia zdrowe dziąsła, świeży oddech i pozwala uniknąć w przyszłości skomplikowanego leczenia.
                        </p>
                    </div>

                    {/* --- Kolumna z obrazem (50% szerokości na desktopie) --- */}
                    <div className="benefits-image md:w-1/2">
                        <Image
                            src="/images/obokkrzesla-min.jpg" // Podmień na właściwy obrazek
                            alt="Gabinet stomatologiczny"
                            width={1000}
                            height={1000}
                            className="w-full h-auto rounded-xl shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Benefits;