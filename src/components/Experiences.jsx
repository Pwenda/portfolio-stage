import React from "react";
import { Link } from "react-router-dom";

const experiences = [
    {
        title: "Stagiaire",
        company: "QGS Solution - Toulouse",
        period: "Janvier - Avril 2026",
        type: "description",
        heading: "Stage de deuxième année de Bachelor Informatique",
        description:
            "Développement d'un Saas à destination des domaines viticoles et des viticulteurs afin de les assister dans la gestion de stock et de caisse.",
        link: { label: "Voir rapport", href: "/rapport-qgs-solution" },
    },
    {
        title: "Hôtesse de caisse",
        company: "Super U - Verniolle",
        period: "Été 2025",
        type: "list",
        items: [
            "Accueil et orientation des clients en caisse.",
            "Enregistrement des articles et encaissement des paiements.",
            "Gestion de la caisse et rendu de monnaie.",
        ],
    },
    {
        title: "Restauration -Serveuse/Bar",
        company: "Auberge Pierre Bayle - Carla Bayle",
        period: "Été 2023 & 2024",
        type: "list",
        items: [
            "Accueil des clients.",
            "Prise des commandes.",
            "Service à l'assiette.",
            "Entretien des salles.",
            "Service au bar.",
        ],
    },
];

function ExperienceCard({ experience }) {
    const { title, company, period, type, heading, description, link, items } = experience;

    return (
        <div className="bg-white/[0.03] border border-white/5 rounded-3xl px-8 py-6 flex flex-col md:flex-row gap-6 md:gap-12 min-h-[140px]">
            {/* Colonne gauche : poste / entreprise / dates */}
            <div className="md:w-64 shrink-0">
                <h3 className="text-white font-medium mb-1">{title}</h3>
                <p className="text-violet-300/90 text-sm mb-2">{company}</p>
                <p className="text-neutral-500 text-xs">{period}</p>
            </div>

            {/* Colonne droite : description ou liste */}
            <div className="flex-1 flex items-center justify-between gap-6">
                {type === "description" ? (
                    <>
                        <div>
                            <p className="text-violet-300/90 text-sm font-medium mb-3">{heading}</p>
                            <p className="text-neutral-400 text-sm leading-relaxed max-w-xl">
                                {description}
                            </p>
                        </div>
                        {link && (
                            <Link
                                to={link.href}
                                className="text-sky-400 text-sm whitespace-nowrap hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        )}
                    </>
                ) : (
                    <ul className="text-neutral-400 text-sm leading-relaxed">
                        {items.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="w-full max-w-6xl mt-32">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-300 mb-16">
                Expériences
            </h2>

            <div className="flex flex-col gap-8">
                {experiences.map((experience) => (
                    <ExperienceCard key={experience.title} experience={experience} />
                ))}
            </div>
        </section>
    );
}