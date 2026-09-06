const qgsSolutionReport = {
    badge: "Rapport de Stage - QGS Solution",
    company: "QGS SOLUTION",
    period: "JANVIER 2026 - MAI 2026",
    intro: "Stage effectué dans le cadre de ma deuxième année de bachelor informatique",
    sections: [
        {
            title: "CONTEXTE ET CADRE DE L'EXPÉRIENCE PROFESSIONNELLE",
            blocks: [
                {
                    title: "Informations générales sur le stage",
                    align: "center",
                    content: [
                        {
                            type: "text",
                            text: "Mon stage s'est déroulé au sein de l'entreprise QGS Solution selon un rythme adapté à mon calendrier académique : en demi-journées (environ 4 heures par jour) durant les périodes de cours, et en journées complètes (environ 7 heures par jour) pendant les vacances scolaires. L'ensemble de la mission a été effectué en télétravail, rythmé par au moins un point d'avancement hebdomadaire en visioconférence avec mon maître de stage.",
                        },
                        {
                            type: "text",
                            text: "J'ai réalisé ce stage en binôme avec l'un de mes camarades de promotion. Tout au long de cette expérience, nous avons collaboré étroitement et échangé de manière continue sur l'avancée de nos travaux respectifs.",
                        },
                    ],
                },
                {
                    title: "Présentation de l'entreprise",
                    align: "center",
                    content: [
                        {
                            type: "text",
                            text: "QGS Solutions est une entreprise spécialisée dans le conseil, la gestion informatique et la cybersécurité à destination des TPE, PME et indépendants. Sa mission principale consiste à simplifier le numérique pour les professionnels, à protéger leurs infrastructures contre les cybermenaces et à les accompagner dans la sécurisation et la conformité de leurs données. L'entreprise propose un éventail de services sur mesure adaptés aux enjeux informatiques actuels, recouvrant notamment :",
                        },
                        {
                            type: "list",
                            items: [
                                "L'assistance et la gestion de parc informatique",
                                "La cybersécurité et la conformité RGPD",
                                "L'intégration de solutions Cloud",
                                "La création de sites web et la sensibilisation aux risques numériques",
                            ],
                        },
                        {
                            type: "text",
                            text: "Implantée localement à Toulouse, Narbonne et Auch, QGS Solutions intervient aussi bien sur site qu'à distance. L'entreprise se distingue par une approche axée sur la proximité, la pédagogie et l'efficacité dans l'accompagnement de ses clients.",
                        },
                    ],
                },
            ],
        },
        {
            title: "COMPÉTENCES MISES EN OEUVRE ET MISSIONS RÉALISÉES",
            blocks: [
                {
                    title: "Description du rôle et des activités",
                    align: "left",
                    content: [
                        { type: "subheading", text: "Missions et tâches confiées" },
                        {
                            type: "text",
                            indent: true,
                            text: "Le projet principal confié lors de ce stage consiste en la refonte globale d'un logiciel de gestion d'entreprise vieillissant. Cet outil central intègre plusieurs modules critiques tels que la gestion des stocks, la tenue de caisse, la facturation ainsi que le suivi des fiches clients.",
                        },
                        {
                            type: "text",
                            text: "Afin de mener à bien cette modernisation, la première étape s'est concentrée sur le développement de l'interface utilisateur (front-end). En concertation avec mon binôme, nous avons mis en place une répartition des tâches par modules et par pages. Nous avons donné la priorité aux fonctionnalités fondamentales, notamment les modules d'authentification (connexion et inscription), avant d'aborder les interfaces métier du logiciel.",
                        },
                        {
                            type: "text",
                            text: "Compte tenu de la complexité technique et du périmètre fonctionnel étendu du logiciel d'origine, l'intégration front-end a constitué le cœur opérationnel de ma mission tout au long du stage.",
                        },
                        {
                            type: "text",
                            indent: true,
                            text: "Concernant la partie backend, l'objectif principal était de mettre en place une infrastructure solide et sécurisée pour alimenter la nouvelle interface.",
                        },
                        {
                            type: "text",
                            text: "Dans un premier temps, nous avons configuré le projet sur Supabase et récupéré les accès à la base de données PostgreSQL. Nous avons ensuite initialisé l'environnement Node.js et configuré Prisma. Une fois l'environnement prêt, j'ai participé à la modélisation des tables et de leurs relations dans le fichier schema.prisma, avant d'exécuter les migrations pour synchroniser la base de données. Enfin, nous avons développé la logique serveur pour l'authentification (inscription et connexion), tout en sécurisant les routes de l'application grâce à la gestion des rôles et des restrictions d'accès.",
                        },
                        { type: "subheading", text: "Environnement technique et outils" },
                        {
                            type: "text",
                            indent: true,
                            text: "Pour la gestion du projet et la collaboration en binôme, nous avons appuyé notre organisation sur deux outils complémentaires : Git (avec GitHub) pour le suivi de version, la gestion du code et le travail en branches, ainsi que Discord pour échanger sur nos tâches et débloquer rapidement les points techniques à distance.",
                        },
                        {
                            type: "text",
                            text: "Sur le plan technique, notre stack front-end repose sur Vue 3 et Nuxt 3. L'ensemble du code a été développé en TypeScript.",
                        },
                        {
                            type: "text",
                            text: "Enfin, pour la partie design et intégration, nous avons combiné Tailwind CSS avec la bibliothèque Shuriken UI. Ce choix nous a permis d'intégrer des composants prêts à l'emploi parfaitement adaptés à Nuxt tout en assurant une prise en charge native du mode sombre.",
                        },
                    ],
                },
            ],
        },
        {
            title: "BILAN PERSONNEL ET PROFESSIONNEL",
            blocks: [
                {
                    align: "left",
                    content: [
                        { type: "subheading", text: "Ressenti et retour d'expérience" },
                        {
                            type: "text",
                            text: "Travailler sur ce projet au sein de QGS Solutions a constitué une étape marquante de mon parcours académique et professionnel. C'était la première fois que j'étais confrontée à un projet applicatif d'une telle envergure.",
                        },
                        {
                            type: "text",
                            text: "L'une des principales découvertes de ce stage a été l'apprentissage du travail en collaboration continue. Travailler en binôme au quotidien, tout en étant à distance, a nécessité de développer une rigueur particulière dans notre organisation. Il a fallu apprendre à découper efficacement les tâches, à communiquer clairement sur l'avancement du code via Discord et à adopter des bonnes pratiques de versioning avec Git pour éviter les conflits lors de la fusion de nos travaux. Cette première expérience de développement collaboratif s'est révélée particulièrement stimulante et enrichissante.",
                        },
                        { type: "subheading", text: "Progression et compétences acquises" },
                        {
                            type: "text",
                            text: "Ce stage m'a permis de réaliser une montée en compétences significative, tant sur le plan technique que méthodologique :",
                        },
                        {
                            type: "list",
                            items: [
                                "Montée en compétence technique : La prise en main et la mise en pratique de technologies modernes comme Vue 3, Nuxt 3, TypeScript et l'écosystème Prisma/Supabase m'ont permis d'affirmer mes bases en développement web front-end et back-end. J'ai notamment appris à structurer une application modulaire et à concevoir une interface utilisateur responsive et dynamique.",
                                "Autonomie et résolution de problèmes : Face à l'ampleur du logiciel à moderniser, j'ai développé une meilleure capacité à analyser des besoins fonctionnels complexes et à les traduire en fonctionnalités techniques, en cherchant des solutions par moi-même ou en concertation avec mon binôme.",
                                "Gestion du temps et de l'organisation : Le rythme de mon stage m'a demandé de m'adapter régulièrement mon organisation personnelle pour maintenir un niveau de productivité constant.",
                            ],
                        },
                        { type: "subheading", text: "Progression et compétences acquises" },
                        {
                            type: "text",
                            text: "Ce stage m'a vraiment confortée dans mon choix d'aller vers le développement. C'était la première fois que je travaillais sur un projet aussi complet, et voir une application prendre forme du début à la fin en équipe m'a énormément plu.",
                        },
                        {
                            type: "text",
                            text: "Sortir de ma zone de confort avec des technologies modernes et affronter les contraintes du réel m'a donné beaucoup de confiance. Je ressors de cette expérience rassurée sur mes compétences et motivée pour poursuivre mes études dans le développement d'applications, avec des bases bien plus solides.",
                        },
                    ],
                },
            ],
        },
    ],
};

export default qgsSolutionReport;