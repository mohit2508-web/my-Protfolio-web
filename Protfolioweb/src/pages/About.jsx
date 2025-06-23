import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col justify-center items-center px-4 py-20">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-teal-400">About Me</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          I'm a passionate <span className="text-white font-semibold">Frontend Developer</span> who loves building responsive,
          user-friendly web applications using <span className="text-white font-semibold">React.js</span> and modern web technologies.
          I enjoy solving real-world problems with clean code and beautiful design.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg w-full md:w-1/3 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-teal-300 mb-2">Skills</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>✔️ C, Python, Java</li>
              <li>✔️ HTML, CSS, JavaScript</li>
              <li>✔️ React, Tailwind CSS</li>
              <li>✔️ Git, GitHub, Vite</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg w-full md:w-1/3 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-teal-300 mb-2">Education</h3>
            <p className="text-sm text-gray-300">
              B.Tech in Computer Science <br /> [GLA University Mathura] <br /> [2027]
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg w-full md:w-1/3 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-teal-300 mb-2">Hobbies</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>🎮 Gaming</li>
              <li>🎨 Designing UI</li>
              <li>📚 Learning New Tech</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
