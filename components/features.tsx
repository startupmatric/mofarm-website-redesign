'use client'

import { motion } from 'framer-motion'
import { Cloud, Shield, Gauge, Globe, Database, Zap } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Gauge,
      title: 'Climate Analytics',
      description: 'Real-time tracking of methane emissions with advanced analytics and predictive insights.',
    },
    {
      icon: Shield,
      title: 'Methane Monitoring',
      description: 'Continuous monitoring with AI-powered anomaly detection and automated alerts.',
    },
    {
      icon: Globe,
      title: 'Carbon Marketplace',
      description: 'Direct access to verified carbon credit buyers and transparent pricing mechanisms.',
    },
    {
      icon: Cloud,
      title: 'Farm Intelligence',
      description: 'ML-driven recommendations to optimize operations and maximize climate impact.',
    },
    {
      icon: Database,
      title: 'Data Platform',
      description: 'Aggregate and analyze 100TB+ of agricultural data for industry insights.',
    },
    {
      icon: Zap,
      title: 'Enterprise Integration',
      description: 'Seamless API integration with existing farm management systems.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why MOFarm
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Enterprise-grade platform built for modern agriculture with climate intelligence at its core.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                <motion.div
                  className="relative bg-card/60 backdrop-blur-xl rounded-2xl p-8 border border-border/50 h-full hover:border-primary/50 transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -8, borderColor: 'rgba(27, 127, 91, 0.5)' }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  <motion.div
                    className="mb-6 inline-block p-4 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl group-hover:from-primary/30 group-hover:to-secondary/20 transition-colors"
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4 relative z-10">{feature.description}</p>

                  <motion.div
                    className="flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity relative z-10"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Learn more
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
