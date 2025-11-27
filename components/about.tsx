"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Database, Palette } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Creación de aplicaciones web responsivas y de alto rendimiento con React, Next.js, TailwindCSS y TypeScript",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creación de aplicaciones móviles nativas y multiplataforma con React Native y Expo",
  },
  {
    icon: Database,
    title: "Backend Engineering",
    description:
      "Diseño de API y bases de datos escalables con Node.js, Nest.js, Express.js, PostgreSQL, SQL y MySQL",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creación de interfaces de usuario intuitivas con principios de diseño modernos y accesibilidad.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Acerca de mí
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Soy un apasionado desarrollador full-stack con más de 5 años de
            experiencia en la creación de sitios web y móviles modernos.
            aplicaciones. Me encanta convertir problemas complejos en soluciones
            simples, hermosas e intuitivas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
            >
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
