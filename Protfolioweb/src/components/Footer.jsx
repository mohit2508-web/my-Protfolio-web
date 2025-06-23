export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {year} Mohit Jadon. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/mohit2508-web"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.cohttps://www.linkedin.com/in/mohit-jadon-2123a335a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appm/in/mohitjadon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="/assets/resume.pdf"
            download
            className="hover:text-blue-400 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
