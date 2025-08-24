import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-10  z-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-2 text-purple-950"><span className="text-purple-800">Magia Zdrowego Usmiechu</span></h3>
                    <p className="text-sm">Zdrowe samopoczucie i uśmiech.</p>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Linki</h4>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/public" className="hover:underline">Strona główna</Link></li>
                        <li><Link href="/onas" className="hover:underline">O nas</Link></li>
                        <li><Link href="/uslugi" className="hover:underline">Usługi</Link></li>
                        <li><Link href="/kontakt" className="hover:underline">Kontakt</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Kontakt</h4>
                    <p className="text-sm">Goworowska 37B<br /> 07-410 Ostrołęka<br />tel: +48 792 604 304<br />email: kontakt@zdrowyusmiech.pl</p>
                </div>
            </div>
            <div className="text-center mt-8 text-xs text-gray-400">&copy; 2025 Magia Zdrowego Uśmiechu. Wszelkie prawa zastrzeżone. Stworzone przez <Link href={"https://wisstack.pl/"}>WISSTACK</Link></div>
        </footer>
    )
}