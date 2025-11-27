"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "Ingeniero Jefe de Software",
    company: "Cuidapp.io",
    period: "2025",
    description:
      "Plataforma orientada a conectar pacientes con servicios de enfermería a domicilio de manera rápida y confiable. Responsable del desarrollo y dirección técnica del producto.",
    achievements: [
      "Diseño y construcción de arquitectura del sistema",
      "Implementación de módulos clave de la plataforma",
      "Coordinación técnica con equipo de producto",
    ],
  },
  {
    title: "Desarrollador Blockchain / Ingeniero Jefe de Software",
    company: "Velirion (VLR)",
    period: "2025",
    description:
      "Participación en el desarrollo de la deapp multichain del proyecto y colaboración en la lógica del smart contract para preventa, staking, sistema de referidos, mecanismos de quema y gobernanza DAO.",
    achievements: [
      "Desarrollo completo de la deapp de preventa",
      "Integración con módulos on-chain y lógica del token",
      "Colaboración en la revisión y mejoras del smart contract",
    ],
  },
  {
    title: "Desarrollador de Software",
    company: "ROBLER",
    period: "2024 - 2025",
    description:
      "Desarrollo de Diamond Talent, plataforma para conectar modelos con agencias y marcas sin intermediarios, mejorando procesos de captación y visibilidad.",
    achievements: [
      "Implementación de funcionalidades core del sistema",
      "Optimización de flujos de registro y búsqueda",
      "Integración de módulos orientados al marketplace",
    ],
  },
  {
    title: "Desarrollador de Software",
    company: "Canned Head",
    period: "2023 - 2024",
    description:
      "Participación en proyectos de desarrollo web y servicios digitales para diferentes clientes, construyendo soluciones a medida orientadas a objetivos comerciales.",
    achievements: [
      "Entrega de funcionalidades web personalizadas",
      "Integración con servicios y APIs de terceros",
      "Colaboración con equipos multidisciplinarios",
    ],
  },
  {
    title: "Desarrollador Full-Stack",
    company: "Proyectos Independientes",
    period: "2021 - Actualidad",
    description:
      "Desarrollo de aplicaciones móviles y sitios web, abarcando el ciclo completo del producto: diseño UI/UX, arquitectura front-end y back-end, integración con APIs y bases de datos, despliegue en cloud y mantenimiento continuo.",
    achievements: [
      "Creación de aplicaciones móviles publicadas en producción",
      "Desarrollo de landing pages orientadas a conversión",
      "Implementación de sistemas con autenticación y dashboards",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleExperiences = isExpanded ? experiences : experiences.slice(0, 2);
  const hiddenCount = experiences.length - 2;

  return (
    <section id="experience" ref={ref} className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Experiencia
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Mi trayectoria profesional construyendo experiencias digitales
            excepcionales
          </p>
        </motion.div>

        <div className="space-y-8">
          <AnimatePresence>
            {visibleExperiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary"
                />

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-muted-foreground">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hiddenCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-colors hover:bg-primary/90"
            >
              {isExpanded ? "Ver menos" : `Ver más (${hiddenCount})`}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
