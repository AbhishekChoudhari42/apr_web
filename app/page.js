"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Title from "./components/Title";
import Progress from "./components/Progress";
import {ReactLenis} from '@studio-freight/react-lenis' 
export default function Home() {
  return (
    <main>
      <ReactLenis root>
      <Hero/>
      <Title content={"SERVICES"}/>
      <Services/>
      <Title content={"PROCESS"}/>
      <Progress/>
      <Title content={"CONTACT"}/>
      </ReactLenis>
    </main>
  );
}
