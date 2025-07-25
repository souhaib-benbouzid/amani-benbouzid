"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "#footer" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          Amani Ben.
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-black px-4 pb-4">
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
