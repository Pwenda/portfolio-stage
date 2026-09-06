import React from "react";

const formations = [
    {
        title: "Bachelor Informatique",
        school: "Toulouse Ynov Campus",
        period: "Sept. 2024  •  Present",
    },
    {
        title: "1er années de Licence Langues Étrangères Appliquées",
        school: "Université Toulouse Jean Jaurès",
        period: "Sept. 2023  -  Juin 2024",
    },
    {
        title: "Baccalauréat Général",
        school: "Lycée Pyrène, Pamiers",
        period: "Sept 2020  -  Juin 2023",
    },
];

function FormationCard({ title, school, period }) {
    return (
        <div className="border border-white/10 rounded-3xl px-8 py-6">
            <h3 className="text-white font-medium mb-1">{title}</h3>
            <p className="text-violet-300/90 text-sm mb-2">{school}</p>
            <p className="text-neutral-500 text-xs">{period}</p>
        </div>
    );
}

export default function Formations() {
    return (
        <section id="formations" className="w-full max-w-6xl mt-32">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-300 mb-16">
                Formations
            </h2>

            <div className="flex flex-col gap-8 max-w-3xl mx-auto">
                {formations.map((formation) => (
                    <FormationCard key={formation.title} {...formation} />
                ))}
            </div>
        </section>
    );
}