'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How does MOFarm measure methane emissions?',
      answer: 'We use IoT sensors and advanced monitoring equipment deployed at farm sites to capture real-time methane data. Our proprietary algorithms process this data to ensure accuracy and compliance with international carbon accounting standards.',
    },
    {
      question: 'What are carbon credits and how do I monetize them?',
      answer: 'Carbon credits represent verified greenhouse gas reductions. Through MOFarm\'s marketplace, you can sell these credits to companies seeking to offset their emissions. Each credit equals one metric ton of CO₂ equivalent reduction.',
    },
    {
      question: 'Is MOFarm compatible with my existing farm management system?',
      answer: 'Yes! MOFarm provides flexible API integration that works with most modern farm management systems. Our technical team can assist with seamless integration to minimize disruption.',
    },
    {
      question: 'What\'s the cost and ROI timeline?',
      answer: 'Pricing varies based on farm size and data needs. Most farms see positive ROI within 12-18 months through carbon credit sales. We offer flexible pricing models to suit operations of all sizes.',
    },
    {
      question: 'How is my data secured and who has access?',
      answer: 'We use military-grade encryption and enterprise-level security protocols. Your data remains your property. You control access and can revoke permissions at any time. GDPR and CCPA compliant.',
    },
    {
      question: 'Can I use MOFarm internationally?',
      answer: 'Yes, MOFarm supports operations across North America, Europe, and expanding globally. We comply with local environmental and data regulations in each region.',
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground/60">
            Everything you need to know about MOFarm.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="border border-border rounded-lg overflow-hidden"
            >
              <motion.button
                className="w-full px-6 py-4 bg-card hover:bg-card/50 transition-colors flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
              >
                <span className="font-semibold text-foreground pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === idx ? 'auto' : 0,
                  opacity: openIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden border-t border-border"
              >
                <div className="px-6 py-4 bg-muted/50">
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-foreground/70 mb-4">Still have questions?</p>
          <motion.button
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
