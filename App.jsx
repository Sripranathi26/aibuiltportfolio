import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function App() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 
    'Python', 'Java', 'MySQL', 'Machine Learning', 'Basics of Cloud Computing'
  ]

  const projects = [
    {
      title: 'Enhanced Feature Extraction for Medical Image Disease Classification',
      stack: ['Deep Learning', 'CNN', 'Python'],
      desc: 'Built a DL pipeline leveraging enhanced feature extraction to classify medical images with strong accuracy. Included data preprocessing, augmentation and evaluation.',
      link: '#'
    },
    {
      title: 'Event Management System',
      stack: ['HTML', 'CSS', 'Javascript', 'ReactJS'],
      desc: 'End-to-end app for creating events, booking tickets and managing attendees. Includes dashboards and search/filter functionality.',
      link: '#'
    },
    {
      title: 'Network Intrusion Detection (ML)',
      stack: ['ML', 'Python', 'Pandas'],
      desc: 'Trained and evaluated models to detect malicious traffic. Features engineered from network flows; optimized thresholds for F1/Recall.',
      link: '#'
    },
  ]

  return (
    <div>
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
        <nav className="section flex items-center justify-between py-4">
          <a href="#home" className="text-lg font-semibold">Sri Pranathi</a>
          <div className="flex items-center gap-3">
            <a className="badge" href="#skills">Skills</a>
            <a className="badge" href="#projects">Projects</a>
            <a className="badge" href="#achievements">Achievements</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="section pt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-indigo-400">Sri Pranathi</span> 👩‍💻
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Aspiring Software Developer • Frontend (HTML, CSS, JavaScript, React, Bootstrap) •
            Backend (Python, Java) • Databases (MySQL)
          </p>

          {/* Socials */}
          <div className="mt-6 flex justify-center gap-3">
            <motion.a 
              whileHover={{ y: -3, scale: 1.05 }} 
              className="badge" 
              href="https://github.com/Sripranathi26" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, scale: 1.05 }} 
              className="badge" 
              href="https://linkedin.com/in/kanchinadam-sripranathi/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, scale: 1.05 }} 
              className="badge" 
              href="mailto:sripranathi2004@gmail.com" 
              aria-label="Email"
            >
              <Mail className="mr-2 h-4 w-4" /> Email
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s + i}
              whileHover={{ scale: 1.07, rotate: 1 }}
              className="card p-4 text-center"
            >
              <span className="text-lg font-medium">{s}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-gray-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-indigo-600/20 border border-indigo-600/40 text-indigo-200 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a className="mt-4 inline-flex items-center gap-2 underline" href={p.link}>
                View details <ExternalLink className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-6 text-center border border-indigo-500/40"
        >
          <p className="text-lg">
            📄 Published a conference paper: <span className="font-semibold">"Network Intrusion Detection Using Machine Learning"</span> at <span className="italic">ICSIC 2024</span>.
          </p>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <div className="max-w-2xl mx-auto card p-6">
          <form
            onSubmit={(e) => { e.preventDefault(); alert('Thanks! I will get back to you.'); }}
            className="grid gap-4"
          >
            <input className="bg-gray-900 rounded-xl p-3 outline-none border border-white/10 focus:border-indigo-500 transition" placeholder="Your name" required />
            <input className="bg-gray-900 rounded-xl p-3 outline-none border border-white/10 focus:border-indigo-500 transition" type="email" placeholder="Your email" required />
            <textarea className="bg-gray-900 rounded-xl p-3 outline-none border border-white/10 focus:border-indigo-500 transition" placeholder="Message" rows={4} required />
            <button className="badge justify-center font-semibold">Send</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        <div className="flex justify-center gap-4 mb-3">
          <a href="https://github.com/Sripranathi26" target="_blank" rel="noopener noreferrer"><Github /></a>
          <a href="https://linkedin.com/in/kanchinadam-sripranathi/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a href="mailto:sripranathi2004@gmail.com"><Mail /></a>
        </div>
        © {new Date().getFullYear()} Sri Pranathi — Built with React, Tailwind & Framer Motion
      </footer>
    </div>
  )
}
