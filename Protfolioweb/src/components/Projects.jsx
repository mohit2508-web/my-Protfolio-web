import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects and skills, built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Vite"],
    image: "https://via.placeholder.com/600x400", // Replace with real image
    demo: "https://your-portfolio-link.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Weather App",
    description: "A real-time weather app using OpenWeatherMap API with beautiful UI.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    image: "https://via.placeholder.com/600x400",
    demo: "https://your-weather-app.com",
    github: "https://github.com/yourusername/weather-app",
  },
  {
    title: "To-Do List",
    description: "A clean and simple to-do app with add, delete, and filter features using React.",
    tech: ["React", "Hooks", "LocalStorage"],
    image: "https://via.placeholder.com/600x400",
    demo: "https://your-todo-app.com",
    github: "https://github.com/yourusername/todo-app",
  },
];

export default function Projects() {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-4 py-20"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-400/40 transition duration-300 transform hover:scale-105"
            >
              {/* Image with hover overlay */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <p className="text-lg font-semibold text-white">
                    {project.title}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[250px]">
                <div>
                  <h3 className="text-2xl font-semibold text-teal-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs mt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-teal-700/30 text-teal-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-teal-400 to-cyan-500 text-black px-4 py-2 rounded-full text-sm font-semibold hover:from-cyan-500 hover:to-teal-400 transition-shadow shadow-md hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-teal-500 text-teal-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-teal-500 hover:text-black transition-shadow shadow-md hover:shadow-lg"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
