import React from "react";
// Remplace ce chemin par ta vraie photo, ex: import portrait from "../assets/portrait.jpg";
import photo from '../assets/photo.png';

export default function Hero() {
    return (
        <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
            {/* Colonne texte */}
            <div>
                <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
                    Emma De Oliveira
                </h1>

                <p className="text-neutral-400 leading-relaxed mb-4">
                    Actuellement étudiante en informatique, à la recherche d'une alternance, je
                    souhaite me spécialiser dans le développement logiciel. J'oriente mes études
                    dans ce domaine, guidée par mon désir d'apprendre et ma curiosité. En tant que
                    passionnée, j'aime participer activement aux projets et développer des
                    applications personnelles, dans le but d'augmenter continuellement en
                    compétences.
                </p>

                <p className="text-neutral-400 leading-relaxed mb-8">
                    Si vous souhaitez en apprendre plus sur mon parcours ou me contacter,
                    n'hésitez pas, vous pouvez explorer mes projets sur ce site ou télécharger mon
                    CV !
                </p>

                <a
                    href="/cv-emma-de-oliveira.pdf"
                    download
                    className="inline-block bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors"
                >
                    Télécharger mon CV
                </a>
            </div>

            {/* Colonne photo */}
            <div className="relative flex justify-center items-center">
                {/* Glow violet derrière le blob */}
                <div className="absolute w-80 h-80 bg-gradient-to-br from-violet-600/40 via-fuchsia-500/20 to-blue-500/30 blur-3xl rounded-full" />

                {/* Forme blob contenant la photo */}
                <div
                    className="relative w-80 h-80 overflow-hidden"
                    style={{ borderRadius: "71% 29% 65% 35% / 45% 51% 49% 55%" }}
                >
                    <img src={photo} alt="Emma De Oliveira" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
}