import ProjectCard from '../components/ProjectCard';
import project1Gif from '../assets/project1.gif';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Portfolio Website',
      gif: project1Gif,
      tech: ['React', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://your-portfolio.vercel.app',
    },
    // Add more project objects here
  ];

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">✨ Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
