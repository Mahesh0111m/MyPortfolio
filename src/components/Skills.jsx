import { motion } from 'framer-motion'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const skills = [
  { name: 'Java', icon: `${CDN}/java/java-original.svg` },
  { name: 'Spring Boot', icon: `${CDN}/spring/spring-original.svg` },
  { name: 'Microservices', icon: `${CDN}/docker/docker-original.svg` },
  { name: 'MySQL', icon: `${CDN}/mysql/mysql-original.svg` },
  { name: 'Git', icon: `${CDN}/git/git-original.svg` },
  { name: 'GitHub', icon: `${CDN}/github/github-original.svg` },
  { name: 'React', icon: `${CDN}/react/react-original.svg` },
  { name: 'AWS', icon: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Skills
        </motion.h2>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title-accent"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl"
        >
          Technologies and tools I work with
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-soft dark:shadow-soft-dark hover:shadow-xl hover:border-accent-500/30 dark:hover:border-accent-500/40 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700/80 group-hover:bg-accent-500/10 dark:group-hover:bg-accent-500/20 transition-colors relative">
                <img
                  src={skill.icon}
                  alt=""
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const fallback = e.target.parentElement?.querySelector('.skill-fallback')
                    if (fallback) fallback.classList.remove('hidden')
                  }}
                />
                <span className="skill-fallback hidden text-lg font-bold text-accent-500">{skill.name.charAt(0)}</span>
              </div>
              <span className="font-semibold text-gray-800 dark:text-gray-200 text-center text-sm sm:text-base">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
