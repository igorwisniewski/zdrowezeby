// components/AboutUs.js
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const container = useRef(null);

    // Twoja logika animacji GSAP z matchMedia jest świetna i pozostaje bez zmian
    useGSAP(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": function() {
                const tl = gsap.timeline({ scrollTrigger: { trigger: container.current, start: 'top 80%', toggleActions: 'play none none none' } });
                tl.from('.about-image', { xPercent: 100, opacity: 0, duration: 1, ease: 'power3.out' })
                    .from('.about-content > *', { x: -50, opacity: 0, stagger: 0.2, duration: 0.8 }, "-=0.5");
            },
            "(max-width: 767px)": function() {
                gsap.from(['.about-content', '.about-image'], { scrollTrigger: { trigger: container.current, start: 'top 90%', toggleActions: 'play none none none' }, y: 50, opacity: 0, duration: 1, stagger: 0.3, ease: 'power3.out' });
            },
        });
    }, { scope: container });

    return (
        // Używamy elastycznego paddingu zamiast min-h-screen dla lepszej responsywności
        <section ref={container} className="bg-purple-100 py-24 sm:py-32">
            {/* Ograniczamy maksymalną szerokość dla dużych ekranów */}
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">

                    {/* --- Kolumna z tekstem (50% szerokości na desktopie) --- */}
                    <div className="about-content md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Kim jesteśmy?
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Nazywam się Agnieszka Majk, jestem właścicielką gabinetu i kobietą, która kocha to, co robi.
                            Od lat pomagam pacjentom odzyskać zdrowy uśmiech i wiarę w siebie. Pracuję bezboleśnie, bez
                            pośpiechu, bez ocen, w atmosferze spokoju.
                        </p>
                    </div>

                    {/* --- Kolumna z obrazkiem (50% szerokości na desktopie) --- */}
                    <div className="about-image md:w-1/2">
                        <Image
                            src="/images/whoweare-min.jpg"
                            alt="Dentystka Agnieszka Maj z pacjentem"
                            width={1000} // Zwiększamy bazową rozdzielczość dla jakości
                            height={1000}
                            // Kluczowe klasy dla responsywności obrazka
                            className="w-full h-auto rounded-xl shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutUs;
