'use client'

import { motion } from 'framer-motion'
import { Activity, CheckCircle2, BarChart3, Zap } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      icon: Activity,
      title: 'Measure',
      description: 'Deploy IoT sensors to capture real-time methane emissions data from dairy operations.',
    },
    {
      icon: CheckCircle2,
      title: 'Verify',
      description: 'Validate data through third-party audits ensuring 95% accuracy and compliance standards.',
    },
    {
      icon: BarChart3,
      title: 'Generate Credits',
      description: 'Convert verified emissions reductions into tradeable carbon credits on the market.',
    },
    {
      icon: Zap,
      title: 'Earn Revenue',
      description: 'Monetize climate impact and build sustainable income from environmental stewardship.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            How MOFarm Works
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A seamless four-step process to turn methane emissions into climate value.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Connection line */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative group"
              >
                {/* Number background */}
                <motion.div
                  className="absolute -top-8 left-0 right-0 mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300 z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  {idx + 1}
                </motion.div>

                <motion.div
                  className="bg-card rounded-xl p-8 text-center border border-border h-full pt-20 hover:border-primary/50 transition-colors duration-300"
                  whileHover={{ y: -8, shadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mb-4 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-16 p-8 bg-card rounded-xl border border-border text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-foreground/70 mb-4">
            All data flows through our enterprise-grade platform with 99.9% uptime and military-grade security.
          </p>
          <motion.button
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
