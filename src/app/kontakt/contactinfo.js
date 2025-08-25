// components/ContactInfo.js
'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

// --- ZMIANA TUTAJ ---
// Dodajemy klasy stylizujące bezpośrednio do komponentów ikon
const infoData = [
    {
        icon: <PhoneIcon className="h-10 w-10 text-purple-700" />,
        text: "+48 792 604 304",
        href: "tel:+48792604304"
    },
    {
        icon: <EnvelopeIcon className="h-10 w-10 text-purple-700" />,
        text: "kontakt@zdrowyusmiech.pl",
        href: "mailto:kontakt@zdrowyusmiech.pl"
    },
    {
        icon: <MapPinIcon className="h-10 w-10 text-purple-700" />,
        text: "Goworowska 37B, 07-410 Ostrołęka",
        href: "http://googleusercontent.com/maps.google.com/3"
    },
];

const ContactInfo = () => {

    return (
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[80%] m-auto mb-5 mt-5" id="telefon">
            {infoData.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-card block bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-200 text-center hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                    {/* Ten div teraz tylko centruje ikonę, która ma już własne style */}
                    <div className="mx-auto flex h-12 w-12 items-center justify-center ">
                        {item.icon}
                    </div>
                    <p className="mt-6 font-semibold text-purple-800 text-lg">
                        {item.text}
                    </p>
                </a>
            ))}
        </div>
    );
};

export default ContactInfo;