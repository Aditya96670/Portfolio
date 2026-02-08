import React, { useState } from "react";
import { motion } from "framer-motion";

// 🖼️ Importing local images
import EMS from "../assets/EMS.png";
import Chatbot from "../assets/Chatbot.png";
import Food from "../assets/food.png";
import RealEstate from "../assets/RealEstate.png";
import Data from "../assets/data.png";
import sentence from "../assets/sentence.png";

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      title: "Employee Management System",
      img: EMS,
      description:
        "A full-featured employee management app with authentication, task tracking, and role-based dashboards. Built with React, Node.js, and Tailwind CSS.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      live: "https://employee-management-system-krth3dub6.vercel.app",
      github: "https://github.com/Aditya96670/Employee-Management-System",
      modalContent: (
        <>
          <p className="text-gray-300 mb-3">
            <strong>Demo Login:</strong>
          </p>
          <p>👨‍💼 Employee → <b>e@e.com</b> / <b>123</b></p>
          <p>👨‍💻 Admin → <b>admin@example.com</b> / <b>123</b></p>
          <p className="mt-3 text-gray-400 text-sm">
            Use these credentials to explore both roles and test features.
          </p>
        </>
      ),
    },
    {
      title: "Chatbot (Frontend + Backend)",
      img: Chatbot,
      description:
        "An intelligent chatbot system with user authentication, project creation, collaborator access, and real-time chat privacy features.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "https://chatbot-5ckfbagxc-aditya-kumars-projects-e06a2cc4.vercel.app",
      github: "https://github.com/Aditya96670/chatbot",
      backend: "https://github.com/Aditya96670/chatbot-backend",
      modalContent: (
        <>
          <p className="text-gray-300 mb-3">
            <strong>How to Use:</strong>
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-1">
            <li>Register a new account</li>
            <li>Login with your credentials</li>
            <li>Create a new project</li>
            <li>Add collaborators to your project</li>
            <li>Open the app in another browser (e.g., Edge) and login</li>
            <li>Start chatting — project chats stay private per project</li>
          </ol>
        </>
      ),
    },
    {
      title: "Food Delivery Store",
      img: Food,
      description:
        "A stylish online food ordering platform showcasing dynamic menus, cart management, and responsive design.",
      tech: ["React", "Tailwind CSS", "Fake REST API"],
      live: "https://food-delivery-store-iqncpklm4-aditya-kumars-projects-e06a2cc4.vercel.app",
      github: "https://github.com/Aditya96670/food-delivery-store",
    },
    {
      title: "Real Estate Website",
      img: RealEstate,
      description:
        "A modern and fully responsive real estate website with property filtering, smooth animations, and elegant UI.",
      tech: ["React", "Tailwind CSS", "Recoil"],
      live: "https://real-estate-website-wla8-k3pt13oux.vercel.app",
      github: "https://github.com/Aditya96670/Real_Estate_Website",
    },
     {
    title: "Data Entry Through Images",
    img: Data, 
    description:
      "Upload images and automatically extract and store data from images with a single click.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://data-entry-zeta.vercel.app/",
    github: "https://github.com/Aditya96670/Data_Entry",
  },

  {
    title: "Sentence Construction Game",
    img: sentence, 
    description:
      "An interactive game that helps users improve sentence formation by arranging jumbled words.",
    tech: ["React", "Tailwind CSS"],
    live: "https://sentences-construction.vercel.app/",
    github: "https://github.com/Aditya96670/Sentences_construction",
  },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-cyan-400"
        >
          My Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-all overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:opacity-40 transition"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <p className="text-gray-300 px-6">{project.description}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                  {project.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-cyan-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-lg transition"
                  >
                    Source Code
                  </a>
                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-lg transition"
                    >
                      Backend
                    </a>
                  )}
                  {project.modalContent && (
                    <button
                      onClick={() => setActiveModal(project.title)}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg transition"
                    >
                      Demo Info
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
          <div className="bg-gray-900 rounded-2xl p-6 max-w-md w-full text-left shadow-lg relative">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              {activeModal}
            </h3>
            {
              projects.find((p) => p.title === activeModal)
                ?.modalContent
            }
            <button
              onClick={() => setActiveModal(null)}
              className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
