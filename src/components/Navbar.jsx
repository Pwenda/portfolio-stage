import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
    { label: "compétences", href: "#competences" },
    { label: "formations", href: "#formations" },
    { label: "experience", href: "#experience" },
    { label: "projets", href: "#projets" },
    { label: "contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <nav className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-2 backdrop-blur-sm">
            <a
                href="#a-propos"
                className="bg-white/[0.06] text-white text-sm px-4 py-2 rounded-full font-medium"
            >
                à propos
            </a>

            {navLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    className="text-violet-300/90 text-sm px-4 py-2 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                    {link.label}
                </a>
            ))}

            <div className="flex items-center gap-3 pl-3 ml-1 border-l border-white/10">
                <a href="https://github.com/Pwenda" target="_blank" rel="noreferrer">
                    <FaGithub size={18} className="text-violet-300/90 hover:text-white transition-colors"/>
                </a>
                <a href="https://www.linkedin.com/in/emma-de-oliveira-94a444350/" target="_blank" rel="noreferrer">
                    <FaLinkedin size={18} className="text-violet-300/90 hover:text-white transition-colors"/>
                </a>
            </div>
        </nav>
    );
}