// components/Services.js
'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SparklesIcon, ShieldCheckIcon, PaintBrushIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// Przechowywanie danych w tablicy sprawia, że kod jest czystszy
const servicesData = [
    {
        icon: <SparklesIcon className="w-12 h-12 text-purple-800" />,
        title: "Wybielanie Lampą Beyond",
        price: "1100 zł",
        description: "Jednorazowy zabieg, który przywraca zębom naturalną biel, usuwając przebarwienia po kawie, herbacie czy paleniu."
    },
    {
        icon: <ShieldCheckIcon className="w-12 h-12 text-purple-800" />,
        title: "Fluoryzacja",
        price: "350 zł",
        description: "Profesjonalne wzmocnienie szkliwa zębów za pomocą preparatów z fluorem, skutecznie chroniące przed próchnicą."
    },
    {
        icon: <PaintBrushIcon className="w-12 h-12 text-purple-800" />,
        title: "Lakowanie Zębów",
        price: "100 zł",
        description: "Zabezpieczenie bruzd i szczelin w zębach trzonowych specjalnym lakiem, co uniemożliwia rozwój bakterii."
    }
];

// Mały, reużywalny komponent karty z własną logiką hover
const ServiceCard = ({ icon, title, price, description }) => {
    const cardRef = useRef(null);
    const animation = useRef(null);

    useEffect(() => {
        animation.current = gsap.to(cardRef.current, {
            scale: 1.05,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", // Efekt "podniesienia"
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
            className="service-card bg-white p-8 rounded-xl shadow-lg flex flex-col text-center items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-4xl font-bold text-purple-800 mb-4">{price}</p>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>
            <Link href="uslugi" className="mt-6 bg-purple-800 text-gray-50 font-semibold px-5 py-2 rounded-full hover:bg-gray-50 hover:text-purple-800 transition-colors">
                Dowiedz się więcej
            </Link>
        </div>
    );
};


const Services = () => {
    const container = useRef(null);

    useGSAP(() => {
        // Animacja pojawiania się kart przy scrollu
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            y: 100,
            opacity: 0,
            stagger: 0.2, // Karty pojawiają się jedna po drugiej
            duration: 0.7,
            ease: 'power2.out'
        });
    }, { scope: container });

    return (
        <section ref={container} className="bg-purple-50 py-24 sm:py-32 content-center min-h-screen">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900">Nasze Główne Usługi</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Skupiamy się na kluczowych zabiegach, które przynoszą najlepsze efekty dla Twojego uśmiechu i zdrowia jamy ustnej.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            price={service.price}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;