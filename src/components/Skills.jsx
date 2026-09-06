import React from "react";
import {
    SiGo,
    SiJavascript,
    SiPython,
    SiHtml5,
    SiMysql,
    SiReact,
    SiSwift,
    SiTailwindcss,
    SiGit,
    SiDocker,
    SiFlutter,
    SiSpringboot,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const languages = [
    { label: "Golang", icon: SiGo, color: "#00ADD8" },
    { label: "Javascript", icon: SiJavascript, color: "#F7DF1E" },
    { label: "Python", icon: SiPython, color: "#3776AB" },
    { label: "Java", icon: FaJava, color: "#E76F00" },
    { label: "HTML", icon: SiHtml5, color: "#E34F26" },
    { label: "SQL", icon: SiMysql, color: "#4479A1" },
];

const frameworks = [
    { label: "React JS", icon: SiReact, color: "#61DAFB" },
    { label: "SwiftUI", icon: SiSwift, color: "#F05138" },
    { label: "Tailwind css", icon: SiTailwindcss, color: "#38BDF8" },
    { label: "Git", icon: SiGit, color: "#F05032" },
    { label: "Docker", icon: SiDocker, color: "#2496ED" },
    { label: "Flutter", icon: SiFlutter, color: "#02569B" },
    { label: "SpringBoot", icon: SiSpringboot, color: "#6DB33F" },
];

function SkillItem({ label, icon: Icon, color }) {
    return (
        <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
        <Icon size={16} color={color} />
      </span>
            <span className="text-neutral-200 text-sm">{label}</span>
        </div>
    );
}

function SkillCard({ title, items }) {
    return (
        <div className="border border-white/10 rounded-2xl p-6 w-full max-w-xs">
            <h3 className="text-neutral-400 text-sm mb-6">{title}</h3>
            <div className="flex flex-col gap-5">
                {items.map((item) => (
                    <SkillItem key={item.label} {...item} />
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="competences" className="w-full max-w-6xl mt-32">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-300 mb-16">
                Compétences
            </h2>

            <div className="flex flex-wrap justify-center gap-8">
                <SkillCard title="Languages" items={languages} />
                <SkillCard title="Frameworks & Outils" items={frameworks} />
            </div>
        </section>
    );
}