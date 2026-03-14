import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row items-center gap-10 md:gap-14"
        >
          <motion.div variants={item} className="flex-shrink-0 order-2 md:order-1">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-gray-200 dark:ring-gray-700 shadow-xl bg-gray-200 dark:bg-gray-700">
              <img
                src="/profile-placeholder.svg"
                alt="Mahesh"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mahesh'
                }}
              />
            </div>
          </motion.div>
          <div className="flex-1 text-center md:text-left order-1 md:order-2">
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3"
            >
              Hi, I'm Mahesh
            </motion.h1>
            <motion.p
              variants={item}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4"
            >
              Software Engineer
            </motion.p>
            <motion.p
              variants={item}
              className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 mb-6"
            >
              Backend & full-stack developer with 1 year of experience at Sequro Technologies, Bangalore.
              I build scalable APIs with Spring Boot and enjoy bringing ideas to life with clean code.
            </motion.p>
            <motion.div variants={item}>
              <motion.a
                href="#projects"
                className="inline-block px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View my work
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
