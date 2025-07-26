import BehanceIcon from "./icons/BehanceIcon";
import DribbbleIcon from "./icons/DribbleIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-background-accent mx-auto px-4 py-20 w-full mt-auto"
    >
      <div className="flex flex-col justify-between items-center max-w-7xl mx-auto ">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white ">
          Let&apos;s Connect
        </h2>

        <div className="mt-8">
          <a
            href="mailto:amani@example.com"
            className="text-gray-600 dark:text-gray-400 hover:underline"
          >
            Amaniben8642@gmail.com
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6 mx-auto my-12">
          <a
            href="https://www.behance.net/amanibenbouzid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition flex items-center space-x-2"
            aria-label="Behance"
          >
            <BehanceIcon className="w-5 h-5" />
            <span>Behance</span>
          </a>
          <a
            href="https://www.behance.net/amanibenbouzid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition flex items-center space-x-2"
            aria-label="Dribbble"
          >
            <DribbbleIcon className="w-5 h-5" />
            <span>Dribbble</span>
          </a>
          <a
            href="www.linkedin.com/in/amani-ben-24401636a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition flex items-center space-x-2"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="border-t-1 border-gray-200 pt-6">
          &copy; {new Date().getFullYear()} Amani Benbouzid. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
