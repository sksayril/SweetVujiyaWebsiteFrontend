import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/sweets', label: 'Sweets' },
    { path: '/namkeen', label: 'Namkeen' },
    { path: '/distributors', label: 'Distributors' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex items-center">
            <Link to="/" className="flex items-start space-x-3 group pt-1">
              <motion.img
                src="/img9.jpeg"
                alt="Krishna & Kanha Sales Enterprises Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-gray-300 shadow-lg group-hover:border-gray-400 transition-all duration-300 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="flex flex-col items-start pt-1">
                <span className="font-cinzel font-bold text-lg sm:text-xl bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent group-hover:from-gray-900 group-hover:to-black transition-all duration-300 leading-tight">
                  KRISHNA & KANHA SALES
                </span>
                <span className="font-cinzel font-bold text-sm sm:text-lg bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:to-black transition-all duration-300 leading-tight">
                  ENTERPRISES
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-cinzel font-medium transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === item.path
                      ? 'text-gray-800'
                      : 'text-gray-700 hover:text-gray-800'
                  }`}
                >
                  {item.label}
                  
                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-800 to-black rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  
                  {/* Premium glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-700/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-800 focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200 overflow-hidden"
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group"
            >
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-cinzel font-medium transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-gray-800 bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-800'
                    : 'text-gray-700 hover:text-gray-800 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100'
                }`}
              >
                {item.label}
                
                {/* Premium glow effect for mobile */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-gray-700/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;