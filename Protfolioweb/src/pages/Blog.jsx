// src/pages/Blog.jsx
import { motion } from 'framer-motion';

const blogPosts = [
  { title: '🐞 Debugging Tips #1', description: 'Useful tips and tricks for improving your debugging skills as a developer.', date: 'March 2025', link: '/blog/debugging-tips-1' },
  { title: '🐞 Debugging Tips #2', description: 'Useful tips and tricks for improving your debugging skills as a developer.', date: 'May 2024', link: '/blog/debugging-tips-2' },
  { title: '📊 DSA Tips #3', description: 'Useful tips and tricks for improving your dsa skills as a developer.', date: 'January 2025', link: '/blog/dsa-tips-3' },
  { title: '⚛️ React Tips #4', description: 'Useful tips and tricks for improving your react skills as a developer.', date: 'June 2024', link: '/blog/react-tips-4' },
  { title: '📄 HTML Tips #5', description: 'Useful tips and tricks for improving your html skills as a developer.', date: 'November 2024', link: '/blog/html-tips-5' },
  { title: '📊 DSA Tips #6', description: 'Useful tips and tricks for improving your dsa skills as a developer.', date: 'May 2025', link: '/blog/dsa-tips-6' },
  { title: '🎨 CSS Tips #7', description: 'Useful tips and tricks for improving your css skills as a developer.', date: 'May 2024', link: '/blog/css-tips-7' },
  { title: '📊 DSA Tips #8', description: 'Useful tips and tricks for improving your dsa skills as a developer.', date: 'November 2024', link: '/blog/dsa-tips-8' },
  { title: '🔧 Git Tips #9', description: 'Useful tips and tricks for improving your git skills as a developer.', date: 'October 2024', link: '/blog/git-tips-9' },
  { title: '⚛️ React Tips #10', description: 'Useful tips and tricks for improving your react skills as a developer.', date: 'July 2024', link: '/blog/react-tips-10' },
  { title: '🎨 CSS Tips #11', description: 'Useful tips and tricks for improving your css skills as a developer.', date: 'March 2025', link: '/blog/css-tips-11' },
  { title: '🚀 Performance Tips #12', description: 'Useful tips and tricks for improving your performance skills as a developer.', date: 'November 2024', link: '/blog/performance-tips-12' },
  { title: '🎨 CSS Tips #13', description: 'Useful tips and tricks for improving your css skills as a developer.', date: 'May 2025', link: '/blog/css-tips-13' },
  { title: '🎨 CSS Tips #14', description: 'Useful tips and tricks for improving your css skills as a developer.', date: 'May 2025', link: '/blog/css-tips-14' },
  { title: '💡 Tips Tips #15', description: 'Useful tips and tricks for improving your development workflow.', date: 'November 2024', link: '/blog/tips-tips-15' },
  { title: '💡 Tips Tips #16', description: 'Useful tips and tricks for improving your development workflow.', date: 'October 2024', link: '/blog/tips-tips-16' },
  { title: '🚀 Performance Tips #17', description: 'Useful tips and tricks for improving your performance skills as a developer.', date: 'November 2024', link: '/blog/performance-tips-17' },
  { title: '🛠️ Portfolio Tips #18', description: 'Useful tips and tricks for improving your portfolio skills as a developer.', date: 'May 2025', link: '/blog/portfolio-tips-18' },
  { title: '🌐 Deployment Tips #19', description: 'Useful tips and tricks for improving your deployment skills as a developer.', date: 'April 2025', link: '/blog/deployment-tips-19' },
  { title: '🚀 Performance Tips #20', description: 'Useful tips and tricks for improving your performance skills as a developer.', date: 'June 2024', link: '/blog/performance-tips-20' },
  { title: '📊 DSA Tips #21', description: 'Useful tips and tricks for improving your DSA skills as a developer.', date: 'January 2025', link: '/blog/dsa-tips-21' },
  { title: '🐞 Debugging Tips #22', description: 'Useful tips and tricks for improving your debugging skills as a developer.', date: 'December 2024', link: '/blog/debugging-tips-22' },
  { title: '👶 Beginner Tips #23', description: 'Essential tips for new developers to build confidence and skills.', date: 'January 2025', link: '/blog/beginner-tips-23' },
  { title: '🎨 CSS Tips #24', description: 'Useful tips and tricks for improving your CSS skills as a developer.', date: 'October 2024', link: '/blog/css-tips-24' },
  { title: '🚀 Performance Tips #25', description: 'Useful tips and tricks for improving your performance skills as a developer.', date: 'January 2025', link: '/blog/performance-tips-25' },
   { title: '📄 HTML Tips #26', description: 'Useful tips and tricks for improving your HTML skills as a developer.', date: 'June 2024', link: '/blog/html-tips-26' },
  { title: '📊 DSA Tips #27', description: 'Useful tips and tricks for improving your DSA skills as a developer.', date: 'April 2025', link: '/blog/dsa-tips-27' },
  { title: '⚛️ React Tips #28', description: 'Useful tips and tricks for improving your React skills as a developer.', date: 'March 2025', link: '/blog/react-tips-28' },
  { title: '🎨 CSS Tips #29', description: 'Useful tips and tricks for improving your CSS skills as a developer.', date: 'May 2024', link: '/blog/css-tips-29' },
  { title: '🔧 Git Tips #30', description: 'Useful tips and tricks for improving your Git skills as a developer.', date: 'November 2024', link: '/blog/git-tips-30' },
  { title: '🚀 Performance Tips #31', description: 'Useful tips and tricks for improving your performance skills as a developer.', date: 'October 2024', link: '/blog/performance-tips-31' },
  { title: '💡 Tips Tips #32', description: 'Useful tips and tricks for improving your development workflow.', date: 'August 2024', link: '/blog/tips-tips-32' },
  { title: '👶 Beginner Tips #33', description: 'Essential tips for new developers to build confidence and skills.', date: 'September 2024', link: '/blog/beginner-tips-33' },
  { title: '🎨 CSS Tips #34', description: 'Useful tips and tricks for improving your CSS skills as a developer.', date: 'December 2024', link: '/blog/css-tips-34' },
  { title: '📊 DSA Tips #35', description: 'Useful tips and tricks for improving your DSA skills as a developer.', date: 'June 2025', link: '/blog/dsa-tips-35' },
  { title: '📄 HTML Tips #36', description: 'Useful tips and tricks for improving your HTML skills as a developer.', date: 'July 2024', link: '/blog/html-tips-36' },
  { title: '🐞 Debugging Tips #37', description: 'Useful tips and tricks for improving your debugging skills as a developer.', date: 'March 2025', link: '/blog/debugging-tips-37' },
  { title: '🌐 Deployment Tips #38', description: 'Useful tips and tricks for improving your deployment skills as a developer.', date: 'January 2025', link: '/blog/deployment-tips-38' },
  { title: '🎨 CSS Tips #39', description: 'Useful tips and tricks for improving your CSS skills as a developer.', date: 'February 2025', link: '/blog/css-tips-39' },
  { title: '⚛️ React Tips #40', description: 'Useful tips and tricks for improving your React skills as a developer.', date: 'June 2024', link: '/blog/react-tips-40' },
  { title: '🛠️ Portfolio Tips #41', description: 'Useful tips and tricks for improving your portfolio skills as a developer.', date: 'October 2024', link: '/blog/portfolio-tips-41' },
  { title: '💡 Tips Tips #42', description: 'Useful tips and tricks for improving your development workflow.', date: 'December 2024', link: '/blog/tips-tips-42' },
  { title: '📊 DSA Tips #43', description: 'Useful tips and tricks for improving your DSA skills as a developer.', date: 'May 2025', link: '/blog/dsa-tips-43' },
  { title: '🎨 CSS Tips #44', description: 'Useful tips and tricks for improving your CSS skills as a developer.', date: 'April 2025', link: '/blog/css-tips-44' },
  { title: '📄 HTML Tips #45', description: 'Useful tips and tricks for improving your HTML skills as a developer.', date: 'November 2024', link: '/blog/html-tips-45' },
  { title: '⚛️ React Tips #46', description: 'Useful tips and tricks for improving your React skills as a developer.', date: 'July 2024', link: '/blog/react-tips-46' },
  { title: '🔧 Git Tips #47', description: 'Useful tips and tricks for improving your Git skills as a developer.', date: 'June 2025', link: '/blog/git-tips-47' },
  { title: '🚀 Performance Tips #48', description: 'Useful tips and tricks for improving your performance skills as a developer.', date: 'May 2024', link: '/blog/performance-tips-48' },
  { title: '🐞 Debugging Tips #49', description: 'Useful tips and tricks for improving your debugging skills as a developer.', date: 'October 2024', link: '/blog/debugging-tips-49' },
  { title: '👶 Beginner Tips #50', description: 'Essential tips for new developers to build confidence and skills.', date: 'August 2024', link: '/blog/beginner-tips-50' }
];

blogPosts.forEach(post => {
  // Remove emojis and special chars except letters, numbers, spaces, and hashtags (optional)
  const cleanedTitle = post.title
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, '') // Remove emojis (unicode ranges)
    .replace(/[^\w\s#-]/g, '') // Keep letters, numbers, spaces, # and -
    .trim();
  const encodedTitle = encodeURIComponent(cleanedTitle);
  post.gfgLink = `https://www.reddit.com/search/?q=${cleanedTitle}`;
})
export default function Blog() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 glow">📚 My Blog</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogPosts.map((post, i) => (
          <motion.a
            key={i}
            href={post.gfgLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green-400 transition group shadow-lg hover:shadow-green-400/30"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400">{post.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{post.date}</p>
            <p className="text-gray-300">{post.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
