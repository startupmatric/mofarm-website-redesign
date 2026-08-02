'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Platform', 'Solutions', 'Impact', 'About', 'Contact']

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/30"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="bg-primary p-2 rounded-lg"
              animate={{ 
                boxShadow: ['0 0 0px rgba(27, 127, 91, 0)', '0 0 20px rgba(27, 127, 91, 0.3)', '0 0 0px rgba(27, 127, 91, 0)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Leaf className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </motion.div>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">MOFarm</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <motion.a
                key={item}
                href="#"
                className="relative text-foreground/70 hover:text-primary transition-colors text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3">
            <motion.button
              className="px-6 py-2 text-primary border border-primary/50 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-sm min-h-[44px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10">Book Demo</span>
            </motion.button>
            <motion.button
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all relative overflow-hidden group text-sm min-h-[44px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            className="md:hidden text-foreground p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 top-16 md:hidden bg-background/80 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed top-16 left-0 right-0 bg-background border-t border-border/30 backdrop-blur-xl shadow-lg"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-64px)] overflow-y-auto">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block px-4 py-3 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors min-h-[44px] flex items-center"
                    custom={i}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  className="w-full px-4 py-3 text-primary border border-primary/50 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors mt-2 min-h-[44px]"
                  custom={navItems.length}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                >
                  Book Demo
                </motion.button>
                <motion.button
                  className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all min-h-[44px]"
                  custom={navItems.length + 1}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
