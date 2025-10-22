import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold mb-6 text-blue-500"
    >
      About Me
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="max-w-3xl text-center text-lg leading-relaxed"
    >
      I’m Aditya Kumar, a Full-Stack Web Developer from Ghaziabad, India. I specialize in building scalable web apps using 
      <span className="font-semibold text-blue-500"> React.js, Node.js, Express, and MongoDB </span>.
      I love designing responsive UIs and solving real-world problems through technology.
    </motion.p>
  </section>
);

export default About;
