import { Link } from 'react-router-dom';
import { useTheme } from '../context/Themecontext';
import { FaCode } from 'react-icons/fa';

export default function Header() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const toggleTheme = () => {
    themeMode === 'light' ? darkTheme() : lightTheme();
  };

  return (
    <header className="flex justify-between items-center px-10 py-6 bg-white text-black dark:bg-black dark:text-white shadow-md">
      <h1 className="text-xl font-bold">
        <i>Myportfolio</i><sup>®</sup>
      </h1>

      <nav className="hidden md:flex gap-6 items-center">
        <Link to="/" className="hover:text-green-400 transition">Home</Link>
        <Link to="/about" className="hover:text-green-400 transition">About</Link>
        <Link to="/projects" className="hover:text-green-400 transition">Projects</Link>

       

        {/* 💻 LeetCode Button */}
        <a
          href="https://leetcode.com/u/Jadon_Mohit/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 border px-4 py-1 rounded-full hover:bg-yellow-400 dark:hover:bg-yellow-500 hover:text-black text-sm font-medium transition"
        >
          <FaCode className="text-lg" />
          LeetCode
        </a>

        <Link
          to="/contact"
          className="border px-4 py-1 rounded-full hover:bg-white dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition"
        >
          Contact
        </Link>
         {/* 🌙 Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="border px-3 py-1 rounded-full hover:bg-white dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition text-sm"
        >
          {themeMode === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  );
}
