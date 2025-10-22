import { motion } from "framer-motion";
import adityaPhoto from "../assets/aditya.png"; // rename your uploaded image to aditya.png and put it in src/assets/

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 gap-10 py-20"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Hi, I'm <span className="text-blue-500">Aditya Kumar</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
          Full Stack Web Developer
        </h2>
        <p className="max-w-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I build responsive, scalable, and visually engaging web applications
          using modern technologies like <span className="font-semibold text-blue-500">React.js</span>,{" "}
          <span className="font-semibold text-blue-500">Node.js</span>, and{" "}
          <span className="font-semibold text-blue-500">MongoDB</span>. Passionate about
          clean UI design and problem-solving.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <img
          src={adityaPhoto}
          alt="Aditya Kumar"
          className="w-80 h-80 md:w-96 md:h-96 object-cover object-top rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
