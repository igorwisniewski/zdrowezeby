import NavDefault from "@/app/comps/nav";
import Footer from "@/app/comps/footer";
import Hero from "@/app/comps/hero";
import Aboutus from "@/app/comps/aboutus";
import Stats from "@/app/comps/stats";
import Benefits from "@/app/comps/benefits";

export default function Home() {
  return (
<>
  <NavDefault/>
  <main >
    <Hero/>
    <Aboutus/>
    <Stats/>
    <Benefits/>

  </main>
  <Footer/>
</>
  );
}
