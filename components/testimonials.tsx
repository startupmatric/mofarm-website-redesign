'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'John Anderson',
      location: 'Wisconsin, USA',
      quote: 'MOFarm transformed how we think about sustainability. We\'re generating meaningful revenue from climate action.',
      role: 'Dairy Farm Owner',
      rating: 5,
    },
    {
      name: 'Maria Silva',
      location: 'Vermont, USA',
      quote: 'The real-time data insights helped us optimize our operations and reduce emissions simultaneously.',
      role: 'Farm Manager',
      rating: 5,
    },
    {
      name: 'Robert Chen',
      location: 'California, USA',
      quote: 'Best investment in technology our farm has made. The ROI is exceptional.',
      role: 'Agricultural Director',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
            Success Stories
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Hear from farmers already transforming their operations with MOFarm.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-card rounded-xl p-8 border border-border h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <motion.p
                  className="text-foreground/80 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.1 }}
                >
                  &quot;{testimonial.quote}&quot;
                </motion.p>

                {/* Author */}
                <motion.div
                  className="border-t border-border pt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full mb-3" />
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  <p className="text-sm text-foreground/50 mt-1">{testimonial.location}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-foreground/60 mb-6">Trusted by leading agricultural organizations</p>
          <div className="flex justify-center gap-8 flex-wrap opacity-60">
            {['AgriTech Summit', 'Climate Alliance', 'Farmer Coalition', 'Sustainability Forum'].map((org, idx) => (
              <motion.div
                key={org}
                className="text-foreground/50 font-semibold text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.05 }}
              >
                {org}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
