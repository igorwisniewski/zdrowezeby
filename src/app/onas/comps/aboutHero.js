// components/AboutHero.js
'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AboutHero = () => {
    const container = useRef(null);

    useGSAP(() => {
        // Efekt Ken Burns dla tła
        gsap.to(".bg-image", {
            scale: 1.1,
            duration: 10,
            ease: "power1.inOut",
        });

        // Animacja pojawiania się tekstu
        const tl = gsap.timeline();
        tl.from(".hero-title", { opacity: 0, y: 30, duration: 1 })
            .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
            .from(".hero-buttons > *", { opacity: 0, y: 20, stagger: 0.2 }, "-=0.5");

    }, { scope: container });

    return (
        <section ref={container} className="relative h-[70vh] min-h-[100vh] flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div style={{ backgroundImage: "url('/images/gabinet-min.jpg')" }} className="bg-image absolute inset-0  bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-opacity-60 bg-black/70"></div>
            </div>
            <div className="relative z-10 text-center container mx-auto px-6">
                <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight">
                    Wierzymy, że najlepsze leczenie to jego brak.
                </h1>
                <p className="hero-subtitle mt-4 max-w-2xl mx-auto text-lg text-gray-200">
                    O nas, czyli o tym, jak troska i wiedza budują zdrowie w naszym gabinecie w Ostrołęce.
                </p>
                <div className="hero-buttons mt-8 flex justify-center gap-4">
                    <button className="bg-purple-800 text-gray-50 font-bold py-3 px-8 rounded-full hover:bg-gray-50 hover:text-purple-800 transition-colors">
                        Zadzwoń
                    </button>
                        <button className="bg-transparent border-2 border-purple-800 text-gray-50 px-6 py-3 rounded-full font-semibold hover:bg-purple-800 hover:text-white transition-colors">
                            Czytaj dalej
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;