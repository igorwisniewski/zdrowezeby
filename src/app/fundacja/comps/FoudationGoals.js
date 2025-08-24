// components/FoundationGoals.js
'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const goalsData = [
    { number: 1, text: "Edukacja prozdrowotna w szkołach, przedszkolach i placówkach opiekuńczych" },
    { number: 2, text: "Organizacja programów profilaktycznych" },
    { number: 3, text: "Wsparcie osób z niepełnosprawnościami i ich rodzin w kryzysie bezdomności" },
    { number: 4, text: "Kampanie społeczne uświadamiające, jak ważne jest zdrowie jamy ustnej" },
    { number: 5, text: "Szkolenia i warsztaty dla dzieci, młodzieży, nauczycieli i rodziców" },
    { number: 6, text: "Współpraca z lekarzami, specjalistami i medycznymi" },
    { number: 7, text: "Promocja zdrowia i wdrażanie innowacji w profilaktyce" },
    { number: 8, text: "Budowanie sieci wolontariatu i bliskiej współpracy na pożytku publicznego" },
];

const GoalCard = ({ number, text }) => (
    <div className="goal-card bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <span className="text-4xl font-bold text-purple-700">{String(number).padStart(2, '0')}</span>
        <p className="mt-2 font-semibold text-gray-800">{text}</p>
    </div>
);

const FoundationGoals = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".section-title", { scrollTrigger: { trigger: container.current, start: 'top 85%' }, opacity: 0, y: 30 });
        gsap.from(".goal-card", {
            scrollTrigger: { trigger: ".goal-card", start: 'top 85%' },
            opacity: 0,
            y: 50,
            scale: 0.95,
            stagger: 0.1,
            ease: 'power3.out'
        });
    }, { scope: container });

    return (
        <section ref={container} className="bg-purple-100 py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="section-title text-4xl font-bold text-gray-900 text-center">Nasze kluczowe cele:</h2>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {goalsData.map(goal => <GoalCard key={goal.number} {...goal} />)}
                </div>
            </div>
        </section>
    );
};

export default FoundationGoals;