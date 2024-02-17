import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Title from "./components/Title";
import Progress from "./components/Progress";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Title content={"SERVICES"}/>
      <Services/>
      <Title content={"PROCESS"}/>
      <Progress/>
    </main>
  );
}
