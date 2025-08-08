import { skills } from '../data/Skills'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
// }

export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-t from-slate-950 to-slate-900 py-20 px-4 lg:px-10 text-white">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2  className="text-4xl lg:text-5xl font-bold text-amber-500 mb-4">
          Skills
        </motion.h2>
        <motion.p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are the tools and technologies I’ve worked with. I enjoy constantly learning and improving!
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((section) => (
            <motion.div
              key={section.id}
             
              className="bg-white/5 border border-lime-700 hover:border-lime-500 transition duration-300 rounded-xl p-6 shadow-lg backdrop-blur-md"
            >
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">{section.title}</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {section.skill.map((item) => (
                  <motion.div
                    key={item.id}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:border-amber-400 transition duration-300 bg-white/5"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm text-gray-200">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
