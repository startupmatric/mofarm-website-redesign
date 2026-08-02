'use client'

import { motion } from 'framer-motion'
import { BarChart, LineChart, MapPin, Zap } from 'lucide-react'

export function DashboardPreview() {
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
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const dashboardFeatures = [
    { icon: LineChart, label: 'Methane Trends', color: 'text-primary' },
    { icon: Zap, label: 'Farm Health', color: 'text-secondary' },
    { icon: BarChart, label: 'Carbon Credits', color: 'text-accent' },
    { icon: MapPin, label: 'Farm Analytics', color: 'text-primary' },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center space-y-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground text-balance"
            variants={itemVariants}
          >
            Enterprise-Grade Dashboard
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Real-time monitoring and analytics for climate-smart dairy farming
          </motion.p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-2xl backdrop-blur-sm p-8">
            {/* Dashboard grid visualization */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Methane Trends Chart */}
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <LineChart className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Methane Trends</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-foreground/70">
                    <span>Last 30 days</span>
                    <span className="text-green-600 font-semibold">-18%</span>
                  </div>
                  <div className="flex gap-1">
                    {[40, 55, 35, 70, 50, 65, 45].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-primary rounded-sm"
                        style={{ height: `${height}px`, opacity: 0.3 + i * 0.1 }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}px` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Farm Health Status */}
              <motion.div
                className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 border border-secondary/20"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-foreground">Farm Health</span>
                </div>
                <div className="space-y-3">
                  {['Herd Efficiency', 'Feed Quality', 'Environmental Control'].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/70">{item}</span>
                        <span className="text-primary font-semibold">{95 - i * 5}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="bg-secondary h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${95 - i * 5}%` }}
                          transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Carbon Credits */}
              <motion.div
                className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <BarChart className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-foreground">Carbon Credits</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-3xl font-bold text-accent">2,450</div>
                    <p className="text-sm text-foreground/70 mt-1">Credits Generated YTD</p>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-sm text-foreground/70">Monthly Revenue</p>
                    <p className="text-2xl font-bold text-primary mt-1">$12,250</p>
                  </div>
                </div>
              </motion.div>

              {/* Farm Analytics Map */}
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-border/50"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Connected Farms</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: 'North Valley', value: '156' },
                    { name: 'Central Plains', value: '89' },
                    { name: 'West Coast', value: '204' },
                  ].map((region, i) => (
                    <div key={i} className="text-center p-3 bg-card/50 rounded-lg border border-border/30">
                      <p className="text-lg font-bold text-primary">{region.value}</p>
                      <p className="text-xs text-foreground/60 mt-1">{region.name}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-3xl -z-10" />
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {dashboardFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              className="text-center space-y-3"
              variants={itemVariants}
            >
              <div className="inline-flex justify-center">
                <div className="p-3 rounded-lg bg-card border border-border/50">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
              </div>
              <p className="font-semibold text-foreground">{feature.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
