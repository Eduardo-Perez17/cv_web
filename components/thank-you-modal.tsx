"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl">
              {/* Botón cerrar */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Ícono animado */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 200 }}
                className="flex justify-center mb-4"
              >
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>
              </motion.div>

              {/* Contenido del modal */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center space-y-3 mb-6"
              >
                <h3 className="text-2xl font-bold">¡Gracias!</h3>
                <p className="text-muted-foreground">He recibido tu mensaje exitosamente. Te responderé en breve.</p>
              </motion.div>

              {/* Detalles adicionales con animación */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-6 text-sm text-muted-foreground"
              >
                <p>Normalmente respondo dentro de 24 horas. Mientras tanto, puedes conectarme en LinkedIn.</p>
              </motion.div>

              {/* Botón cerrar */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Button onClick={onClose} className="w-full">
                  Cerrar
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
