import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold text-blue-500 mb-8"
    >
      Contact Me
    </motion.h2>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="text-lg mb-4">📧 adityaayush1712@gmail.com</p>
      <p className="mb-4">📞 +91 9667024394</p>
      <div className="flex gap-4 justify-center">
        <a href="https://github.com/Aditya96670" className="text-blue-600 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/aditya-kumar-69a026274" className="text-blue-600 hover:underline">LinkedIn</a>
      </div>
    </motion.div>
  </section>
);

export default Contact;
