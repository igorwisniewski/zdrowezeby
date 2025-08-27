// components/Testimonials.js
'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// Dane do recenzji - łatwe do edycji w jednym miejscu
const mainTestimonial = {
    quote: "Miła, profesjonalna obsługa. Ogromna wiedza. Dostałam dużo informacji, jak działa na moje szkliwo nieprawidłowe używanie sztoteczki do zębów, oraz jak działają pasty do zębów. Polecam gorąco! 🩷",
    author: "Justyna Adamczyk",
    role: "Pacjentka"
};

const googleReviews = [
    { name: "Ewelina Szczubełek-Rykowska", date: "20.08.2025", text: "Pani Agnieszka jest Bardzo miła i profesjonalna. Czyszczenie zębów u dzieci przebiegło bez stresu, w sympatycznej atmosferze. Efekt super, zdecydowanie polecam!" },
    { name: "Monika Chrzanowska", date: "19.08.2025", text: "Korzystam z usług pani Agnieszki od długiego czasu. Jest profesjonalna ,zna się na swojej pracy i utrzymuje moje ząbki w świetnym stanie :)" },
    { name: "Paulina Napiórkowska", date: "28.07.2025", text: "Serdecznie polecam. Świetne podejście do dzieci, bardzo dokładnie wszystko wytłumaczone i higienizacja brwi przeprowadzona z największą dbałością. Pani Agnieszka odczarowała strach przed pójściem do dentysty i przekonała moją ośmiolatkę do dokładniejszego mycia zębów bo lepiej zapobiegać niż leczyć." },
];

const Testimonials = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: { trigger: container.current, start: 'top 80%', toggleActions: 'play none none none' }
        });

        tl.from('.main-testimonial-image', { opacity: 0, scale: 0.9, duration: 1, ease: 'power3.out' })
            .from('.main-testimonial-quote', { opacity: 0, x: -50, duration: 1 }, "-=0.7");

        gsap.from('.google-review-card', {
            scrollTrigger: { trigger: '.google-reviews-grid', start: 'top 85%' },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }, { scope: container });

    return (
        <section ref={container} className="bg-white py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-gray-900 text-center">Recenzje Pacjentów</h2>

                {/* Główna, wyróżniona opinia */}
                <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="main-testimonial-quote relative bg-purple-800 text-white rounded-2xl p-8 lg:p-12 shadow-xl">
                        <svg className="absolute top-8 left-8 w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.33,26.55 C7.24,26.55 5.5,24.81 5.5,22.72 C5.5,20.63 7.24,18.89 9.33,18.89 C11.42,18.89 13.16,20.63 13.16,22.72 C13.16,24.81 11.42,26.55 9.33,26.55 Z M22.67,26.55 C20.58,26.55 18.84,24.81 18.84,22.72 C18.84,20.63 20.58,18.89 22.67,18.89 C24.76,18.89 26.5,20.63 26.5,22.72 C26.5,24.81 24.76,26.55 22.67,26.55 Z M12.83,17.48 L10.68,17.48 C10.68,14.18 12.83,11.58 16,10.53 L16,13.97 C14.34,14.83 12.83,16.23 12.83,17.48 Z M26.17,17.48 L24.02,17.48 C24.02,14.18 26.17,11.58 29.34,10.53 L29.34,13.97 C27.68,14.83 26.17,16.23 26.17,17.48 Z"></path>
                        </svg>
                        <p className="relative text-lg italic mt-12">{mainTestimonial.quote}</p>
                        <div className="mt-6">
                            <p className="font-bold">{mainTestimonial.author}</p>
                            <p className="text-purple-200 text-sm">{mainTestimonial.role}</p>
                        </div>
                    </div>
                    <div className="main-testimonial-image">
                        <Image
                            src="/images/obokkrzesla-min.jpg" // <<< ZMIEŃ ŚCIEŻKĘ
                            alt="Zadowolona pacjentka"
                            width={800}
                            height={800}
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>

                {/* Siatka z opiniami Google */}
                <div className="mt-24">
                    <h3 className="text-2xl font-bold text-gray-800 text-center">Opinie z Google</h3>
                    <div className="google-reviews-grid mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {googleReviews.map((review, index) => (
                            <div key={index} className="google-review-card bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-semibold text-gray-800">{review.name}</p>
                                        <p className="text-xs text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
                                </div>
                                <p className="mt-3 text-gray-700 text-sm">{review.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link href="https://share.google/0bqTKyGJlFBJsW6x9" target="_blank" rel="noopener noreferrer" className="bg-purple-800 border-2 border-purple-800 text-gray-50 font-bold py-3 px-8 rounded-full hover:bg-gray-50 hover:text-purple-800 transition-colors">
                            Zobacz wszystkie opinie
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;