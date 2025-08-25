// components/Philosophy.js
'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheckIcon, ClipboardDocumentListIcon, LightBulbIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const container = useRef(null);

    useGSAP(() => {
        const trigger = {
            trigger: container.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
        };

        gsap.from(".section-header > *", { scrollTrigger: trigger, y: 50, opacity: 0, stagger: 0.2, ease: 'power3.out' });
        gsap.from(".feature-item", { scrollTrigger: trigger, x: -50, opacity: 0, stagger: 0.3, ease: 'power3.out', delay: 0.5 });
        gsap.from(".philosophy-image", { scrollTrigger: trigger, xPercent: 50, opacity: 0, ease: 'power3.out', delay: 0.5, duration: 1 });
    }, { scope: container });

    return (
        <section ref={container} className="bg-white py-24 sm:py-32 min-h-screen content-center" id="next">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                <div className="section-header max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900">Sztuka zdrowego uśmiechu</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Nasza filozofia opiera się na przekonaniu, że każdy uśmiech zasługuje na profesjonalną opiekę, by pozostać zdrowym na całe życie. Oferujemy nie tylko fundamenty higieny, ale poczucie pewności siebie na lata.
                    </p>
                </div>
                <div className="mt-16 grid md:grid-cols-2 gap-16 items-center overflow-hidden">
                    <ul className="space-y-10">
                        {/* --- Element 1 z okrągłym tłem --- */}
                        <li className="feature-item flex gap-x-6">
                            <div className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-purple-100">
                                <ShieldCheckIcon className="h-10 w-10 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900">Profesjonalizm i Bezpieczeństwo</h3>
                                <p className="mt-2 text-gray-600">Dbamy o Twój komfort, wykonując każdy zabieg profilaktyczny przy użyciu nowoczesnego i sterylnego sprzętu.</p>
                            </div>
                        </li>
                        {/* --- Element 2 z okrągłym tłem --- */}
                        <li className="feature-item flex gap-x-6">
                            <div className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-purple-100">
                                <ClipboardDocumentListIcon className="h-10 w-10 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900">Indywidualny Plan Profilaktyki</h3>
                                <p className="mt-2 text-gray-600">Tworzymy w pełni spersonalizowany Plan Higieny, idealnie dopasowany do unikalnych potrzeb Twojego uśmiechu i stylu życia.</p>
                            </div>
                        </li>
                        {/* --- Element 3 z okrągłym tłem --- */}
                        <li className="feature-item flex gap-x-6">
                            <div className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-purple-100">
                                <LightBulbIcon className="h-10 w-10 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900">Nowoczesna Technologia i Edukacja</h3>
                                <p className="mt-2 text-gray-600">Łączymy nowoczesne metody profilaktyki z profesjonalną edukacją pacjenta, by efekty idealnej higieny utrzymywały się jak najdłużej.</p>
                            </div>
                        </li>
                    </ul>
                    <div className="philosophy-image">
                        <Image src="/images/gabinet-min.jpg" alt="Gabinet stomatologiczny" width={600} height={600} className="rounded-xl shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;