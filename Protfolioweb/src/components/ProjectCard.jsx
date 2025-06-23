import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ title, gif, tech, github, demo }) {
  return (
    <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 shadow-md hover:scale-[1.02] transition-transform duration-300 group">
      {/* Preview GIF */}
      <img
        src={gif}
        alt={title}
        className="rounded-lg mb-4 w-full h-56 object-cover shadow-inner"
      />

      {/* Title */}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-xs font-semibold px-2 py-1 bg-green-600/20 text-green-300 rounded-full border border-green-400"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-white hover:text-green-400"
        >
          <FaGithub /> Code
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-white hover:text-green-400"
        >
          <FaExternalLinkAlt /> Live
        </a>
      </div>
    </div>
  );
}
