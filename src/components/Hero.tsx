import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 md:pt-32">
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
                    backgroundSize: "64px 64px",
                }}
            />

            {/* Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/6 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                {/* LEFT */}
                <div className="text-center md:text-left">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center md:justify-start gap-2 text-sm font-mono tracking-wider text-emerald-400 mb-5"
                    >
                        <span>Full Stack Developer</span>
                        <span className="opacity-40">·</span>
                        <span>Frontend Focus</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6"
                    >
                        Soy Lautaro Ruspil.
                        <br />
                        <span className="text-emerald-400">
                            Construyo productos web
                        </span>
                        <br />
                        de principio a fin.
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-neutral-400 text-lg max-w-xl mx-auto md:mx-0 mb-6"
                    >
                        Desarrollador full stack con foco en frontend. Diseño,
                        codifico y deployeo apps con React, TypeScript y NestJS
                        — cada proyecto que ves acá está en producción.
                    </motion.p>

                    {/* Proof line */}
                    <p className="text-xs text-neutral-500 mb-8">
                        5 apps en producción · Auth, APIs REST, dashboards ·
                        Disponible para trabajo remoto
                    </p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-3 justify-center md:justify-start"
                    >
                        <a
                            href="#proyectos"
                            aria-label="Ver mis proyectos en producción"
                            className="bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-emerald-300 transition"
                        >
                            Ver proyectos
                        </a>

                        <a
                            href="#contacto"
                            aria-label="Contactame para trabajo remoto"
                            className="border border-emerald-400/40 text-emerald-400 px-6 py-3 rounded-full font-semibold hover:bg-emerald-400/10 transition"
                        >
                            Hablemos
                        </a>

                        <a
                            href="/Lautaro-Ruspil-Desarrollador-Full-Stack-CV.pdf"
                            download
                            aria-label="Descargar CV de Lautaro Ruspil en PDF"
                            className="flex items-center gap-2 border border-neutral-700 text-neutral-300 px-5 py-3 rounded-full font-semibold hover:border-emerald-400 hover:text-white transition"
                        >
                            <Download size={14} />
                            CV
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT - IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="relative w-64 sm:w-80 h-[360px] sm:h-[420px] rounded-2xl border border-neutral-800 shadow-xl overflow-hidden">
                        <img
                            src="/hero.webp"
                            alt="Foto de Lautaro Ruspil, desarrollador full stack"
                            className="w-full h-full object-cover object-top scale-110 "
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 flex flex-col items-center"
            >
                <span className="text-xs uppercase tracking-widest">
                    scroll
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                >
                    <ArrowDown size={14} />
                </motion.div>
            </motion.div>
        </section>
    );
}
