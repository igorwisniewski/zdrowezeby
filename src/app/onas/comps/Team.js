// components/Team.js
'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamData = [
    {
        imageSrc: "/images/whoIam-min.jpg", // <<< PODMIEŃ ŚCIEŻKĘ DO ZDJĘCIA
        name: "Agnieszka Majk",
        role: "Higienistka Stomatologiczna"
    },
];

const TeamMemberCard = ({ imageSrc, name, role }) => {
    const cardRef = useRef(null);
    const animation = useRef(null);

    useEffect(() => {
        animation.current = gsap.to(cardRef.current, {
            scale: 1.05,
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            duration: 0.4,
            ease: 'power2.out',
            paused: true
        });
    }, []);

    const handleMouseEnter = () => animation.current.play();
    const handleMouseLeave = () => animation.current.reverse();

    return (
        // Dodajemy max-w-sm, aby karta nie rozciągała się bez sensu na szerokich ekranach
        <div
            ref={cardRef}
            className="team-card text-center bg-white/20 backdrop-blur-2xl  rounded-2xl shadow-lg overflow-hidden max-w-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative h-80">
                <Image
                    src={imageSrc}
                    alt={`Zdjęcie ${name}`}
                    fill
                    className="object-cover object-top"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                <p className="text-violet-600 font-semibold">{role}</p>
            </div>
        </div>
    );
};


const Team = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".team-header > *", {
            scrollTrigger: { trigger: container.current, start: 'top 85%' },
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8
        });

        gsap.from(".team-card", {
            scrollTrigger: { trigger: ".team-card", start: 'top 85%' },
            opacity: 0,
            y: 50,
            scale: 0.95,
            stagger: 0.2,
            duration: 0.6,
            ease: 'power2.out'
        });
    }, { scope: container });

    return (
        <section ref={container} className="bg-purple-100 min-h-screen content-center py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                <div className="team-header max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bol    d text-gray-900">Poznaj Nasz Zespół</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Specjaliści, którzy z pasją i zaangażowaniem dbają o zdrowie i piękno Twojego uśmiechu.
                    </p>
                </div>

                {/* --- TUTAJ ZNAJDUJE SIĘ POPRAWKA --- */}
                <div className="mt-16 flex flex-wrap justify-center gap-10">
                    {teamData.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            imageSrc={member.imageSrc}
                            name={member.name}
                            role={member.role}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;