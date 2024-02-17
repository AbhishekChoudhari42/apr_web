import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Title from "./components/Title";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Title content={"SERVICES"}/>
      <Services/>

        <section className="greydient h-screen w-full flex justify-between items-center text-white">
          dfdsfds
        </section>
    </main>
  );
}
