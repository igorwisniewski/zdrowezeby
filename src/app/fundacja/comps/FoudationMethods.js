// components/FoundationMethods.js
'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Zmieniamy import na ikony w wariancie 'outline'
import { HeartIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

// Mały, reużywalny komponent dla elementu listy, aby kod był czystszy
const ListItem = ({ icon, text, className }) => (
    <li className={`flex items-start gap-x-4 ${className}`}>
        <div className="flex-none flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
            {icon}
        </div>
        <p className="pt-1.5 text-gray-700">{text}</p>
    </li>
);

const FoundationMethods = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".methods-title", { scrollTrigger: { trigger: container.current, start: 'top 85%' }, opacity: 0, y: 30 });
        gsap.from(".target-list-item", { scrollTrigger: { trigger: ".target-list-item", start: 'top 90%' }, opacity: 0, x: -30, stagger: 0.15 });
        gsap.from(".actions-list-item", { scrollTrigger: { trigger: ".actions-list-item", start: 'top 90%' }, opacity: 0, x: 30, stagger: 0.15 });
    }, { scope: container });

    return (
        <section ref={container} className="bg-white py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="methods-title text-4xl font-bold text-gray-900 text-center">
                    Docieramy tam, gdzie pomoc jest najbardziej potrzebna
                </h2>
                <div className="mt-20 grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">Dla kogo działamy?</h3>
                        <ul className="mt-8 space-y-6">
                            <ListItem className="target-list-item" icon={<HeartIcon className="w-6 h-6 text-purple-600" />} text="Dzieci z trudnym startem i bez dostępu do opieki" />
                            <ListItem className="target-list-item" icon={<HeartIcon className="w-6 h-6 text-purple-600" />} text="Osoby z niepełnosprawnościami" />
                            <ListItem className="target-list-item" icon={<HeartIcon className="w-6 h-6 text-purple-600" />} text="Seniorzy i mieszkańcy obszarów wiejskich" />
                            <ListItem className="target-list-item" icon={<HeartIcon className="w-6 h-6 text-purple-600" />} text="Rodziny wykluczone, ubogie, żyjące na marginesie systemu" />
                            <ListItem className="target-list-item" icon={<HeartIcon className="w-6 h-6 text-purple-600" />} text="Placówki edukacyjne, które chcą wprowadzać świadomą profilaktykę" />
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">Jak to robimy?</h3>
                        <ul className="mt-8 space-y-6">
                            <ListItem className="actions-list-item" icon={<QuestionMarkCircleIcon className="w-6 h-6 text-purple-600" />} text="Organizujemy wydarzenia prozdrowotne" />
                            <ListItem className="actions-list-item" icon={<QuestionMarkCircleIcon className="w-6 h-6 text-purple-600" />} text="Prowadzimy prelekcje, zajęcia edukacyjne i spotkania z ekspertami" />
                            <ListItem className="actions-list-item" icon={<QuestionMarkCircleIcon className="w-6 h-6 text-purple-600" />} text="Docieramy z pomocą w formie mobilnej" />
                            <ListItem className="actions-list-item" icon={<QuestionMarkCircleIcon className="w-6 h-6 text-purple-600" />} text="Rozwijamy sieć wsparcia i budujemy mosty między sektorami zdrowia i edukacji" />
                            <ListItem className="actions-list-item" icon={<QuestionMarkCircleIcon className="w-6 h-6 text-purple-600" />} text="Pozyskujemy środki, by móc działać coraz szerzej i skuteczniej" />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundationMethods;