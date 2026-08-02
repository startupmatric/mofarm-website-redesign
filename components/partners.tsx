'use client'

import { motion } from 'framer-motion'

export function Partners() {
  const partners = [
    { name: 'Climate University', category: 'Research Institution' },
    { name: 'Green Tech Alliance', category: 'Climate Organization' },
    { name: 'AgriData Solutions', category: 'Agriculture Partner' },
    { name: 'Carbon Ventures', category: 'Investor' },
    { name: 'Dairy Coalition', category: 'Industry Partner' },
    { name: 'Impact Fund', category: 'Investor' },
    { name: 'Sustainable Ag Lab', category: 'Research Institution' },
    { name: 'Global Climate Net', category: 'Climate Organization' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            Backed by Industry Leaders
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            Trusted by leading climate organizations, research institutions, and investors worldwide
          </motion.p>
        </motion.div>

        {/* Partners grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              variants={itemVariants}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <motion.div
                className="relative bg-card border border-border/50 rounded-xl p-6 h-full flex flex-col justify-between backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground text-balance">
                    {partner.name}
                  </h3>
                </div>
                <span className="text-sm text-foreground/60 font-medium">
                  {partner.category}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling animation indicator */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-sm text-foreground/60">
            And many more partners working toward climate-smart agriculture
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
