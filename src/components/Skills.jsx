import { motion } from 'framer-motion'

const skills = [
  'Java',
  'Spring Boot',
  'Microservices',
  'MySQL',
  'Git',
  'GitHub',
  'ReactJs',
  'AWS',
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10"
        >
          Skills
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={item}
              className="px-5 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-center font-medium text-gray-800 dark:text-gray-200 hover:shadow-md transition-shadow"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
