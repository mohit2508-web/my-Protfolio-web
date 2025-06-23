const skills = ['React', 'JavaScript', 'Tailwind CSS', 'Git', 'Figma'];

export default function Skills() {
  return (
    <section className="p-10 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span key={i} className="bg-white px-4 py-2 rounded-lg shadow text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
