import { Mail } from 'lucide-react'
import { GithubIcon, LinkedInIcon } from './icons/SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#141414] py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-lg">
              <span className="text-emerald-400">&lt;</span>
              <span className="text-white">LR</span>
              <span className="text-emerald-400"> /&gt;</span>
            </span>
            <span className="text-neutral-700 text-sm">
              Lautaro Ruspil · Full Stack Developer
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/lautaro-ruspil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/lautaro-ruspil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="mailto:lauruspil@gmail.com"
              className="text-neutral-700 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-neutral-700 text-xs">
            © {new Date().getFullYear()} · React · Vite · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
