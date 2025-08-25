    // components/FoundationHero.js
    'use client';
    import { useRef } from 'react';
    import Image from 'next/image';
    import { useGSAP } from '@gsap/react';
    import gsap from 'gsap';
    import Link from "next/link";

    const FoundationHero = () => {
        const container = useRef(null);

        useGSAP(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.from('.hero-text > *', { opacity: 0, y: 30, stagger: 0.2, duration: 1 })
                .from('.hero-image', { opacity: 0, x: 50, duration: 1.2 }, "-=0.8");
        }, { scope: container });

        return (
            <section ref={container} className=" overflow-hidden">
                <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="hero-text">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Budujemy lepszą przyszłość dla naszej społeczności
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Poprzez edukację i realne działania, pomagamy budować zdrowe nawyki i pewność siebie. Dołącz do serca naszej misji.
                            </p>
                            <div className="mt-10">
                                <Link href="/fundacja#next" className="bg-purple-800 text-gray-50 border-2 border-purple-800 font-bold py-3 px-8 rounded-full hover:bg-gray-50 hover:text-purple-800 transition-colors">
                                    Dowiedz się więcej
                                </Link>
                            </div>
                        </div>
                        <div className="hero-image">
                            <Image
                                src="/images/fundacje-min.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
                                alt="Agnieszka Maj - Fundacja"
                                width={600}
                                height={600}
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    export default FoundationHero;