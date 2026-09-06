import React from "react";
import { Link } from "react-router-dom";

function BlockContent({ item }) {
    if (item.type === "subheading") {
        return (
            <h4 className="text-violet-400 font-semibold text-sm md:text-base mb-3 mt-6 first:mt-0">
                {item.text}
            </h4>
        );
    }

    if (item.type === "list") {
        return (
            <ul className="text-neutral-400 text-sm leading-relaxed mb-3 last:mb-0">
                {item.items.map((li) => (
                    <li key={li}>• {li}</li>
                ))}
            </ul>
        );
    }

    // type === "text"
    return (
        <p
            className={`text-neutral-400 text-sm leading-relaxed mb-3 last:mb-0 ${
                item.indent ? "indent-8" : ""
            }`}
        >
            {item.text}
        </p>
    );
}

function Block({ block }) {
    const align = block.align === "left" ? "text-left text-justify" : "text-center";

    return (
        <div className="bg-white/[0.03] border border-white/5 rounded-2xl px-8 py-6">
            {block.title && <h3 className="font-medium mb-4 text-center">{block.title}</h3>}
            <div className={align}>
                {block.content.map((item, i) => (
                    <BlockContent key={i} item={item} />
                ))}
            </div>
        </div>
    );
}

export default function ReportPage({ report }) {
    const { badge, company, period, intro, sections } = report;

    return (
        <div className="min-h-screen w-full bg-[#0a0a0c] text-white flex flex-col items-center px-6 pt-8 pb-24">
            {/* Barre du haut : retour + badge */}
            <div className="w-full max-w-4xl flex items-center mb-10">
                <Link
                    to="/"
                    className="text-neutral-400 hover:text-white text-sm transition-colors flex items-center gap-1"
                >
                    ‹ back
                </Link>
                <div className="flex-1 flex justify-center">
          <span className="bg-white/[0.05] border border-white/5 text-violet-300 text-xs px-4 py-2 rounded-full">
            {badge}
          </span>
                </div>
                <div className="w-10" /> {/* espace symétrique pour centrer le badge */}
            </div>

            {/* Carte en-tête */}
            <div className="w-full max-w-4xl border border-white/10 rounded-3xl px-10 py-10 text-center mb-10">
                <h1 className="text-2xl font-bold tracking-wide mb-2">{company}</h1>
                <p className="text-violet-400 text-sm font-medium mb-4">{period}</p>
                <p className="text-neutral-300">{intro}</p>
            </div>

            {/* Sections du rapport (autant qu'il y en a dans les données) */}
            <div className="w-full max-w-4xl flex flex-col gap-10">
                {sections.map((section, i) => (
                    <div
                        key={section.title || i}
                        className="bg-white/[0.02] border border-white/10 rounded-3xl px-10 py-10"
                    >
                        <h2 className="text-xl font-semibold text-center mb-8">{section.title}</h2>
                        <div className="flex flex-col gap-6">
                            {section.blocks.map((block, j) => (
                                <Block key={block.title || j} block={block} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-center text-neutral-600 text-xs mt-16">
                © 2026 Emma DE OLIVEIRA
            </p>
        </div>
    );
}