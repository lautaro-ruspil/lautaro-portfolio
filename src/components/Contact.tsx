import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedInIcon } from './icons/SocialIcons'

interface ContactLink {
  label: string
  value: string
  href: string
  primary: boolean
  icon: 'mail' | 'linkedin' | 'github'
}

const links: ContactLink[] = [
  {
    label: 'Email',
    value: 'lauruspil@gmail.com',
    href: 'mailto:lauruspil@gmail.com',
    primary: true,
    icon: 'mail',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/lautaro-ruspil',
    href: 'https://linkedin.com/in/lautaro-ruspil',
    primary: false,
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/lautaro-ruspil',
    href: 'https://github.com/lautaro-ruspil',
    primary: false,
    icon: 'github',
  },
]

interface IconProps {
  name: string
  primary: boolean
}

function Icon({ name, primary }: IconProps) {
  const cls = `w-[22px] h-[22px] ${
    primary
      ? 'text-black'
      : 'text-neutral-500 group-hover:text-emerald-400 transition-colors'
  }`
  if (name === 'mail') return <Mail size={22} className={cls} />
  if (name === 'linkedin') return <LinkedInIcon size={22} className={cls} />
  return <GithubIcon size={22} className={cls} />
}

export default function Contact() {
  return (
    <section id="contacto" className="bg-[#0c0c0c] py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-emerald-400 text-sm font-mono mb-4 block tracking-wider">
            // contacto
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto leading-relaxed">
            Estoy disponible para trabajo remoto y proyectos freelance.
            Escribime y hablamos.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={`Contactar por ${link.label}: ${link.value}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`group flex flex-col items-center gap-4 p-6 rounded-2xl border transition-all duration-300 ${
                link.primary
                  ? 'bg-emerald-400 border-emerald-400 text-black hover:bg-emerald-300'
                  : 'bg-[#111] border-[#1e1e1e] text-neutral-300 hover:border-emerald-400/30 hover:text-white'
              }`}
            >
              <Icon name={link.icon} primary={link.primary} />
              <div className="text-center">
                <span
                  className={`font-semibold text-sm block mb-1 ${
                    link.primary ? 'text-black' : ''
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`text-xs break-all ${
                    link.primary ? 'text-black/70' : 'text-neutral-600'
                  }`}
                >
                  {link.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mt-10 text-neutral-700 text-sm"
        >
          <MapPin size={14} />
          <span>Olavarría, Buenos Aires · Disponible para trabajo remoto</span>
        </motion.div>
      </div>
    </section>
  )
}
