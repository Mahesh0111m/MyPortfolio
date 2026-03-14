import { motion } from 'framer-motion'

const bullets = [
  'Developed and maintained RESTful APIs using Spring Boot following layered architecture principles.',
  'Implemented business logic and database interactions using Spring Data JPA and MySQL.',
  'Integrated backend APIs with frontend applications and ensured smooth end-to-end functionality.',
  'Improved API performance by optimizing SQL queries and adding pagination for large data sets.',
  'Implemented basic JWT-based authentication and authorization using Spring Security.',
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Experience
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
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark border border-gray-200 dark:border-gray-700 p-6 sm:p-8 hover:shadow-xl transition-shadow"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Software Engineer
            </h3>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-500/10 text-accent-600 dark:text-accent-400">
              1 year
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">
            Sequro Technologies Pvt Ltd · Bangalore
          </p>
          <ul className="space-y-3">
            {bullets.map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="flex gap-3 text-gray-600 dark:text-gray-300"
              >
                <span className="text-accent-500 mt-1.5 flex-shrink-0">•</span>
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
