'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const metrics = [
    { label: 'Methane Captured', value: '1M+' },
    { label: 'Climate Credits Generated', value: '500K+' },
    { label: 'Farms Connected', value: '100+' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background pt-20">
      {/* Hero background with farm image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FRAM-eGuRTtIjMef7wokBGWl3SQ2gSXfFUO.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        {/* Additional dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-transparent" />
      </div>

      {/* Animated floating background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-8 md:pb-0">
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold inline-block">
                ClimateTech for Dairy Farming
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance"
              style={{
                fontSize: 'clamp(2rem, 5vw + 0.5rem, 3.5rem)',
              }}
              variants={itemVariants}
            >
              Turning Dairy Methane into Climate Value
            </motion.h1>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-md"
              style={{
                fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
              }}
              variants={itemVariants}
            >
              Helping dairy farmers measure methane emissions, unlock climate revenue, and build the world&apos;s most trusted dairy data platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6"
              variants={itemVariants}
            >
              <motion.button
                className="px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 relative overflow-hidden group min-h-[44px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-sm md:text-base">Book a Demo</span>
                <motion.span
                  className="relative z-10 hidden sm:inline"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>

              <motion.button
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors min-h-[44px] text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Floating metric cards - stacked on mobile */}
          <motion.div
            className="relative w-full h-auto md:h-full md:min-h-[450px] mt-8 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="grid grid-cols-1 md:absolute md:inset-0 gap-4 md:gap-0">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  className="md:absolute bg-card/90 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-lg md:shadow-2xl border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 w-full md:w-auto"
                  initial={{ opacity: 0, x: 100, y: 100 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.8 + idx * 0.12,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  variants={floatingVariants}
                  whileInView="animate"
                  style={{
                    left: `${idx === 0 ? 0 : idx === 1 ? 120 : 60}px`,
                    top: `${idx === 0 ? 0 : idx === 1 ? 140 : 260}px`,
                  }}
                >
                  <motion.div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                    {metric.value}
                  </motion.div>
                  <div className="text-xs md:text-sm text-foreground/70 mt-2 font-medium">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
