"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThankYouModal } from "./thank-you-modal";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitting(false);
    setIsModalOpen(true);
    // Resetear formulario después de 2 segundos
  };

  return (
    <>
      <section id="contact" ref={ref} className="py-24 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Contáctanos
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              ¿Tienes un proyecto en mente? Trabajemos juntos para crear algo
              increíble.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Información de contacto
                </h3>

                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="p-2 rounded-full bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:hello@example.com"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        a.eduardoperez.fp2019@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="p-2 rounded-full bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Localización
                      </p>
                      <p className="font-medium">Caracas, VE</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <p className="text-sm leading-relaxed">
                  Siempre me interesa saber sobre nuevos proyectos y
                  oportunidades. Si tienes alguna pregunta o simplemente quieres
                  saludar, ¡no dudes en contactarme!
                </p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre
                </label>
                <Input id="name" placeholder="Tu nombre" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="min-h-[150px] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? "enviando..." : "Enviar mensaje"}
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center text-sm text-muted-foreground"
          >
            <p>
              © 2025 Full-Stack Developer Portfolio. Built with Next.js and
              Framer Motion.
            </p>
          </motion.div>
        </div>
      </section>

      <ThankYouModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
