import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiRecoil,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },

];

const Skills = () => (
  <section
    id="skills"
    className="min-h-screen flex flex-col items-center justify-center px-6 py-20 dark:bg-gray-950 bg-gray-100 transition-all duration-500"
  >
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold text-cyan-400 mb-10"
    >
      My Skills
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="max-w-2xl text-center text-gray-400 dark:text-gray-300 mb-12 text-lg"
    >
      These are the core technologies I use to design modern, responsive, and
      high-performing web applications.
    </motion.p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="flex flex-col items-center justify-center bg-gray-800 dark:bg-gray-900 p-5 rounded-2xl shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition duration-300"
        >
          <div className="text-4xl mb-3">{skill.icon}</div>
          <p className="text-gray-200 text-sm font-medium">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
