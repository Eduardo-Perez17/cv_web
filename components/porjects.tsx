"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Cuidapp",
    description:
      "Plataforma web que conecta cuidadores con familias. Ofrece perfiles verificados, reservas en línea, gestión de servicios y un panel administrativo para controlar usuarios, métricas y disponibilidad.",
    image: "/cuidapp.png",
    tech: [
      "Next.js",
      "Nest.js",
      "PostgreSQL",
      "TailwindCSS",
      "AWS",
      "Socket.io",
    ],
    liveUrl: "https://cuidapp.io",
    githubUrl: "#",
    privateGithub: true,
  },
  {
    title: "Box Coffe",
    description:
      "Plataforma web para gestionar envíos de paquetes. Permite completar formularios con direcciones, datos del remitente y productos, ofreciendo un proceso rápido, claro y optimizado para usuarios.",
    image: "/tecnica.png",
    tech: ["Next.js", "TailwindCSS", "Git", "Socket.io", "React hook form"],
    liveUrl: "https://box-coffe.vercel.app/",
    githubUrl: "https://github.com/Eduardo-Perez17/box_coffe",
    privateGithub: false,
  },
  {
    title: "Finbro",
    description:
      "Dashboard web para visualizar precios de acciones en tiempo real. Permite consultar datos históricos, analizar tendencias mediante gráficos interactivos y ofrecer experiencia eficiente a inversores.",
    image: "/dashboard.png",
    tech: ["Next.js", "TailwindCSS", "Git", "Socket.io", "ShadCN"],
    liveUrl: "https://dashboardfinbro.vercel.app/",
    githubUrl: "https://github.com/Eduardo-Perez17/dashboard",
    privateGithub: false,
  },
  {
    title: "Más proyectos",
    description:
      " En mi LinkedIn encontrarás más proyectos que he desarrollado dentro de empresas, con detalles sobre mi rol, tecnologías utilizadas y resultados alcanzados, incluyendo procesos reales de desarrollo y ciclos completos de producto.",
    image: "/linkendln.png",
    tech: [
      "Javascript",
      "Git",
      "Firebase",
      "GitHub",
      "AWS",
      "Node.js",
      "Postman",
    ],
    liveUrl:
      "https://www.linkedin.com/in/eduardo-enrique-p%C3%A9rez-salcedo-792136211",
    githubUrl: "#",
    privateGithub: true,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Proyectos destacados
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Una selección de mis trabajos recientes y proyectos paralelos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-lg bg-card border border-border overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs font-medium bg-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="flex-1 bg-transparent"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild={!project.privateGithub}
                    disabled={project.privateGithub}
                    className={
                      project.privateGithub
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  >
                    {project.privateGithub ? (
                      <div className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                      </div>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
