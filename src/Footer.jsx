import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-5 bg-neutral-950">
      <div className="flex flex-col items-center justify-center w-300 bg-[#161616]/50 shadow-xl p-6 space-y-4 backdrop-blur-md rounded-2xl">
        <h3 className="text-amber-50 text-lg font-medium">
          Made with <span className="text-red-500">❤</span> by the-Aria
        </h3>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/aria-hosseini/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-50 hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Aria-Hosseini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-50 hover:text-gray-300 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}