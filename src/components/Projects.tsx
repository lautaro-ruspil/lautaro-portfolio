import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects, Project } from "../data/projects";
import { GithubIcon } from "./icons/SocialIcons";

type BadgeKey = "Full Stack" | "Testing" | "Frontend";

const badgeColors: Record<BadgeKey, string> = {
    "Full Stack": "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
    Testing: "bg-violet-400/10 text-violet-400 border-violet-400/20",
    Frontend: "bg-pink-400/10 text-pink-400 border-pink-400/20",
};

interface StackPillProps {
    tech: string;
}

const StackPill = ({ tech }: StackPillProps) => (
    <span className="bg-[#181818] border border-[#252525] text-neutral-400 text-xs rounded-lg px-2.5 py-1">
        {tech}
    </span>
);

interface ProjectLinksProps {
    project: Project;
    className?: string;
}

const ProjectLinks = ({ project, className = "" }: ProjectLinksProps) => (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-5 ${className}`}>
        {project.demo && (
            <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver demo de ${project.title}`}
                className="flex items-center gap-1.5 text-neutral-500 hover:text-emerald-400 text-sm transition-colors duration-200"
            >
                <ExternalLink size={13} />
                Demo
            </a>
        )}

        <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver código ${project.repoBackend ? "frontend" : ""} de ${project.title} en GitHub`}
            className="flex items-center gap-1.5 text-neutral-500 hover:text-emerald-400 text-sm transition-colors duration-200"
        >
            <GithubIcon size={13} />
            {project.repoBackend ? "Frontend" : "Código"}
        </a>

        {project.repoBackend && (
            <a
                href={project.repoBackend}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código backend de ${project.title} en GitHub`}
                className="flex items-center gap-1.5 text-neutral-500 hover:text-emerald-400 text-sm transition-colors duration-200"
            >
                <GithubIcon size={13} />
                Backend
            </a>
        )}
    </div>
);

interface CardProps {
    project: Project;
    index: number;
}

const FeaturedCard = ({ project, index }: CardProps) => (
    <motion.article
        key={project.id}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 * index }}
        className="group col-span-full bg-[#101010] border border-[#1e1e1e] rounded-2xl overflow-hidden hover:border-emerald-400/30 hover:shadow-2xl hover:shadow-emerald-400/5 transition-all duration-300"
    >
        {/* Image — full width on top, works perfectly for landscape screenshots */}
        {project.image && (
            <div className="relative w-full overflow-hidden bg-[#0a0a0a]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#101010] to-transparent pointer-events-none" />
            </div>
        )}

        {/* Content */}
        <div className="p-5 md:p-8 flex flex-col gap-6">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    {project.badge && (
                        <span
                            className={`text-xs px-2.5 py-1 rounded-full border ${badgeColors[project.badge as BadgeKey] ?? ""}`}
                        >
                            {project.badge}
                        </span>
                    )}
                    <span className="text-xs text-neutral-600 font-mono">
                        proyecto destacado
                    </span>
                </div>

                <p className="text-neutral-600 text-sm font-mono mb-2 tracking-wide">
                    {project.tagline}
                </p>

                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-5 leading-tight">
                    {project.title}
                </h3>

                <p className="text-neutral-400 text-[15px] leading-relaxed max-w-2xl">
                    {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                    <ul className="mt-5 grid md:grid-cols-2 gap-x-6 gap-y-2">
                        {project.highlights.map((h) => (
                            <li
                                key={h}
                                className="flex items-center gap-2.5 text-sm text-neutral-500"
                            >
                                <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                                {h}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div>
                {project.demoCredentials && (
                    <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#0d0d0d] border border-[#1e1e1e] rounded-xl px-3 sm:px-4 py-2.5 mb-5 flex-wrap">
                        <span className="text-emerald-400/60 text-xs font-mono">
                            demo
                        </span>
                        <span className="text-neutral-600 text-xs font-mono">
                            {project.demoCredentials.user}
                        </span>
                        <span className="text-neutral-700 text-[10px]">
                            ·
                        </span>
                        <span className="text-neutral-600 text-xs font-mono">
                            {project.demoCredentials.pass}
                        </span>
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                        <StackPill key={tech} tech={tech} />
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-5 border-t border-[#1a1a1a]">
                    <ProjectLinks project={project} />

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm:ml-auto flex items-center gap-2 bg-emerald-400 text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-300 transition-colors duration-200"
                        >
                            Ver en vivo
                            <ArrowUpRight size={14} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    </motion.article>
);

const RegularCard = ({ project, index }: CardProps) => (
    <motion.article
        key={project.id}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 * index }}
        className="group bg-[#101010] border border-[#1e1e1e] rounded-2xl overflow-hidden hover:border-emerald-400/25 hover:shadow-xl hover:shadow-emerald-400/5 transition-all duration-300 flex flex-col"
    >
        <div className="w-full h-44 overflow-hidden bg-[#141414] relative flex-shrink-0">
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <span className="text-neutral-700 font-display text-base">
                        {project.title}
                    </span>
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent opacity-40 pointer-events-none" />

            {project.badge && (
                <span
                    className={`absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full border backdrop-blur-sm ${badgeColors[project.badge as BadgeKey] ?? ""}`}
                >
                    {project.badge}
                </span>
            )}
        </div>

        <div className="p-5 flex flex-col flex-1">
            <p className="text-neutral-600 text-xs font-mono mb-1 tracking-wide">
                {project.tagline}
            </p>

            <h3 className="text-white font-semibold text-base leading-tight mb-3">
                {project.title}
            </h3>

            <p className="text-neutral-500 text-sm leading-relaxed">
                {project.description}
            </p>

            {project.demo && project.demoCredentials && (
                <>
                    <div className="mt-3 inline-flex items-center gap-2 bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg px-3 py-1.5">
                        <span className="text-emerald-400/60 text-[10px] font-mono">
                            demo
                        </span>

                        {project.demoCredentials.user && (
                            <span className="text-neutral-600 text-[10px] font-mono">
                                {project.demoCredentials.user}
                            </span>
                        )}

                        {project.demoCredentials.user && (
                            <span className="text-neutral-700 text-[8px]">
                                ·
                            </span>
                        )}

                        <span className="text-neutral-600 text-[10px] font-mono">
                            {project.demoCredentials.pass}
                        </span>
                    </div>

                    {project.demoLoginPath && (
                        <p className="mt-2 text-[11px] text-neutral-500 font-mono">
                            ingresar en{" "}
                            <span className="text-emerald-400">
                                {project.demoLoginPath}
                            </span>
                        </p>
                    )}
                </>
            )}

            <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                {project.stack.map((tech) => (
                    <StackPill key={tech} tech={tech} />
                ))}
            </div>

            <ProjectLinks
                project={project}
                className="pt-4 border-t border-[#1a1a1a]"
            />
        </div>
    </motion.article>
);

export default function Projects() {
    const featured = projects.filter((p) => p.featured);
    const regular = projects.filter((p) => !p.featured);

    return (
        <section id="proyectos" className="bg-[#0c0c0c] py-28">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <span className="text-emerald-400 text-sm font-mono mb-4 block tracking-wider">
                        // proyectos
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                        Lo que construí.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {featured.map((p, i) => (
                        <FeaturedCard key={p.id} project={p} index={i} />
                    ))}
                    {regular.map((p, i) => (
                        <RegularCard
                            key={p.id}
                            project={p}
                            index={i + featured.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
