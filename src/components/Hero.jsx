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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950/20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row items-center gap-10 md:gap-14"
        >
          <motion.div variants={item} className="flex-shrink-0 order-2 md:order-1">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-indigo-500/20 dark:ring-indigo-500/30 shadow-soft dark:shadow-soft-dark bg-gray-200 dark:bg-gray-700">
              <img
                src="../../public/photo.jpg"
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
            <motion.p
              variants={item}
              className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-2"
            >
              Software Engineer
            </motion.p>
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight"
            >
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Mahesh</span>
            </motion.h1>
            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 mb-6 leading-relaxed"
            >
              Backend & full-stack developer with 1 year of experience at Sequro Technologies, Bangalore.
              I build scalable APIs with Spring Boot and enjoy bringing ideas to life with clean code.
            </motion.p>
            <motion.div variants={item}>
              <motion.a
                href="#projects"
                className="inline-block px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-semibold shadow-soft hover:shadow-lg transition-all"
                whileHover={{ scale: 1.03 }}
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
