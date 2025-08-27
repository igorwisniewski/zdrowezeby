import NavDefault from "@/app/comps/nav";
import Footer from "@/app/comps/footer";
import Hero from "@/app/comps/hero";
import Aboutus from "@/app/comps/aboutus";
import Stats from "@/app/comps/stats";
import Benefits from "@/app/comps/benefits";
import FinalCTA from "@/app/comps/cta";
import ScrollProgressBar from "@/app/comps/ScrollBar";
import Services from "@/app/comps/services";
import Testimonials from "@/app/comps/Testimonials";

export default function Home() {
  return (
<>
  <NavDefault/>
  <ScrollProgressBar/>
  <main className="overflow-hidden" >
    <Hero/>
    <Aboutus/>
    <Stats/>
    <Benefits/>
    <Services/>
    <Testimonials/>
    <FinalCTA/>
  </main>
  <Footer/>
</>
  );
}
