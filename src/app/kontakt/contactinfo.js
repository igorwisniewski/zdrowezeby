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
        <section className="py-12 md:py-20" id="kontakt">
            <div className="container mx-auto px-4">

                {/* --- SEKCJA Z INFORMACJAMI KONTAKTOWYMI --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full mx-auto">
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


            </div>
        </section>
    );
};

export default ContactSection;
