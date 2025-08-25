// components/FoundationOrigin.js
'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FoundationOrigin = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
        tl.from('.origin-image', { opacity: 0, xPercent: -50, duration: 1, ease: 'power3.out' })
            .from('.origin-text > *', { opacity: 0, xPercent: 50, stagger: 0.2, duration: 0.8 }, "-=0.7");
    }, { scope: container });

    return (
        <section ref={container} className="bg-white py-24 sm:py-32 overflow-hidden" id="next">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="origin-image">
                        <Image
                            src="/images/fundacjaSection2-min.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
                            alt="Agnieszka Majk z pacjentką"
                            width={600}
                            height={600}
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                    <div className="origin-text">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Fundacja Magia Zdrowego Uśmiechu powstała z potrzeby działania.
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Naszą misją jest edukacja, profilaktyka, wspieranie i dawanie głosu tym, którzy zbyt często są pomijani. Bo zdrowy uśmiech to nie luksus – to podstawowe prawo każdego człowieka.
                        </p>
                        <blockquote className="mt-6 border-l-4 border-purple-500 pl-6 italic text-gray-700">
                            <p>&#34;Założyłam Fundację, bo wiem, że profilaktyka i wczesna edukacja mają moc, by odmienić czyjeś życie. By podnieść, ale też przywracać poczucie wartości, godności i wiary we własne siły.&#34;</p>
                            <footer className="mt-4 font-semibold not-italic text-gray-900">~ Agnieszka Majk</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundationOrigin;