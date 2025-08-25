import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/img9.jpeg')`
        }}
      />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-gray-300 fill-current" />
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-6 mb-4">
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-cinzel font-extrabold leading-tight tracking-wide">
                <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
                   Krishna & Kanha Sales Enterprises
                </span>
              </h1>
            </div>
            
            {/* Premium tagline with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-cinzel font-semibold bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
                Authentic Indian Sweets & Premium Namkeen
              </p>
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                <span className="mx-4 text-gray-300 text-2xl">✦</span>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl font-cinzel font-medium text-gray-200 leading-relaxed tracking-wide">
                <span className="font-semibold text-white">Manufacturing</span> of premium laddu, boondi dana, namkeens & luxury sweets
              </p>
              <p className="text-base sm:text-lg lg:text-xl mt-4 text-gray-300 font-cinzel font-light italic">
                "Crafted with tradition, delivered with excellence"
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-base sm:text-lg lg:text-xl mt-4 text-gray-300 font-cinzel font-light italic">
             "Khoob khao mithai krishna kanha ko do badhai"
              </p>
              
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="group bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black text-white px-8 py-4 rounded-full text-lg font-cinzel font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-cinzel font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;