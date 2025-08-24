import NavDefault from "../comps/nav";
import ScrollProgressBar from "../comps/ScrollBar";
import AboutHero from "./comps/aboutHero";
import Philosophy from "./comps/philosophy";
import Process from "./comps/process";
import Footer from "../comps/footer";
import FinalCTA from "../comps/cta";
import Team from "./comps/Team";


export default function AboutUsPage() {
    return (
        <>
            <NavDefault/>
            <ScrollProgressBar/>
        <main className="overflow-hidden">
            <AboutHero/>
            <Philosophy/>
            <Process/>
            <Team/>
            <FinalCTA/>
        </main>
            <Footer/>
        </>
    );
}