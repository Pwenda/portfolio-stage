import React, { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: brancher un vrai envoi (ex: EmailJS, ou un backend/API route)
        console.log("Formulaire envoyé :", form);
    };

    return (
        <section id="contact" className="w-full max-w-4xl mt-32 mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-300 mb-12">
                Contact
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                    <label htmlFor="name" className="block text-violet-400 font-medium mb-2">
                        Nom
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="w-full bg-white/[0.04] border border-white/5 rounded-full px-6 py-4 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-400/50 transition-colors"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-violet-400 font-medium mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="w-full bg-white/[0.04] border border-white/5 rounded-full px-6 py-4 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-400/50 transition-colors"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-violet-400 font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Votre message..."
                        className="w-full bg-white/[0.04] border border-white/5 rounded-3xl px-6 py-4 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-400/50 transition-colors resize-none"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-white text-black text-sm font-medium px-8 py-3 rounded-full hover:bg-neutral-200 transition-colors"
                    >
                        Envoyer
                    </button>
                </div>
            </form>

            <p className="text-center text-neutral-600 text-xs mt-16">
                © 2026 Emma DE OLIVEIRA
            </p>
        </section>
    );
}