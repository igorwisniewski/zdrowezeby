// components/CennikHero.js
'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CennikHero = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(container.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out'
        });
    }, []);

    return (
        <section style={{background: 'url(/images/headerUslugi.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}} className=" py-20 pt-32 bg-white/30 relative">
            {/* Nakładka przyciemniająca w razie potrzeby, by tekst był czytelny, można odkomentować wg uznania */}
            <div className="absolute inset-0 bg-white/60"></div>
            <div ref={container} className="container mx-auto max-w-7xl px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-purple-900">Cennik Zabiegów</h1>
                <p className="mt-4 text-lg text-gray-800 font-medium max-w-2xl mx-auto backdrop-blur-sm rounded-lg p-2">
                    Przejrzyste zasady i wysoka jakość opieki medycznej. Zobacz orientacyjne koszty zabiegów w naszej klinice.
                </p>
            </div>
        </section>
    );
};

export default CennikHero;
