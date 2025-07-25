import BehanceIcon from "./icons/BehanceIcon";
import DribbbleIcon from "./icons/DribbleIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="mt-20 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black py-8 max-w-7xl mx-auto px-4"
    >
      <div className="flex flex-col  justify-between items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          lets connect
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Feel free to reach out via email or connect with me on social media.
        </p>
        <div className="mt-4">
          <a
            href="mailto:amani@example.com"
            className="text-gray-600 dark:text-gray-400 hover:underline"
          >
            Amaniben8642@gmail.com
          </a>
        </div>

        <div className="flex space-x-6 mx-auto mt-4">
          <a
            href="https://www.behance.net/designer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition flex items-center space-x-2"
            aria-label="Behance"
          >
            <BehanceIcon className="w-5 h-5" />
            <span>Behance</span>
          </a>
          <a
            href="https://dribbble.com/designer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition flex items-center space-x-2"
            aria-label="Dribbble"
          >
            <DribbbleIcon className="w-5 h-5" />
            <span>Dribbble</span>
          </a>
          <a
            href="https://www.linkedin.com/in/designer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition flex items-center space-x-2"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        <p>
          &copy; {new Date().getFullYear()} Amani Benbouzid. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
