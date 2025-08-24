// components/ServiceHero.js
'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ServiceHero = () => {
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
        <section style={{background: 'url(/images/headerUslugi.jpg)'}} className=" py-20 pt-30 bg-white/30">
            <div ref={container} className="container mx-auto max-w-7xl px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Profesjonalne Usługi</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Odkryj kluczowe zabiegi, które wykonujemy z najwyższą starannością, aby Twój uśmiech był zdrowy i piękny.
                </p>
            </div>
        </section>
    );
};

export default ServiceHero;