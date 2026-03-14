import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl">
            I'm a Software Engineer with 1 year of experience at Sequro Technologies Pvt Ltd in Bangalore.
            I'm passionate about building robust backend systems and seamless full-stack applications.
            I focus on clean architecture, RESTful APIs, and scalable solutions using Java, Spring Boot,
            and modern front-end technologies like React. When I'm not coding, I enjoy learning new
            technologies and contributing to open source.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
