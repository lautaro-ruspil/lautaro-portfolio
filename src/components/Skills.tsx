import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'
import { skillIcons } from '../data/icons'

export default function Skills() {
  return (
    <section id="skills" className="bg-[#080808] py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-emerald-400 text-sm font-mono mb-4 block tracking-wider">
            // skills
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Mi stack tecnológico.
          </h2>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * catIdx }}
            >
              <h3 className="text-neutral-600 text-xs font-mono uppercase tracking-widest mb-4">
                {cat.label}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i + 0.1 * catIdx }}
                    className="bg-[#111] border border-[#1e1e1e] rounded-xl p-4 flex flex-col items-center gap-3 hover:border-[#2e2e2e] hover:-translate-y-0.5 transition-all duration-200 cursor-default group"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 transition-colors duration-200"
                      style={{ color: skill.color }}
                      aria-hidden="true"
                    >
                      <path d={skillIcons[skill.name] ?? skillIcons['REST APIs']} />
                    </svg>
                    <span className="text-neutral-500 text-xs text-center leading-tight group-hover:text-neutral-300 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
