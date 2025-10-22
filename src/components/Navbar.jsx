import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-md ${
        theme === "dark"
          ? "bg-[#0a0a0a]/80 text-white"
          : "bg-white/80 text-gray-900"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className={`text-2xl font-bold tracking-wider ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Aditya Kumar
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, i) => (
            <motion.li
              key={i}
              className={`cursor-pointer transition-all duration-300 ${
                theme === "dark"
                  ? "hover:text-[#00FFFF]"
                  : "hover:text-blue-600"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>

        {/* Buttons (Theme + Menu) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-400 hover:scale-110 transition-all duration-300"
          >
            {theme === "dark" ? (
              <Sun size={22} className="text-yellow-400" />
            ) : (
              <Moon size={22} className="text-gray-800" />
            )}
          </button>

          {/* Hamburger (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden px-6 pb-5 ${
            theme === "dark" ? "bg-[#0a0a0a]/90" : "bg-white/90"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-lg font-medium mt-2">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 transition-all ${
                    theme === "dark"
                      ? "hover:text-[#00FFFF]"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
