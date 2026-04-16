import { motion } from 'framer-motion'
import { MapPin, Layers, Zap, LucideIcon } from 'lucide-react'

interface Stat {
  value: string
  label: string
  sub: string
  icon: LucideIcon
}

const stats: Stat[] = [
  {
    value: '4+',
    label: 'Apps en producción',
    sub: 'Proyectos deployados y activos',
    icon: Zap,
  },
  {
    value: '2 años',
    label: 'Construyendo productos',
    sub: 'Desde diseño hasta deploy',
    icon: Layers,
  },
  {
    value: 'Remoto',
    label: 'Disponible inmediatamente',
    sub: 'Argentina · Cualquier zona horaria',
    icon: MapPin,
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="bg-[#0c0c0c] py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-400 text-sm font-mono mb-4 block tracking-wider">
              // sobre-mi
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Full Stack con foco en frontend.
            </h2>

            <div className="space-y-4 text-neutral-400 leading-relaxed text-[15px]">
              <p>
                Me recibí de desarrollador Full Stack en 2025 y me especializo en
                frontend: construyo interfaces con React, TypeScript y Tailwind con
                atención real al detalle visual y de experiencia de usuario.
              </p>
              <p>
                Lo que me diferencia es que manejo el ciclo completo —desde el
                diseño hasta el deploy y el mantenimiento— con productos reales
                en producción y usuarios reales usándolos. No solo código:
                productos que funcionan y que se entregan.
              </p>
              <p>
                Basado en Olavarría, Buenos Aires. Disponible para trabajo remoto
                de forma inmediata, full-time o freelance.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-6 text-sm text-neutral-500">
              <MapPin size={14} className="text-emerald-400" />
              <span>Olavarría, Buenos Aires · Disponible para trabajo remoto</span>
            </div>
          </motion.div>

          {/* Right: stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="bg-[#141414] border border-[#222] rounded-xl p-5 flex items-center gap-5 hover:border-emerald-400/20 transition-colors group"
              >
                <div className="w-10 h-10 bg-emerald-400/8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-400/15 transition-colors">
                  <stat.icon size={18} className="text-emerald-400" />
                </div>
                <div>
                  <span className="font-display text-2xl font-bold text-white block">
                    {stat.value}
                  </span>
                  <span className="text-neutral-300 text-sm font-medium block leading-tight">
                    {stat.label}
                  </span>
                  <span className="text-neutral-600 text-xs mt-0.5 block">{stat.sub}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
