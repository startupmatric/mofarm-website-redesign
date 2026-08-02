'use client'

import { motion } from 'framer-motion'
import { BarChart3, AlertTriangle, TrendingDown } from 'lucide-react'

export function Problem() {
  const stats = [
    { label: 'of agricultural emissions', value: '14%', detail: 'from dairy methane' },
    { label: 'CO₂e equivalent', value: '23B', detail: 'annual global impact' },
    { label: 'untapped', value: '100%', detail: 'revenue opportunity' },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 rounded-full mb-3 md:mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-xs md:text-sm font-semibold text-primary">The Challenge</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-4 leading-tight text-balance">
                Methane: Agriculture&apos;s Largest Climate Challenge
              </h2>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}>
                Dairy farms produce significant methane emissions—a potent greenhouse gas with 28x the global warming potential of CO₂. Yet farmers lack tools to measure, monetize, or manage these emissions effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.value}
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-card rounded-xl md:rounded-lg border border-border hover:border-primary/30 transition-colors min-h-[80px] md:min-h-auto"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                    <p className="text-foreground/60 text-xs md:text-sm">{stat.label}</p>
                    <p className="text-foreground/50 text-xs mt-1">{stat.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-64 md:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center space-y-4"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-16 h-16 md:w-24 md:h-24 bg-primary/30 rounded-full mx-auto flex items-center justify-center">
                  <TrendingDown className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                </div>
                <p className="text-foreground/70 font-semibold text-sm md:text-base">Methane Emissions Rising</p>
              </motion.div>
            </div>
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-30 hidden md:block">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={`h-${i}`} className="absolute w-full border-t border-primary/10" style={{ top: `${i * 10}%` }} />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={`v-${i}`} className="absolute h-full border-l border-primary/10" style={{ left: `${i * 10}%` }} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
