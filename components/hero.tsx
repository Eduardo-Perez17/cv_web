"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl w-full mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-muted-foreground"
          >
            <MapPin className="w-4 h-4" />
            <span>Caracas, VE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-balance"
          >
            Full-Stack{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance"
          >
            Creando hermosas experiencias web y móviles con tecnologías modernas
            y diseño de píxeles perfectos
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group"
            >
              Contáctanos
              <Mail className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projects")}
            >
              Ver proyectos
            </Button>
          </motion.div>

          <a
            href="/cv_perez_salcedo_eduardo.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="w-74">
              Mi CV{" "}
              <FileText className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.a
            href="https://github.com/Eduardo-Perez17"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/eduardo-enrique-p%C3%A9rez-salcedo-792136211"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("experience")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
