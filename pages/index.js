"use client";

import About from "@/components/About";
import { Transition } from "@/components/animation/Transition";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import TechStack from "@/components/home/TechStack";

export default function Home() {
  return (
    <Transition>
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </Transition>
  );
}
