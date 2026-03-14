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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10"
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8"
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
                <span className="text-gray-400 dark:text-gray-500 mt-1.5">•</span>
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="text-gray-900 dark:text-white font-medium underline hover:no-underline"
            >
              Source
            </a>
            <a
              href="#"
              className="text-gray-900 dark:text-white font-medium underline hover:no-underline"
            >
              Live
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
