// components/ContactForm.js
'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// Importujemy ikony i komponent Link
import { CheckIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ContactForm = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('.form-card', { opacity: 0, x: -50, duration: 1 })
            .from('.map-card', { opacity: 0, x: 50, duration: 1 }, "-=0.7");
    }, { scope: container });

    return (
        <div ref={container} className="grid md:grid-cols-2 gap-10 min-h-screen content-center">
            <div className="form-card bg-white p-8 rounded-2xl shadow-xl max-w-[100%] md:max-w-[80%] m-auto mt-24 md:mt-0">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">Skontaktuj się z nami</h2>
                <form
                    action="https://formspree.io/f/YOUR_UNIQUE_CODE" // <<< WKLEJ TUTAJ SWÓJ LINK Z FORMSPREE
                    method="POST"
                    className="space-y-5"
                >
                    <div className="grid sm:grid-cols-2 gap-5 ">
                        <div>
                            <label htmlFor="name" className="font-medium text-gray-700">Imię i Nazwisko</label>
                            <input type="text" id="name" name="name" placeholder="Jan Kowalczyk" required
                                   className="mt-1 p-4 w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-gray-800"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="font-medium text-gray-700">Telefon</label>
                            <input type="tel" id="phone" name="phone" placeholder="+48 123 456 789" required
                                   className="mt-1 p-4 w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-gray-800"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" placeholder="twojemail@mail.com" required
                               className="mt-1 p-4 w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-gray-800"/>
                    </div>
                    <div>
                        <label htmlFor="topic" className="font-medium text-gray-700">Temat</label>
                        <select id="topic" name="topic"
                                className="mt-1 p-4 w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-gray-800">
                            <option>Higienizacja</option>
                            <option>Wybielanie</option>
                            <option>Lakowanie</option>
                            <option>Fundacja</option>
                            <option>Inne</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="font-medium text-gray-700">Treść</label>
                        <textarea id="message" name="message" rows="5" placeholder="Treść" required
                                  className="mt-1 p-4 w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-gray-800"></textarea>
                    </div>

                    {/* --- NOWY CUSTOMOWY CHECKBOX --- */}
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            {/* Prawdziwy, ale ukryty checkbox */}
                            <input
                                id="privacy-policy"
                                name="privacy-policy-consent"
                                type="checkbox"
                                required
                                className="peer h-4 w-4 shrink-0 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                style={{ position: 'absolute', opacity: 0, cursor: 'pointer' }}
                            />
                            {/* Widoczny, stylowany element, który udaje checkbox */}
                            <div className="flex h-5 w-5 items-center justify-center rounded border-2 border-gray-300 bg-white peer-checked:border-purple-600 peer-checked:bg-purple-600">
                                <CheckIcon className="hidden h-3 w-3 text-white peer-checked:block" />
                            </div>
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="privacy-policy" className="font-medium text-gray-700">
                                Akceptuję warunki{' '}
                                <Link href="/polityka-prywatnosci" target="_blank" className="font-semibold text-purple-600 hover:text-purple-500">
                                    polityki prywatności
                                </Link>
                                .
                            </label>
                        </div>
                    </div>
                    {/* --- KONIEC CHECKBOXA --- */}

                    <div>
                        <button type="submit"
                                className="w-full bg-purple-800 text-gray-50 border-2 border-purple-800 font-bold py-3 px-8 rounded-full hover:bg-gray-50 hover:text-purple-800 transition-colors">
                            Wyślij
                        </button>
                    </div>
                </form>
            </div>
            <div className="map-card rounded-2xl shadow-xl overflow-hidden min-h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1316.5580089059774!2d21.575451166853277!3d53.075774767798634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e41004b1a00bf%3A0xe4a7a1560f72f1d1!2sMagia%20Zdrowego%20U%C5%9Bmiechu%20-%20Agnieszka%20Majk!5e1!3m2!1spl!2spl!4v1756124017835!5m2!1spl!2spl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactForm;