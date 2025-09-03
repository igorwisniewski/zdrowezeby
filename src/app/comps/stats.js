// components/Stats.js
'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClockIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
    { icon: <ClockIcon className="h-10 w-10 text-violet-600" />, value: 15, unit: "+", text: "Lat doświadczenia" },
    { icon: <UserGroupIcon className="h-10 w-10 text-violet-600" />, value: 3000, unit: "+", text: "Wykonanych zabiegów" },
    { icon: <StarIcon className="h-10 w-10 text-violet-600" />, value: 5, unit: "/5", text: "Ocena pacjentów" },
];

const StatCard = ({ icon, value, unit, text }) => {
    const cardRef = useRef(null);
    const animation = useRef(null);

    useEffect(() => {
        animation.current = gsap.to(cardRef.current, {
            scale: 1.05,
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.20)",
            duration: 0.3,
            ease: 'power1.inOut',
            paused: true
        });
    }, []);

    const handleMouseEnter = () => animation.current.play();
    const handleMouseLeave = () => animation.current.reverse();

    return (
        <div
            ref={cardRef}
            className="stat-card bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 mb-6">
                {icon}
            </div>
            <p className="text-5xl font-bold text-gray-900">
                <span className="counter" data-value={value}>0</span>{unit}
            </p>
            <p className="text-gray-500 mt-2">{text}</p>
        </div>
    );
};

const Stats = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });

        tl.from('.stat-card', {
            y: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power2.out'
        });

        gsap.utils.toArray('.counter').forEach(counter => {
            const endValue = parseInt(counter.getAttribute('data-value'), 10);
            tl.to(counter, {
                innerText: endValue,
                duration: 2,
                snap: { innerText: 1 },
                ease: 'power1.out'
            }, "<");
        });

    }, { scope: container });

    return (
        <section ref={container} className="bg-white py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900">Niech liczby same przemówią</h2>
                    <div className="mt-4 mx-auto h-1.5 w-24 bg-purple-500 rounded"></div>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {statsData.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;