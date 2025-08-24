// app/fundacja/page.js


import NavDefault from "@/app/comps/nav";
import FoundationHero from "@/app/fundacja/comps/FoundationHero";
import FoundationOrigin from "@/app/fundacja/comps/FoudationOrigin";
import FoundationMethods from "@/app/fundacja/comps/FoudationMethods";
import Footer from "@/app/comps/footer";
import ScrollProgressBar from "@/app/comps/ScrollBar";
import HowToHelp from "@/app/fundacja/comps/howToHelp";
import FoundationGoals from "@/app/fundacja/comps/FoudationGoals";


export default function FoundationPage() {
    return (
        <main>
            <NavDefault />
            <ScrollProgressBar/>
            <FoundationHero />
            <FoundationOrigin />
            <FoundationGoals />
            <FoundationMethods />
            <HowToHelp/>
            <Footer />
        </main>
    );
}