// components/ServiceCard.js
'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PlusIcon } from '@heroicons/react/24/solid';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ service }) => {
    const cardRef = useRef(null);

    useGSAP(() => {
        // Prosta i elegancka animacja pojawiania się całej karty
        gsap.from(cardRef.current, {
            scrollTrigger: {
                trigger: cardRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 80,
            duration: 1,
            ease: 'power3.out'
        });
    }, { scope: cardRef });

    return (
        // Główny kontener karty - jedna, spójna całość
        <div
            ref={cardRef}
            className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden md:max-h-[60vh] w-[90%] lg:w-[85%] mx-auto mt-10"
        >
            {/* Kolumna ze zdjęciem, które wypełnia całą dostępną wysokość */}
            <div className="md:w-5/12 relative min-h-[300px] md:min-h-0 ">
                <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Złoty pasek oddzielający */}
            <div className="hidden md:block w-0.5 bg-yellow-400"></div>

            {/* Kolumna z treścią */}
            <div className="md:w-7/12 flex flex-col p-8 lg:p-12">
                <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">{service.description}</p>
                    <ul className="mt-6 space-y-3">
                        {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <PlusIcon className="w-6 h-6 text-purple-700 mr-3 mt-1 flex-none" />
                                <span className="text-gray-800 font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-4xl font-bold text-purple-950 whitespace-nowrap">
                        {service.price}
                    </p>
                    <button className="border-2 border-purple-800 bg-purple-800 text-gray-50 font-bold py-3 px-8 rounded-full w-full sm:w-auto hover:bg-gray-50 hover:text-purple-800 transition-colors">
                        Umów się
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;