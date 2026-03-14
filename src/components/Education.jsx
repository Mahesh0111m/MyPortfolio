import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Education
        </motion.h2>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title-accent"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          whileHover={{ y: -2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark border border-gray-200 dark:border-gray-700 p-6 sm:p-8 hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">B.Tech</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Completed in 2023</p>
        </motion.div>
      </div>
    </section>
  )
}
