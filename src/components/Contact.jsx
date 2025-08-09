import { motion } from 'framer-motion';
import { FiMail, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/sagarika2426', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sagarika2412/', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://x.com/_Sagarika_Sahoo', label: 'Twitter' },
];

const contactInfo = [
  { icon: FiMail, title: 'Email', value: 'sagarikasahoo16@gmail.com', href: 'mailto:sagarikasahoo16@gmail.com' },
];

export default function Contact() {



  const formKey = import.meta.env.VITE_FORM_KEY;


  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? Let’s connect and
              create something awesome together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FiSend className="text-cyan-400" />
                  Contact Info
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I’m always open to collaborating on interesting projects.
                  Reach out through any platform.
                </p>

                {/* Info Cards */}
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 hover:translate-x-1 transition"
                  >
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <a
                        href={info.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400 transition"
                    >
                      <social.icon className="text-gray-400 hover:text-cyan-400" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={itemVariants}>
              <form
                action={`https://getform.io/f/${formKey}`}
                method="POST"
                className="space-y-6 bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FiSend className="text-cyan-400" />
                  Send a Message
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="bg-transparent border border-white/20 p-3 rounded text-white placeholder-gray-400 focus:border-cyan-500 outline-none"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="bg-transparent border border-white/20 p-3 rounded text-white placeholder-gray-400 focus:border-cyan-500 outline-none"
                  />
                </div>

                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Your Message"
                  className="bg-transparent border border-white/20 p-3 rounded text-white placeholder-gray-400 focus:border-cyan-500 outline-none w-full resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 py-3 px-5 rounded-lg font-semibold text-white shadow-md hover:shadow-cyan-400 transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
