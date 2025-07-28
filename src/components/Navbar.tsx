"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import {
  Cancel01Icon,
  Menu01Icon,
  Moon02Icon,
  SunIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconWrapper } from "./IconWrapper";

const navItems = [
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "#footer" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-50 bg-background-accent dark:bg-background-accent-dark transition-all duration-300  ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div
        className={`flex justify-between items-center  ${
          scrolled ? "py-3" : "py-11"
        } px-4 md:px-32 md:py-6  transition-all duration-300 `}
      >
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          Amani Ben.
        </Link>

        <nav className="hidden ml-auto lg:mr-6 md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:underline transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <span>
          <button
            className="mr-4 lg:mr-0 rounded transition-colors text-gray-700 dark:text-gray-300 cursor-pointer flex justify-center items-center"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <IconWrapper icon={SunIcon} className="h-5 w-5" />
            ) : (
              <IconWrapper icon={Moon02Icon} className="h-5 w-5" />
            )}
          </button>
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <IconWrapper icon={Cancel01Icon} className="h-5 w-5" />
            ) : (
              <IconWrapper icon={Menu01Icon} className="h-5 w-5" />
            )}
          </button>
        </span>
      </div>

      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 bg-background-accent dark:bg-background-accent-dark">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
