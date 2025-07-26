import {
  ArrowRight,
  GraduationCap,
  MapPin,
  MessageSquareQuote,
} from "lucide-react";
import HeroSvg from "./HeroSvg";

export const Hero = () => {
  return (
    <div className="relative">
      <HeroSvg className="hidden xl:block absolute lg:bottom-0 left-0 h-[200px] lg:h-[400px] fill-foreground-dark dark:fill-foreground" />
      <div
        id="hero"
        className="px-4 py-8 text-center md:text-left min-h-[80vh] flex flex-col justify-center items-center bg-background-accent dark:bg-background-accent-dark w-full transition-colors duration-300"
      >
        <h2 className="font-normal text-zinc-700 dark:text-zinc-300">
          UI/UX Designer
        </h2>
        <h1 className="text-4xl font-bold mt-2  text-zinc-800 dark:text-zinc-100">
          Hello, It&apos;s Amani - I Design, I Innovate.
        </h1>
        <a
          href="/about"
          className="mt-8 mb-12 md:mt-12 md:mb-20  text-neutral-700 dark:text-neutral-200 hover:text-red-500 transition-colors duration-300"
        >
          <ArrowRight className="inline mr-2" />
          <span>Read more about me</span>
        </a>
        <ul className=" flex space-x-4 flex-col md:flex-row items-start space-y-5 text-stone-500 dark:text-stone-300">
          <li>
            <p>
              <GraduationCap className="inline mr-2" />
              <span>GomyCode | UI/UX Design</span>
            </p>
          </li>
          <li>
            <p>
              <MapPin className="inline mr-2" />
              <span>Based on Algeria</span>
            </p>
          </li>
          <li>
            <p>
              <MessageSquareQuote className="inline mr-2" />
              <span>“ LESS IS MORE ”</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
