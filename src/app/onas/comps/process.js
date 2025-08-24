'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    { number: 1, title: 'Konsultacja i diagnostyka', description: 'Zaczynamy od dokładnej oceny stanu Twojej jamy ustnej i poznania Twoich potrzeb, aby stworzyć w pełni spersonalizowany plan działania.' },
    { number: 2, title: 'Profesjonalna higienizacja', description: 'Precyzyjnie i bezboleśnie usuwamy kamień nazębny oraz osady za pomocą skalingu i piaskowania, przywracając zębom ich naturalną czystość.' },
    { number: 3, title: 'Wzmocnienie i ochrona', description: 'Po czyszczeniu wzmacniamy Twoje szkliwo poprzez profesjonalną fluoryzację, tworząc barierę ochronną przed próchnicą i nadwrażliwością.' },
    { number: 4, title: 'Plan i edukacja na przyszłość', description: 'Otrzymujesz od nas indywidualne wskazówki dotyczące higieny domowej oraz plan wizyt kontrolnych, aby efekt zdrowego uśmiechu utrzymać na stałe.' }
];

const Process = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".process-header", { scrollTrigger: { trigger: ".process-header", start: "top 85%" }, opacity: 0, y: 50, duration: 1 });
        gsap.utils.toArray('.process-step').forEach(step => {
            gsap.from(step, {
                scrollTrigger: { trigger: step, start: 'top 85%', toggleActions: 'play none none none' },
                opacity: 0,
                y: 100,
                duration: 0.8,
                ease: 'power3.out'
            });
        });
    }, { scope: container });

    return (
        <section ref={container} className="bg-[#f8f7fa] py-24 sm:py-32">
            <div className="container mx-auto max-w-4xl px-6 lg:px-8">
                <h2 className="process-header text-4xl font-bold text-gray-900 text-center">
                    Twoja droga do trwale zdrowego uśmiechu
                </h2>
                <div className="relative mt-20">
                    {/* Linia osi czasu - jej pozycja zmienia się responsywnie */}
                    <div className="absolute top-0 h-full w-0.5 bg-gray-200 left-6 md:left-1/2 md:-ml-[1px]" aria-hidden="true"></div>

                    <div className="space-y-12">
                        {processSteps.map((step, index) => (
                            <div key={step.number} className="process-step relative">
                                {/* Kółko z numerem - jego pozycja też zmienia się responsywnie */}
                                <div className="absolute top-0 z-10 bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl left-0 md:left-1/2 md:-translate-x-1/2">
                                    {step.number}
                                </div>

                                {/* Kontener na kartę, który zarządza pozycją na desktopie */}
                                <div className={`md:flex ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {/* Karta z treścią */}
                                    <div className="pl-20 md:pl-0 md:w-1/2">
                                        <div className={`p-6 bg-white rounded-xl shadow-lg lg:p-8 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                                            <h3 className="font-bold text-lg text-purple-600 mb-2">{step.title}</h3>
                                            <p className="text-gray-600">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;