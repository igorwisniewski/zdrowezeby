// components/ContactSection.js
'use client';

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

// Dane dla kafelków z informacjami kontaktowymi
const infoData = [
    {
        icon: <PhoneIcon className="h-10 w-10 text-purple-700" />,
        text: "+48 792 604 304",
        href: "tel:+48792604304"
    },
    {
        icon: <EnvelopeIcon className="h-10 w-10 text-purple-700" />,
        text: "kontakt@magiazdrowegousmiechu.pl",
        href: "mailto:kontakt@magiazdrowegousmiechu.pl"
    },
    {
        icon: <MapPinIcon className="h-10 w-10 text-purple-700" />,
        text: "Goworowska 37B, 07-410 Ostrołęka",
        href: "https://www.google.com/maps/search/?api=1&query=Goworowska+37B,+07-410+Ostrołęka"
    },
];

const ContactSection = () => {
    return (
        <section className="py-12 md:py-20 bg-purple-50" id="kontakt">
            <div className="container mx-auto px-4">

                {/* --- SEKCJA Z INFORMACJAMI KONTAKTOWYMI --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {infoData.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-card block bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-200 text-center hover:scale-105 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                                {item.icon}
                            </div>
                            <p className="mt-6 font-semibold text-purple-800 text-lg">
                                {item.text}
                            </p>
                        </a>
                    ))}
                </div>

                {/* --- NOWA SEKCJA Z FORMULARZEM FORMSPREE --- */}
                <div className="max-w-2xl mx-auto mt-16 text-center">
                    <h2 className="text-3xl font-bold text-purple-900 sm:text-4xl mb-4">
                        Masz pytania? Napisz do nas
                    </h2>
                    <p className="text-lg text-purple-700 mb-8">
                        Wypełnij formularz, a my skontaktujemy się z Tobą tak szybko, jak to możliwe.
                    </p>
                    <form
                        action="https://formspree.io/f/mandvpwn"
                        method="POST"
                        className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-200 space-y-6 text-left"
                    >
                        {/* Pole Imię i Nazwisko */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-purple-800 mb-1">
                                Imię i nazwisko
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="block w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Jan Kowalski"
                            />
                        </div>

                        {/* Pole Adres Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-purple-800 mb-1">
                                Adres email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="block w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="twoj@email.com"
                            />
                        </div>

                        {/* Pole Wiadomość */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-purple-800 mb-1">
                                Twoja wiadomość
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                required
                                className="block w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Wpisz treść wiadomości..."
                            ></textarea>
                        </div>

                        {/* Przycisk Wyślij */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
                            >
                                Wyślij wiadomość
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
