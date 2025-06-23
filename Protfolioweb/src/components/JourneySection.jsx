import { motion } from 'framer-motion';

export default function JourneySection() {
  const journey = [
    {
      year: '2023',
      title: 'Started B.Tech in CSE',
      description: 'Joined GLA University Mathura and began exploring programming, DSA, and web development.',
    },
   
    {
      year: '2024',
      title: '300+ LeetCode Problems',
      description: 'Mastered DSA and participated in regular coding contests to sharpen logic.',
    },
    {
      year: '2025',
      title: 'Built My Portfolio',
      description: 'Launched my personal portfolio showcasing projects, skills, and problem-solving mindset.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        🚀 My Journey
      </h2>

      <div className="relative max-w-4xl mx-auto border-l-4 border-green-400 pl-6">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            className="mb-12 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline dot */}
            <span className="absolute -left-6 top-2 w-6 h-6 rounded-full bg-green-400 border-4 border-black shadow-md"></span>

            <h3 className="text-2xl font-semibold">
              {item.year} — {item.title}
            </h3>
            <p className="mt-2 text-gray-300 text-base">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
