export interface Skill {
  name: string
  color: string
}

export interface SkillCategory {
  label: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwind CSS', color: '#38BDF8' },
      { name: 'Astro', color: '#FF5D01' },
      { name: 'Vite', color: '#A259FF' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', color: '#68A063' },
      { name: 'NestJS', color: '#E0234E' },
      { name: 'MySQL', color: '#4479A1' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'REST APIs', color: '#34D399' },
    ],
  },
  {
    label: 'Herramientas',
    skills: [
      { name: 'Git & GitHub', color: '#F05032' },
      { name: 'Firebase', color: '#FFCA28' },
      { name: 'Vitest', color: '#6E9F18' },
      { name: 'Framer Motion', color: '#BB4B96' },
      { name: 'Figma', color: '#F24E1E' },
    ],
  },
]
