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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10"
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Software Engineer
            </h3>
            <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
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
                <span className="text-gray-400 dark:text-gray-500 mt-1.5">•</span>
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
