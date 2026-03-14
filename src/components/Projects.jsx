import { motion } from 'framer-motion'

const bullets = [
  'Built a microservices-based backend system using Spring Boot to manage Guest, User, and Staff modules.',
  'Implemented JWT authentication and role-based authorization using Spring Security.',
  'Designed REST APIs with proper HTTP methods, request validation, and error handling.',
  'Enabled pagination and sorting to efficiently handle large datasets.',
  'Implemented caching mechanisms to reduce database load and improve response time.',
  'Integrated Resilience4j for retry and circuit breaker patterns to handle service failures.',
  'Used MySQL for persistent storage and managed schema changes during development.',
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Projects
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
          transition={{ duration: 0.5 }}
          whileHover={{ y: -2 }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-soft dark:shadow-soft-dark border border-gray-200 dark:border-gray-700 p-6 sm:p-8 hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Paying Guest Management System
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            A full-stack microservices application for managing paying guest accommodations, users, and staff.
          </p>
          <ul className="space-y-3">
            {bullets.map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i }}
                className="flex gap-3 text-gray-600 dark:text-gray-300"
              >
                <span className="text-indigo-500 mt-1.5 flex-shrink-0">•</span>
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-8 flex gap-4">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 font-medium hover:bg-indigo-200 dark:hover:bg-indigo-500/30 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Source
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Live
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
