import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Title from "./components/Title";
import Progress from "./components/Progress";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main >
        <Hero  />
        <Title content={"SERVICES"} />
        <Services />
        <Title content={"PROCESS"} />
        <Progress />
        <Title content={"ABOUT US"} />
        <About />
        <Title content={"CONTACT"} />
        <ContactForm/>
        <Footer/>
    </main>
  );
}
