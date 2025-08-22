// components/Stats.js
'use client';

import { useRef, useEffect } from 'react'; // Dodajemy useEffect
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClockIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

// --- ZMODYFIKOWANY KOMPONENT StatCard ---
const StatCard = ({ icon, value, text, unit }) => {
    const cardRef = useRef(null);
    const animation = useRef(null);

    // Używamy useEffect do stworzenia animacji hover tylko raz
    useEffect(() => {
        // Tworzymy animację, która jest domyślnie wstrzymana (paused)
        animation.current = gsap.to(cardRef.current, {
            scale: 1.05, // Powiększenie karty
            duration: 0.3,
            ease: 'power1.inOut',
            paused: true
        });
    }, []);

    const handleMouseEnter = () => {
        animation.current.play(); // Odtwarzaj animację
    };

    const handleMouseLeave = () => {
        animation.current.reverse(); // Cofaj animację
    };

    return (
        <div
            ref={cardRef}
            className="stat-card bg-white p-8 rounded-xl shadow-xl border-purple-800 border-1 text-center transition-transform" // Dajemy ładniejszy 'rounded-xl'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="text-purple-800 w-16 h-16 mx-auto mb-4">{icon}</div>
            <p className="text-5xl font-bold text-gray-800">
                <span className="counter" data-value={value}>{0}</span>{unit}
            </p>
            <p className="text-gray-500 mt-2">{text}</p>
        </div>
    );
};


const Stats = () => {
    const container = useRef(null);

    // Animacje wjeżdżania i licznika zostają bez zmian
    useGSAP(() => {
        gsap.from('.stat-card', {
            scrollTrigger: { trigger: container.current, start: 'top 85%' },
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 0.7,
            ease: 'power2.out'
        });

        gsap.utils.toArray('.counter').forEach(counter => {
            const endValue = counter.getAttribute('data-value');
            gsap.to(counter, {
                innerText: endValue,
                duration: 2,
                snap: { innerText: 1 },
                scrollTrigger: { trigger: counter, start: 'top 90%' }
            });
        });
    }, { scope: container });

    return (
        // Ulepszona stylistyka sekcji dla spójności
        <section ref={container} className="bg-white py-24 sm:py-32 content-center min-h-screen">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-10">
                    Niech liczby same przemówią
                    <hr className="text-yellow-500 bg-yellow-500 m-auto w-[10%] text-xxl h-1 rounded-full mt-2"/>
                </h2>

                {/* Zmieniamy grida, aby był bardziej responsywny na mniejszych ekranach */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <StatCard icon={<ClockIcon />} value={15} unit="+" text="Lat doświadczenia" />
                    <StatCard icon={<UserGroupIcon />} value={300} unit="+" text="Wykonanych zabiegów" />
                    <StatCard icon={<StarIcon />} value={5} unit="/5" text="Ocena pacjentów" />
                </div>
            </div>
        </section>
    );
}

export default Stats;