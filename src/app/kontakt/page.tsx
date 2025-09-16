import NavDefault from "@/app/comps/nav";
import ContactForm from "@/app/kontakt/form";
import Footer from "@/app/comps/footer";
import Contactinfo from "@/app/kontakt/contactinfo";

export default function kontakt(){
    return (
        <>
            <NavDefault/>
        <main>
            <ContactForm/>
            <Contactinfo/>
        </main>
            <Footer/>
        </>
    )
}