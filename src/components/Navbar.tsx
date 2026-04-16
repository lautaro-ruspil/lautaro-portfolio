import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

interface NavLink {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#1e1e1e] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="font-display text-lg font-bold tracking-tight">
            <span className="text-emerald-400">&lt;</span>
            <span className="text-white">LR</span>
            <span className="text-emerald-400"> /&gt;</span>
          </a>
          <span className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-400/8 border border-emerald-400/20 px-2.5 py-1 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para trabajar
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-neutral-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTAs desktop */}
        <div className="hidden md:flex items-center gap-2">
          {/*
            IMPORTANTE: reemplazá "/cv-lautaro-ruspil.pdf" con la URL real de tu CV.
          */}
          <a
            href="/cv-lautaro-ruspil.pdf"
            download
            className="flex items-center gap-1.5 text-neutral-400 text-sm font-medium px-3 py-2 rounded-full hover:text-white border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors"
            aria-label="Descargar CV"
          >
            <Download size={13} />
            CV
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-2 bg-emerald-400 text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-emerald-300 transition-colors"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-400 hover:text-white transition-colors"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-[#1e1e1e]">
          <ul className="flex flex-col px-5 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3.5 text-sm text-neutral-400 hover:text-emerald-400 border-b border-[#1a1a1a] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-1">
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-emerald-400 text-black font-semibold text-sm py-3 rounded-full mb-2"
              >
                Hablemos
              </a>
            </li>
            <li className="pb-3">
              <a
                href="/cv-lautaro-ruspil.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 border border-[#2a2a2a] text-neutral-400 font-medium text-sm py-3 rounded-full hover:text-white transition-colors"
              >
                <Download size={13} />
                Descargar CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
