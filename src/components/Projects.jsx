import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaJava, FaGithub } from "react-icons/fa";
import { SiPhp, SiGit, SiDocker, SiPython } from "react-icons/si";

// Ajoute simplement un nouvel objet ici pour qu'il apparaisse automatiquement
// dans le carousel (les pages et les points se recalculent tout seuls).
const projects = [
    {
        title: "Sudoku",
        description:
            "Premier projet développé en Java dans le cadre de ma formation. Il met en pratique les principes fondamentaux de la programmation orientée objet, notamment l'héritage et le polymorphisme.",
        stack: [{ icon: FaJava, color: "#E76F00" }],
        repo: "https://github.com/Pwenda/sudoku",
    },
    {
        title: "Shinook",
        description:
            "Shinook est une application web PHP inspirée de l'univers d'Animal Crossing permettant de gérer une bibliothèque de jeux vidéo. Les utilisateurs peuvent parcourir un catalogue, ajouter des jeux à leur collection personnelle, collecter des trophées et personnaliser leur profil.",
        stack: [
            { icon: SiPhp, color: "#777BB4" },
            { icon: SiGit, color: "#F05032" },
            { icon: SiDocker, color: "#2496ED" },
        ],
        repo: "https://github.com/Pwenda/Shinook_Api",
    },
    {
        title: "Survival island",
        description:
            "Jeu de survie tourné vers la gestion de ressources et la prise de décision. Le joueur est immergé sur une île désolée avec un objectif précis : tenir 20 jours avant l'arrivée des secours. Chaque action influe directement sur l'état du personnage et détermine ses chances de survie.",
        stack: [{ icon: SiPython, color: "#3776AB" }],
        repo: "https://github.com/Pwenda/Project-Python",
    },
];

const ITEMS_PER_PAGE = 3;

function ProjectCard({ project }) {
    return (
        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex flex-col h-full">
            <h3 className="text-violet-400 font-semibold text-lg mb-3">{project.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed flex-1">
                {project.description}
            </p>

            <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-2">
                    {project.stack.map(({ icon: Icon, color }, i) => (
                        <span
                            key={i}
                            className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center"
                        >
              <Icon size={14} color={color} />
            </span>
                    ))}
                </div>
                <a href={project.repo} target="_blank" rel="noreferrer">
                    <FaGithub size={20} className="text-violet-400 hover:text-white transition-colors" />
                </a>
            </div>
        </div>
    );
}

export default function Projects() {
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

    const goPrev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
    const goNext = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

    const visibleProjects = projects.slice(
        page * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    return (
        <section id="projets" className="w-full max-w-6xl mt-32">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-300 mb-16">
                Projets
            </h2>

            <div className="relative flex items-center">
                {/* Flèche gauche */}
                <button
                    onClick={goPrev}
                    aria-label="Projet précédent"
                    className="hidden md:flex absolute -left-12 text-neutral-500 hover:text-white transition-colors"
                >
                    <ChevronLeft size={28} />
                </button>

                {/* Cartes visibles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>

                {/* Flèche droite */}
                <button
                    onClick={goNext}
                    aria-label="Projet suivant"
                    className="hidden md:flex absolute -right-12 text-neutral-500 hover:text-white transition-colors"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* Points de pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            aria-label={`Page ${i + 1}`}
                            className={`h-2 rounded-full transition-all ${
                                i === page ? "w-6 bg-white" : "w-2 bg-neutral-600"
                            }`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}