'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Impact() {
  const [counts, setCounts] = useState({
    farms: 0,
    co2: 0,
    accuracy: 0,
    data: 0,
  })

  useEffect(() => {
    const targets = { farms: 100, co2: 1000000, accuracy: 95, data: 100 }
    const duration = 2000
    const step = 50

    const intervals = {
      farms: setInterval(() => {
        setCounts(prev => ({
          ...prev,
          farms: Math.min(prev.farms + 2, targets.farms),
        }))
      }, step),
      co2: setInterval(() => {
        setCounts(prev => ({
          ...prev,
          co2: Math.min(prev.co2 + 10000, targets.co2),
        }))
      }, step),
      accuracy: setInterval(() => {
        setCounts(prev => ({
          ...prev,
          accuracy: Math.min(prev.accuracy + 1.5, targets.accuracy),
        }))
      }, step),
      data: setInterval(() => {
        setCounts(prev => ({
          ...prev,
          data: Math.min(prev.data + 1, targets.data),
        }))
      }, step),
    }

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval))
    }
  }, [])

  const metrics = [
    { label: 'Pilot Farms', value: counts.farms, suffix: '+', delay: 0 },
    { label: 'CO₂e Reduced', value: counts.co2, suffix: '+', format: 'k', delay: 0.1 },
    { label: 'Verification Accuracy', value: counts.accuracy.toFixed(0), suffix: '%', delay: 0.2 },
    { label: 'Agricultural Data', value: counts.data, suffix: '+', format: 'TB', delay: 0.3 },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Real Climate Impact
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Driving measurable environmental change through verified carbon reduction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              className="text-center p-8 bg-card rounded-xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: metric.delay, duration: 0.6 }}
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold text-primary mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: metric.delay + 0.2, type: 'spring', stiffness: 100 }}
              >
                {Math.floor(metric.value)}{metric.suffix}
              </motion.div>
              {metric.format && (
                <div className="text-lg font-semibold text-primary">{metric.format}</div>
              )}
              <p className="text-foreground/60 mt-4 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-8 md:p-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-foreground/70 mb-2">Global Warming Reduction</p>
              <p className="text-4xl font-bold text-primary">1M CO₂e</p>
              <p className="text-sm text-foreground/50 mt-2">Equivalent to removing 200 cars from roads</p>
            </div>
            <div>
              <p className="text-foreground/70 mb-2">Farmer Revenue Generated</p>
              <p className="text-4xl font-bold text-primary">$50M+</p>
              <p className="text-sm text-foreground/50 mt-2">Direct payments to participating farms</p>
            </div>
            <div>
              <p className="text-foreground/70 mb-2">Data-Driven Insights</p>
              <p className="text-4xl font-bold text-primary">24/7</p>
              <p className="text-sm text-foreground/50 mt-2">Real-time monitoring and optimization</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
