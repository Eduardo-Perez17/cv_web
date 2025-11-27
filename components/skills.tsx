"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Sass", "Cypress"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Nest.js", "Express", "PostgreSQL", "MongoDB", "MySQL", "Jest", "Swagger", "Typeorm", "Sequileze"],
  },
  {
    category: "Mobile",
    skills: ["React Native", "iOS", "Android", "Expo"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "GitHub Actions"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Habilidades y tecnologías</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Las herramientas y tecnologías que utilizo para dar vida a las ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full bg-primary/10 text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
