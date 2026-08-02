'use client'

import { motion } from 'framer-motion'
import { Leaf, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
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

  const footerSections = [
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press'],
    },
    {
      title: 'Platform',
      links: ['Features', 'Pricing', 'Security', 'API Docs'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Support', 'Community', 'Status'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Compliance', 'Cookies'],
    },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <motion.div
          className="py-16 grid md:grid-cols-5 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">MOFarm</span>
            </div>
            <p className="text-foreground/60 text-sm mb-4">
              Climate-smart agriculture for the modern farm.
            </p>
            <p className="text-foreground/50 text-sm">© 2024 MOFarm. All rights reserved.</p>
          </motion.div>

          {/* Link sections */}
          {footerSections.map((section, idx) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-border py-8 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-foreground/50 text-sm text-center md:text-left">
            Building sustainable agriculture, one farm at a time.
          </p>

          <div className="flex items-center gap-6">
            <motion.a
              href="#"
              className="text-foreground/60 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              aria-label="Visit our website"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:hello@mofarm.com"
              className="text-foreground/60 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              aria-label="Send us an email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
