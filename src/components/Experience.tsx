import { motion } from "framer-motion";
import { GraduationCap, Briefcase, LucideIcon } from "lucide-react";

interface Experience {
    type: "job" | "education";
    icon: LucideIcon;
    title: string;
    org: string;
    period: string;
    description: string;
    highlights: string[];
    tags: string[];
}

const experiences: Experience[] = [
    {
        type: "job",
        icon: Briefcase,
        title: "Desarrollador Full Stack",
        org: "Proyectos propios y freelance · Remoto",
        period: "2024 – Presente",
        description:
            "Diseño y desarrollo de productos web reales deployados en producción: SaaS, dashboards y landing pages. Manejo el ciclo completo —desde la idea y el diseño hasta el deploy y el mantenimiento— con total autonomía. Trabajo con React, Astro, NestJS y Firebase según las necesidades del proyecto.",
        highlights: [
            "SaaS para barbería real (LeanCuts): turnos, fidelización con QR y panel admin",
            "SaaS de turnos médicos (Mediturn): 3 roles, reservas paso a paso y métricas",
            "Dashboard de analytics para e-commerce con gráficos interactivos en tiempo real",
        ],
        tags: ["React", "Astro", "Tailwind CSS", "NestJS", "Firebase", "MySQL"],
    },
    {
        type: "education",
        icon: GraduationCap,
        title: "Analista de Sistemas",
        org: "ISFT 130 · En curso",
        period: "2025 – Presente",
        description:
            "Tecnicatura Superior en Análisis de Sistemas. Cursando 2° año con foco en ingeniería de software, bases de datos, redes y arquitectura de sistemas.",
        highlights: [],
        tags: [
            "Ingeniería de Software",
            "Bases de Datos",
            "Arquitectura de Sistemas",
        ],
    },

    {
        type: "education",
        icon: GraduationCap,
        title: "Desarrollador Full Stack",
        org: "Cluster Tecnológico · Tandil",
        period: "2024 – 2025",
        description:
            "Formación completa en desarrollo web full stack: HTML, CSS, JavaScript, React, Node.js, bases de datos SQL y NoSQL, arquitectura de APIs REST, testing y deployment.",
        highlights: [],
        tags: ["React", "Node.js", "MySQL", "MongoDB", "REST APIs"],
    },
    {
        type: "education",
        icon: GraduationCap,
        title: "Scrum Fundamentals Certified (SFC)",
        org: "VMEdu Inc.",
        period: "2024",
        description:
            "Certificación en metodología ágil Scrum: roles, eventos, artefactos y principios del framework. Aplicación práctica en gestión de proyectos de desarrollo de software.",
        highlights: [],
        tags: ["Scrum", "Metodologías Ágiles", "Gestión de Proyectos"],
    },
];

export default function Experience() {
    return (
        <section id="experiencia" className="bg-[#080808] py-28">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <span className="text-emerald-400 text-sm font-mono mb-4 block tracking-wider">
                        // experiencia
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                        Formación y trayectoria.
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[#1e1e1e] hidden md:block" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.1 * index,
                                }}
                                className="md:pl-12 relative"
                            >
                                {/* Timeline dot */}
                                <div className="hidden md:flex absolute left-0 top-5 w-10 h-10 bg-[#141414] border border-[#222] rounded-full items-center justify-center">
                                    <exp.icon
                                        size={16}
                                        className="text-emerald-400"
                                    />
                                </div>

                                <div className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6 hover:border-emerald-400/15 transition-colors">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                        <div>
                                            <h3 className="text-white font-semibold text-lg leading-tight">
                                                {exp.title}
                                            </h3>
                                            <p className="text-neutral-500 text-sm mt-0.5">
                                                {exp.org}
                                            </p>
                                        </div>
                                        <span className="text-xs text-emerald-400 bg-emerald-400/8 border border-emerald-400/15 px-3 py-1 rounded-full font-mono whitespace-nowrap">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    {/* Highlights */}
                                    {exp.highlights.length > 0 && (
                                        <ul className="space-y-1.5 mb-4">
                                            {exp.highlights.map((h) => (
                                                <li
                                                    key={h}
                                                    className="flex items-start gap-2 text-sm text-neutral-500"
                                                >
                                                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs">
                                                        ▸
                                                    </span>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs text-neutral-500 bg-[#1a1a1a] border border-[#2a2a2a] px-2.5 py-1 rounded-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
