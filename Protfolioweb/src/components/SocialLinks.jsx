const links = {
  github: "https://github.com/mohit2508-web",
  linkedin: "www.linkedin.com/in/mohit-jadon-2123a335a",
  twitter: "#"
};

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-6">
      {Object.entries(links).map(([name, url]) => (
        <a key={name} href={url} target="_blank" className="hover:text-blue-600">
          {name.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
