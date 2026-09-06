import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Formations from "./components/Formations";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Portfolio() {
    return (
        <div className="min-h-screen w-full bg-[#0a0a0c] text-white flex flex-col items-center px-6 pt-8">
            <Navbar />
            <Hero />
            <Skills />
            <Formations />
            <Experiences />
            <Projects />
            <Contact />
        </div>
    );
}